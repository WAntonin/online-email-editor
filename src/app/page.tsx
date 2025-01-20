"use client";

import { useState } from "react";
import CodeEditor from "./components/editor";
import HtmlPreviewer from "./components/html-previewer";
import ButtonPrimary from "./components/button-primary";
import TestDataEditor from "./components/test-data-editor";
import useToggle from "@/hooks/useToggle";

export type TestData = { [key: string]: string | number } | undefined;

export default function Home() {
  const [showDataEditor, toggleDataEditor] = useToggle(false);
  const [code, setCode] = useState("type here");
  const [data, setData] = useState<TestData>();

  const changeCode = (code: string) => setCode(code);
  const changeData = (data: string) => {
    try {
      setData(JSON.parse(data));
    } catch (error) {
      console.error("Invalid JSON data", error);
    }
  };

  return (
    <div className="relative grid justify-items-stretch grid-cols-2 h-screen">
      <CodeEditor code={code} onChange={changeCode} />
      <div className="p-2">
        <div className="flex items-start justify-end">
          <ButtonPrimary onClick={toggleDataEditor} text="Edit test data" />
        </div>
        <HtmlPreviewer code={code} data={data} />
        <TestDataEditor
          data={JSON.stringify(data, null, 2)}
          onChange={changeData}
          visible={showDataEditor}
          setVisible={toggleDataEditor}
        />
      </div>
    </div>
  );
}
