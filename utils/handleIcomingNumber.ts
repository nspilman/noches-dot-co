import twilio from "twilio";
import { getSupabaseClient } from "./getSupabaseClient";

export const handleIncomingNumber = async (
  to: string,
  messageText: string,
  nochesNumber = process.env.NEXT_PUBLIC_TWILIO_NUMBER
) => {
  const supabase = getSupabaseClient();
  const { data: previousTableEntriesForNumber, error } = await supabase
    .from("marketing_incoming_calls")
    .select("*")
    .filter("user_number", "eq", to);

  const client = twilio(
    process.env.NEXT_PUBLIC_TWILIO_ACCOUNT_SID,
    process.env.NEXT_PUBLIC_TWILIO_AUTH_TOKEN
  );

  if (!previousTableEntriesForNumber?.length) {
    await client.messages.create({
      body: messageText,
      from: process.env.NEXT_PUBLIC_TWILIO_NUMBER,
      to,
    });
  }

  const { status } = await supabase.from("marketing_incoming_calls").insert({
    user_number: to,
    noches_number: nochesNumber,
  });
};
