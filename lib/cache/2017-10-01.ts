import { Expressionable, ResourceDefinition } from 'arm-templator';

export interface RedisCreateProperties {
  enableNonSslPort?: Expressionable<boolean>;
  redisConfiguration?: Expressionable<any>;
  shardCount?: Expressionable<number>;
  sku: Expressionable<Sku>;
  staticIP?: Expressionable<string>;
  subnetId?: Expressionable<string>;
  tenantSettings?: Expressionable<any>;
}

export interface RedisFirewallRuleProperties {
  endIP: Expressionable<string>;
  startIP: Expressionable<string>;
}

export interface RedisLinkedServerCreateProperties {
  linkedRedisCacheId: Expressionable<string>;
  linkedRedisCacheLocation: Expressionable<string>;
  serverRole: Expressionable<('Primary' | 'Secondary')>;
}

export interface ScheduleEntries {
  scheduleEntries: Expressionable<ScheduleEntry[]>;
}

export interface ScheduleEntry {
  dayOfWeek: Expressionable<('Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday' | 'Everyday' | 'Weekend')>;
  maintenanceWindow?: Expressionable<string>;
  startHourUtc: Expressionable<number>;
}

export interface Sku {
  capacity: Expressionable<number>;
  family: Expressionable<('C' | 'P')>;
  name: Expressionable<('Basic' | 'Standard' | 'Premium')>;
}

export namespace Redis {
  export interface AdditionalProps {
    zones?: Expressionable<string[]>;
    tags?: Expressionable<any>;
  }
  
  export type RedisResource = ResourceDefinition<RedisCreateProperties, AdditionalProps>;
  
  export function create(name: Expressionable<string>, properties: RedisCreateProperties, location: Expressionable<string>, zones?: Expressionable<string[]>, tags?: Expressionable<any>): RedisResource {
    return {
      type: 'Microsoft.Cache/Redis',
      apiVersion: '2017-10-01',
      name: [name],
      location,
      properties,
      additional: {
        zones,
        tags,
      },
    };
  }
}
export namespace Redis {
  export namespace firewallRules {
    export type FirewallRulesResource = ResourceDefinition<RedisFirewallRuleProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: RedisFirewallRuleProperties): FirewallRulesResource {
      return {
        type: 'Microsoft.Cache/Redis/firewallRules',
        apiVersion: '2017-10-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace Redis {
  export namespace linkedServers {
    export type LinkedServersResource = ResourceDefinition<RedisLinkedServerCreateProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: RedisLinkedServerCreateProperties): LinkedServersResource {
      return {
        type: 'Microsoft.Cache/Redis/linkedServers',
        apiVersion: '2017-10-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace Redis {
  export namespace patchSchedules {
    export type PatchSchedulesResource = ResourceDefinition<ScheduleEntries, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: ScheduleEntries): PatchSchedulesResource {
      return {
        type: 'Microsoft.Cache/Redis/patchSchedules',
        apiVersion: '2017-10-01',
        name: name,
        properties,
      };
    }
  }
}