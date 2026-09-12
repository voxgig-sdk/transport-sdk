import { TransportEntityBase } from '../TransportEntityBase';
import type { TransportSDK } from '../TransportSDK';
import type { Control } from '../types';
import type { Location, LocationListMatch } from '../TransportTypes';
declare class LocationEntity extends TransportEntityBase<Location> {
    constructor(client: TransportSDK, entopts: any);
    make(this: LocationEntity): LocationEntity;
    list(this: any, reqmatch?: LocationListMatch, ctrl?: Control): Promise<LocationEntity[]>;
}
export { LocationEntity };
