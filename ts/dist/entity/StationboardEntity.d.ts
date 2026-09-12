import { TransportEntityBase } from '../TransportEntityBase';
import type { TransportSDK } from '../TransportSDK';
import type { Control } from '../types';
import type { Stationboard, StationboardListMatch } from '../TransportTypes';
declare class StationboardEntity extends TransportEntityBase<Stationboard> {
    constructor(client: TransportSDK, entopts: any);
    make(this: StationboardEntity): StationboardEntity;
    list(this: any, reqmatch?: StationboardListMatch, ctrl?: Control): Promise<StationboardEntity[]>;
}
export { StationboardEntity };
