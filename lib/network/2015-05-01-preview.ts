import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface AddressSpace {
  addressPrefixes: Expressionable<string[]>;
}

export interface ApplicationGatewayBackendAddress {
  fqdn?: Expressionable<string>;
  ipAddress?: Expressionable<string>;
}

export interface ApplicationGatewayBackendAddressPool {
  id?: Expressionable<string>;
  properties?: Expressionable<ApplicationGatewayBackendAddressPoolPropertiesFormat>;
  name?: Expressionable<string>;
  etag?: Expressionable<string>;
}

export interface ApplicationGatewayBackendAddressPoolPropertiesFormat {
  backendIPConfigurations?: Expressionable<SubResource[]>;
  backendAddresses?: Expressionable<ApplicationGatewayBackendAddress[]>;
  provisioningState?: Expressionable<string>;
}

export interface ApplicationGatewayBackendHttpSettings {
  id?: Expressionable<string>;
  properties?: Expressionable<ApplicationGatewayBackendHttpSettingsPropertiesFormat>;
  name?: Expressionable<string>;
  etag?: Expressionable<string>;
}

export interface ApplicationGatewayBackendHttpSettingsPropertiesFormat {
  port?: Expressionable<number>;
  protocol?: Expressionable<('Http' | 'Https')>;
  cookieBasedAffinity?: Expressionable<('Enabled' | 'Disabled')>;
  provisioningState?: Expressionable<string>;
}

export interface ApplicationGatewayFrontendIPConfiguration {
  id?: Expressionable<string>;
  properties?: Expressionable<ApplicationGatewayFrontendIPConfigurationPropertiesFormat>;
  name?: Expressionable<string>;
  etag?: Expressionable<string>;
}

export interface ApplicationGatewayFrontendIPConfigurationPropertiesFormat {
  privateIPAddress?: Expressionable<string>;
  privateIPAllocationMethod?: Expressionable<('Static' | 'Dynamic')>;
  subnet?: Expressionable<SubResource>;
  publicIPAddress?: Expressionable<SubResource>;
  provisioningState?: Expressionable<string>;
}

export interface ApplicationGatewayFrontendPort {
  id?: Expressionable<string>;
  properties?: Expressionable<ApplicationGatewayFrontendPortPropertiesFormat>;
  name?: Expressionable<string>;
  etag?: Expressionable<string>;
}

export interface ApplicationGatewayFrontendPortPropertiesFormat {
  port?: Expressionable<number>;
  provisioningState?: Expressionable<string>;
}

export interface ApplicationGatewayHttpListener {
  id?: Expressionable<string>;
  properties?: Expressionable<ApplicationGatewayHttpListenerPropertiesFormat>;
  name?: Expressionable<string>;
  etag?: Expressionable<string>;
}

export interface ApplicationGatewayHttpListenerPropertiesFormat {
  frontendIPConfiguration?: Expressionable<SubResource>;
  frontendPort?: Expressionable<SubResource>;
  protocol?: Expressionable<('Http' | 'Https')>;
  sslCertificate?: Expressionable<SubResource>;
  provisioningState?: Expressionable<string>;
}

export interface ApplicationGatewayIPConfiguration {
  id?: Expressionable<string>;
  properties?: Expressionable<ApplicationGatewayIPConfigurationPropertiesFormat>;
  name?: Expressionable<string>;
  etag?: Expressionable<string>;
}

export interface ApplicationGatewayIPConfigurationPropertiesFormat {
  subnet?: Expressionable<SubResource>;
  provisioningState?: Expressionable<string>;
}

