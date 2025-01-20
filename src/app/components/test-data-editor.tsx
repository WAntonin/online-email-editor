import Editor from "@monaco-editor/react";
import ButtonClose from "./button-close";
import CodeStatus from "./editor-status-bar.tsx/editor-code-status";
import { useState } from "react";
import EditorStatusBarWrapper from "./editor-status-bar.tsx/editor-status-bar-wrapper";

const editorOptions = {
  minimap: {
    enabled: false,
  },
};

const TestDataEditor = ({
  data,
  visible,
  onChange,
  setVisible,
}: {
  data: string;
  visible: boolean;
  onChange: (data: string) => void;
  setVisible: () => void;
}) => {
  const [isValidJson, setIsValidJson] = useState(false);
  const handleDataChange = (value?: string) => {
    if (!value) {
      setIsValidJson(false);
      return;
    }
    try {
      JSON.parse(value);
      onChange(value);
      setIsValidJson(true);
    } catch {
      setIsValidJson(false);
    }
  };

  return (
    <div
      className={`w-screen h-screen flex items-center justify-center absolute bottom-0 top-0 ${
        !visible && "invisible"
      }`}
    >
      <div
        id="slideover-container"
        className={`w-full h-full fixed inset-0 ${!visible && "invisible"}`}
      >
        <div
          onClick={setVisible}
          id="slideover-bg"
          className={`w-full h-full duration-500 ease-out transition-all inset-0 absolute bg-gray-900 ${
            visible ? "opacity-50" : "opacity-0"
          }`}
        ></div>
        <div
          className={`flex flex-col fixed top-0 right-0 w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
            visible ? "translate-x-0 z-20" : "translate-x-full"
          }`}
        >
          <EditorStatusBarWrapper>
            <CodeStatus language="json" isValid={isValidJson} />
            <ButtonClose onClick={setVisible} />
          </EditorStatusBarWrapper>
          <Editor
            value={data}
            language="json"
            defaultValue="Please enter your JSON data."
            theme="vs-dark"
            onChange={handleDataChange}
            options={editorOptions}
          />
        </div>
      </div>
    </div>
  );
};

export default TestDataEditor;
