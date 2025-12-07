const ButtonPrimary = ({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className="px-3 py-1 transition ease-in-out duration-200 shadow-md shadow-slate-700 hover:shadow-xs hover:shadow-slate-700 rounded-xl text-slate-500 hover:text-slate-700"
    >
      {text}
    </button>
  );
};

export default ButtonPrimary;