export interface ApplicationGatewayPropertiesFormat {
  sku?: Expressionable<ApplicationGatewaySku>;
  gatewayIPConfigurations?: Expressionable<ApplicationGatewayIPConfiguration[]>;
  sslCertificates?: Expressionable<ApplicationGatewaySslCertificate[]>;
  frontendIPConfigurations?: Expressionable<ApplicationGatewayFrontendIPConfiguration[]>;
  frontendPorts?: Expressionable<ApplicationGatewayFrontendPort[]>;
  backendAddressPools?: Expressionable<ApplicationGatewayBackendAddressPool[]>;
  backendHttpSettingsCollection?: Expressionable<ApplicationGatewayBackendHttpSettings[]>;
  httpListeners?: Expressionable<ApplicationGatewayHttpListener[]>;
  requestRoutingRules?: Expressionable<ApplicationGatewayRequestRoutingRule[]>;
  resourceGuid?: Expressionable<string>;
  provisioningState?: Expressionable<string>;
}

export interface ApplicationGatewayRequestRoutingRule {
  id?: Expressionable<string>;
  properties?: Expressionable<ApplicationGatewayRequestRoutingRulePropertiesFormat>;
  name?: Expressionable<string>;
  etag?: Expressionable<string>;
}

export interface ApplicationGatewayRequestRoutingRulePropertiesFormat {
  ruleType?: Expressionable<('Basic')>;
  backendAddressPool?: Expressionable<SubResource>;
  backendHttpSettings?: Expressionable<SubResource>;
  httpListener?: Expressionable<SubResource>;
  provisioningState?: Expressionable<string>;
}

export interface ApplicationGatewaySku {
  name?: Expressionable<('Standard_Small' | 'Standard_Medium' | 'Standard_Large')>;
  tier?: Expressionable<('Standard')>;
  capacity?: Expressionable<number>;
}

export interface ApplicationGatewaySslCertificate {
  id?: Expressionable<string>;
  properties?: Expressionable<ApplicationGatewaySslCertificatePropertiesFormat>;
  name?: Expressionable<string>;
  etag?: Expressionable<string>;
}

export interface ApplicationGatewaySslCertificatePropertiesFormat {
  data?: Expressionable<string>;
  password?: Expressionable<string>;
  publicCertData?: Expressionable<string>;
  provisioningState?: Expressionable<string>;
}

export interface AuthorizationPropertiesFormat {
  authorizationKey?: Expressionable<string>;
  authorizationUseStatus?: Expressionable<('Available' | 'InUse')>;
  provisioningState?: Expressionable<string>;
}

export interface BackendAddressPool {
  id?: Expressionable<string>;
  properties?: Expressionable<BackendAddressPoolPropertiesFormat>;
  name: Expressionable<string>;
  etag?: Expressionable<string>;
}

export interface BackendAddressPoolPropertiesFormat {
  backendIPConfigurations?: Expressionable<SubResource[]>;
  loadBalancingRules?: Expressionable<SubResource[]>;
  outboundNatRule?: Expressionable<SubResource>;
  provisioningState?: Expressionable<string>;
}

export interface DhcpOptions {
  dnsServers: Expressionable<string[]>;
}

export interface ExpressRouteCircuitPeeringConfig {
  advertisedPublicPrefixes?: Expressionable<string[]>;
  advertisedPublicPrefixesState?: Expressionable<('NotConfigured' | 'Configuring' | 'Configured' | 'ValidationNeeded')>;
  customerASN?: Expressionable<number>;
  routingRegistryName?: Expressionable<string>;
}

export interface ExpressRouteCircuitPeeringPropertiesFormat {
  peeringType?: Expressionable<('AzurePublicPeering' | 'AzurePrivatePeering' | 'MicrosoftPeering')>;
  state?: Expressionable<('Disabled' | 'Enabled')>;
  azureASN?: Expressionable<number>;
  peerASN?: Expressionable<number>;
  primaryPeerAddressPrefix?: Expressionable<string>;
  secondaryPeerAddressPrefix?: Expressionable<string>;
  primaryAzurePort?: Expressionable<string>;
  secondaryAzurePort?: Expressionable<string>;
  sharedKey?: Expressionable<string>;
  vlanId?: Expressionable<number>;
  microsoftPeeringConfig?: Expressionable<ExpressRouteCircuitPeeringConfig>;
  stats?: Expressionable<ExpressRouteCircuitStats>;
  provisioningState?: Expressionable<string>;
}

