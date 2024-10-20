import LeftToRightButton from "./LeftToRight";
import RightToLeftButton from "./RightToLeft";
import markdownData from "@/data/solidity/markdownData.json";

const PageButton = ({ index }: { index: number }) => {
  const prevPage = markdownData.find((page) => page.index === index - 1);
  const nextPage = markdownData.find((page) => page.index === index + 1);

  return (
    <div className="flex flex-col">
      <div className="mb-6 mt-2 flex flex-row justify-between gap-6">
        {prevPage && (
          <RightToLeftButton
            variant="outlined"
            className="group"
            href={`/solidity/${prevPage.id}}`}
          >
            {prevPage.name}
          </RightToLeftButton>
        )}
        {nextPage ? (
          <LeftToRightButton
            variant="outlined"
            className="group ml-auto"
            href={`/solidity/${nextPage.id}`}
          >
            {nextPage.name}
          </LeftToRightButton>
        ) : (
          <p className="mt-2 text-4xl italic">End of Challenges</p>
        )}
      </div>
    </div>
  );
};

export default PageButton;
