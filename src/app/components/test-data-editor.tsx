import Editor from "@monaco-editor/react";

const editorOptions = {
  minimap: {
    enabled: false,
  },
};

const TestDataEditor = ({
  data,
  visible,
  onChange,
  setVisibility,
}: {
  data: string;
  visible: boolean;
  onChange: (data: string) => void;
  setVisibility: () => void;
}) => {
  return (
    <div
      className={`fixed top-0 right-0 w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
        visible ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <button
        className="absolute z-10 top-2 right-2 text-white hover:text-gray-700"
        onClick={() => setVisibility()}
      >
        &times;
      </button>
      <Editor
        value={data}
        language="json"
        defaultValue="Please enter your JSON data."
        theme="vs-dark"
        onChange={(newvalue?: string) => onChange(newvalue || "")}
        options={editorOptions}
      />
    </div>
  );
};

export default TestDataEditor;
