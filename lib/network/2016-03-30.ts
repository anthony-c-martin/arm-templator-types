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
  requestTimeout?: Expressionable<number>;
  probe?: Expressionable<SubResource>;
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
  hostName?: Expressionable<string>;
  sslCertificate?: Expressionable<SubResource>;
  requireServerNameIndication?: Expressionable<boolean>;
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

export interface ApplicationGatewayPathRule {
  id?: Expressionable<string>;
  properties?: Expressionable<ApplicationGatewayPathRulePropertiesFormat>;
  name?: Expressionable<string>;
  etag?: Expressionable<string>;
}

export interface ApplicationGatewayPathRulePropertiesFormat {
  paths?: Expressionable<string[]>;
  backendAddressPool?: Expressionable<SubResource>;
  backendHttpSettings?: Expressionable<SubResource>;
  provisioningState?: Expressionable<string>;
}

export interface ApplicationGatewayProbe {
  id?: Expressionable<string>;
  properties?: Expressionable<ApplicationGatewayProbePropertiesFormat>;
  name?: Expressionable<string>;
  etag?: Expressionable<string>;
}

export interface ApplicationGatewayProbePropertiesFormat {
  protocol?: Expressionable<('Http' | 'Https')>;
  host?: Expressionable<string>;
  path?: Expressionable<string>;
  interval?: Expressionable<number>;
  timeout?: Expressionable<number>;
  unhealthyThreshold?: Expressionable<number>;
  provisioningState?: Expressionable<string>;
}

