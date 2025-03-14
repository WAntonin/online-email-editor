import { Template } from "./template";

const addTemplate = (templates: Template[], template: Template) => {
  if (!template.id) {
    return templates;
  }

  return [...templates, template];
};

const removeTemplate = (templates: Template[], template: Template) =>
  templates.filter((t) => t.id !== template.id);

const updateTemplate = (templates: Template[], template: Template) =>
  templates.map((t) => (t.id === template.id ? template : t));

export { addTemplate, removeTemplate, updateTemplate };
