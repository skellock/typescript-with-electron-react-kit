import { createDb, createRepo } from "./database.fixtures"

test("can load", async () => {
  const db = createDb()
  const repo = await db.load("skellock/typescript-with-electron-react-kit")

  expect(repo.name).toBe("typescript-with-electron-react-kit")
  expect(repo.fullName).toBe("skellock/typescript-with-electron-react-kit")
})

test("can save", async () => {
  const db = createDb()
  const repo = createRepo()
  const result = await db.save(repo)
  expect(result).toBe(true)
})

test("fails to save", async () => {
  const db = createDb()
  const repo = createRepo()
  repo.fullName = "crap"
  const result = await db.save(repo)
  expect(result).toBe(false)
})
