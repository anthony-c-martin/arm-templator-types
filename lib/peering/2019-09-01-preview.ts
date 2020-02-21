import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface BgpSession {
  maxPrefixesAdvertisedV4?: Expressionable<number>;
  maxPrefixesAdvertisedV6?: Expressionable<number>;
  md5AuthenticationKey?: Expressionable<string>;
  peerSessionIPv4Address?: Expressionable<string>;
  peerSessionIPv6Address?: Expressionable<string>;
  sessionPrefixV4?: Expressionable<string>;
  sessionPrefixV6?: Expressionable<string>;
}

export interface ContactInfo {
  emails?: Expressionable<string[]>;
  phone?: Expressionable<string[]>;
}

export interface DirectConnection {
  bandwidthInMbps?: Expressionable<number>;
  bgpSession?: Expressionable<BgpSession>;
  connectionIdentifier?: Expressionable<string>;
  peeringDBFacilityId?: Expressionable<number>;
  sessionAddressProvider?: Expressionable<('Microsoft' | 'Peer')>;
  useForPeeringService?: Expressionable<boolean>;
}

export interface ExchangeConnection {
  bgpSession?: Expressionable<BgpSession>;
  connectionIdentifier?: Expressionable<string>;
  peeringDBFacilityId?: Expressionable<number>;
}

export interface PeerAsnProperties {
  peerAsn?: Expressionable<number>;
  peerContactInfo?: Expressionable<ContactInfo>;
  peerName?: Expressionable<string>;
  validationState?: Expressionable<('None' | 'Pending' | 'Approved' | 'Failed')>;
}

export interface PeeringProperties {
  direct?: Expressionable<PeeringPropertiesDirect>;
  exchange?: Expressionable<PeeringPropertiesExchange>;
  peeringLocation?: Expressionable<string>;
}

export interface PeeringPropertiesDirect {
  connections?: Expressionable<DirectConnection[]>;
  directPeeringType?: Expressionable<('Edge' | 'Transit' | 'Cdn' | 'Internal')>;
  peerAsn?: Expressionable<SubResource>;
}

export interface PeeringPropertiesExchange {
  connections?: Expressionable<ExchangeConnection[]>;
  peerAsn?: Expressionable<SubResource>;
}

export interface PeeringServicePrefixProperties {
  prefix?: Expressionable<string>;
}

export interface PeeringServiceProperties {
  peeringServiceLocation?: Expressionable<string>;
  peeringServiceProvider?: Expressionable<string>;
}

export interface PeeringSku {
  family?: Expressionable<('Direct' | 'Exchange')>;
  name?: Expressionable<('Basic_Exchange_Free' | 'Basic_Direct_Free' | 'Premium_Exchange_Metered' | 'Premium_Direct_Free' | 'Premium_Direct_Metered' | 'Premium_Direct_Unlimited')>;
  size?: Expressionable<('Free' | 'Metered' | 'Unlimited')>;
  tier?: Expressionable<('Basic' | 'Premium')>;
}

export interface SubResource {
  id?: Expressionable<string>;
}

export namespace peerings {
  export interface AdditionalProps {
    sku: Expressionable<PeeringSku>;
    kind: Expressionable<('Direct' | 'Exchange')>;
    tags?: Expressionable<any>;
  }
  
  export type PeeringsResource = ResourceDefinition<PeeringProperties, AdditionalProps>;
  
  export function create(name: Expressionable<string>, properties: PeeringProperties, location: Expressionable<string>, sku: Expressionable<PeeringSku>, kind: Expressionable<('Direct' | 'Exchange')>, tags?: Expressionable<any>): PeeringsResource {
    return {
      type: 'Microsoft.Peering/peerings',
      apiVersion: '2019-09-01-preview',
      name: [name],
      location,
      properties,
      additional: {
        sku,
        kind,
        tags,
      },
    };
  }
}
export namespace peeringServices {
  export interface AdditionalProps {
    tags?: Expressionable<any>;
  }
  
  export type PeeringServicesResource = ResourceDefinition<PeeringServiceProperties, AdditionalProps>;
  
  export function create(name: Expressionable<string>, properties: PeeringServiceProperties, location: Expressionable<string>, tags?: Expressionable<any>): PeeringServicesResource {
    return {
      type: 'Microsoft.Peering/peeringServices',
      apiVersion: '2019-09-01-preview',
      name: [name],
      location,
      properties,
      additional: {
        tags,
      },
    };
  }
}
export namespace peeringServices {
  export namespace prefixes {
    export type PrefixesResource = ResourceDefinition<PeeringServicePrefixProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: PeeringServicePrefixProperties): PrefixesResource {
      return {
        type: 'Microsoft.Peering/peeringServices/prefixes',
        apiVersion: '2019-09-01-preview',
        name: name,
        properties,
      };
    }
  }
}