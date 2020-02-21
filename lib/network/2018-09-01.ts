import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface SubResource {
  id?: Expressionable<string>;
}

export interface ARecord {
  ipv4Address?: Expressionable<string>;
}

export interface AaaaRecord {
  ipv6Address?: Expressionable<string>;
}

export interface CnameRecord {
  cname?: Expressionable<string>;
}

export interface MxRecord {
  preference?: Expressionable<number>;
  exchange?: Expressionable<string>;
}

export interface PtrRecord {
  ptrdname?: Expressionable<string>;
}

export interface SoaRecord {
  host?: Expressionable<string>;
  email?: Expressionable<string>;
  serialNumber?: Expressionable<number>;
  refreshTime?: Expressionable<number>;
  retryTime?: Expressionable<number>;
  expireTime?: Expressionable<number>;
  minimumTtl?: Expressionable<number>;
}

export interface SrvRecord {
  priority?: Expressionable<number>;
  weight?: Expressionable<number>;
  port?: Expressionable<number>;
  target?: Expressionable<string>;
}

export interface TxtRecord {
  value?: Expressionable<string[]>;
}

export interface RecordSetProperties {
  ttl?: Expressionable<number>;
  aRecords?: Expressionable<ARecord[]>;
  aaaaRecords?: Expressionable<AaaaRecord[]>;
  cnameRecord?: Expressionable<CnameRecord>;
  mxRecords?: Expressionable<MxRecord[]>;
  ptrRecords?: Expressionable<PtrRecord[]>;
  soaRecord?: Expressionable<SoaRecord>;
  srvRecords?: Expressionable<SrvRecord[]>;
  txtRecords?: Expressionable<TxtRecord[]>;
}

export interface VirtualNetworkLinkProperties {
  virtualNetwork?: Expressionable<SubResource>;
  registrationEnabled?: Expressionable<boolean>;
}

export interface PrivateZoneProperties {
}

export namespace privateDnsZones {
  export type PrivateDnsZonesResource = ResourceDefinition<PrivateZoneProperties, undefined>;
  
  export function create(name: Expressionable<string>, properties: PrivateZoneProperties, location: Expressionable<string>): PrivateDnsZonesResource {
    return {
      type: 'Microsoft.Network/privateDnsZones',
      apiVersion: '2018-09-01',
      name: [name],
      location,
      properties,
    };
  }
}
export namespace privateDnsZones {
  export namespace virtualNetworkLinks {
    export type VirtualNetworkLinksResource = ResourceDefinition<VirtualNetworkLinkProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: VirtualNetworkLinkProperties): VirtualNetworkLinksResource {
      return {
        type: 'Microsoft.Network/privateDnsZones/virtualNetworkLinks',
        apiVersion: '2018-09-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace privateDnsZones {
  export namespace A {
    export type AResource = ResourceDefinition<RecordSetProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: RecordSetProperties): AResource {
      return {
        type: 'Microsoft.Network/privateDnsZones/A',
        apiVersion: '2018-09-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace privateDnsZones {
  export namespace AAAA {
    export type AAAAResource = ResourceDefinition<RecordSetProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: RecordSetProperties): AAAAResource {
      return {
        type: 'Microsoft.Network/privateDnsZones/AAAA',
        apiVersion: '2018-09-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace privateDnsZones {
  export namespace CNAME {
    export type CNAMEResource = ResourceDefinition<RecordSetProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: RecordSetProperties): CNAMEResource {
      return {
        type: 'Microsoft.Network/privateDnsZones/CNAME',
        apiVersion: '2018-09-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace privateDnsZones {
  export namespace MX {
    export type MXResource = ResourceDefinition<RecordSetProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: RecordSetProperties): MXResource {
      return {
        type: 'Microsoft.Network/privateDnsZones/MX',
        apiVersion: '2018-09-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace privateDnsZones {
  export namespace PTR {
    export type PTRResource = ResourceDefinition<RecordSetProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: RecordSetProperties): PTRResource {
      return {
        type: 'Microsoft.Network/privateDnsZones/PTR',
        apiVersion: '2018-09-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace privateDnsZones {
  export namespace SOA {
    export type SOAResource = ResourceDefinition<RecordSetProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: RecordSetProperties): SOAResource {
      return {
        type: 'Microsoft.Network/privateDnsZones/SOA',
        apiVersion: '2018-09-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace privateDnsZones {
  export namespace SRV {
    export type SRVResource = ResourceDefinition<RecordSetProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: RecordSetProperties): SRVResource {
      return {
        type: 'Microsoft.Network/privateDnsZones/SRV',
        apiVersion: '2018-09-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace privateDnsZones {
  export namespace TXT {
    export type TXTResource = ResourceDefinition<RecordSetProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: RecordSetProperties): TXTResource {
      return {
        type: 'Microsoft.Network/privateDnsZones/TXT',
        apiVersion: '2018-09-01',
        name: name,
        properties,
      };
    }
  }
}