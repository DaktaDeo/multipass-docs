// Credits to Divyansh Singh
// Twitter: @_brc_dd

import fs from 'node:fs/promises';
import matter from 'gray-matter';
import removeMd from 'remove-markdown';

const articles = await fs.readdir('./src/blog/posts');

const data = await Promise.all(
  articles.map(async (article) => {
    const file = matter.read(`./src/blog/posts/${article}`, {
      excerpt: true,
      excerpt_separator: '<!-- excerpt -->',
    });
    const { data, excerpt, path } = file;

    //make the image path absolute in the data object if it exists
    if (data.image) {
      data.image = data.image.replace('../', '/blog/');
    }

    const contents = removeMd(excerpt)
      .trim()
      .split(/\r\n|\n|\r/);
    return {
      ...data,
      title: contents[0].replace(/\s{2,}/g, '').trim(),
      path: '/'+ path.replace('./src/', '').replace(/\.md$/, '.html'),
      excerpt: contents
        .slice(1)
        .join('')
        .replace(/\s{2,}/g, '')
        .trim(),
    };
  })
);
await fs.writeFile('./.vitepress/data/blog.json', JSON.stringify(data), 'utf-8');
