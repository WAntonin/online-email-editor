import { Template } from "./template";

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
      console.log("Adding template", action.template);
      return [...templates, action.template];
    case "remove":
      return templates.filter((template) => template.id !== action.template.id);
    case "update":
      const newState = templates.map((template) =>
        template.id === action.template.id ? action.template : template
      );
      console.log("Updating template", newState);
      return newState;
    default:
      throw Error(`Unknown Template action type:  ${action.type}`);
  }
}
