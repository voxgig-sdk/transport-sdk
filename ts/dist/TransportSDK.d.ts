import { ConnectionEntity } from './entity/ConnectionEntity';
import { LocationEntity } from './entity/LocationEntity';
import { StationboardEntity } from './entity/StationboardEntity';
export type * from './TransportTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { TransportEntityBase } from './TransportEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class TransportSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Connection(entopts?: Record<string, any>): ConnectionEntity;
    Location(entopts?: Record<string, any>): LocationEntity;
    Stationboard(entopts?: Record<string, any>): StationboardEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): TransportSDK;
    tester(testopts?: any, sdkopts?: any): TransportSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof TransportSDK;
export { stdutil, config, BaseFeature, TransportEntityBase, TransportSDK, SDK, };
