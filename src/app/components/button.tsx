const Button = ({ text, onClick }: { text: string; onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="p-3 bg-purple-700 transition duration-700 ease-in-out hover:bg-purple-500 rounded-xl"
    >
      {text}
    </button>
  );
};

export default Button;
