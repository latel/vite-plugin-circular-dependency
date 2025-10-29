import { existsSync, readFileSync, writeFileSync } from "node:fs";

/**
 * Write file content only when it actually changes to avoid triggering watchers unnecessarily.
 * Returns true if the file was written.
 */
export function writeFileIfChanged(
  filePath: string,
  content: string,
  encoding: BufferEncoding = "utf-8"
): boolean {
  let shouldWrite = true;
  if (existsSync(filePath)) {
    try {
      const current = readFileSync(filePath, encoding);
      if (current === content) {
        shouldWrite = false;
      }
    } catch {
      shouldWrite = true;
    }
  }

  if (shouldWrite) {
    writeFileSync(filePath, content, encoding);
    return true;
  }

  return false;
}
