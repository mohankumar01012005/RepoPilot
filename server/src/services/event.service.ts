import Event from "../models/event.model";

interface SaveEventInput {
  githubEvent: string;
  action: string;
  deliveryId: string;
  repository?: string;
  payload: any;
}

export const saveEvent = async (
  data: SaveEventInput
) => {
  const existingEvent = await Event.findOne({
    deliveryId: data.deliveryId,
  });

  if (existingEvent) {
    return existingEvent;
  }

  return Event.create({
    githubEvent: data.githubEvent,
    action: data.action,
    deliveryId: data.deliveryId,
    repository: data.repository,
    payload: data.payload,
  });
};