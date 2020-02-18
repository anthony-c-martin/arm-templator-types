import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

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
  interface AdditionalProps {
    kind: Expressionable<('Direct' | 'Exchange')>;
    sku: Expressionable<PeeringSku>;
  }
  
  export function create(name: Expressionable<string>, properties: PeeringProperties, location: Expressionable<string>, sku: Expressionable<PeeringSku>, kind: Expressionable<('Direct' | 'Exchange')>): ResourceDefinition<PeeringProperties> & AdditionalProps {
    return {
      type: 'Microsoft.Peering/peerings',
      apiVersion: '2020-01-01-preview',
      name: name,
      location,
      sku,
      kind,
      properties,
    };
  }
}
export namespace peeringServices {
  interface AdditionalProps {
    sku?: Expressionable<PeeringServiceSku>;
  }
  
  export function create(name: Expressionable<string>, properties: PeeringServiceProperties, location: Expressionable<string>, sku?: Expressionable<PeeringServiceSku>): ResourceDefinition<PeeringServiceProperties> & AdditionalProps {
    return {
      type: 'Microsoft.Peering/peeringServices',
      apiVersion: '2020-01-01-preview',
      name: name,
      location,
      sku,
      properties,
    };
  }
}
export namespace peeringServices {
  export namespace prefixes {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: PeeringServicePrefixProperties): ResourceDefinition<PeeringServicePrefixProperties> {
      return {
        type: 'Microsoft.Peering/peeringServices/prefixes',
        apiVersion: '2020-01-01-preview',
        name: concatResourceName(...name),
        properties,
      };
    }
  }
}
export namespace peerings {
  export namespace registeredAsns {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: PeeringRegisteredAsnProperties): ResourceDefinition<PeeringRegisteredAsnProperties> {
      return {
        type: 'Microsoft.Peering/peerings/registeredAsns',
        apiVersion: '2020-01-01-preview',
        name: concatResourceName(...name),
        properties,
      };
    }
  }
}
export namespace peerings {
  export namespace registeredPrefixes {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: PeeringRegisteredPrefixProperties): ResourceDefinition<PeeringRegisteredPrefixProperties> {
      return {
        type: 'Microsoft.Peering/peerings/registeredPrefixes',
        apiVersion: '2020-01-01-preview',
        name: concatResourceName(...name),
        properties,
      };
    }
  }
}