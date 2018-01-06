// this example is here only to show how some testing could work.
import { Repo } from "../repo"

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
  load(fullName: string): Promise<Repo> {
    return new Promise(resolve =>
      setTimeout(() => {
        const repo: Repo = {
          name: fullName.split("/")[1],
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
  save(repo: Repo): Promise<boolean> {
    return new Promise(resolve => setTimeout(() => resolve(repo.fullName !== "crap"), 10))
  }
}
