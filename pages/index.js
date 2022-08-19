import { Content } from '@components/Content';
import Layout from '@components/Layout';

import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import Builder from '../components/Builder';

export default function Home({ children, home }) {
  return (
    <Layout title="Home">
      {home.builder.map((item, index) => {
        return <Builder key={index} type={item.type} item={item} />;
      })}
      <ul>
        <li>Add accessibility</li>
        <li>Add image capabilities / cloudflare cdn?</li>
        <li>Hook up cms</li>
        <li>Add typescript and typings</li>
        <li>wysiwyg styles</li>
        <li>Form set up</li>
        <li>Caching</li>
        <li>viewport set up</li>
        <li>Favicon</li>
        <li>Analytics</li>
      </ul>
    </Layout>
  );
}

function getBySlug(dir, slug) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(dir, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data } = matter(fileContents);

  return data;
}

export async function getStaticProps() {
  const home = getBySlug('content/pages', 'home');

  return {
    props: {
      home,
    },
  };
}
