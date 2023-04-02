import fsp from 'node:fs/promises';

export async function load({ params }) {
  const { page } = params;
  const content = await fsp.readFile(`pages/${page}.md`, 'utf-8');
  return {
    content
  };
}
