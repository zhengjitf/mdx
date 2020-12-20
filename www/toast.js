import { fetchMdxFromDisk } from "@toastdotdev/mdx";
import mdx from "@mdx-js/mdx";
import fm from "gray-matter";

export const sourceData = async ({ setDataForSlug }) => {
  const [srcPages] = await Promise.all([
    fetchMdxFromDisk({
      directory: "../docs",
    }),
  ]);

  const allMdx = srcPages.map(({ filename, file }) => {
    const slug = filename
      .slice("src/pages".length, filename.length)
      .replace(/.mdx?$/, "");
    return { slug, filename, file };
  });

  Promise.all(
    allMdx.map(async ({ file, slug, data }) => {
      const compiledMdx = await mdx(file);

      await setDataForSlug(slug, {
        component: {
          mode: "source",
          value: `/** @jsx mdx */
import { mdx } from '@mdx-js/preact';
${compiledMdx}`,
        },
        data,
      });
    })
  );
};
