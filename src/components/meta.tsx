import Head from "next/head";
import React from "react";

interface MetaProps {
  title?: string;
  keyword?: string;
  desc?: string;
}
const Meta: React.FC<MetaProps> = ({ title, keyword, desc }) => {
  return (
    <div>
      <Head>
        <title>{title} || Next.js Template</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="description" content={desc} />
        <meta name="keyword" content={keyword} />
      </Head>
    </div>
  );
};

Meta.defaultProps = {
  title: "Title",
  keyword:
    "keyword",
  desc: "description.",
};

export default Meta;
