import { defineEventHandler, getRouterParam, H3Event } from 'h3'
import { readFileSync } from 'fs'
import { join } from 'path'
export default defineEventHandler((event: H3Event) => {
  const id = getRouterParam(event, 'id')
  const filePath = join(process.cwd(), 'public/data', 'exercises.json');
  const data = JSON.parse(readFileSync(filePath, 'utf8'))
  const exercise = data.find((item: any) => item.id === id)
  if (exercise) {
    return exercise
  } else {
    return { error: 'Exercise not found' }
  }
})
