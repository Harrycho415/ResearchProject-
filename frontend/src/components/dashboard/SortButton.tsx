export default function sortButton({
  isClicked = false,
  sortView = '',
  contents,
}) {
  return (
    <button
      className={`${isClicked ? 'bg-purple-500' : 'bg-white/20'} text-white px-8 py-2 rounded-xl`}
    >
      {contents}
    </button>
  );
}
