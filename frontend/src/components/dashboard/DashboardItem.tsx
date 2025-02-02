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
    <div className="glassmorphism rounded-lg p-4 text-white">
      <div className="flex items-center gap-3 mb-2">
        <i data-lucide="database" className="w-5 h-5"></i>
        <span className="text-sm">Total Datasets</span>
      </div>
      <span className="text-2xl font-bold">1,234</span>
    </div>
  );
}
