// pages/api/ga.ts
import { NextApiRequest, NextApiResponse } from "next";

interface EventData {
  type: string;
  ga_measurement_id: string;
  page_path?: string;
  action?: string;
  params?: any;
}

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

async function sendEventToGoogleAnalytics(data: EventData) {
  const { type, ga_measurement_id, ...rest } = data;
  const endpoint = `https://www.google-analytics.com/g/collect?v=1&tid=${ga_measurement_id}`;

  if (type === "pageview") {
    const { page_path } = rest;
    if (!page_path) {
      throw new Error("page_path not provided");
    }
    const clientId = uuidv4();
    const url = `${endpoint}&t=pageview&cid=${clientId}&dp=${page_path}`;
    return await fetch(url, { method: "POST" });
  } else if (type === "event") {
    const { action, params } = rest;
    if (!action) {
      throw new Error("action not provided");
    }
    const url = `${endpoint}&v=1&t=event&ec=${encodeURIComponent(
      params.category
    )}&ea=${encodeURIComponent(action)}&el=${encodeURIComponent(
      params.label
    )}&ev=${params.value}`;
    return await fetch(url, { method: "POST" });
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const result = await sendEventToGoogleAnalytics(req.body);
      res.status(200).json({ message: "Event sent to Google Analytics" });
    } catch (error) {
      console.error("Error sending event to Google Analytics:", error);
      res
        .status(500)
        .json({ message: "Error sending event to Google Analytics" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
