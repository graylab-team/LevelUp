import { Box } from "@mui/material";
import SolidityCardList from "./SolidityCardList";
import markdownData from "../../../../public/data/solidity/markdownData.json";

const List = async () => {
  return (
    <div className="mx-auto my-24 box-border w-full">
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <div
          className="grid gap-[2.4rem]"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(30rem, 1fr))",
          }}
        >
          {markdownData.map((item, index) => (
            <SolidityCardList content={item} key={index} />
          ))}
        </div>
      </Box>
    </div>
  );
};
export default List;
