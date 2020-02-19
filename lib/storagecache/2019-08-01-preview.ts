import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface CacheProperties {
  cacheSizeGB?: Expressionable<number>;
  provisioningState?: Expressionable<('Succeeded' | 'Failed' | 'Cancelled' | 'Creating' | 'Deleting' | 'Updating')>;
  subnet?: Expressionable<string>;
  upgradeStatus?: Expressionable<CacheUpgradeStatus>;
}

export interface CacheSku {
  name?: Expressionable<string>;
}

export interface CacheUpgradeStatus {
}

export interface ClfsTarget {
  target?: Expressionable<string>;
}

export interface NamespaceJunction {
  namespacePath?: Expressionable<string>;
  nfsExport?: Expressionable<string>;
  targetPath?: Expressionable<string>;
}

export interface Nfs3Target {
  target?: Expressionable<string>;
  usageModel?: Expressionable<string>;
}

export interface StorageTargetProperties {
  clfs?: Expressionable<ClfsTarget>;
  junctions?: Expressionable<NamespaceJunction[]>;
  nfs3?: Expressionable<Nfs3Target>;
  provisioningState?: Expressionable<('Succeeded' | 'Failed' | 'Cancelled' | 'Creating' | 'Deleting' | 'Updating')>;
  targetType?: Expressionable<('nfs3' | 'clfs' | 'unknown')>;
  unknown?: Expressionable<UnknownTarget>;
}

export interface UnknownTarget {
  unknownMap?: Expressionable<any>;
}

export namespace caches {
  interface AdditionalProps {
    sku?: Expressionable<CacheSku>;
  }
  
  export function create(name: Expressionable<string>, properties: CacheProperties, location?: Expressionable<string>, sku?: Expressionable<CacheSku>): ResourceDefinition<CacheProperties> & AdditionalProps {
    return {
      type: 'Microsoft.StorageCache/caches',
      apiVersion: '2019-08-01-preview',
      name: [name],
      location,
      sku,
      properties,
    };
  }
}
export namespace caches {
  export namespace storageTargets {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: StorageTargetProperties): ResourceDefinition<StorageTargetProperties> {
      return {
        type: 'Microsoft.StorageCache/caches/storageTargets',
        apiVersion: '2019-08-01-preview',
        name: name,
        properties,
      };
    }
  }
}