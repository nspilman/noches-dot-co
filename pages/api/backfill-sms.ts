// pages/api/sms.ts
import { messageText } from "consts";
import { NextApiRequest, NextApiResponse } from "next";
import { handleIncomingNumber } from "utils/handleIcomingNumber";

function validateToken(
  req: NextApiRequest,
  res: NextApiResponse,
  next: () => void
) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ message: "Unauthorized: Invalid or missing Bearer token" });
  }

  const token = authHeader.split(" ")[1];

  if (token !== process.env.NEXT_PUBLIC_BACKFILL_TOKEN) {
    return res
      .status(401)
      .json({ message: "Unauthorized: Invalid Bearer token" });
  }

  next();
}

const BackfillSms = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    validateToken(req, res, async () => {
      // Get the message text and phone number from the incoming text message
      const to = req.body.senderNumber;
      const fromPhoneNumber = req.body.nochesNumber;

      await handleIncomingNumber(to, messageText, fromPhoneNumber);

      // Log the message received
      console.log(`Message received from ${fromPhoneNumber}: ${messageText}`);

      // Send a 200 OK response to acknowledge receipt of the message
      res.status(200).send("Message received");
    });
  } else {
    // Handle other HTTP methods
    res.setHeader("Allow", "POST");
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default BackfillSms;
