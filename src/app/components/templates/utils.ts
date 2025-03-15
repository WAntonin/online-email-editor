import { Template, TemplateId } from "./template";

const findTemplateById = (templates: Template[], id: TemplateId) => {
  return templates.find((t) => t.id === id);
};

export { findTemplateById };
