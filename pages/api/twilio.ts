// pages/api/send_sms.ts

import type { NextApiRequest, NextApiResponse } from "next";
import twilio from "twilio";

// Initialize Twilio client with your Twilio Account SID and Auth Token

const client = twilio(
  process.env.NEXT_PUBLIC_TWILIO_ACCOUNT_SID,
  process.env.NEXT_PUBLIC_TWILIO_AUTH_TOKEN
);

// Replace with your Twilio phone number
// const TWILIO_PHONE_NUMBER = process.env.TWILIO_PHONE_NUMBER;
const TWILIO_PHONE_NUMBER = process.env.NEXT_PUBLIC_TWILIO_NUMBER;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { to, body } = req.body;

      if (!to || !body) {
        return res
          .status(400)
          .json({ error: 'Missing "to" or "body" parameter in request body.' });
      }

      const message = await client.messages.create({
        body,
        from: TWILIO_PHONE_NUMBER,
        to,
      });

      res
        .status(200)
        .json({ message: `Message sent with SID: ${message.sid}` });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "Failed to send SMS message." + error.message });
    }
  } else {
    res.status(405).json({ error: "Only POST method is allowed." });
  }
}
