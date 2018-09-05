class PathNotFoundErr extends Error {
  constructor(pathName = '', ...params) {
    super(...params)

    if (Error.captureStackTrace) Error.captureStackTrace(this, PathNotFoundErr)

    this.name = 'PathNotFoundError'
    this.message = pathName
      ? `Path not found from the given path name: ${pathName}`
      : `Path name is not provided`
  }
}

class ParamRequiredErr extends Error {
  constructor({ requiredPathParam, givenPathParams }, ...params) {
    super(...params)

    if (Error.captureStackTrace) Error.captureStackTrace(this, ParamRequiredErr)

    this.name = 'ParamRequiredError'
    this.message = `
      Param [${requiredPathParam}] is required. And you are passing ${JSON.stringify(
      givenPathParams
    )}
    `
  }
}

PathNotFoundErr.prototype = Error.prototype
ParamRequiredErr.prototype = Error.prototype

export { PathNotFoundErr, ParamRequiredErr }
