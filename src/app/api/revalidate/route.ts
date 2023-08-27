import { NextResponse } from "next/server";
import { revalidateTag, revalidatePath } from "next/cache";

export async function POST() {
  revalidateTag("prismic");

  revalidatePath("/posts/[slug]");
  revalidatePath("/sitemap.xml");
  revalidatePath("/");

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
