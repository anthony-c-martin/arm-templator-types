import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface RedisCreateProperties {
  enableNonSslPort?: Expressionable<boolean>;
  minimumTlsVersion?: Expressionable<('1.0' | '1.1' | '1.2')>;
  redisConfiguration?: Expressionable<any>;
  replicasPerMaster?: Expressionable<number>;
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
  interface AdditionalProps {
    zones?: Expressionable<string[]>;
  }
  
  export function create(name: Expressionable<string>, properties: RedisCreateProperties, location: Expressionable<string>, zones?: Expressionable<string[]>): ResourceDefinition<RedisCreateProperties> & AdditionalProps {
    return {
      type: 'Microsoft.Cache/Redis',
      apiVersion: '2019-07-01',
      name: [name],
      location,
      zones,
      properties,
    };
  }
}
export namespace Redis {
  export namespace firewallRules {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: RedisFirewallRuleProperties): ResourceDefinition<RedisFirewallRuleProperties> {
      return {
        type: 'Microsoft.Cache/Redis/firewallRules',
        apiVersion: '2019-07-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace Redis {
  export namespace linkedServers {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: RedisLinkedServerCreateProperties): ResourceDefinition<RedisLinkedServerCreateProperties> {
      return {
        type: 'Microsoft.Cache/Redis/linkedServers',
        apiVersion: '2019-07-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace Redis {
  export namespace patchSchedules {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: ScheduleEntries): ResourceDefinition<ScheduleEntries> {
      return {
        type: 'Microsoft.Cache/Redis/patchSchedules',
        apiVersion: '2019-07-01',
        name: name,
        properties,
      };
    }
  }
}