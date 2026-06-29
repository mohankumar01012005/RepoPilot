import { Request, Response } from "express";
import { saveEvent } from "../services/event.service";

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

    await saveEvent({
      githubEvent,
      action,
      deliveryId,
      repository,
      payload: req.body,
    });

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