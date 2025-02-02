type SortButtonProps = {
  isClicked?: boolean;
  sortView?: string;
  contents: string;
  children?: React.ReactNode;
};

export default function SortButton({
  isClicked,
  sortView,
  contents,
}: SortButtonProps) {
  return (
    <button
      className={`${isClicked ? 'bg-purple-500' : 'bg-white/20'} text-white px-8 py-2 rounded-xl`}
    >
      {contents}
    </button>
  );
}
