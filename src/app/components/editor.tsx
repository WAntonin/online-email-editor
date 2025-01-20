import Editor from "@monaco-editor/react";
import EditorStatusBarWrapper from "./editor-status-bar.tsx/editor-status-bar-wrapper";
import CodeStatus from "./editor-status-bar.tsx/editor-code-status";

interface Props {
  code: string;
  onChange: (code: string) => void;
}

const editorOptions = {
  minimap: {
    enabled: true,
  },
};

const CodeEditor = (props: Props) => {
  // TODO: Implement a function to check if the template is valid
  const isValidTemplate = true;
  return (
    <div className="flex flex-col h-full">
      <EditorStatusBarWrapper>
        <CodeStatus language="handlebars/html" isValid={isValidTemplate} />
      </EditorStatusBarWrapper>
      <Editor
        value={props.code}
        language="html"
        defaultValue="Please enter HTML code."
        theme="vs-dark"
        onChange={(newvalue?: string) => props.onChange(newvalue || "")}
        options={editorOptions}
        onValidate={(markers) => {
          console.log(markers);
          const hasErrors = markers.some((marker) => marker.severity === 8); // 8 is the severity for errors
          if (hasErrors) {
            console.log("Code has errors");
          } else {
            console.log("Code is valid");
          }
        }}
      />
    </div>
  );
};

export default CodeEditor;
