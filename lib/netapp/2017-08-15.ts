// Generated using 'npm run generate /Users/antm88/Desktop/azure-resource-manager-schemas/schemas/2017-08-15/Microsoft.NetApp.json'
import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface AccountProperties {
  activeDirectories?: Expressionable<ActiveDirectory[]>;
}

export interface ActiveDirectory {
  activeDirectoryId?: Expressionable<string>;
  dNS?: Expressionable<string>;
  domain?: Expressionable<string>;
  organizationalUnit?: Expressionable<string>;
  password?: Expressionable<string>;
  sMBServerName?: Expressionable<string>;
  status?: Expressionable<string>;
  username?: Expressionable<string>;
}

export interface ExportPolicyRule {
  allowedClients?: Expressionable<string>;
  cifs?: Expressionable<boolean>;
  nfsv3?: Expressionable<boolean>;
  nfsv4?: Expressionable<boolean>;
  ruleIndex?: Expressionable<number>;
  unixReadOnly?: Expressionable<boolean>;
  unixReadWrite?: Expressionable<boolean>;
}

export interface PoolProperties {
  serviceLevel?: Expressionable<('Standard' | 'Premium' | 'Ultra')>;
  size?: Expressionable<number>;
}

export interface SnapshotProperties {
  fileSystemId: Expressionable<string>;
}

export interface VolumeProperties {
  creationToken: Expressionable<string>;
  exportPolicy?: Expressionable<VolumePropertiesExportPolicy>;
  serviceLevel: Expressionable<('Standard' | 'Premium' | 'Ultra')>;
  subnetId?: Expressionable<string>;
  usageThreshold?: Expressionable<number>;
}

export interface VolumePropertiesExportPolicy {
  rules?: Expressionable<ExportPolicyRule[]>;
}

export namespace netAppAccounts {
  export function create(name: Expressionable<string>, properties: AccountProperties, location: Expressionable<string>): ResourceDefinition<AccountProperties> {
    return {
      type: 'Microsoft.NetApp/netAppAccounts',
      apiVersion: '2017-08-15',
      name: name,
      location,
      properties,
    };
  }
}
export namespace netAppAccounts {
  export namespace capacityPools {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: PoolProperties, location: Expressionable<string>): ResourceDefinition<PoolProperties> {
      return {
        type: 'Microsoft.NetApp/netAppAccounts/capacityPools',
        apiVersion: '2017-08-15',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace netAppAccounts {
  export namespace capacityPools {
    export namespace volumes {
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: VolumeProperties, location: Expressionable<string>): ResourceDefinition<VolumeProperties> {
        return {
          type: 'Microsoft.NetApp/netAppAccounts/capacityPools/volumes',
          apiVersion: '2017-08-15',
          name: concatResourceName(...name),
          location,
          properties,
        };
      }
    }
  }
}
export namespace netAppAccounts {
  export namespace capacityPools {
    export namespace volumes {
      export namespace snapshots {
        export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: SnapshotProperties, location: Expressionable<string>): ResourceDefinition<SnapshotProperties> {
          return {
            type: 'Microsoft.NetApp/netAppAccounts/capacityPools/volumes/snapshots',
            apiVersion: '2017-08-15',
            name: concatResourceName(...name),
            location,
            properties,
          };
        }
      }
    }
  }
}