export interface ExpressRouteCircuitStats {
  bytesIn?: Expressionable<number>;
  bytesOut?: Expressionable<number>;
}

export interface FrontendIpConfiguration {
  id?: Expressionable<string>;
  properties?: Expressionable<FrontendIpConfigurationPropertiesFormat>;
  name: Expressionable<string>;
  etag?: Expressionable<string>;
}

export interface FrontendIpConfigurationPropertiesFormat {
  privateIPAddress?: Expressionable<string>;
  privateIPAllocationMethod?: Expressionable<('Static' | 'Dynamic')>;
  subnet?: Expressionable<SubResource>;
  publicIPAddress?: Expressionable<SubResource>;
  inboundNatRules?: Expressionable<SubResource[]>;
  inboundNatPools?: Expressionable<SubResource[]>;
  outboundNatRules?: Expressionable<SubResource[]>;
  loadBalancingRules?: Expressionable<SubResource[]>;
  provisioningState?: Expressionable<string>;
}

export interface InboundNatPool {
  id?: Expressionable<string>;
  properties?: Expressionable<InboundNatPoolPropertiesFormat>;
  name: Expressionable<string>;
  etag?: Expressionable<string>;
}

export interface InboundNatPoolPropertiesFormat {
  frontendIPConfiguration: Expressionable<SubResource>;
  protocol: Expressionable<('Udp' | 'Tcp')>;
  frontendPortRangeStart: Expressionable<number>;
  frontendPortRangeEnd: Expressionable<number>;
  backendPort: Expressionable<number>;
  provisioningState?: Expressionable<string>;
}

export interface InboundNatRule {
  id?: Expressionable<string>;
  properties?: Expressionable<InboundNatRulePropertiesFormat>;
  name: Expressionable<string>;
  etag?: Expressionable<string>;
}

export interface InboundNatRulePropertiesFormat {
  frontendIPConfiguration: Expressionable<SubResource>;
  backendIPConfiguration?: Expressionable<SubResource>;
  protocol: Expressionable<('Udp' | 'Tcp')>;
  frontendPort: Expressionable<number>;
  backendPort: Expressionable<number>;
  idleTimeoutInMinutes?: Expressionable<number>;
  enableFloatingIP?: Expressionable<boolean>;
  provisioningState?: Expressionable<string>;
}

export interface LoadBalancerPropertiesFormat {
  frontendIPConfigurations?: Expressionable<FrontendIpConfiguration[]>;
  backendAddressPools?: Expressionable<BackendAddressPool[]>;
  loadBalancingRules?: Expressionable<LoadBalancingRule[]>;
  probes?: Expressionable<Probe[]>;
  inboundNatRules?: Expressionable<InboundNatRule[]>;
  inboundNatPools?: Expressionable<InboundNatPool[]>;
  outboundNatRules?: Expressionable<OutboundNatRule[]>;
  resourceGuid?: Expressionable<string>;
  provisioningState?: Expressionable<string>;
}

export interface LoadBalancingRule {
  id?: Expressionable<string>;
  properties?: Expressionable<LoadBalancingRulePropertiesFormat>;
  name: Expressionable<string>;
  etag?: Expressionable<string>;
}

export interface LoadBalancingRulePropertiesFormat {
  frontendIPConfiguration: Expressionable<SubResource>;
  backendAddressPool: Expressionable<SubResource>;
  probe?: Expressionable<SubResource>;
  protocol: Expressionable<('Udp' | 'Tcp')>;
  loadDistribution?: Expressionable<('Default' | 'SourceIP' | 'SourceIPProtocol')>;
  frontendPort: Expressionable<number>;
  backendPort: Expressionable<number>;
  idleTimeoutInMinutes?: Expressionable<number>;
  enableFloatingIP?: Expressionable<boolean>;
  provisioningState?: Expressionable<string>;
}

