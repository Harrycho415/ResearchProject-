import React from "react";

type SortButtonProps = {
  isClicked?: boolean; // isClicked를 선택적으로 만듦
  contents: string;
};

const SortButton: React.FC<SortButtonProps> = ({ isClicked = false, contents }) => {
  return (
    <button
      className={`${
        isClicked ? "bg-purple-500" : "bg-white/20"
      } text-white px-8 py-2 rounded-xl`}
    >
      {contents}
    </button>
  );
};

const SortButtons: React.FC = () => {
  const buttons: SortButtonProps[] = [
    { contents: "Sort by Date" },
    { contents: "Status" },
    { contents: "Dataset Type" },
    { contents: "Blockchain Verified", isClicked: true },
  ];

  return (
    <div className="flex space-x-4 mb-6">
      {buttons.map((btn, index) => (
        <SortButton key={index} {...btn} />
      ))}
    </div>
  );
};

export { SortButtons };
