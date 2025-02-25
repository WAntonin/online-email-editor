"use client";

import CodeEditor from "./components/editor";
import HtmlPreviewer from "./components/html-previewer";
import ButtonPrimary from "./components/button-primary";
import TestDataEditor from "./components/test-data-editor";
import useToggle from "@/hooks/useToggle";
import TemplatesProvider, {
  useTemplates,
} from "./components/templates/templates-context";

export type TestData = { [key: string]: string | number } | undefined;

export default function Home() {
  const [showDataEditor, toggleDataEditor] = useToggle(false);
  const templates = useTemplates();

  const templateId = 1;
  const selectedTemplate =
    templates.find((t) => t.id === templateId) || templates[0];

  return (
    <TemplatesProvider>
      <div className="relative grid justify-items-stretch grid-cols-2 h-screen">
        <CodeEditor template={selectedTemplate} />
        <div className="p-2">
          <div className="flex items-start justify-end">
            <ButtonPrimary onClick={toggleDataEditor} text="Edit test data" />
          </div>
          <HtmlPreviewer templateId={1} />
          <TestDataEditor
            templateId={1}
            visible={showDataEditor}
            setVisible={toggleDataEditor}
          />
        </div>
      </div>
    </TemplatesProvider>
  );
}
