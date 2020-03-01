import { Expressionable, ResourceDefinition } from 'arm-templator';

export interface AaaaRecord {
  ipv6Address?: Expressionable<string>;
}

export interface ARecord {
  ipv4Address?: Expressionable<string>;
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
  ARecords?: Expressionable<ARecord[]>;
  AAAARecords?: Expressionable<AaaaRecord[]>;
  MXRecords?: Expressionable<MxRecord[]>;
  NSRecords?: Expressionable<NsRecord[]>;
  PTRRecords?: Expressionable<PtrRecord[]>;
  SRVRecords?: Expressionable<SrvRecord[]>;
  TXTRecords?: Expressionable<TxtRecord[]>;
  CNAMERecord?: Expressionable<CnameRecord>;
  SOARecord?: Expressionable<SoaRecord>;
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

export interface TxtRecord {
  value?: Expressionable<string[]>;
}

export interface ZoneProperties {
  maxNumberOfRecordSets?: Expressionable<number>;
  numberOfRecordSets?: Expressionable<number>;
}

export namespace dnszones {
  export type DnszonesResource = ResourceDefinition<ZoneProperties, undefined>;
  
  export function create(name: Expressionable<string>, properties: ZoneProperties): DnszonesResource {
    return {
      type: 'Microsoft.Network/dnszones',
      apiVersion: '2015-05-04-preview',
      name: [name],
      properties,
    };
  }
}
export namespace dnszones {
  export namespace A {
    export type AResource = ResourceDefinition<RecordSetProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: RecordSetProperties): AResource {
      return {
        type: 'Microsoft.Network/dnszones/A',
        apiVersion: '2015-05-04-preview',
        name: name,
        properties,
      };
    }
  }
}
export namespace dnszones {
  export namespace AAAA {
    export type AAAAResource = ResourceDefinition<RecordSetProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: RecordSetProperties): AAAAResource {
      return {
        type: 'Microsoft.Network/dnszones/AAAA',
        apiVersion: '2015-05-04-preview',
        name: name,
        properties,
      };
    }
  }
}
export namespace dnszones {
  export namespace CNAME {
    export type CNAMEResource = ResourceDefinition<RecordSetProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: RecordSetProperties): CNAMEResource {
      return {
        type: 'Microsoft.Network/dnszones/CNAME',
        apiVersion: '2015-05-04-preview',
        name: name,
        properties,
      };
    }
  }
}
export namespace dnszones {
  export namespace MX {
    export type MXResource = ResourceDefinition<RecordSetProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: RecordSetProperties): MXResource {
      return {
        type: 'Microsoft.Network/dnszones/MX',
        apiVersion: '2015-05-04-preview',
        name: name,
        properties,
      };
    }
  }
}
export namespace dnszones {
  export namespace NS {
    export type NSResource = ResourceDefinition<RecordSetProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: RecordSetProperties): NSResource {
      return {
        type: 'Microsoft.Network/dnszones/NS',
        apiVersion: '2015-05-04-preview',
        name: name,
        properties,
      };
    }
  }
}
export namespace dnszones {
  export namespace PTR {
    export type PTRResource = ResourceDefinition<RecordSetProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: RecordSetProperties): PTRResource {
      return {
        type: 'Microsoft.Network/dnszones/PTR',
        apiVersion: '2015-05-04-preview',
        name: name,
        properties,
      };
    }
  }
}
export namespace dnszones {
  export namespace SOA {
    export type SOAResource = ResourceDefinition<RecordSetProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: RecordSetProperties): SOAResource {
      return {
        type: 'Microsoft.Network/dnszones/SOA',
        apiVersion: '2015-05-04-preview',
        name: name,
        properties,
      };
    }
  }
}
export namespace dnszones {
  export namespace SRV {
    export type SRVResource = ResourceDefinition<RecordSetProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: RecordSetProperties): SRVResource {
      return {
        type: 'Microsoft.Network/dnszones/SRV',
        apiVersion: '2015-05-04-preview',
        name: name,
        properties,
      };
    }
  }
}
export namespace dnszones {
  export namespace TXT {
    export type TXTResource = ResourceDefinition<RecordSetProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: RecordSetProperties): TXTResource {
      return {
        type: 'Microsoft.Network/dnszones/TXT',
        apiVersion: '2015-05-04-preview',
        name: name,
        properties,
      };
    }
  }
}