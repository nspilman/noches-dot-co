// pages/api/incoming_call.ts

import { messageText } from "consts";
import type { NextApiRequest, NextApiResponse } from "next";
import VoiceResponse from "twilio/lib/twiml/VoiceResponse";
import { handleIncomingNumber } from "utils/handleIcomingNumber";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const twiml = new VoiceResponse();
      twiml.play("/noches-voicemail.mp3");
      //   twiml.say({ voice: "alice" }, "we out here");
      // Replace with your Twilio phone number and the message you want to send

      await handleIncomingNumber(req.body.From, messageText);

      res.setHeader("Content-Type", "text/xml");
      res.status(200).send(twiml.toString());
      // .json({ message: `Message sent with SID: ${message.sid}` });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to handle incoming call." });
    }
  } else {
    res.status(405).json({ error: "Only POST method is allowed." });
  }
};

export default handler;
