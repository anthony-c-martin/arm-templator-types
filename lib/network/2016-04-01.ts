// Generated using 'npm run generate /Users/antm88/Desktop/azure-resource-manager-schemas/schemas/2016-04-01/Microsoft.Network.json'
import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

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
  export function create(name: Expressionable<string>, properties: ZoneProperties, location: Expressionable<string>): ResourceDefinition<ZoneProperties> {
    return {
      type: 'Microsoft.Network/dnszones',
      apiVersion: '2016-04-01',
      name: name,
      location,
      properties,
    };
  }
}
export namespace dnszones {
  export namespace A {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: RecordSetProperties, location: Expressionable<string>): ResourceDefinition<RecordSetProperties> {
      return {
        type: 'Microsoft.Network/dnszones/A',
        apiVersion: '2016-04-01',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace dnszones {
  export namespace AAAA {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: RecordSetProperties, location: Expressionable<string>): ResourceDefinition<RecordSetProperties> {
      return {
        type: 'Microsoft.Network/dnszones/AAAA',
        apiVersion: '2016-04-01',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace dnszones {
  export namespace CNAME {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: RecordSetProperties, location: Expressionable<string>): ResourceDefinition<RecordSetProperties> {
      return {
        type: 'Microsoft.Network/dnszones/CNAME',
        apiVersion: '2016-04-01',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace dnszones {
  export namespace MX {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: RecordSetProperties, location: Expressionable<string>): ResourceDefinition<RecordSetProperties> {
      return {
        type: 'Microsoft.Network/dnszones/MX',
        apiVersion: '2016-04-01',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace dnszones {
  export namespace NS {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: RecordSetProperties, location: Expressionable<string>): ResourceDefinition<RecordSetProperties> {
      return {
        type: 'Microsoft.Network/dnszones/NS',
        apiVersion: '2016-04-01',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace dnszones {
  export namespace PTR {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: RecordSetProperties, location: Expressionable<string>): ResourceDefinition<RecordSetProperties> {
      return {
        type: 'Microsoft.Network/dnszones/PTR',
        apiVersion: '2016-04-01',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace dnszones {
  export namespace SOA {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: RecordSetProperties, location: Expressionable<string>): ResourceDefinition<RecordSetProperties> {
      return {
        type: 'Microsoft.Network/dnszones/SOA',
        apiVersion: '2016-04-01',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace dnszones {
  export namespace SRV {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: RecordSetProperties, location: Expressionable<string>): ResourceDefinition<RecordSetProperties> {
      return {
        type: 'Microsoft.Network/dnszones/SRV',
        apiVersion: '2016-04-01',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace dnszones {
  export namespace TXT {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: RecordSetProperties, location: Expressionable<string>): ResourceDefinition<RecordSetProperties> {
      return {
        type: 'Microsoft.Network/dnszones/TXT',
        apiVersion: '2016-04-01',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
