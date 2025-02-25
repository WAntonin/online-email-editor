import Editor from "@monaco-editor/react";
import EditorStatusBarWrapper from "./editor-status-bar.tsx/editor-status-bar-wrapper";
import CodeStatus from "./editor-status-bar.tsx/editor-code-status";
import { Template } from "./templates/template";
import { useContext } from "react";
import { TemplatesDispatchContext } from "./templates/templates-context";

const editorOptions = {
  minimap: {
    enabled: true,
  },
};

const CodeEditor = ({ template }: { template: Template }) => {
  const dispatch = useContext(TemplatesDispatchContext);
  // TODO: Implement a function to check if the template is valid
  const isValidTemplate = true;

  return (
    <div className="flex flex-col h-full">
      <EditorStatusBarWrapper>
        <CodeStatus language="handlebars/html" isValid={isValidTemplate} />
      </EditorStatusBarWrapper>
      <Editor
        value={template.code}
        language="html"
        defaultValue="Please enter HTML code."
        theme="vs-dark"
        onChange={(newvalue?: string) => {
          dispatch({
            type: "update",
            template: {
              ...template,
              code: newvalue ?? "",
            },
          });
        }}
        options={editorOptions}
      />
    </div>
  );
};

export default CodeEditor;
