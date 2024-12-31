import Editor from "@monaco-editor/react";

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
  return (
    <Editor
      value={props.code}
      language="handlebars"
      defaultValue="Please enter HTML code."
      theme="vs-dark"
      onChange={(newvalue?: string) => props.onChange(newvalue || "")}
      options={editorOptions}
    />
  );
};

export default CodeEditor;
