// Generated using 'npm run generate /Users/antm88/Desktop/azure-resource-manager-schemas/schemas/2018-05-01/Microsoft.Network.json'
import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

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
  export function create(name: Expressionable<string>, properties: ZoneProperties, location: Expressionable<string>): ResourceDefinition<ZoneProperties> {
    return {
      type: 'Microsoft.Network/dnsZones',
      apiVersion: '2018-05-01',
      name: name,
      location,
      properties,
    };
  }
}
export namespace dnsZones {
  export namespace A {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: RecordSetProperties, location: Expressionable<string>): ResourceDefinition<RecordSetProperties> {
      return {
        type: 'Microsoft.Network/dnsZones/A',
        apiVersion: '2018-05-01',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace dnsZones {
  export namespace AAAA {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: RecordSetProperties, location: Expressionable<string>): ResourceDefinition<RecordSetProperties> {
      return {
        type: 'Microsoft.Network/dnsZones/AAAA',
        apiVersion: '2018-05-01',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace dnsZones {
  export namespace CAA {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: RecordSetProperties, location: Expressionable<string>): ResourceDefinition<RecordSetProperties> {
      return {
        type: 'Microsoft.Network/dnsZones/CAA',
        apiVersion: '2018-05-01',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace dnsZones {
  export namespace CNAME {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: RecordSetProperties, location: Expressionable<string>): ResourceDefinition<RecordSetProperties> {
      return {
        type: 'Microsoft.Network/dnsZones/CNAME',
        apiVersion: '2018-05-01',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace dnsZones {
  export namespace MX {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: RecordSetProperties, location: Expressionable<string>): ResourceDefinition<RecordSetProperties> {
      return {
        type: 'Microsoft.Network/dnsZones/MX',
        apiVersion: '2018-05-01',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace dnsZones {
  export namespace NS {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: RecordSetProperties, location: Expressionable<string>): ResourceDefinition<RecordSetProperties> {
      return {
        type: 'Microsoft.Network/dnsZones/NS',
        apiVersion: '2018-05-01',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace dnsZones {
  export namespace PTR {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: RecordSetProperties, location: Expressionable<string>): ResourceDefinition<RecordSetProperties> {
      return {
        type: 'Microsoft.Network/dnsZones/PTR',
        apiVersion: '2018-05-01',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace dnsZones {
  export namespace SOA {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: RecordSetProperties, location: Expressionable<string>): ResourceDefinition<RecordSetProperties> {
      return {
        type: 'Microsoft.Network/dnsZones/SOA',
        apiVersion: '2018-05-01',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace dnsZones {
  export namespace SRV {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: RecordSetProperties, location: Expressionable<string>): ResourceDefinition<RecordSetProperties> {
      return {
        type: 'Microsoft.Network/dnsZones/SRV',
        apiVersion: '2018-05-01',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace dnsZones {
  export namespace TXT {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: RecordSetProperties, location: Expressionable<string>): ResourceDefinition<RecordSetProperties> {
      return {
        type: 'Microsoft.Network/dnsZones/TXT',
        apiVersion: '2018-05-01',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
