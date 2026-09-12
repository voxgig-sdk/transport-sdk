import { TransportEntityBase } from '../TransportEntityBase';
import type { TransportSDK } from '../TransportSDK';
import type { Control } from '../types';
import type { Connection, ConnectionListMatch } from '../TransportTypes';
declare class ConnectionEntity extends TransportEntityBase<Connection> {
    constructor(client: TransportSDK, entopts: any);
    make(this: ConnectionEntity): ConnectionEntity;
    list(this: any, reqmatch?: ConnectionListMatch, ctrl?: Control): Promise<ConnectionEntity[]>;
}
export { ConnectionEntity };
