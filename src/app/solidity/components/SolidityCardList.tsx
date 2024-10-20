import { Box } from "@mui/material";
import markdownData from "@/data/solidity/markdownData.json";
import Link from "next/link";

const SolidityCard = ({ content }) => {
  return (
    <Link
      href={`/solidity/${content.id}`}
      target={content?.url ? "_blank" : undefined}
      className="flex cursor-pointer flex-col justify-between rounded-[2rem] bg-[#FFF0DD] p-6"
    >
      <div>
        <Box>
          <div className="mb-[1.2rem] text-[2rem] font-semibold leading-[2.8rem]">
            Lesson {content.lesson}: {content.name}
          </div>
          <div className="mb-3 text-[1.6rem] leading-[2.4rem] text-[#5B5B5B]">
            {content.summary}
          </div>
        </Box>
      </div>
    </Link>
  );
};

const SolidityCardList = async () => {
  return (
    <div className="mx-auto my-24 box-border w-full">
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <div
          className="grid gap-[2.4rem]"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(30rem, 1fr))",
          }}
        >
          {markdownData.map((item) => (
            <SolidityCard content={item} key={item.index} />
          ))}
        </div>
      </Box>
    </div>
  );
};
export default SolidityCardList;
