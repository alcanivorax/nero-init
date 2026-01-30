#!/usr/bin/env node

import { promptUser } from './prompt.js'
import { selectTemplate } from './templates.js'
import { renderTemplate } from './renderer.js'
import { postInstall } from './install.js'

async function run() {
  const answers = await promptUser()
  const template = await selectTemplate(answers)
  await renderTemplate(template, answers)
  await postInstall(template, answers)
}

await run()
