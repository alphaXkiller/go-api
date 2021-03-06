import * as R from 'ramda'
import axios from 'axios'
import { PathNotFoundErr, ParamRequiredErr } from './go_api_error'

const PARAM_PATTERN = /:[_0-9a-zA-Z]*/g

export default class GoAPI {
  constructor(options) {
    if (!options.pathMap) throw new Error('pathMap option is required')
    if (!options.baseURL) throw new Error('baseURL option is required')

    this.configFn = options.configFn || R.always({})
    this.pathMap = options.pathMap
    this.request = axios.create({
      baseURL: options.baseURL,
    })
  }

  /**
   * Get the raw path from path map with given object key
   *
   * @params {string} pathName - The object key in path map
   */
  _getPath(pathName) {
    const path = this.pathMap[pathName]
    if (!path) throw new PathNotFoundErr(pathName)

    return path
  }

  /**
   * @params {string} pathName - The object key in path map
   * @params {Object} params - URL parameters map
   */
  _parsePath(pathName, params) {
    const path = this._getPath(pathName)

    return GoAPI.transformParams(path, params)
  }

  /**
   * Transform /user/:id to /user/1 with the given params
   *
   * @params {string} path - The raw path.
   * @params {Object} params - URL parameters map.
   */
  static transformParams(path, params) {
    const throwErrIfMissParam = param => {
      if (!params[param]) throw new ParamRequiredErr({ param, params })
      return param
    }

    const replaceParam = (accPath, paramWithColon) =>
      R.compose(
        param => R.replace(paramWithColon, params[param], accPath),
        throwErrIfMissParam,
        // :id -> id
        R.slice(1, Infinity)
      )(paramWithColon)

    const transform = R.compose(
      R.ifElse(R.isEmpty, R.always(path), R.reduce(replaceParam, path)),
      R.match(PARAM_PATTERN)
    )

    return transform(path)
  }

  /**
   * Equivalent to REST get
   *
   * @param {string} pathName - The object key in path map
   * @param {Object} opts - Only accept 'params' and 'queries'
   */
  async get(pathName, opts = {}) {
    const path = this._parsePath(pathName, opts.params)
    const config = await this.configFn({ path })

    return this.request.get(path, R.merge({ params: opts.queries }, config))
  }

  /**
   * Equivalent to REST post
   *
   * @param {string} pathName - The object key in path map
   * @param {Object} opts - Only accept 'params' and 'body'
   */
  async post(pathName, opts = {}) {
    const path = this._parsePath(pathName, opts.params)
    const config = await this.configFn({ path })

    return this.request.post(path, opts.body, config)
  }

  /**
   * Equivalent to REST put
   *
   * @param {string} pathName - The object key in path map
   * @param {Object} opts - Only accept 'params' and 'body'
   */
  async put(pathName, opts = {}) {
    const path = this._parsePath(pathName, opts.params)
    const config = await this.configFn({ path })

    return this.request.put(path, opts.body, config)
  }

  /**
   * Equivalent to REST delete
   *
   * @param {string} pathName - The object key in path map
   * @param {Object} opts - Only accept 'params' and 'body'
   */
  async delete(pathName, opts = {}) {
    const path = this._parsePath(pathName, opts.params)
    const config = await this.configFn({ path })

    return this.request.delete(path, R.merge({ params: opts.queries }, config))
  }
}