export interface ApplicationGatewayPropertiesFormat {
  sku?: Expressionable<ApplicationGatewaySku>;
  gatewayIPConfigurations?: Expressionable<ApplicationGatewayIPConfiguration[]>;
  sslCertificates?: Expressionable<ApplicationGatewaySslCertificate[]>;
  frontendIPConfigurations?: Expressionable<ApplicationGatewayFrontendIPConfiguration[]>;
  frontendPorts?: Expressionable<ApplicationGatewayFrontendPort[]>;
  probes?: Expressionable<ApplicationGatewayProbe[]>;
  backendAddressPools?: Expressionable<ApplicationGatewayBackendAddressPool[]>;
  backendHttpSettingsCollection?: Expressionable<ApplicationGatewayBackendHttpSettings[]>;
  httpListeners?: Expressionable<ApplicationGatewayHttpListener[]>;
  urlPathMaps?: Expressionable<ApplicationGatewayUrlPathMap[]>;
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
  ruleType?: Expressionable<('Basic' | 'PathBasedRouting')>;
  backendAddressPool?: Expressionable<SubResource>;
  backendHttpSettings?: Expressionable<SubResource>;
  httpListener?: Expressionable<SubResource>;
  urlPathMap?: Expressionable<SubResource>;
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

export interface ApplicationGatewayUrlPathMap {
  id?: Expressionable<string>;
  properties?: Expressionable<ApplicationGatewayUrlPathMapPropertiesFormat>;
  name?: Expressionable<string>;
  etag?: Expressionable<string>;
}

export interface ApplicationGatewayUrlPathMapPropertiesFormat {
  defaultBackendAddressPool?: Expressionable<SubResource>;
  defaultBackendHttpSettings?: Expressionable<SubResource>;
  pathRules?: Expressionable<ApplicationGatewayPathRule[]>;
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

export interface BgpSettings {
  asn?: Expressionable<number>;
  bgpPeeringAddress?: Expressionable<string>;
  peerWeight?: Expressionable<number>;
}

export interface DhcpOptions {
  dnsServers: Expressionable<string[]>;
}

export interface ExpressRouteCircuitAuthorization {
  id?: Expressionable<string>;
  properties?: Expressionable<AuthorizationPropertiesFormat>;
  name?: Expressionable<string>;
  etag?: Expressionable<string>;
}

export interface ExpressRouteCircuitPeering {
  id?: Expressionable<string>;
  properties?: Expressionable<ExpressRouteCircuitPeeringPropertiesFormat>;
  name?: Expressionable<string>;
  etag?: Expressionable<string>;
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

export interface ExpressRouteCircuitPropertiesFormat {
  allowClassicOperations?: Expressionable<boolean>;
  circuitProvisioningState?: Expressionable<string>;
  serviceProviderProvisioningState?: Expressionable<('NotProvisioned' | 'Provisioning' | 'Provisioned' | 'Deprovisioning')>;
  authorizations?: Expressionable<ExpressRouteCircuitAuthorization[]>;
  peerings?: Expressionable<ExpressRouteCircuitPeering[]>;
  serviceKey?: Expressionable<string>;
  serviceProviderNotes?: Expressionable<string>;
  serviceProviderProperties?: Expressionable<ExpressRouteCircuitServiceProviderProperties>;
  provisioningState?: Expressionable<string>;
}

export interface ExpressRouteCircuitServiceProviderProperties {
  serviceProviderName?: Expressionable<string>;
  peeringLocation?: Expressionable<string>;
  bandwidthInMbps?: Expressionable<number>;
}

export interface ExpressRouteCircuitSku {
  name?: Expressionable<string>;
  tier?: Expressionable<('Standard' | 'Premium')>;
  family?: Expressionable<('UnlimitedData' | 'MeteredData')>;
}

export interface ExpressRouteCircuitStats {
  primarybytesIn?: Expressionable<number>;
  primarybytesOut?: Expressionable<number>;
  secondarybytesIn?: Expressionable<number>;
  secondarybytesOut?: Expressionable<number>;
}

export interface FrontendIPConfiguration {
  id?: Expressionable<string>;
  properties?: Expressionable<FrontendIPConfigurationPropertiesFormat>;
  name: Expressionable<string>;
  etag?: Expressionable<string>;
}

export interface FrontendIPConfigurationPropertiesFormat {
  inboundNatRules?: Expressionable<SubResource[]>;
  inboundNatPools?: Expressionable<SubResource[]>;
  outboundNatRules?: Expressionable<SubResource[]>;
  loadBalancingRules?: Expressionable<SubResource[]>;
  privateIPAddress?: Expressionable<string>;
  privateIPAllocationMethod?: Expressionable<('Static' | 'Dynamic')>;
  subnet?: Expressionable<SubResource>;
  publicIPAddress?: Expressionable<SubResource>;
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
  frontendIPConfigurations?: Expressionable<FrontendIPConfiguration[]>;
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
  backendAddressPool?: Expressionable<SubResource>;
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
  bgpSettings?: Expressionable<BgpSettings>;
  resourceGuid?: Expressionable<string>;
  provisioningState?: Expressionable<string>;
}

export interface NetworkInterfaceDnsSettings {
  dnsServers?: Expressionable<string[]>;
  appliedDnsServers?: Expressionable<string[]>;
  internalDnsNameLabel?: Expressionable<string>;
  internalFqdn?: Expressionable<string>;
  internalDomainNameSuffix?: Expressionable<string>;
}

export interface NetworkInterfaceIPConfiguration {
  id?: Expressionable<string>;
  properties?: Expressionable<NetworkInterfaceIPConfigurationPropertiesFormat>;
  name: Expressionable<string>;
  etag?: Expressionable<string>;
}

export interface NetworkInterfaceIPConfigurationPropertiesFormat {
  applicationGatewayBackendAddressPools?: Expressionable<SubResource[]>;
  loadBalancerBackendAddressPools?: Expressionable<SubResource[]>;
  loadBalancerInboundNatRules?: Expressionable<SubResource[]>;
  privateIPAddress?: Expressionable<string>;
  privateIPAllocationMethod?: Expressionable<('Static' | 'Dynamic')>;
  privateIPAddressVersion?: Expressionable<('IPv4' | 'IPv6')>;
  subnet?: Expressionable<SubResource>;
  primary?: Expressionable<boolean>;
  publicIPAddress?: Expressionable<SubResource>;
  provisioningState?: Expressionable<string>;
}

export interface NetworkInterfacePropertiesFormat {
  virtualMachine?: Expressionable<SubResource>;
  networkSecurityGroup?: Expressionable<SubResource>;
  ipConfigurations: Expressionable<NetworkInterfaceIPConfiguration[]>;
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
  allocatedOutboundPorts?: Expressionable<number>;
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

export interface PublicIPAddressDnsSettings {
  domainNameLabel: Expressionable<string>;
  fqdn?: Expressionable<string>;
  reverseFqdn?: Expressionable<string>;
}

export interface PublicIPAddressPropertiesFormat {
  publicIPAllocationMethod: Expressionable<('Static' | 'Dynamic')>;
  publicIPAddressVersion?: Expressionable<('IPv4' | 'IPv6')>;
  ipConfiguration?: Expressionable<SubResource>;
  dnsSettings?: Expressionable<PublicIPAddressDnsSettings>;
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
  authorizationKey?: Expressionable<string>;
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
  enableBgp?: Expressionable<boolean>;
  resourceGuid?: Expressionable<string>;
  provisioningState?: Expressionable<string>;
}

export interface VirtualNetworkGatewayIPConfiguration {
  id?: Expressionable<string>;
  properties?: Expressionable<VirtualNetworkGatewayIPConfigurationPropertiesFormat>;
  name?: Expressionable<string>;
  etag?: Expressionable<string>;
}

export interface VirtualNetworkGatewayIPConfigurationPropertiesFormat {
  privateIPAddress?: Expressionable<string>;
  privateIPAllocationMethod?: Expressionable<('Static' | 'Dynamic')>;
  subnet?: Expressionable<SubResource>;
  publicIPAddress?: Expressionable<SubResource>;
  provisioningState?: Expressionable<string>;
}

export interface VirtualNetworkGatewayPropertiesFormat {
  ipConfigurations?: Expressionable<VirtualNetworkGatewayIPConfiguration[]>;
  gatewayType?: Expressionable<('Vpn' | 'ExpressRoute')>;
  vpnType?: Expressionable<('PolicyBased' | 'RouteBased')>;
  enableBgp?: Expressionable<boolean>;
  gatewayDefaultSite?: Expressionable<SubResource>;
  sku?: Expressionable<VirtualNetworkGatewaySku>;
  vpnClientConfiguration?: Expressionable<VpnClientConfiguration>;
  bgpSettings?: Expressionable<BgpSettings>;
  resourceGuid?: Expressionable<string>;
  provisioningState?: Expressionable<string>;
}

export interface VirtualNetworkGatewaySku {
  name?: Expressionable<('Basic' | 'HighPerformance' | 'Standard')>;
  tier?: Expressionable<('Basic' | 'HighPerformance' | 'Standard')>;
  capacity?: Expressionable<number>;
}

export interface VirtualNetworkPropertiesFormat {
  addressSpace: Expressionable<AddressSpace>;
  dhcpOptions?: Expressionable<DhcpOptions>;
  subnets?: Expressionable<Subnet[]>;
  resourceGuid?: Expressionable<string>;
  provisioningState?: Expressionable<string>;
}

export interface VpnClientConfiguration {
  vpnClientAddressPool?: Expressionable<AddressSpace>;
  vpnClientRootCertificates?: Expressionable<VpnClientRootCertificate[]>;
  vpnClientRevokedCertificates?: Expressionable<VpnClientRevokedCertificate[]>;
}

export interface VpnClientRevokedCertificate {
  id?: Expressionable<string>;
  properties?: Expressionable<VpnClientRevokedCertificatePropertiesFormat>;
  name?: Expressionable<string>;
  etag?: Expressionable<string>;
}

export interface VpnClientRevokedCertificatePropertiesFormat {
  thumbprint?: Expressionable<string>;
  provisioningState?: Expressionable<string>;
}

export interface VpnClientRootCertificate {
  id?: Expressionable<string>;
  properties?: Expressionable<VpnClientRootCertificatePropertiesFormat>;
  name?: Expressionable<string>;
  etag?: Expressionable<string>;
}

export interface VpnClientRootCertificatePropertiesFormat {
  publicCertData?: Expressionable<string>;
  provisioningState?: Expressionable<string>;
}

export namespace applicationGateways {
  export type ApplicationGatewaysResource = ResourceDefinition<ApplicationGatewayPropertiesFormat, undefined>;
  
