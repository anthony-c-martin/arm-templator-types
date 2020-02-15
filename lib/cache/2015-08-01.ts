// Generated using 'npm run generate /Users/antm88/Desktop/azure-resource-manager-schemas/schemas/2015-08-01/Microsoft.Cache.json'
import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

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
  export function create(name: Expressionable<string>, properties: RedisProperties, location: Expressionable<string>): ResourceDefinition<RedisProperties> {
    return {
      type: 'Microsoft.Cache/Redis',
      apiVersion: '2015-08-01',
      name: name,
      location,
      properties,
    };
  }
}
