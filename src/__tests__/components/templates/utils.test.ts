import { Template } from "@/app/components/templates/template";
import { findTemplateById } from "@/app/components/templates/utils";
import {
  template1,
  template2,
} from "@/app/components/templates/templates-data";

describe("utils", () => {
  describe("findTemplateById", () => {
    it("should find a template by id", () => {
      const templates: Template[] = [template1, template2];
      const foundTemplate = findTemplateById(templates, 1);
      expect(foundTemplate).toEqual(template1);
    });
    it("should not find a template by id", () => {
      const templates: Template[] = [template1, template2];
      const foundTemplate = findTemplateById(templates, 3);
      expect(foundTemplate).toBeUndefined();
    });
  });
});
