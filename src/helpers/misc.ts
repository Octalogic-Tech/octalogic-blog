export interface ContentType {
  type: string;
  text: string;
}

export const calcReadTime = (content: ContentType[] = []) => {
  if (content.length === 0) return 0;

  const allText = content.reduce(
    (prevText, currentContent) => prevText + ` ${currentContent?.text || ""}`,
    "",
  );
  const wordCount = allText.split(" ").length;
  if (wordCount === 0) return 0;

  //   Example:
  // 783 words ÷ 200 = 3.915 (3 = 3 minutes)
  // .915 × .60 = .549 (a little over 54 seconds, so I’d bump it up to 60 seconds, or a full minute)
  // reading time for this example article is 4 minutes

  const readTimeMin = Math.trunc(wordCount / 200);

  const readTimeSec = Math.trunc(((wordCount / 200) % 1) * 100);
  const readTime = readTimeMin + (readTimeSec > 50 ? 1 : 0);
  return readTime;
};
