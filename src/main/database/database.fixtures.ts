import { GithubRepo } from '../../shared/models/github-repo'
import { Database } from './database'

/**
 * Creates a valid repo for use in tests.
 */
export function createRepo() {
  const repo: GithubRepo = {
    name: 'electron-starter',
    fullName: 'skellock/electron-starter',
    private: false,
  }
  return repo
}

const directory = './tmp'

/**
 * Creates a sample database.
 */
export const createDb = () => new Database({ directory })