export interface LocalNetworkGatewayPropertiesFormat {
  localNetworkAddressSpace?: Expressionable<AddressSpace>;
  gatewayIpAddress?: Expressionable<string>;
  resourceGuid?: Expressionable<string>;
  provisioningState?: Expressionable<string>;
}

export interface NetworkInterfaceDnsSettings {
  dnsServers?: Expressionable<string[]>;
  appliedDnsServers?: Expressionable<string[]>;
  internalDnsNameLabel?: Expressionable<string>;
  internalFqdn?: Expressionable<string>;
}

export interface NetworkInterfaceIpConfiguration {
  id?: Expressionable<string>;
  properties?: Expressionable<NetworkInterfaceIpConfigurationPropertiesFormat>;
  name: Expressionable<string>;
  etag?: Expressionable<string>;
}

export interface NetworkInterfaceIpConfigurationPropertiesFormat {
  privateIPAddress?: Expressionable<string>;
  privateIPAllocationMethod?: Expressionable<('Static' | 'Dynamic')>;
  subnet?: Expressionable<SubResource>;
  publicIPAddress?: Expressionable<SubResource>;
  loadBalancerBackendAddressPools?: Expressionable<SubResource[]>;
  loadBalancerInboundNatRules?: Expressionable<SubResource[]>;
  provisioningState?: Expressionable<string>;
}

export interface NetworkInterfacePropertiesFormat {
  virtualMachine?: Expressionable<SubResource>;
  networkSecurityGroup?: Expressionable<SubResource>;
  ipConfigurations: Expressionable<NetworkInterfaceIpConfiguration[]>;
  dnsSettings?: Expressionable<NetworkInterfaceDnsSettings>;
  macAddress?: Expressionable<string>;
  primary?: Expressionable<boolean>;
  enableIPForwarding?: Expressionable<boolean>;
  resourceGuid?: Expressionable<string>;
  provisioningState?: Expressionable<string>;
}

export interface NetworkSecurityGroupPropertiesFormat {
  securityRules?: Expressionable<SecurityRule[]>;
  defaultSecurityRules?: Expressionable<SecurityRule[]>;
  networkInterfaces?: Expressionable<SubResource[]>;
  subnets?: Expressionable<SubResource[]>;
  resourceGuid?: Expressionable<string>;
  provisioningState?: Expressionable<string>;
}

export interface OutboundNatRule {
  id?: Expressionable<string>;
  properties?: Expressionable<OutboundNatRulePropertiesFormat>;
  name?: Expressionable<string>;
  etag?: Expressionable<string>;
}

export interface OutboundNatRulePropertiesFormat {
  allocatedOutboundPorts: Expressionable<number>;
  frontendIPConfigurations?: Expressionable<SubResource[]>;
  backendAddressPool: Expressionable<SubResource>;
  provisioningState?: Expressionable<string>;
}

export interface Probe {
  id?: Expressionable<string>;
  properties?: Expressionable<ProbePropertiesFormat>;
  name: Expressionable<string>;
  etag?: Expressionable<string>;
}

export interface ProbePropertiesFormat {
  loadBalancingRules?: Expressionable<SubResource[]>;
  protocol: Expressionable<('Http' | 'Tcp')>;
  port: Expressionable<number>;
  intervalInSeconds?: Expressionable<number>;
  numberOfProbes: Expressionable<number>;
  requestPath?: Expressionable<string>;
  provisioningState?: Expressionable<string>;
}

export interface PublicIpAddressDnsSettings {
  domainNameLabel: Expressionable<string>;
  fqdn?: Expressionable<string>;
  reverseFqdn?: Expressionable<string>;
}

