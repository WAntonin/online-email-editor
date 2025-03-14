import { Template } from "./template";
import {
  addTemplate,
  removeTemplate,
  updateTemplate,
} from "./templates-actions";

export type TemplateAction = {
  type: "add" | "remove" | "update";
  template: Template;
};
export default function templatesReducer(
  templates: Template[],
  action: TemplateAction
) {
  switch (action.type) {
    case "add":
      return addTemplate(templates, action.template);
    case "remove":
      return removeTemplate(templates, action.template);
    case "update":
      return updateTemplate(templates, action.template);
    default:
      throw Error(`Unknown Template action type:  ${action.type}`);
  }
}
