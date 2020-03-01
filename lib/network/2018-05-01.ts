import { Expressionable, ResourceDefinition } from 'arm-templator';

export interface AaaaRecord {
  ipv6Address?: Expressionable<string>;
}

export interface ARecord {
  ipv4Address?: Expressionable<string>;
}

export interface CaaRecord {
  flags?: Expressionable<number>;
  tag?: Expressionable<string>;
  value?: Expressionable<string>;
}

export interface CnameRecord {
  cname?: Expressionable<string>;
}

export interface MxRecord {
  preference?: Expressionable<number>;
  exchange?: Expressionable<string>;
}

export interface NsRecord {
  nsdname?: Expressionable<string>;
}

export interface PtrRecord {
  ptrdname?: Expressionable<string>;
}

export interface RecordSetProperties {
  TTL?: Expressionable<number>;
  targetResource?: Expressionable<SubResource>;
  ARecords?: Expressionable<ARecord[]>;
  AAAARecords?: Expressionable<AaaaRecord[]>;
  MXRecords?: Expressionable<MxRecord[]>;
  NSRecords?: Expressionable<NsRecord[]>;
  PTRRecords?: Expressionable<PtrRecord[]>;
  SRVRecords?: Expressionable<SrvRecord[]>;
  TXTRecords?: Expressionable<TxtRecord[]>;
  CNAMERecord?: Expressionable<CnameRecord>;
  SOARecord?: Expressionable<SoaRecord>;
  caaRecords?: Expressionable<CaaRecord[]>;
}

export interface SoaRecord {
  host?: Expressionable<string>;
  email?: Expressionable<string>;
  serialNumber?: Expressionable<number>;
  refreshTime?: Expressionable<number>;
  retryTime?: Expressionable<number>;
  expireTime?: Expressionable<number>;
  minimumTTL?: Expressionable<number>;
}

export interface SrvRecord {
  priority?: Expressionable<number>;
  weight?: Expressionable<number>;
  port?: Expressionable<number>;
  target?: Expressionable<string>;
}

export interface SubResource {
  id?: Expressionable<string>;
}

export interface TxtRecord {
  value?: Expressionable<string[]>;
}

export interface ZoneProperties {
  zoneType?: Expressionable<('Public' | 'Private')>;
  registrationVirtualNetworks?: Expressionable<SubResource[]>;
  resolutionVirtualNetworks?: Expressionable<SubResource[]>;
}

export namespace dnsZones {
  export type DnsZonesResource = ResourceDefinition<ZoneProperties, undefined>;
  
  export function create(name: Expressionable<string>, properties: ZoneProperties, location: Expressionable<string>): DnsZonesResource {
    return {
      type: 'Microsoft.Network/dnsZones',
      apiVersion: '2018-05-01',
      name: [name],
      location,
      properties,
    };
  }
}
export namespace dnsZones {
  export namespace A {
    export type AResource = ResourceDefinition<RecordSetProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: RecordSetProperties): AResource {
      return {
        type: 'Microsoft.Network/dnsZones/A',
        apiVersion: '2018-05-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace dnsZones {
  export namespace AAAA {
    export type AAAAResource = ResourceDefinition<RecordSetProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: RecordSetProperties): AAAAResource {
      return {
        type: 'Microsoft.Network/dnsZones/AAAA',
        apiVersion: '2018-05-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace dnsZones {
  export namespace CAA {
    export type CAAResource = ResourceDefinition<RecordSetProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: RecordSetProperties): CAAResource {
      return {
        type: 'Microsoft.Network/dnsZones/CAA',
        apiVersion: '2018-05-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace dnsZones {
  export namespace CNAME {
    export type CNAMEResource = ResourceDefinition<RecordSetProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: RecordSetProperties): CNAMEResource {
      return {
        type: 'Microsoft.Network/dnsZones/CNAME',
        apiVersion: '2018-05-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace dnsZones {
  export namespace MX {
    export type MXResource = ResourceDefinition<RecordSetProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: RecordSetProperties): MXResource {
      return {
        type: 'Microsoft.Network/dnsZones/MX',
        apiVersion: '2018-05-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace dnsZones {
  export namespace NS {
    export type NSResource = ResourceDefinition<RecordSetProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: RecordSetProperties): NSResource {
      return {
        type: 'Microsoft.Network/dnsZones/NS',
        apiVersion: '2018-05-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace dnsZones {
  export namespace PTR {
    export type PTRResource = ResourceDefinition<RecordSetProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: RecordSetProperties): PTRResource {
      return {
        type: 'Microsoft.Network/dnsZones/PTR',
        apiVersion: '2018-05-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace dnsZones {
  export namespace SOA {
    export type SOAResource = ResourceDefinition<RecordSetProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: RecordSetProperties): SOAResource {
      return {
        type: 'Microsoft.Network/dnsZones/SOA',
        apiVersion: '2018-05-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace dnsZones {
  export namespace SRV {
    export type SRVResource = ResourceDefinition<RecordSetProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: RecordSetProperties): SRVResource {
      return {
        type: 'Microsoft.Network/dnsZones/SRV',
        apiVersion: '2018-05-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace dnsZones {
  export namespace TXT {
    export type TXTResource = ResourceDefinition<RecordSetProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: RecordSetProperties): TXTResource {
      return {
        type: 'Microsoft.Network/dnsZones/TXT',
        apiVersion: '2018-05-01',
        name: name,
        properties,
      };
    }
  }
}