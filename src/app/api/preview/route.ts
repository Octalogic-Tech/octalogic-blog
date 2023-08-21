import { NextRequest } from "next/server";
import { draftMode } from "next/headers";
import { redirectToPreviewURL } from "@prismicio/next";

import client from "@/config/client";

export async function GET(request: NextRequest) {
  draftMode().enable();

  await redirectToPreviewURL({ client, request });
}
