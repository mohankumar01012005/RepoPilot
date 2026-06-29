import { Request, Response } from "express";
import { saveEvent } from "../services/event.service";
import { addLabelsToIssue } from "../services/githubAction.service";
import { createAction } from "../services/action.service";
import Repository from "../models/repository.model";
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