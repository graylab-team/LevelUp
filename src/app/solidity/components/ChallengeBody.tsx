"use client";

import MDXCodeHighlighter from "@/components/MDXCodeHighlighter";
import MDXHeaders from "@/components/MDXHeaders";
import { Mermaid } from "mdx-mermaid/Mermaid";
import { IdePage, PageButton } from "@/solidity/components";
import { MDXRemote } from "next-mdx-remote";

const ChallengeBody = ({ challengeName, challengeIndex, content }) => {
  console.log(content);
  return (
    <>
      <div className="markdown-body">
        {/* <MDXRemote
          source={`# Hello World

        This is from Server Components!
        `}
        /> */}
        <MDXRemote
          {...content}
          components={{
            ...MDXCodeHighlighter,
            ...MDXHeaders,
            Mermaid,
          }}
        />
        <PageButton index={challengeIndex} />
      </div>
      <div>
        <IdePage challengeName={challengeName} />
      </div>
    </>
  );
};

export default ChallengeBody;
