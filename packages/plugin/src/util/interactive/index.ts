import Template from "./template.html";
import { writeFileIfChanged } from "../file";

export const replaceDataPlaceholder = (data: object) => {
  return Template.replace("{{DATA}}", JSON.stringify(data));
};

export const writeDataToInteractiveFile = (data: object, filePath: string) => {
  const result = replaceDataPlaceholder(data);
  writeFileIfChanged(filePath, result);
};
