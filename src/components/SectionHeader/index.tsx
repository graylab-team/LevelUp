import React from "react";

const SectionHeader = ({
  title,
  url,
  imgClass,
}: {
  title: string;
  url: string;
  imgClass: string;
}) => {
  return (
    <div className="h-[32rem] bg-[#FFF0DD] pt-[6.5rem] max-md:h-[18rem] max-md:pt-[6.2rem]">
      <div className="mx-auto flex h-full max-w-[1536px] items-center justify-between px-[10.4rem] max-md:px-[1.6rem]">
        <h1 className="mt-[-2rem] text-[56px] font-semibold leading-[1.2] text-stone-950 max-md:mt-0 max-md:text-[3.2rem]">
          {title}
        </h1>
        <img
          src={url}
          className={`max-h-full object-contain ${imgClass} max-md:max-h-[90%]`}
        />
      </div>
    </div>
  );
};

export default SectionHeader;