  export function create(name: Expressionable<string>, properties: ApplicationGatewayPropertiesFormat, location: Expressionable<string>): ApplicationGatewaysResource {
    return {
      type: 'Microsoft.Network/applicationGateways',
      apiVersion: '2016-03-30',
      name: [name],
      location,
      properties,
    };
  }
}
export namespace connections {
  export type ConnectionsResource = ResourceDefinition<VirtualNetworkGatewayConnectionPropertiesFormat, undefined>;
  
  export function create(name: Expressionable<string>, properties: VirtualNetworkGatewayConnectionPropertiesFormat, location: Expressionable<string>): ConnectionsResource {
    return {
      type: 'Microsoft.Network/connections',
      apiVersion: '2016-03-30',
      name: [name],
      location,
      properties,
    };
  }
}
export namespace expressRouteCircuits {
  export interface AdditionalProps {
    sku?: Expressionable<ExpressRouteCircuitSku>;
  }
  
  export type ExpressRouteCircuitsResource = ResourceDefinition<ExpressRouteCircuitPropertiesFormat, AdditionalProps>;
  
  export function create(name: Expressionable<string>, properties: ExpressRouteCircuitPropertiesFormat, location: Expressionable<string>, sku?: Expressionable<ExpressRouteCircuitSku>): ExpressRouteCircuitsResource {
    return {
      type: 'Microsoft.Network/expressRouteCircuits',
      apiVersion: '2016-03-30',
      name: [name],
      location,
      properties,
      additional: {
        sku,
      },
    };
  }
}
export namespace expressRouteCircuits {
  export namespace authorizations {
    export type AuthorizationsResource = ResourceDefinition<AuthorizationPropertiesFormat, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: AuthorizationPropertiesFormat): AuthorizationsResource {
      return {
        type: 'Microsoft.Network/expressRouteCircuits/authorizations',
        apiVersion: '2016-03-30',
        name: name,
        properties,
      };
    }
  }
}
export namespace expressRouteCircuits {
  export namespace peerings {
    export type PeeringsResource = ResourceDefinition<ExpressRouteCircuitPeeringPropertiesFormat, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: ExpressRouteCircuitPeeringPropertiesFormat): PeeringsResource {
      return {
        type: 'Microsoft.Network/expressRouteCircuits/peerings',
        apiVersion: '2016-03-30',
        name: name,
        properties,
      };
    }
  }
}
export namespace loadBalancers {
  export type LoadBalancersResource = ResourceDefinition<LoadBalancerPropertiesFormat, undefined>;
  
