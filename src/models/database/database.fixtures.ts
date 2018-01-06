import { Repo } from "../repo"
import { Database } from "./database"

/**
 * Creates a valid repo for use in tests.
 */
export function createRepo() {
  const repo: Repo = {
    name: "typescript-with-electron-react-kit",
    fullName: "skellock/typescript-with-electron-react-kit",
    private: false,
  }
  return repo
}

const directory = "./tmp"

/**
 * Creates a sample database.
 */
export const createDb = () => new Database({ directory })
