"use client";

import { useEffect, useState } from "react";
import Handlebars from "handlebars";
import { useTemplates } from "./templates/templates-context";
import { Template, TemplateId } from "./templates/template";

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
      console.error("Template not found");
      return;
    }
    try {
      const handlebarsTemplate = Handlebars.compile(selectedTemplate.code);
      const filled = handlebarsTemplate(JSON.parse(selectedTemplate.testData));
      setFilledTemplate(filled);
      console.log("Filled template", filled);
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

const findTemplateById = (templates: Template[], id: TemplateId) => {
  return templates.find((t) => t.id === id);
};
