import { Expressionable, ResourceDefinition } from 'arm-templator';

export interface AccountProperties {
  activeDirectories?: Expressionable<ActiveDirectory[]>;
}

export interface ActiveDirectory {
  activeDirectoryId?: Expressionable<string>;
  dns?: Expressionable<string>;
  domain?: Expressionable<string>;
  organizationalUnit?: Expressionable<string>;
  password?: Expressionable<string>;
  site?: Expressionable<string>;
  smbServerName?: Expressionable<string>;
  status?: Expressionable<string>;
  username?: Expressionable<string>;
}

export interface ExportPolicyRule {
  allowedClients?: Expressionable<string>;
  cifs?: Expressionable<boolean>;
  nfsv3?: Expressionable<boolean>;
  nfsv41?: Expressionable<boolean>;
  ruleIndex?: Expressionable<number>;
  unixReadOnly?: Expressionable<boolean>;
  unixReadWrite?: Expressionable<boolean>;
}

export interface PoolProperties {
  serviceLevel: Expressionable<('Standard' | 'Premium' | 'Ultra')>;
  size: Expressionable<number>;
}

export interface ReplicationObject {
  endpointType?: Expressionable<('src' | 'dst')>;
  remoteVolumeRegion?: Expressionable<string>;
  remoteVolumeResourceId: Expressionable<string>;
  replicationId?: Expressionable<string>;
  replicationSchedule: Expressionable<('_10minutely' | 'hourly' | 'daily' | 'weekly' | 'monthly')>;
}

export interface SnapshotProperties {
  fileSystemId?: Expressionable<string>;
}

export interface VolumeProperties {
  creationToken: Expressionable<string>;
  dataProtection?: Expressionable<VolumePropertiesDataProtection>;
  exportPolicy?: Expressionable<VolumePropertiesExportPolicy>;
  isRestoring?: Expressionable<boolean>;
  mountTargets?: Expressionable<any>;
  protocolTypes?: Expressionable<string[]>;
  serviceLevel?: Expressionable<('Standard' | 'Premium' | 'Ultra')>;
  snapshotId?: Expressionable<string>;
  subnetId: Expressionable<string>;
  usageThreshold: Expressionable<number>;
  volumeType?: Expressionable<string>;
}

export interface VolumePropertiesDataProtection {
  replication?: Expressionable<ReplicationObject>;
}

export interface VolumePropertiesExportPolicy {
  rules?: Expressionable<ExportPolicyRule[]>;
}

export namespace netAppAccounts {
  export interface AdditionalProps {
    tags?: Expressionable<any>;
  }
  
  export type NetAppAccountsResource = ResourceDefinition<AccountProperties, AdditionalProps>;
  
  export function create(name: Expressionable<string>, properties: AccountProperties, location: Expressionable<string>, tags?: Expressionable<any>): NetAppAccountsResource {
    return {
      type: 'Microsoft.NetApp/netAppAccounts',
      apiVersion: '2019-11-01',
      name: [name],
      location,
      properties,
      additional: {
        tags,
      },
    };
  }
}
export namespace netAppAccounts {
  export namespace capacityPools {
    export interface AdditionalProps {
      tags?: Expressionable<any>;
    }
    
    export type CapacityPoolsResource = ResourceDefinition<PoolProperties, AdditionalProps>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: PoolProperties, location: Expressionable<string>, tags?: Expressionable<any>): CapacityPoolsResource {
      return {
        type: 'Microsoft.NetApp/netAppAccounts/capacityPools',
        apiVersion: '2019-11-01',
        name: name,
        location,
        properties,
        additional: {
          tags,
        },
      };
    }
  }
}
export namespace netAppAccounts {
  export namespace capacityPools {
    export namespace volumes {
      export interface AdditionalProps {
        tags?: Expressionable<any>;
      }
      
      export type VolumesResource = ResourceDefinition<VolumeProperties, AdditionalProps>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: VolumeProperties, location: Expressionable<string>, tags?: Expressionable<any>): VolumesResource {
        return {
          type: 'Microsoft.NetApp/netAppAccounts/capacityPools/volumes',
          apiVersion: '2019-11-01',
          name: name,
          location,
          properties,
          additional: {
            tags,
          },
        };
      }
    }
  }
}
export namespace netAppAccounts {
  export namespace capacityPools {
    export namespace volumes {
      export namespace snapshots {
        export type SnapshotsResource = ResourceDefinition<SnapshotProperties, undefined>;
        
        export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: SnapshotProperties, location: Expressionable<string>): SnapshotsResource {
          return {
            type: 'Microsoft.NetApp/netAppAccounts/capacityPools/volumes/snapshots',
            apiVersion: '2019-11-01',
            name: name,
            location,
            properties,
          };
        }
      }
    }
  }
}