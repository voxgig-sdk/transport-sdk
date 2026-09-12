import { Context } from './Context';
declare class TransportError extends Error {
    isTransportError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { TransportError };
