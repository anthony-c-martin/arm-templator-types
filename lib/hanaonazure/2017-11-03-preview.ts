import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface Disk {
  diskSizeGB?: Expressionable<number>;
  name?: Expressionable<string>;
}

export interface HanaInstanceProperties {
  hardwareProfile?: Expressionable<HardwareProfile>;
  networkProfile?: Expressionable<NetworkProfile>;
  osProfile?: Expressionable<OSProfile>;
  partnerNodeId?: Expressionable<string>;
  storageProfile?: Expressionable<StorageProfile>;
}

export interface HardwareProfile {
}

export interface IpAddress {
  ipAddress?: Expressionable<string>;
}

export interface NetworkProfile {
  networkInterfaces?: Expressionable<IpAddress[]>;
}

export interface OSProfile {
  computerName?: Expressionable<string>;
  sshPublicKey?: Expressionable<string>;
}

export interface SapMonitorProperties {
  enableCustomerAnalytics?: Expressionable<boolean>;
  hanaDbCredentialsMsiId?: Expressionable<string>;
  hanaDbName?: Expressionable<string>;
  hanaDbPassword?: Expressionable<string>;
  hanaDbPasswordKeyVaultUrl?: Expressionable<string>;
  hanaDbSqlPort?: Expressionable<number>;
  hanaDbUsername?: Expressionable<string>;
  hanaHostname?: Expressionable<string>;
  hanaSubnet?: Expressionable<string>;
  keyVaultId?: Expressionable<string>;
  logAnalyticsWorkspaceArmId?: Expressionable<string>;
  logAnalyticsWorkspaceId?: Expressionable<string>;
  logAnalyticsWorkspaceSharedKey?: Expressionable<string>;
}

export interface StorageProfile {
  osDisks?: Expressionable<Disk[]>;
}

export namespace hanaInstances {
  export type HanaInstancesResource = ResourceDefinition<HanaInstanceProperties>;
  
  export function create(name: Expressionable<string>, properties: HanaInstanceProperties, location?: Expressionable<string>): HanaInstancesResource {
    return {
      type: 'Microsoft.HanaOnAzure/hanaInstances',
      apiVersion: '2017-11-03-preview',
      name: [name],
      location,
      properties,
    };
  }
}
export namespace sapMonitors {
  export type SapMonitorsResource = ResourceDefinition<SapMonitorProperties>;
  
  export function create(name: Expressionable<string>, properties: SapMonitorProperties, location?: Expressionable<string>): SapMonitorsResource {
    return {
      type: 'Microsoft.HanaOnAzure/sapMonitors',
      apiVersion: '2017-11-03-preview',
      name: [name],
      location,
      properties,
    };
  }
}