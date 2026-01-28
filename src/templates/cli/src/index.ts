#!/usr/bin/env node

import pkg from '../package.json' with { type: 'json' }
import { handleCliOptions } from './cli/options.js'

async function run() {
  handleCliOptions()
  console.log(`${pkg.name} is running...`)
}

await run()
