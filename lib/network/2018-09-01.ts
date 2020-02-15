// Generated using 'npm run generate /Users/antm88/Desktop/azure-resource-manager-schemas/schemas/2018-09-01/Microsoft.Network.json'
import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

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
  export function create(name: Expressionable<string>, properties: PrivateZoneProperties, location: Expressionable<string>): ResourceDefinition<PrivateZoneProperties> {
    return {
      type: 'Microsoft.Network/privateDnsZones',
      apiVersion: '2018-09-01',
      name: name,
      location,
      properties,
    };
  }
}
export namespace privateDnsZones {
  export namespace virtualNetworkLinks {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: VirtualNetworkLinkProperties, location: Expressionable<string>): ResourceDefinition<VirtualNetworkLinkProperties> {
      return {
        type: 'Microsoft.Network/privateDnsZones/virtualNetworkLinks',
        apiVersion: '2018-09-01',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace privateDnsZones {
  export namespace A {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: RecordSetProperties, location: Expressionable<string>): ResourceDefinition<RecordSetProperties> {
      return {
        type: 'Microsoft.Network/privateDnsZones/A',
        apiVersion: '2018-09-01',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace privateDnsZones {
  export namespace AAAA {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: RecordSetProperties, location: Expressionable<string>): ResourceDefinition<RecordSetProperties> {
      return {
        type: 'Microsoft.Network/privateDnsZones/AAAA',
        apiVersion: '2018-09-01',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace privateDnsZones {
  export namespace CNAME {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: RecordSetProperties, location: Expressionable<string>): ResourceDefinition<RecordSetProperties> {
      return {
        type: 'Microsoft.Network/privateDnsZones/CNAME',
        apiVersion: '2018-09-01',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace privateDnsZones {
  export namespace MX {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: RecordSetProperties, location: Expressionable<string>): ResourceDefinition<RecordSetProperties> {
      return {
        type: 'Microsoft.Network/privateDnsZones/MX',
        apiVersion: '2018-09-01',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace privateDnsZones {
  export namespace PTR {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: RecordSetProperties, location: Expressionable<string>): ResourceDefinition<RecordSetProperties> {
      return {
        type: 'Microsoft.Network/privateDnsZones/PTR',
        apiVersion: '2018-09-01',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace privateDnsZones {
  export namespace SOA {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: RecordSetProperties, location: Expressionable<string>): ResourceDefinition<RecordSetProperties> {
      return {
        type: 'Microsoft.Network/privateDnsZones/SOA',
        apiVersion: '2018-09-01',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace privateDnsZones {
  export namespace SRV {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: RecordSetProperties, location: Expressionable<string>): ResourceDefinition<RecordSetProperties> {
      return {
        type: 'Microsoft.Network/privateDnsZones/SRV',
        apiVersion: '2018-09-01',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace privateDnsZones {
  export namespace TXT {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: RecordSetProperties, location: Expressionable<string>): ResourceDefinition<RecordSetProperties> {
      return {
        type: 'Microsoft.Network/privateDnsZones/TXT',
        apiVersion: '2018-09-01',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
