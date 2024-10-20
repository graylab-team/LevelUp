import { readFileSync } from "fs";
import Head from "next/head";
import Link from "next/link";
import SvgIcon from "@mui/material/SvgIcon";
import BackSvg from "@/assets/svgs/common/back.svg";
import { ChallengeHead, ChallengeBody } from "@/app/solidity/components";

export default function ChallengeDetailsPage({
  params,
}: {
  params: { challengeName: string };
}) {
  const data = JSON.parse(
    readFileSync(`./public/data/solidity/${params.challengeName}.json`, {
      encoding: "utf-8",
    }),
  );

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.13.13/dist/katex.min.css"
          integrity="sha384-RZU/ijkSsFbcmivfdRBQDtwuwVqK7GMOw6IMvKyeWL2K5UAlyp6WonmB8m7Jd0Hn"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.9.0/github-markdown.min.css"
          crossOrigin="anonymous"
        />
      </Head>

      <div>
        <div className="mx-auto flex max-w-[140rem] gap-5 px-[6rem] pb-16 pt-3 max-md:flex-wrap max-md:px-[2rem]">
          <div className="flex w-fit shrink-0 grow basis-0 flex-col max-md:max-w-full">
            <div className="mt-20 flex gap-3 self-start whitespace-nowrap text-lg font-semibold leading-8 text-stone-950 max-md:mt-10">
              <Link href="/solidity" className="flex items-center">
                <SvgIcon className="mr-[1.2rem]">
                  <BackSvg />
                </SvgIcon>
                Back
              </Link>
            </div>
            <div className="mt-12 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <ChallengeHead challengeData={data} />
              </div>
            </div>
            <div className="z-10 mt-5 h-1 shrink-0 max-md:max-w-full" />
            <div className="mb-[4.8rem] h-px shrink-0 border border-solid border-stone-950 bg-stone-950 max-md:max-w-full" />
          </div>
        </div>

        <div className="mx-auto grid h-screen w-full max-w-[140rem] grid-cols-2 gap-5 px-[6rem]">
          <ChallengeBody
            challengeName={params.challengeName}
            challengeIndex={data.index}
            content={data.content}
          />
        </div>
      </div>
    </>
  );
}
