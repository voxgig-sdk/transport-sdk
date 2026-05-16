
import { Context } from './Context'


class TransportError extends Error {

  isTransportError = true

  sdk = 'Transport'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  TransportError
}

