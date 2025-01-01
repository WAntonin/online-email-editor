const EditorStatusBarWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="w-full flex justify-between items-center p-2 bg-[#1e1e1e] text-white">
      {children}
    </div>
  );
};

export default EditorStatusBarWrapper;