  export function create(name: Expressionable<string>, properties: LoadBalancerPropertiesFormat, location: Expressionable<string>): LoadBalancersResource {
    return {
      type: 'Microsoft.Network/loadBalancers',
      apiVersion: '2016-03-30',
      name: [name],
      location,
      properties,
    };
  }
}
export namespace localNetworkGateways {
  export type LocalNetworkGatewaysResource = ResourceDefinition<LocalNetworkGatewayPropertiesFormat, undefined>;
  
  export function create(name: Expressionable<string>, properties: LocalNetworkGatewayPropertiesFormat, location: Expressionable<string>): LocalNetworkGatewaysResource {
    return {
      type: 'Microsoft.Network/localNetworkGateways',
      apiVersion: '2016-03-30',
      name: [name],
      location,
      properties,
    };
  }
}
export namespace networkInterfaces {
  export type NetworkInterfacesResource = ResourceDefinition<NetworkInterfacePropertiesFormat, undefined>;
  
  export function create(name: Expressionable<string>, properties: NetworkInterfacePropertiesFormat, location: Expressionable<string>): NetworkInterfacesResource {
    return {
      type: 'Microsoft.Network/networkInterfaces',
      apiVersion: '2016-03-30',
      name: [name],
      location,
      properties,
    };
  }
}
export namespace networkSecurityGroups {
  export type NetworkSecurityGroupsResource = ResourceDefinition<NetworkSecurityGroupPropertiesFormat, undefined>;
  
