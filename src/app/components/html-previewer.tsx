"use client";

import { useEffect, useState } from "react";
import Handlebars from "handlebars";
import { TestData } from "../page";

const HtmlPreviewer = ({ code, data }: { code: string; data: TestData }) => {
  const [parsedHtml, setParsedHtml] = useState(code);

  useEffect(() => {
    try {
      const handlebarsTemplate = Handlebars.compile(code);
      const parsed = handlebarsTemplate(data);
      setParsedHtml(parsed);
    } catch (err) {
      console.error(err);
    }
  }, [code, data]);

  return <div dangerouslySetInnerHTML={{ __html: parsedHtml }}></div>;
};

export default HtmlPreviewer;
