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

export interface ContactDetail {
  email?: Expressionable<string>;
  phone?: Expressionable<string>;
  role?: Expressionable<('Noc' | 'Policy' | 'Technical' | 'Service' | 'Other')>;
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
  peerContactDetail?: Expressionable<ContactDetail[]>;
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
  directPeeringType?: Expressionable<('Edge' | 'Transit' | 'Cdn' | 'Internal' | 'Ix' | 'IxRs')>;
  peerAsn?: Expressionable<SubResource>;
}

export interface PeeringPropertiesExchange {
  connections?: Expressionable<ExchangeConnection[]>;
  peerAsn?: Expressionable<SubResource>;
}

export interface PeeringRegisteredAsnProperties {
  asn?: Expressionable<number>;
}

export interface PeeringRegisteredPrefixProperties {
  prefix?: Expressionable<string>;
}

export interface PeeringServicePrefixProperties {
  peeringServicePrefixKey?: Expressionable<string>;
  prefix?: Expressionable<string>;
}

export interface PeeringServiceProperties {
  peeringServiceLocation?: Expressionable<string>;
  peeringServiceProvider?: Expressionable<string>;
}

export interface PeeringServiceSku {
  name?: Expressionable<string>;
}

export interface PeeringSku {
  family?: Expressionable<('Direct' | 'Exchange')>;
  name?: Expressionable<string>;
  size?: Expressionable<('Free' | 'Metered' | 'Unlimited')>;
  tier?: Expressionable<('Basic' | 'Premium')>;
}

export interface SubResource {
  id?: Expressionable<string>;
}

export namespace peerings {
  export interface AddedResourceProps {
    kind: Expressionable<('Direct' | 'Exchange')>;
    sku: Expressionable<PeeringSku>;
    tags?: Expressionable<any>;
  }
  
  export type PeeringsResource = ResourceDefinition<PeeringProperties> & AddedResourceProps;
  
  export function create(name: Expressionable<string>, properties: PeeringProperties, location: Expressionable<string>, sku: Expressionable<PeeringSku>, kind: Expressionable<('Direct' | 'Exchange')>, tags?: Expressionable<any>): PeeringsResource {
    return {
      type: 'Microsoft.Peering/peerings',
      apiVersion: '2020-01-01-preview',
      name: [name],
      location,
      sku,
      kind,
      tags,
      properties,
    };
  }
}
export namespace peeringServices {
  export interface AddedResourceProps {
    sku?: Expressionable<PeeringServiceSku>;
    tags?: Expressionable<any>;
  }
  
  export type PeeringServicesResource = ResourceDefinition<PeeringServiceProperties> & AddedResourceProps;
  
  export function create(name: Expressionable<string>, properties: PeeringServiceProperties, location: Expressionable<string>, sku?: Expressionable<PeeringServiceSku>, tags?: Expressionable<any>): PeeringServicesResource {
    return {
      type: 'Microsoft.Peering/peeringServices',
      apiVersion: '2020-01-01-preview',
      name: [name],
      location,
      sku,
      tags,
      properties,
    };
  }
}
export namespace peeringServices {
  export namespace prefixes {
    export type PrefixesResource = ResourceDefinition<PeeringServicePrefixProperties>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: PeeringServicePrefixProperties): PrefixesResource {
      return {
        type: 'Microsoft.Peering/peeringServices/prefixes',
        apiVersion: '2020-01-01-preview',
        name: name,
        properties,
      };
    }
  }
}
export namespace peerings {
  export namespace registeredAsns {
    export type RegisteredAsnsResource = ResourceDefinition<PeeringRegisteredAsnProperties>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: PeeringRegisteredAsnProperties): RegisteredAsnsResource {
      return {
        type: 'Microsoft.Peering/peerings/registeredAsns',
        apiVersion: '2020-01-01-preview',
        name: name,
        properties,
      };
    }
  }
}
export namespace peerings {
  export namespace registeredPrefixes {
    export type RegisteredPrefixesResource = ResourceDefinition<PeeringRegisteredPrefixProperties>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: PeeringRegisteredPrefixProperties): RegisteredPrefixesResource {
      return {
        type: 'Microsoft.Peering/peerings/registeredPrefixes',
        apiVersion: '2020-01-01-preview',
        name: name,
        properties,
      };
    }
  }
}