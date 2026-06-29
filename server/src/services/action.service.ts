import Action from "../models/action.model";

interface CreateActionInput {
  eventId: string;
  actionType: string;
  status: "SUCCESS" | "FAILED";
  details?: string;
}

export const createAction = async (
  data: CreateActionInput
) => {
  return Action.create({
    eventId: data.eventId,
    actionType: data.actionType,
    status: data.status,
    details: data.details || "",
  });
};