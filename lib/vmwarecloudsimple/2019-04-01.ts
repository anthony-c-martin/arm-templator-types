import { Expressionable, ResourceDefinition } from 'arm-templator';

export interface DedicatedCloudNodeProperties {
  availabilityZoneId: Expressionable<string>;
  nodesCount: Expressionable<number>;
  placementGroupId: Expressionable<string>;
  purchaseId: Expressionable<string>;
  skuDescription?: Expressionable<SkuDescription>;
}

export interface DedicatedCloudServiceProperties {
  gatewaySubnet: Expressionable<string>;
}

export interface GuestOSCustomization {
  dnsServers?: Expressionable<string[]>;
  hostName?: Expressionable<string>;
  password?: Expressionable<string>;
  policyId?: Expressionable<string>;
  username?: Expressionable<string>;
}

export interface GuestOSNICCustomization {
  allocation?: Expressionable<('static' | 'dynamic')>;
  dnsServers?: Expressionable<string[]>;
  gateway?: Expressionable<string[]>;
  ipAddress?: Expressionable<string>;
  mask?: Expressionable<string>;
  primaryWinsServer?: Expressionable<string>;
  secondaryWinsServer?: Expressionable<string>;
}

export interface ResourcePool {
  id: Expressionable<string>;
  properties?: Expressionable<ResourcePoolProperties>;
}

export interface ResourcePoolProperties {
}

export interface Sku {
  capacity?: Expressionable<string>;
  description?: Expressionable<string>;
  family?: Expressionable<string>;
  name: Expressionable<string>;
  tier?: Expressionable<string>;
}

export interface SkuDescription {
  id: Expressionable<string>;
  name: Expressionable<string>;
}

export interface VirtualDisk {
  controllerId: Expressionable<string>;
  independenceMode: Expressionable<('persistent' | 'independent_persistent' | 'independent_nonpersistent')>;
  totalSize: Expressionable<number>;
  virtualDiskId?: Expressionable<string>;
}

export interface VirtualMachineProperties {
  amountOfRam: Expressionable<number>;
  customization?: Expressionable<GuestOSCustomization>;
  disks?: Expressionable<VirtualDisk[]>;
  exposeToGuestVM?: Expressionable<boolean>;
  nics?: Expressionable<VirtualNic[]>;
  numberOfCores: Expressionable<number>;
  password?: Expressionable<string>;
  privateCloudId: Expressionable<string>;
  resourcePool?: Expressionable<ResourcePool>;
  templateId?: Expressionable<string>;
  username?: Expressionable<string>;
  vSphereNetworks?: Expressionable<string[]>;
}

export interface VirtualNetwork {
  id: Expressionable<string>;
  properties?: Expressionable<VirtualNetworkProperties>;
}

export interface VirtualNetworkProperties {
}

export interface VirtualNic {
  customization?: Expressionable<GuestOSNICCustomization>;
  ipAddresses?: Expressionable<string[]>;
  macAddress?: Expressionable<string>;
  network: Expressionable<VirtualNetwork>;
  nicType: Expressionable<('E1000' | 'E1000E' | 'PCNET32' | 'VMXNET' | 'VMXNET2' | 'VMXNET3')>;
  powerOnBoot?: Expressionable<boolean>;
  virtualNicId?: Expressionable<string>;
}

export namespace dedicatedCloudNodes {
  export interface AdditionalProps {
    sku?: Expressionable<Sku>;
    tags?: Expressionable<any>;
  }
  
  export type DedicatedCloudNodesResource = ResourceDefinition<DedicatedCloudNodeProperties, AdditionalProps>;
  
  export function create(name: Expressionable<string>, properties: DedicatedCloudNodeProperties, location: Expressionable<string>, sku?: Expressionable<Sku>, tags?: Expressionable<any>): DedicatedCloudNodesResource {
    return {
      type: 'Microsoft.VMwareCloudSimple/dedicatedCloudNodes',
      apiVersion: '2019-04-01',
      name: [name],
      location,
      properties,
      additional: {
        sku,
        tags,
      },
    };
  }
}
export namespace dedicatedCloudServices {
  export interface AdditionalProps {
    tags?: Expressionable<any>;
  }
  
  export type DedicatedCloudServicesResource = ResourceDefinition<DedicatedCloudServiceProperties, AdditionalProps>;
  
  export function create(name: Expressionable<string>, properties: DedicatedCloudServiceProperties, location: Expressionable<string>, tags?: Expressionable<any>): DedicatedCloudServicesResource {
    return {
      type: 'Microsoft.VMwareCloudSimple/dedicatedCloudServices',
      apiVersion: '2019-04-01',
      name: [name],
      location,
      properties,
      additional: {
        tags,
      },
    };
  }
}
export namespace virtualMachines {
  export interface AdditionalProps {
    tags?: Expressionable<any>;
  }
  
  export type VirtualMachinesResource = ResourceDefinition<VirtualMachineProperties, AdditionalProps>;
  
  export function create(name: Expressionable<string>, properties: VirtualMachineProperties, location: Expressionable<string>, tags?: Expressionable<any>): VirtualMachinesResource {
    return {
      type: 'Microsoft.VMwareCloudSimple/virtualMachines',
      apiVersion: '2019-04-01',
      name: [name],
      location,
      properties,
      additional: {
        tags,
      },
    };
  }
}