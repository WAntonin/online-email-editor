import { Template } from "@/app/components/templates/template";
import {
  addTemplate,
  removeTemplate,
  updateTemplate,
} from "@/app/components/templates/templates-actions";

const template1 = {
  id: 1,
  name: "Template 1",
  code: "Content 1",
  testData: "test",
  isTailwind: true,
};

const template2 = {
  id: 2,
  name: "Template 2",
  code: "Content 2",
  testData: "test",
  isTailwind: true,
};

describe("templates-actions", () => {
  describe("addTemplate", () => {
    it("should add a template", () => {
      const templates: Template[] = [];

      const newTemplates = addTemplate(templates, template1);
      expect(newTemplates).toEqual([template1]);
    });
    it("should ot add a template", () => {
      const templates: Template[] = [];

      const newTemplates = addTemplate(templates, {} as Template);
      expect(newTemplates.length).toBe(0);
    });
  });
  describe("removeTemplate", () => {
    it("should remove a template", () => {
      const templates: Template[] = [template1, template2];
      const newTemplates = removeTemplate(templates, template1);
      expect(newTemplates).toEqual([template2]);
    });
    it("should not remove a template", () => {
      const templates: Template[] = [template2];
      const newTemplates = removeTemplate(templates, template1);
      expect(newTemplates).toEqual([template2]);
    });
  });
  describe("updateTemplate", () => {
    it("should update a template", () => {
      const templates: Template[] = [template1, template2];
      const updatedTemplate = {
        id: 1,
        name: "Template 1 Updated",
        code: "Content 1 Updated",
        testData: "test2",
        isTailwind: true,
      };
      const newTemplates = updateTemplate(templates, updatedTemplate);
      expect(newTemplates).toEqual([updatedTemplate, template2]);
    });
  });
});
