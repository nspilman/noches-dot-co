// pages/api/incoming_call.ts

import type { NextApiRequest, NextApiResponse } from "next";
import twilio from "twilio";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const client = twilio(
        process.env.NEXT_PUBLIC_TWILIO_ACCOUNT_SID,
        process.env.NEXT_PUBLIC_TWILIO_AUTH_TOKEN
      );

      // Replace with your Twilio phone number and the message you want to send
      const messageText =
        "Having trouble waking up? https://noches.co can help. You are not in danger";

      const to = req.body.From;
      console.log({ to });
      const message = await client.messages.create({
        body: messageText,
        from: process.env.NEXT_PUBLIC_TWILIO_NUMBER,
        to,
      });

      console.log({ message });

      res.setHeader("Content-Type", "text/xml");
      res
        .status(200)
        .json({ message: `Message sent with SID: ${message.sid}` });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to handle incoming call." });
    }
  } else {
    res.status(405).json({ error: "Only POST method is allowed." });
  }
};

export default handler;