export interface PublicIpAddressPropertiesFormat {
  publicIPAllocationMethod: Expressionable<('Static' | 'Dynamic')>;
  ipConfiguration?: Expressionable<SubResource>;
  dnsSettings?: Expressionable<PublicIpAddressDnsSettings>;
  ipAddress?: Expressionable<string>;
  idleTimeoutInMinutes?: Expressionable<number>;
  resourceGuid?: Expressionable<string>;
  provisioningState?: Expressionable<string>;
}

export interface Route {
  id?: Expressionable<string>;
  properties?: Expressionable<RoutePropertiesFormat>;
  name?: Expressionable<string>;
  etag?: Expressionable<string>;
}

export interface RoutePropertiesFormat {
  addressPrefix: Expressionable<string>;
  nextHopType: Expressionable<('VirtualNetworkGateway' | 'VnetLocal' | 'Internet' | 'VirtualAppliance' | 'None' | 'HyperNetGateway')>;
  nextHopIpAddress?: Expressionable<string>;
  provisioningState?: Expressionable<string>;
}

export interface RouteTablePropertiesFormat {
  routes?: Expressionable<Route[]>;
  subnets?: Expressionable<SubResource[]>;
  provisioningState?: Expressionable<string>;
}

export interface SecurityRule {
  id?: Expressionable<string>;
  properties?: Expressionable<SecurityRulePropertiesFormat>;
  name?: Expressionable<string>;
  etag?: Expressionable<string>;
}

export interface SecurityRulePropertiesFormat {
  description?: Expressionable<string>;
  protocol: Expressionable<('Tcp' | 'Udp' | '*')>;
  sourcePortRange?: Expressionable<string>;
  destinationPortRange?: Expressionable<string>;
  sourceAddressPrefix: Expressionable<string>;
  destinationAddressPrefix: Expressionable<string>;
  access: Expressionable<('Allow' | 'Deny')>;
  priority: Expressionable<number>;
  direction: Expressionable<('Inbound' | 'Outbound')>;
  provisioningState?: Expressionable<string>;
}

export interface Subnet {
  id?: Expressionable<string>;
  properties?: Expressionable<SubnetPropertiesFormat>;
  name: Expressionable<string>;
  etag?: Expressionable<string>;
}

export interface SubnetPropertiesFormat {
  addressPrefix: Expressionable<string>;
  networkSecurityGroup?: Expressionable<SubResource>;
  routeTable?: Expressionable<SubResource>;
  ipConfigurations?: Expressionable<SubResource[]>;
  provisioningState?: Expressionable<string>;
}

export interface SubResource {
  id?: Expressionable<string>;
}

export interface VirtualNetworkGatewayConnectionPropertiesFormat {
  virtualNetworkGateway1?: Expressionable<SubResource>;
  virtualNetworkGateway2?: Expressionable<SubResource>;
  localNetworkGateway2?: Expressionable<SubResource>;
  connectionType?: Expressionable<('IPsec' | 'Vnet2Vnet' | 'ExpressRoute' | 'VPNClient')>;
  routingWeight?: Expressionable<number>;
  sharedKey?: Expressionable<string>;
  connectionStatus?: Expressionable<('Unknown' | 'Connecting' | 'Connected' | 'NotConnected')>;
  egressBytesTransferred?: Expressionable<number>;
  ingressBytesTransferred?: Expressionable<number>;
  peer?: Expressionable<SubResource>;
  resourceGuid?: Expressionable<string>;
  provisioningState?: Expressionable<string>;
}

export interface VirtualNetworkGatewayIpConfiguration {
  id?: Expressionable<string>;
  properties?: Expressionable<VirtualNetworkGatewayIpConfigurationPropertiesFormat>;
  name?: Expressionable<string>;
  etag?: Expressionable<string>;
}

export interface VirtualNetworkGatewayIpConfigurationPropertiesFormat {
  privateIPAddress?: Expressionable<string>;
  privateIPAllocationMethod?: Expressionable<('Static' | 'Dynamic')>;
  subnet?: Expressionable<SubResource>;
  publicIPAddress?: Expressionable<SubResource>;
  provisioningState?: Expressionable<string>;
}

