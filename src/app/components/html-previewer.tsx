"use client";

import { useEffect, useState } from "react";
import Handlebars from "handlebars";
import { useTemplates } from "./templates/templates-context";
import { TemplateId } from "./templates/template";
import { findTemplateById } from "./templates/utils";

export default function HtmlPreviewer({
  templateId,
}: {
  templateId: TemplateId;
}) {
  const templates = useTemplates();
  const [filledTemplate, setFilledTemplate] = useState("");
  useEffect(() => {
    const selectedTemplate = findTemplateById(templates, templateId);
    if (!selectedTemplate) {
      return;
    }
    try {
      const handlebarsTemplate = Handlebars.compile(selectedTemplate.code);
      const filled = handlebarsTemplate(JSON.parse(selectedTemplate.testData));
      setFilledTemplate(filled);
    } catch (error) {
      console.error("Error filling template", error);
    }
  }, [templateId, templates]);

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: filledTemplate }}></div>
    </>
  );
}
