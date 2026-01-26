#!/usr/bin/env node

import { promptUser } from "./prompt.js";

async function run() {
  const answers = promptUser();
}

await run();