export interface VirtualNetworkGatewayPropertiesFormat {
  ipConfigurations?: Expressionable<VirtualNetworkGatewayIpConfiguration[]>;
  gatewayType?: Expressionable<('Vpn' | 'ExpressRoute')>;
  vpnType?: Expressionable<('PolicyBased' | 'RouteBased')>;
  enableBgp?: Expressionable<boolean>;
  gatewayDefaultSite?: Expressionable<SubResource>;
  resourceGuid?: Expressionable<string>;
  provisioningState?: Expressionable<string>;
}

export interface VirtualNetworkPropertiesFormat {
  addressSpace: Expressionable<AddressSpace>;
  dhcpOptions?: Expressionable<DhcpOptions>;
  subnets?: Expressionable<Subnet[]>;
  resourceGuid?: Expressionable<string>;
  provisioningState?: Expressionable<string>;
}

export namespace applicationGateways {
  export type ApplicationGatewaysResource = ResourceDefinition<ApplicationGatewayPropertiesFormat>;
  
  export function create(name: Expressionable<string>, properties: ApplicationGatewayPropertiesFormat, location: Expressionable<string>): ApplicationGatewaysResource {
    return {
      type: 'Microsoft.Network/applicationGateways',
      apiVersion: '2015-05-01-preview',
      name: [name],
      location,
      properties,
    };
  }
}
export namespace connections {
  export type ConnectionsResource = ResourceDefinition<VirtualNetworkGatewayConnectionPropertiesFormat>;
  
  export function create(name: Expressionable<string>, properties: VirtualNetworkGatewayConnectionPropertiesFormat, location: Expressionable<string>): ConnectionsResource {
    return {
      type: 'Microsoft.Network/connections',
      apiVersion: '2015-05-01-preview',
      name: [name],
      location,
      properties,
    };
  }
}
export namespace expressRouteCircuits {
  export namespace authorizations {
    export type AuthorizationsResource = ResourceDefinition<AuthorizationPropertiesFormat>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: AuthorizationPropertiesFormat): AuthorizationsResource {
      return {
        type: 'Microsoft.Network/expressRouteCircuits/authorizations',
        apiVersion: '2015-05-01-preview',
        name: name,
        properties,
      };
    }
  }
}
export namespace expressRouteCircuits {
  export namespace peerings {
    export type PeeringsResource = ResourceDefinition<ExpressRouteCircuitPeeringPropertiesFormat>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: ExpressRouteCircuitPeeringPropertiesFormat): PeeringsResource {
      return {
        type: 'Microsoft.Network/expressRouteCircuits/peerings',
        apiVersion: '2015-05-01-preview',
        name: name,
        properties,
      };
    }
  }
}
export namespace loadBalancers {
  export type LoadBalancersResource = ResourceDefinition<LoadBalancerPropertiesFormat>;
  
  export function create(name: Expressionable<string>, properties: LoadBalancerPropertiesFormat, location: Expressionable<string>): LoadBalancersResource {
    return {
      type: 'Microsoft.Network/loadBalancers',
      apiVersion: '2015-05-01-preview',
      name: [name],
      location,
      properties,
    };
  }
}
export namespace localNetworkGateways {
  export type LocalNetworkGatewaysResource = ResourceDefinition<LocalNetworkGatewayPropertiesFormat>;
  
  export function create(name: Expressionable<string>, properties: LocalNetworkGatewayPropertiesFormat, location: Expressionable<string>): LocalNetworkGatewaysResource {
    return {
      type: 'Microsoft.Network/localNetworkGateways',
      apiVersion: '2015-05-01-preview',
      name: [name],
      location,
      properties,
    };
  }
}
export namespace networkInterfaces {
  export type NetworkInterfacesResource = ResourceDefinition<NetworkInterfacePropertiesFormat>;
  
