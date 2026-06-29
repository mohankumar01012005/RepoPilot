import axios from "axios";

export const sendSlackMessage = async (
  text: string
) => {
  if (!process.env.SLACK_WEBHOOK_URL) return;

  await axios.post(process.env.SLACK_WEBHOOK_URL, {
    text,
  });
};