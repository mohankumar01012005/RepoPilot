import { Request, Response } from "express";
import { saveEvent } from "../services/event.service";
import { addLabelsToIssue } from "../services/githubAction.service";
import { createAction } from "../services/action.service";
import Repository from "../models/repository.model";
import { sendSlackMessage } from "../services/slack.service";
import {
  
  addCommentToIssue,
} from "../services/githubAction.service";
export const githubWebhook = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const githubEvent = req.header("x-github-event") || "unknown";

    const deliveryId =
      req.header("x-github-delivery") || "";

    const action =
      req.body.action || "unknown";

    const repository =
      req.body.repository?.full_name;

    const savedEvent = await saveEvent({
  githubEvent,
  action,
  deliveryId,
  repository,
  payload: req.body,
});

if (
  githubEvent === "issues" &&
  action === "opened"
) {
  const connectedRepository =
    await Repository.findOne({
      fullName: repository,
    });

  if (connectedRepository) {
    await addLabelsToIssue({
      userId: connectedRepository.user.toString(),
      owner: req.body.repository.owner.login,
      repo: req.body.repository.name,
      issueNumber: req.body.issue.number,
      labels: ["bug"],
    });

    await createAction({
      eventId: savedEvent._id.toString(),
      actionType: "ADD_LABEL",
      status: "SUCCESS",
      details: "Added bug label",
    });
    await addCommentToIssue({
  userId: connectedRepository.user.toString(),
  owner: req.body.repository.owner.login,
  repo: req.body.repository.name,
  issueNumber: req.body.issue.number,
  body: `👋 Thanks for opening this issue!

RepoPilot has received your issue successfully.

✅ Label added automatically
🤖 More automation will be processed soon.`,
});

await createAction({
  eventId: savedEvent._id.toString(),
  actionType: "ADD_COMMENT",
  status: "SUCCESS",
  details: "Posted welcome comment",
});
console.log("Sending Slack notification...");

await sendSlackMessage(`
🚀 New GitHub Issue

Repository: ${req.body.repository.full_name}

Title: ${req.body.issue.title}

Opened By: ${req.body.issue.user.login}

URL: ${req.body.issue.html_url}
`);

console.log("Slack notification sent.");
await createAction({
  eventId: savedEvent._id.toString(),
  actionType: "SLACK_NOTIFICATION",
  status: "SUCCESS",
  details: "Slack notification sent",
});
savedEvent.processed = true;
await savedEvent.save();
  }
}

    res.status(200).json({
      success: true,
      message: "Webhook received successfully.",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Webhook processing failed.",
    });
  }
};