  export function create(name: Expressionable<string>, properties: NetworkInterfacePropertiesFormat, location: Expressionable<string>): NetworkInterfacesResource {
    return {
      type: 'Microsoft.Network/networkInterfaces',
      apiVersion: '2015-05-01-preview',
      name: [name],
      location,
      properties,
    };
  }
}
export namespace networkSecurityGroups {
  export type NetworkSecurityGroupsResource = ResourceDefinition<NetworkSecurityGroupPropertiesFormat>;
  
  export function create(name: Expressionable<string>, properties: NetworkSecurityGroupPropertiesFormat, location: Expressionable<string>): NetworkSecurityGroupsResource {
    return {
      type: 'Microsoft.Network/networkSecurityGroups',
      apiVersion: '2015-05-01-preview',
      name: [name],
      location,
      properties,
    };
  }
}
export namespace networkSecurityGroups {
  export namespace securityRules {
    export type SecurityRulesResource = ResourceDefinition<SecurityRulePropertiesFormat>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: SecurityRulePropertiesFormat): SecurityRulesResource {
      return {
        type: 'Microsoft.Network/networkSecurityGroups/securityRules',
        apiVersion: '2015-05-01-preview',
        name: name,
        properties,
      };
    }
  }
}
export namespace publicIPAddresses {
  export type PublicIPAddressesResource = ResourceDefinition<PublicIpAddressPropertiesFormat>;
  
  export function create(name: Expressionable<string>, properties: PublicIpAddressPropertiesFormat, location: Expressionable<string>): PublicIPAddressesResource {
    return {
      type: 'Microsoft.Network/publicIPAddresses',
      apiVersion: '2015-05-01-preview',
      name: [name],
      location,
      properties,
    };
  }
}
export namespace routeTables {
  export type RouteTablesResource = ResourceDefinition<RouteTablePropertiesFormat>;
  
  export function create(name: Expressionable<string>, properties: RouteTablePropertiesFormat, location: Expressionable<string>): RouteTablesResource {
    return {
      type: 'Microsoft.Network/routeTables',
      apiVersion: '2015-05-01-preview',
      name: [name],
      location,
      properties,
    };
  }
}
export namespace routeTables {
  export namespace routes {
    export type RoutesResource = ResourceDefinition<RoutePropertiesFormat>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: RoutePropertiesFormat): RoutesResource {
      return {
        type: 'Microsoft.Network/routeTables/routes',
        apiVersion: '2015-05-01-preview',
        name: name,
        properties,
      };
    }
  }
}
export namespace virtualNetworkGateways {
  export type VirtualNetworkGatewaysResource = ResourceDefinition<VirtualNetworkGatewayPropertiesFormat>;
  
  export function create(name: Expressionable<string>, properties: VirtualNetworkGatewayPropertiesFormat, location: Expressionable<string>): VirtualNetworkGatewaysResource {
    return {
      type: 'Microsoft.Network/virtualNetworkGateways',
      apiVersion: '2015-05-01-preview',
      name: [name],
      location,
      properties,
    };
  }
}
export namespace virtualNetworks {
  export type VirtualNetworksResource = ResourceDefinition<VirtualNetworkPropertiesFormat>;
  
  export function create(name: Expressionable<string>, properties: VirtualNetworkPropertiesFormat, location: Expressionable<string>): VirtualNetworksResource {
    return {
      type: 'Microsoft.Network/virtualNetworks',
      apiVersion: '2015-05-01-preview',
      name: [name],
      location,
      properties,
    };
  }
}
export namespace virtualNetworks {
  export namespace subnets {
    export type SubnetsResource = ResourceDefinition<SubnetPropertiesFormat>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: SubnetPropertiesFormat): SubnetsResource {
      return {
        type: 'Microsoft.Network/virtualNetworks/subnets',
        apiVersion: '2015-05-01-preview',
        name: name,
        properties,
      };
    }
  }
}