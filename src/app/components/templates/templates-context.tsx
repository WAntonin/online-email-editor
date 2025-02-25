import { createContext, useContext, useReducer } from "react";
import { ReactNode } from "react";
import { Template } from "./template";
import templatesReducer, { TemplateAction } from "./templates-reducer";
import { Dispatch } from "react";

const initialTemplates: Template[] = [
  {
    id: 1,
    name: "Template 1",
    code: '<h1 class="text-purple-400">-Hello, {{user}} !</h1>',
    testData: '{ "user": "John" }',
    isTailwind: false,
  },
];

export const TemplatesContext = createContext<Template[]>(initialTemplates);
export const TemplatesDispatchContext = createContext(
  {} as Dispatch<TemplateAction>
);
export const useTemplates = () => {
  return useContext(TemplatesContext);
};
export const useTemplatesDispatch = () => {
  return useContext(TemplatesDispatchContext);
};
export default function TemplatesProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [templates, dispatch] = useReducer(templatesReducer, initialTemplates);
  return (
    <TemplatesContext.Provider value={templates}>
      <TemplatesDispatchContext.Provider value={dispatch}>
        {children}
      </TemplatesDispatchContext.Provider>
    </TemplatesContext.Provider>
  );
}
