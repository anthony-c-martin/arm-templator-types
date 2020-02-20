import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

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
  export interface AddedResourceProps {
    tags?: Expressionable<any>;
  }
  
  export type RedisResource = ResourceDefinition<RedisCreateProperties> & AddedResourceProps;
  
  export function create(name: Expressionable<string>, properties: RedisCreateProperties, location: Expressionable<string>, tags?: Expressionable<any>): RedisResource {
    return {
      type: 'Microsoft.Cache/Redis',
      apiVersion: '2016-04-01',
      name: [name],
      location,
      tags,
      properties,
    };
  }
}
export namespace Redis {
  export namespace firewallRules {
    export type FirewallRulesResource = ResourceDefinition<RedisFirewallRuleProperties>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: RedisFirewallRuleProperties): FirewallRulesResource {
      return {
        type: 'Microsoft.Cache/Redis/firewallRules',
        apiVersion: '2016-04-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace Redis {
  export namespace patchSchedules {
    export type PatchSchedulesResource = ResourceDefinition<ScheduleEntries>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: ScheduleEntries): PatchSchedulesResource {
      return {
        type: 'Microsoft.Cache/Redis/patchSchedules',
        apiVersion: '2016-04-01',
        name: name,
        properties,
      };
    }
  }
}