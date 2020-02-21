import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface AppServiceEnvironment_properties {
  name?: Expressionable<string>;
  location?: Expressionable<string>;
  vnetName?: Expressionable<string>;
  vnetResourceGroupName?: Expressionable<string>;
  vnetSubnetName?: Expressionable<string>;
  virtualNetwork?: Expressionable<VirtualNetworkProfile>;
  internalLoadBalancingMode?: Expressionable<('None' | 'Web' | 'Publishing')>;
  multiSize?: Expressionable<string>;
  multiRoleCount?: Expressionable<number>;
  workerPools?: Expressionable<WorkerPool[]>;
  ipsslAddressCount?: Expressionable<number>;
  dnsSuffix?: Expressionable<string>;
  networkAccessControlList?: Expressionable<NetworkAccessControlEntry[]>;
  kind?: Expressionable<string>;
  frontEndScaleFactor?: Expressionable<number>;
  apiManagementAccountId?: Expressionable<string>;
  suspended?: Expressionable<boolean>;
  dynamicCacheEnabled?: Expressionable<boolean>;
  clusterSettings?: Expressionable<NameValuePair[]>;
}

export interface NameValuePair {
  name?: Expressionable<string>;
  value?: Expressionable<string>;
}

export interface NetworkAccessControlEntry {
  action?: Expressionable<('Permit' | 'Deny')>;
  description?: Expressionable<string>;
  order?: Expressionable<number>;
  remoteSubnet?: Expressionable<string>;
}

export interface VirtualNetworkProfile {
  id?: Expressionable<string>;
  subnet?: Expressionable<string>;
}

export interface WorkerPool {
  workerSizeId?: Expressionable<number>;
  computeMode?: Expressionable<('Shared' | 'Dedicated' | 'Dynamic')>;
  workerSize?: Expressionable<string>;
  workerCount?: Expressionable<number>;
}

export interface AppServicePlan_properties {
  name?: Expressionable<string>;
  workerTierName?: Expressionable<string>;
  adminSiteName?: Expressionable<string>;
  hostingEnvironmentProfile?: Expressionable<HostingEnvironmentProfile>;
  perSiteScaling?: Expressionable<boolean>;
  reserved?: Expressionable<boolean>;
  targetWorkerCount?: Expressionable<number>;
  targetWorkerSizeId?: Expressionable<number>;
}

export interface Capability {
  name?: Expressionable<string>;
  value?: Expressionable<string>;
  reason?: Expressionable<string>;
}

export interface HostingEnvironmentProfile {
  id?: Expressionable<string>;
}

export interface SkuCapacity {
  minimum?: Expressionable<number>;
  maximum?: Expressionable<number>;
  default?: Expressionable<number>;
  scaleType?: Expressionable<string>;
}

export interface SkuDescription {
  name?: Expressionable<string>;
  tier?: Expressionable<string>;
  size?: Expressionable<string>;
  family?: Expressionable<string>;
  capacity?: Expressionable<number>;
  skuCapacity?: Expressionable<SkuCapacity>;
  locations?: Expressionable<string[]>;
  capabilities?: Expressionable<Capability[]>;
}

export interface VnetGateway_properties {
  vnetName?: Expressionable<string>;
  vpnPackageUri?: Expressionable<string>;
}

export interface VnetRoute_properties {
  name?: Expressionable<string>;
  startAddress?: Expressionable<string>;
  endAddress?: Expressionable<string>;
  routeType?: Expressionable<('DEFAULT' | 'INHERITED' | 'STATIC')>;
}

export namespace serverfarms {
  export interface AdditionalProps {
    sku?: Expressionable<SkuDescription>;
  }
  
  export type ServerfarmsResource = ResourceDefinition<AppServicePlan_properties, AdditionalProps>;
  
  export function create(name: Expressionable<string>, properties: AppServicePlan_properties, sku?: Expressionable<SkuDescription>): ServerfarmsResource {
    return {
      type: 'Microsoft.Web/serverfarms',
      apiVersion: '2016-09-01',
      name: [name],
      properties,
      additional: {
        sku,
      },
    };
  }
}
export namespace serverfarms {
  export namespace virtualNetworkConnections {
    export namespace gateways {
      export type GatewaysResource = ResourceDefinition<VnetGateway_properties, undefined>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: VnetGateway_properties): GatewaysResource {
        return {
          type: 'Microsoft.Web/serverfarms/virtualNetworkConnections/gateways',
          apiVersion: '2016-09-01',
          name: name,
          properties,
        };
      }
    }
  }
}
export namespace serverfarms {
  export namespace virtualNetworkConnections {
    export namespace routes {
      export type RoutesResource = ResourceDefinition<VnetRoute_properties, undefined>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: VnetRoute_properties): RoutesResource {
        return {
          type: 'Microsoft.Web/serverfarms/virtualNetworkConnections/routes',
          apiVersion: '2016-09-01',
          name: name,
          properties,
        };
      }
    }
  }
}
export namespace hostingEnvironments {
  export type HostingEnvironmentsResource = ResourceDefinition<AppServiceEnvironment_properties, undefined>;
  
  export function create(name: Expressionable<string>, properties: AppServiceEnvironment_properties): HostingEnvironmentsResource {
    return {
      type: 'Microsoft.Web/hostingEnvironments',
      apiVersion: '2016-09-01',
      name: [name],
      properties,
    };
  }
}
export namespace hostingEnvironments {
  export namespace workerPools {
    export type WorkerPoolsResource = ResourceDefinition<any, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: any): WorkerPoolsResource {
      return {
        type: 'Microsoft.Web/hostingEnvironments/workerPools',
        apiVersion: '2016-09-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace hostingEnvironments {
  export namespace multiRolePools {
    export type MultiRolePoolsResource = ResourceDefinition<any, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: any): MultiRolePoolsResource {
      return {
        type: 'Microsoft.Web/hostingEnvironments/multiRolePools',
        apiVersion: '2016-09-01',
        name: name,
        properties,
      };
    }
  }
}