  export function create(name: Expressionable<string>, properties: NetworkSecurityGroupPropertiesFormat, location: Expressionable<string>): NetworkSecurityGroupsResource {
    return {
      type: 'Microsoft.Network/networkSecurityGroups',
      apiVersion: '2016-03-30',
      name: [name],
      location,
      properties,
    };
  }
}
export namespace networkSecurityGroups {
  export namespace securityRules {
    export type SecurityRulesResource = ResourceDefinition<SecurityRulePropertiesFormat, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: SecurityRulePropertiesFormat): SecurityRulesResource {
      return {
        type: 'Microsoft.Network/networkSecurityGroups/securityRules',
        apiVersion: '2016-03-30',
        name: name,
        properties,
      };
    }
  }
}
export namespace publicIPAddresses {
  export type PublicIPAddressesResource = ResourceDefinition<PublicIPAddressPropertiesFormat, undefined>;
  
  export function create(name: Expressionable<string>, properties: PublicIPAddressPropertiesFormat, location: Expressionable<string>): PublicIPAddressesResource {
    return {
      type: 'Microsoft.Network/publicIPAddresses',
      apiVersion: '2016-03-30',
      name: [name],
      location,
      properties,
    };
  }
}
export namespace routeTables {
  export type RouteTablesResource = ResourceDefinition<RouteTablePropertiesFormat, undefined>;
  
  export function create(name: Expressionable<string>, properties: RouteTablePropertiesFormat, location: Expressionable<string>): RouteTablesResource {
    return {
      type: 'Microsoft.Network/routeTables',
      apiVersion: '2016-03-30',
      name: [name],
      location,
      properties,
    };
  }
}
export namespace routeTables {
  export namespace routes {
    export type RoutesResource = ResourceDefinition<RoutePropertiesFormat, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: RoutePropertiesFormat): RoutesResource {
      return {
        type: 'Microsoft.Network/routeTables/routes',
        apiVersion: '2016-03-30',
        name: name,
        properties,
      };
    }
  }
}
export namespace virtualNetworkGateways {
  export type VirtualNetworkGatewaysResource = ResourceDefinition<VirtualNetworkGatewayPropertiesFormat, undefined>;
  
  export function create(name: Expressionable<string>, properties: VirtualNetworkGatewayPropertiesFormat, location: Expressionable<string>): VirtualNetworkGatewaysResource {
    return {
      type: 'Microsoft.Network/virtualNetworkGateways',
      apiVersion: '2016-03-30',
      name: [name],
      location,
      properties,
    };
  }
}
export namespace virtualNetworks {
  export type VirtualNetworksResource = ResourceDefinition<VirtualNetworkPropertiesFormat, undefined>;
  
  export function create(name: Expressionable<string>, properties: VirtualNetworkPropertiesFormat, location: Expressionable<string>): VirtualNetworksResource {
    return {
      type: 'Microsoft.Network/virtualNetworks',
      apiVersion: '2016-03-30',
      name: [name],
      location,
      properties,
    };
  }
}
export namespace virtualNetworks {
  export namespace subnets {
    export type SubnetsResource = ResourceDefinition<SubnetPropertiesFormat, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: SubnetPropertiesFormat): SubnetsResource {
      return {
        type: 'Microsoft.Network/virtualNetworks/subnets',
        apiVersion: '2016-03-30',
        name: name,
        properties,
      };
    }
  }
}