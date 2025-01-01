import IconClose from "./icons/close";

const ButtonClose = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      className="cursor-pointer text-white hover:text-gray-500"
      onClick={onClick}
      aria-label="Close test data editor"
    >
      <IconClose className="size-6" />
    </button>
  );
};

export default ButtonClose;
