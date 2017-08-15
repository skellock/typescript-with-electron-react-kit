import { test } from 'ava'
import { createDb, createRepo } from './database.fixtures'

test('can load', async t => {
  const db = createDb()
  const repo = await db.load('skellock/typescript-with-electron-react-kit')

  t.is(repo.name, 'typescript-with-electron-react-kit')
  t.is(repo.fullName, 'skellock/typescript-with-electron-react-kit')
})

test('can save', async t => {
  const db = createDb()
  const repo = createRepo()

  t.true(await db.save(repo))
})

test('fails to save', async t => {
  const db = createDb()
  const repo = createRepo()
  repo.fullName = 'crap'

  t.false(await db.save(repo))
})
