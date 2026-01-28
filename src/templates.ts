import type { Answers, TemplateMeta } from './types.js'
import rawTemplates from './templates/templates.json' with { type: 'json' }

const templates = rawTemplates as TemplateMeta[]

export async function selectTemplate(answers: Answers): Promise<TemplateMeta> {
  return templates.find((t) => t.id === answers.type)! // source: trust me!
}
