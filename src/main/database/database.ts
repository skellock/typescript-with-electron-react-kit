// this example is here only to show how some testing could work.
import { GithubRepo } from '../../shared/models/github-repo'

interface DatabaseOptions {
  readonly directory: string
}

/**
 * Wraps data access.
 */
export class Database {
  readonly options: DatabaseOptions

  constructor(options: DatabaseOptions) {
    this.options = options
  }

  /**
   * Loads something from the database
   */
  load(fullName: string): Promise<GithubRepo> {
    return new Promise(resolve =>
      setTimeout(() => {
        const repo: GithubRepo = {
          name: fullName.split('/')[1],
          fullName,
          private: false,
        }
        resolve(repo)
      }, 10),
    )
  }

  /**
   * Saves something to the database.
   * 
   * @param repo The thing to save.
   */
  save(repo: GithubRepo): Promise<boolean> {
    return new Promise(resolve => setTimeout(() => resolve(repo.fullName !== 'crap'), 10))
  }
}
