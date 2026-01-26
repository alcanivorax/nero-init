export type Answers = {
  projectName: string;
  type: "cli" | "library";
};

export type TemplateMeta = {
  id: string;
  placeholders: string[];
  commands: {
    install: string;
    dev: string;
    build: string;
  };
};
