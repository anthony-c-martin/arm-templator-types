import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface RedisProperties {
  enableNonSslPort?: Expressionable<boolean>;
  redisConfiguration?: Expressionable<any>;
  redisVersion?: Expressionable<string>;
  shardCount?: Expressionable<number>;
  sku: Expressionable<Sku>;
  staticIP?: Expressionable<string>;
  subnet?: Expressionable<string>;
  tenantSettings?: Expressionable<any>;
  virtualNetwork?: Expressionable<string>;
}

export interface Sku {
  capacity: Expressionable<number>;
  family: Expressionable<('C' | 'P')>;
  name: Expressionable<('Basic' | 'Standard' | 'Premium')>;
}

export namespace Redis {
  export interface AdditionalProps {
    tags?: Expressionable<any>;
  }
  
  export type RedisResource = ResourceDefinition<RedisProperties, AdditionalProps>;
  
  export function create(name: Expressionable<string>, properties: RedisProperties, location: Expressionable<string>, tags?: Expressionable<any>): RedisResource {
    return {
      type: 'Microsoft.Cache/Redis',
      apiVersion: '2015-08-01',
      name: [name],
      location,
      properties,
      additional: {
        tags,
      },
    };
  }
}