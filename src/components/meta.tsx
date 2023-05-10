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
        {/* Favicon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />

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
