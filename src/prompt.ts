import { input, confirm, select } from "@inquirer/prompts";
import type { Answers } from "./types.js";

export async function promptUser(): Promise<Answers> {
  const projectName = await input({
    message: "Project name:",
    default: "nero-app",
    validate(value) {
      if (!value.trim()) return "✗ Project name cannot be empty";
      if (value.includes(" ")) return "✗ Project name cannot contain spaces";
      if (!/^[a-z0-9-_]+$/i.test(value))
        return "✗ Use only letters, numbers, hyphens, and underscores";

      return true;
    },
    transformer(value) {
      return value;
    },
  });

  const projectType = await select<Answers["type"]>({
    message: "Select project type:",
    choices: [
      { name: "cli", value: "cli" },
      { name: "library", value: "library" },
    ],
  });

  return {
    projectName,
    type: projectType,
  };
}
