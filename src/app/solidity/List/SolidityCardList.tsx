import { Box } from "@mui/material";
import Link from "next/link";

const SolidityCardList = ({ content }) => {
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
        {/* TODO: Update labels in future. Temporarily removed for MVP */}
        {/* <LabelContainer>
        {content.labels?.map((label, index) => (
          <Label key={index}>{label}</Label>
        ))}
        {content.level ? <Label>Level {content.level}</Label> : null}
      </LabelContainer> */}
      </div>
    </Link>
  );
};

export default SolidityCardList;
