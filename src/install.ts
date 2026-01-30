import { spawnSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import chalk from 'chalk'
import ora from 'ora'
import { Answers, TemplateMeta } from './types.js'

// Aesthetic gradient and box drawing characters
// Premium muted palette (dark-terminal friendly)
const theme = {
  brand: '#7C7CFF', // Soft indigo (hero color)
  accent: '#22D3EE', // Subtle cyan highlight
  success: '#34D399', // Mint green
  warning: '#FBBF24', // Amber (real warning color now 😄)
  error: '#F87171', // Soft red
  text: '#E5E7EB', // Light gray
  muted: '#9CA3AF', // Muted gray
  border: '#374151', // Slate border
}

const symbols = {
  success: '✔',
  warning: '!',
  error: '×',
  info: '•',
  arrow: '›',
  corner: '└─',
  pipe: '│ ',
  branch: '├─',
}

export async function postInstall(template: TemplateMeta, answers: Answers) {
  const projectDir = path.resolve(process.cwd(), answers.projectName)

  console.log()
  printHeader()
  console.log()

  await initGit(projectDir)

  printNextSteps(template, answers)
}

function printHeader() {
  const title = 'Setting up your project'
  const width = 48

  console.log(chalk.hex(theme.border)('┌' + '─'.repeat(width) + '┐'))
  console.log(
    chalk.hex(theme.border)('│ ') +
      chalk.bold.hex(theme.brand)(title) +
      ' '.repeat(width - title.length - 1) +
      chalk.hex(theme.border)('│')
  )
  console.log(chalk.hex(theme.border)('└' + '─'.repeat(width) + '┘'))
}

async function initGit(dir: string) {
  if (fs.existsSync(path.join(dir, '.git'))) {
    console.log(
      chalk.hex(theme.muted)(`  ${symbols.info} Git repository already exists`)
    )
    return
  }
  const spinner = ora({
    text: chalk.hex(theme.text)('Initializing git repository'),
    prefixText: chalk.hex(theme.muted)('›'),
    spinner: 'line',
  }).start()

  // Simulate a small delay for better UX
  await new Promise((resolve) => setTimeout(resolve, 300))

  try {
    const result = spawnSync('git', ['init'], {
      cwd: dir,
      stdio: 'pipe',
    })

    if (result.status === 0) {
      spinner.stopAndPersist({
        symbol: chalk.hex(theme.success)(`${symbols.success}`),
        text: chalk.hex(theme.success)('Git repository initialized'),
      })
    } else {
      spinner.stopAndPersist({
        symbol: chalk.hex(theme.warning)(`${symbols.warning}`),
        text: chalk.hex(theme.warning)('Git initialization skipped'),
      })
      console.log(
        chalk.hex(theme.muted)(`    ${symbols.corner} No git binary found`)
      )
    }
  } catch {
    spinner.stopAndPersist({
      symbol: chalk.hex('#EF4444')(`${symbols.error}`),
      text: chalk.hex('#EF4444')('Failed to initialize git'),
    })
    console.log(
      chalk.hex(theme.muted)(`    ${symbols.corner} Make sure git is installed`)
    )
  }
}

function printNextSteps(template: TemplateMeta, answers: Answers) {
  console.log()
  console.log(chalk.hex(theme.border)('─'.repeat(52)))
  console.log()

  console.log(
    chalk.bold.hex(theme.success)(`  ${symbols.success} Project ready`)
  )

  console.log()
  console.log(chalk.hex(theme.muted)('  Next steps'))
  console.log()

  const steps = [
    `cd ${answers.projectName}`,
    template.commands.install,
    template.commands.dev,
    template.commands.build,
  ]

  steps.forEach((cmd, i) => {
    const connector = i === steps.length - 1 ? symbols.corner : symbols.branch
    console.log(
      chalk.hex(theme.muted)(`  ${connector}`) +
        chalk.hex(theme.brand).bold(` ${cmd}`)
    )
  })

  console.log()
  console.log(chalk.hex(theme.border)('─'.repeat(52)))
  console.log()
  console.log(chalk.hex(theme.muted)('  Enjoy unemployment.'))
  console.log()
}
