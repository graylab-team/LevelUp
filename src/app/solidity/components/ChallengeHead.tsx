const ChallengeHead = ({ challengeData }) => (
  <div className="grid w-full grid-cols-2 gap-16 lg:grid-cols-1">
    <div className="my-[4rem] flex flex-col self-stretch font-medium max-md:mt-10 max-md:max-w-full">
      <h1 className="text-[4rem] leading-[56px] tracking-wide text-stone-950 max-md:max-w-full">
        Lesson {challengeData.lesson}: {challengeData.name}
      </h1>
      <h4 className="text-[2rem] leading-[28px] tracking-wide text-[#5b5b5b] max-md:max-w-full">
        {challengeData.summary}
      </h4>
      <div className="mt-6 flex gap-2 self-start text-center text-base leading-6 tracking-normal text-yellow-800">
        {challengeData.labels?.map((label) => (
          <div
            className="color-[$84623A] h-[3.2rem] rounded-[0.4rem] bg-[#FFDEB5] px-4 text-center font-[500px] leading-[3.2rem]"
            key={label}
          >
            {label}
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ChallengeHead;
