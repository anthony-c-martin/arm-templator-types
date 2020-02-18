import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface AddressSpace {
  addressPrefixes: Expressionable<string[]>;
}

export interface ApplicationGatewayAuthenticationCertificate {
  properties?: Expressionable<ApplicationGatewayAuthenticationCertificatePropertiesFormat>;
  name?: Expressionable<string>;
  etag?: Expressionable<string>;
  type?: Expressionable<string>;
}

export interface ApplicationGatewayAuthenticationCertificatePropertiesFormat {
  data?: Expressionable<string>;
  provisioningState?: Expressionable<string>;
}

export interface ApplicationGatewayBackendAddress {
  fqdn?: Expressionable<string>;
  ipAddress?: Expressionable<string>;
}

export interface ApplicationGatewayBackendAddressPool {
  properties?: Expressionable<ApplicationGatewayBackendAddressPoolPropertiesFormat>;
  name?: Expressionable<string>;
  etag?: Expressionable<string>;
  type?: Expressionable<string>;
}

export interface ApplicationGatewayBackendAddressPoolPropertiesFormat {
  backendIPConfigurations?: Expressionable<SubResource[]>;
  backendAddresses?: Expressionable<ApplicationGatewayBackendAddress[]>;
  provisioningState?: Expressionable<string>;
}

export interface ApplicationGatewayBackendHttpSettings {
  properties?: Expressionable<ApplicationGatewayBackendHttpSettingsPropertiesFormat>;
  name?: Expressionable<string>;
  etag?: Expressionable<string>;
  type?: Expressionable<string>;
}

export interface ApplicationGatewayBackendHttpSettingsPropertiesFormat {
  port?: Expressionable<number>;
  protocol?: Expressionable<('Http' | 'Https')>;
  cookieBasedAffinity?: Expressionable<('Enabled' | 'Disabled')>;
  requestTimeout?: Expressionable<number>;
  probe?: Expressionable<SubResource>;
  authenticationCertificates?: Expressionable<SubResource[]>;
  connectionDraining?: Expressionable<ApplicationGatewayConnectionDraining>;
  hostName?: Expressionable<string>;
  pickHostNameFromBackendAddress?: Expressionable<boolean>;
  affinityCookieName?: Expressionable<string>;
  probeEnabled?: Expressionable<boolean>;
  path?: Expressionable<string>;
  provisioningState?: Expressionable<string>;
}

export interface ApplicationGatewayConnectionDraining {
  enabled: Expressionable<boolean>;
  drainTimeoutInSec: Expressionable<number>;
}

export interface ApplicationGatewayFirewallDisabledRuleGroup {
  ruleGroupName: Expressionable<string>;
  rules?: Expressionable<number[]>;
}

export interface ApplicationGatewayFrontendIPConfiguration {
  properties?: Expressionable<ApplicationGatewayFrontendIPConfigurationPropertiesFormat>;
  name?: Expressionable<string>;
  etag?: Expressionable<string>;
  type?: Expressionable<string>;
}

export interface ApplicationGatewayFrontendIPConfigurationPropertiesFormat {
  privateIPAddress?: Expressionable<string>;
  privateIPAllocationMethod?: Expressionable<('Static' | 'Dynamic')>;
  subnet?: Expressionable<SubResource>;
  publicIPAddress?: Expressionable<SubResource>;
  provisioningState?: Expressionable<string>;
}

export interface ApplicationGatewayFrontendPort {
  properties?: Expressionable<ApplicationGatewayFrontendPortPropertiesFormat>;
  name?: Expressionable<string>;
  etag?: Expressionable<string>;
  type?: Expressionable<string>;
}

export interface ApplicationGatewayFrontendPortPropertiesFormat {
  port?: Expressionable<number>;
  provisioningState?: Expressionable<string>;
}

export interface ApplicationGatewayHttpListener {
  properties?: Expressionable<ApplicationGatewayHttpListenerPropertiesFormat>;
  name?: Expressionable<string>;
  etag?: Expressionable<string>;
  type?: Expressionable<string>;
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
  properties?: Expressionable<ApplicationGatewayIPConfigurationPropertiesFormat>;
  name?: Expressionable<string>;
  etag?: Expressionable<string>;
  type?: Expressionable<string>;
}

export interface ApplicationGatewayIPConfigurationPropertiesFormat {
  subnet?: Expressionable<SubResource>;
  provisioningState?: Expressionable<string>;
}

export interface ApplicationGatewayPathRule {
  properties?: Expressionable<ApplicationGatewayPathRulePropertiesFormat>;
  name?: Expressionable<string>;
  etag?: Expressionable<string>;
  type?: Expressionable<string>;
}

export interface ApplicationGatewayPathRulePropertiesFormat {
  paths?: Expressionable<string[]>;
  backendAddressPool?: Expressionable<SubResource>;
  backendHttpSettings?: Expressionable<SubResource>;
  redirectConfiguration?: Expressionable<SubResource>;
  provisioningState?: Expressionable<string>;
}

export interface ApplicationGatewayProbe {
  properties?: Expressionable<ApplicationGatewayProbePropertiesFormat>;
  name?: Expressionable<string>;
  etag?: Expressionable<string>;
  type?: Expressionable<string>;
}

export interface ApplicationGatewayProbeHealthResponseMatch {
  body?: Expressionable<string>;
  statusCodes?: Expressionable<string[]>;
}

export interface ApplicationGatewayProbePropertiesFormat {
  protocol?: Expressionable<('Http' | 'Https')>;
  host?: Expressionable<string>;
  path?: Expressionable<string>;
  interval?: Expressionable<number>;
  timeout?: Expressionable<number>;
  unhealthyThreshold?: Expressionable<number>;
  pickHostNameFromBackendHttpSettings?: Expressionable<boolean>;
  minServers?: Expressionable<number>;
  match?: Expressionable<ApplicationGatewayProbeHealthResponseMatch>;
  provisioningState?: Expressionable<string>;
}

export interface ApplicationGatewayPropertiesFormat {
  sku?: Expressionable<ApplicationGatewaySku>;
  sslPolicy?: Expressionable<ApplicationGatewaySslPolicy>;
  gatewayIPConfigurations?: Expressionable<ApplicationGatewayIPConfiguration[]>;
  authenticationCertificates?: Expressionable<ApplicationGatewayAuthenticationCertificate[]>;
  sslCertificates?: Expressionable<ApplicationGatewaySslCertificate[]>;
  frontendIPConfigurations?: Expressionable<ApplicationGatewayFrontendIPConfiguration[]>;
  frontendPorts?: Expressionable<ApplicationGatewayFrontendPort[]>;
  probes?: Expressionable<ApplicationGatewayProbe[]>;
  backendAddressPools?: Expressionable<ApplicationGatewayBackendAddressPool[]>;
  backendHttpSettingsCollection?: Expressionable<ApplicationGatewayBackendHttpSettings[]>;
  httpListeners?: Expressionable<ApplicationGatewayHttpListener[]>;
  urlPathMaps?: Expressionable<ApplicationGatewayUrlPathMap[]>;
  requestRoutingRules?: Expressionable<ApplicationGatewayRequestRoutingRule[]>;
  redirectConfigurations?: Expressionable<ApplicationGatewayRedirectConfiguration[]>;
  webApplicationFirewallConfiguration?: Expressionable<ApplicationGatewayWebApplicationFirewallConfiguration>;
  resourceGuid?: Expressionable<string>;
  provisioningState?: Expressionable<string>;
}

export interface ApplicationGatewayRedirectConfiguration {
  properties?: Expressionable<ApplicationGatewayRedirectConfigurationPropertiesFormat>;
  name?: Expressionable<string>;
  etag?: Expressionable<string>;
  type?: Expressionable<string>;
}

export interface ApplicationGatewayRedirectConfigurationPropertiesFormat {
  redirectType?: Expressionable<('Permanent' | 'Found' | 'SeeOther' | 'Temporary')>;
  targetListener?: Expressionable<SubResource>;
  targetUrl?: Expressionable<string>;
  includePath?: Expressionable<boolean>;
  includeQueryString?: Expressionable<boolean>;
  requestRoutingRules?: Expressionable<SubResource[]>;
  urlPathMaps?: Expressionable<SubResource[]>;
  pathRules?: Expressionable<SubResource[]>;
}

export interface ApplicationGatewayRequestRoutingRule {
  properties?: Expressionable<ApplicationGatewayRequestRoutingRulePropertiesFormat>;
  name?: Expressionable<string>;
  etag?: Expressionable<string>;
  type?: Expressionable<string>;
}

export interface ApplicationGatewayRequestRoutingRulePropertiesFormat {
  ruleType?: Expressionable<('Basic' | 'PathBasedRouting')>;
  backendAddressPool?: Expressionable<SubResource>;
  backendHttpSettings?: Expressionable<SubResource>;
  httpListener?: Expressionable<SubResource>;
  urlPathMap?: Expressionable<SubResource>;
  redirectConfiguration?: Expressionable<SubResource>;
  provisioningState?: Expressionable<string>;
}

export interface ApplicationGatewaySku {
  name?: Expressionable<('Standard_Small' | 'Standard_Medium' | 'Standard_Large' | 'WAF_Medium' | 'WAF_Large')>;
  tier?: Expressionable<('Standard' | 'WAF')>;
  capacity?: Expressionable<number>;
}

export interface ApplicationGatewaySslCertificate {
  properties?: Expressionable<ApplicationGatewaySslCertificatePropertiesFormat>;
  name?: Expressionable<string>;
  etag?: Expressionable<string>;
  type?: Expressionable<string>;
}

export interface ApplicationGatewaySslCertificatePropertiesFormat {
  data?: Expressionable<string>;
  password?: Expressionable<string>;
  publicCertData?: Expressionable<string>;
  provisioningState?: Expressionable<string>;
}

export interface ApplicationGatewaySslPolicy {
  disabledSslProtocols?: Expressionable<('TLSv1_0' | 'TLSv1_1' | 'TLSv1_2')[]>;
  policyType?: Expressionable<('Predefined' | 'Custom')>;
  policyName?: Expressionable<('AppGwSslPolicy20150501' | 'AppGwSslPolicy20170401' | 'AppGwSslPolicy20170401S')>;
  cipherSuites?: Expressionable<('TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384' | 'TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256' | 'TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA' | 'TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA' | 'TLS_DHE_RSA_WITH_AES_256_GCM_SHA384' | 'TLS_DHE_RSA_WITH_AES_128_GCM_SHA256' | 'TLS_DHE_RSA_WITH_AES_256_CBC_SHA' | 'TLS_DHE_RSA_WITH_AES_128_CBC_SHA' | 'TLS_RSA_WITH_AES_256_GCM_SHA384' | 'TLS_RSA_WITH_AES_128_GCM_SHA256' | 'TLS_RSA_WITH_AES_256_CBC_SHA256' | 'TLS_RSA_WITH_AES_128_CBC_SHA256' | 'TLS_RSA_WITH_AES_256_CBC_SHA' | 'TLS_RSA_WITH_AES_128_CBC_SHA' | 'TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384' | 'TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256' | 'TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384' | 'TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256' | 'TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA' | 'TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA' | 'TLS_DHE_DSS_WITH_AES_256_CBC_SHA256' | 'TLS_DHE_DSS_WITH_AES_128_CBC_SHA256' | 'TLS_DHE_DSS_WITH_AES_256_CBC_SHA' | 'TLS_DHE_DSS_WITH_AES_128_CBC_SHA' | 'TLS_RSA_WITH_3DES_EDE_CBC_SHA' | 'TLS_DHE_DSS_WITH_3DES_EDE_CBC_SHA' | 'TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256' | 'TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384')[]>;
  minProtocolVersion?: Expressionable<('TLSv1_0' | 'TLSv1_1' | 'TLSv1_2')>;
}

export interface ApplicationGatewayUrlPathMap {
  properties?: Expressionable<ApplicationGatewayUrlPathMapPropertiesFormat>;
  name?: Expressionable<string>;
  etag?: Expressionable<string>;
  type?: Expressionable<string>;
}

export interface ApplicationGatewayUrlPathMapPropertiesFormat {
  defaultBackendAddressPool?: Expressionable<SubResource>;
  defaultBackendHttpSettings?: Expressionable<SubResource>;
  defaultRedirectConfiguration?: Expressionable<SubResource>;
  pathRules?: Expressionable<ApplicationGatewayPathRule[]>;
  provisioningState?: Expressionable<string>;
}

export interface ApplicationGatewayWebApplicationFirewallConfiguration {
  enabled: Expressionable<boolean>;
  firewallMode: Expressionable<('Detection' | 'Prevention')>;
  ruleSetType: Expressionable<string>;
  ruleSetVersion: Expressionable<string>;
  disabledRuleGroups?: Expressionable<ApplicationGatewayFirewallDisabledRuleGroup[]>;
}

export interface AuthorizationPropertiesFormat {
  authorizationKey?: Expressionable<string>;
  authorizationUseStatus?: Expressionable<('Available' | 'InUse')>;
  provisioningState?: Expressionable<string>;
}

export interface BackendAddressPool {
  properties?: Expressionable<BackendAddressPoolPropertiesFormat>;
  name: Expressionable<string>;
  etag?: Expressionable<string>;
}

export interface BackendAddressPoolPropertiesFormat {
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
  properties?: Expressionable<AuthorizationPropertiesFormat>;
  name?: Expressionable<string>;
}

export interface ExpressRouteCircuitPeering {
  properties?: Expressionable<ExpressRouteCircuitPeeringPropertiesFormat>;
  name?: Expressionable<string>;
}

export interface ExpressRouteCircuitPeeringConfig {
  advertisedPublicPrefixes?: Expressionable<string[]>;
  advertisedCommunities?: Expressionable<string[]>;
  advertisedPublicPrefixesState?: Expressionable<('NotConfigured' | 'Configuring' | 'Configured' | 'ValidationNeeded')>;
  legacyMode?: Expressionable<number>;
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
  gatewayManagerEtag?: Expressionable<string>;
  lastModifiedBy?: Expressionable<string>;
  routeFilter?: Expressionable<SubResource>;
  ipv6PeeringConfig?: Expressionable<Ipv6ExpressRouteCircuitPeeringConfig>;
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
  gatewayManagerEtag?: Expressionable<string>;
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
  properties?: Expressionable<FrontendIPConfigurationPropertiesFormat>;
  name: Expressionable<string>;
  etag?: Expressionable<string>;
}

export interface FrontendIPConfigurationPropertiesFormat {
  privateIPAddress?: Expressionable<string>;
  privateIPAllocationMethod?: Expressionable<('Static' | 'Dynamic')>;
  subnet?: Expressionable<SubResource>;
  publicIPAddress?: Expressionable<SubResource>;
  provisioningState?: Expressionable<string>;
}

export interface InboundNatPool {
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
  properties?: Expressionable<InboundNatRulePropertiesFormat>;
  name: Expressionable<string>;
  etag?: Expressionable<string>;
}

export interface InboundNatRulePropertiesFormat {
  frontendIPConfiguration: Expressionable<SubResource>;
  protocol: Expressionable<('Udp' | 'Tcp')>;
  frontendPort: Expressionable<number>;
  backendPort: Expressionable<number>;
  idleTimeoutInMinutes?: Expressionable<number>;
  enableFloatingIP?: Expressionable<boolean>;
  provisioningState?: Expressionable<string>;
}

export interface IpsecPolicy {
  saLifeTimeSeconds: Expressionable<number>;
  saDataSizeKilobytes: Expressionable<number>;
  ipsecEncryption: Expressionable<('None' | 'DES' | 'DES3' | 'AES128' | 'AES192' | 'AES256' | 'GCMAES128' | 'GCMAES192' | 'GCMAES256')>;
  ipsecIntegrity: Expressionable<('MD5' | 'SHA1' | 'SHA256' | 'GCMAES128' | 'GCMAES192' | 'GCMAES256')>;
  ikeEncryption: Expressionable<('DES' | 'DES3' | 'AES128' | 'AES192' | 'AES256')>;
  ikeIntegrity: Expressionable<('MD5' | 'SHA1' | 'SHA256' | 'SHA384')>;
  dhGroup: Expressionable<('None' | 'DHGroup1' | 'DHGroup2' | 'DHGroup14' | 'DHGroup2048' | 'ECP256' | 'ECP384' | 'DHGroup24')>;
  pfsGroup: Expressionable<('None' | 'PFS1' | 'PFS2' | 'PFS2048' | 'ECP256' | 'ECP384' | 'PFS24')>;
}

export interface Ipv6ExpressRouteCircuitPeeringConfig {
  primaryPeerAddressPrefix?: Expressionable<string>;
  secondaryPeerAddressPrefix?: Expressionable<string>;
  microsoftPeeringConfig?: Expressionable<ExpressRouteCircuitPeeringConfig>;
  routeFilter?: Expressionable<SubResource>;
  state?: Expressionable<('Disabled' | 'Enabled')>;
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

export interface LocalNetworkGateway {
  location: Expressionable<string>;
  properties: Expressionable<LocalNetworkGatewayPropertiesFormat>;
  etag?: Expressionable<string>;
}

export interface LocalNetworkGatewayPropertiesFormat {
  localNetworkAddressSpace?: Expressionable<AddressSpace>;
  gatewayIpAddress?: Expressionable<string>;
  bgpSettings?: Expressionable<BgpSettings>;
  resourceGuid?: Expressionable<string>;
}

export interface NetworkInterfaceDnsSettings {
  dnsServers?: Expressionable<string[]>;
  appliedDnsServers?: Expressionable<string[]>;
  internalDnsNameLabel?: Expressionable<string>;
  internalFqdn?: Expressionable<string>;
  internalDomainNameSuffix?: Expressionable<string>;
}

export interface NetworkInterfaceIPConfiguration {
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
  networkSecurityGroup?: Expressionable<SubResource>;
  ipConfigurations: Expressionable<NetworkInterfaceIPConfiguration[]>;
  dnsSettings?: Expressionable<NetworkInterfaceDnsSettings>;
  macAddress?: Expressionable<string>;
  primary?: Expressionable<boolean>;
  enableAcceleratedNetworking?: Expressionable<boolean>;
  enableIPForwarding?: Expressionable<boolean>;
  resourceGuid?: Expressionable<string>;
  provisioningState?: Expressionable<string>;
}

export interface NetworkSecurityGroupPropertiesFormat {
  securityRules?: Expressionable<SecurityRule[]>;
  defaultSecurityRules?: Expressionable<SecurityRule[]>;
  resourceGuid?: Expressionable<string>;
  provisioningState?: Expressionable<string>;
}

export interface NetworkWatcherPropertiesFormat {
}

export interface OutboundNatRule {
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

export interface PacketCaptureFilter {
  protocol?: Expressionable<('TCP' | 'UDP' | 'Any')>;
  localIPAddress?: Expressionable<string>;
  remoteIPAddress?: Expressionable<string>;
  localPort?: Expressionable<string>;
  remotePort?: Expressionable<string>;
}

export interface PacketCaptureParameters {
  target: Expressionable<string>;
  bytesToCapturePerPacket?: Expressionable<(0)>;
  totalBytesPerSession?: Expressionable<(1073741824)>;
  timeLimitInSeconds?: Expressionable<(18000)>;
  storageLocation: Expressionable<PacketCaptureStorageLocation>;
  filters?: Expressionable<PacketCaptureFilter[]>;
}

export interface PacketCaptureStorageLocation {
  storageId?: Expressionable<string>;
  storagePath?: Expressionable<string>;
  filePath?: Expressionable<string>;
}

export interface PrivateAccessServicePropertiesFormat {
  service?: Expressionable<string>;
  locations?: Expressionable<string[]>;
  provisioningState?: Expressionable<string>;
}

export interface Probe {
  properties?: Expressionable<ProbePropertiesFormat>;
  name: Expressionable<string>;
  etag?: Expressionable<string>;
}

export interface ProbePropertiesFormat {
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
  dnsSettings?: Expressionable<PublicIPAddressDnsSettings>;
  ipAddress?: Expressionable<string>;
  idleTimeoutInMinutes?: Expressionable<number>;
  resourceGuid?: Expressionable<string>;
  provisioningState?: Expressionable<string>;
}

export interface ResourceNavigationLink {
  properties?: Expressionable<ResourceNavigationLinkFormat>;
  name?: Expressionable<string>;
}

export interface ResourceNavigationLinkFormat {
  linkedResourceType?: Expressionable<string>;
  link?: Expressionable<string>;
}

export interface Route {
  properties?: Expressionable<RoutePropertiesFormat>;
  name?: Expressionable<string>;
  etag?: Expressionable<string>;
}

export interface RouteFilterPropertiesFormat {
  rules?: Expressionable<RouteFilterRule[]>;
  peerings?: Expressionable<SubResource[]>;
}

export interface RouteFilterRule {
  properties?: Expressionable<RouteFilterRulePropertiesFormat>;
  name?: Expressionable<string>;
  location?: Expressionable<string>;
}

export interface RouteFilterRulePropertiesFormat {
  access: Expressionable<('Allow' | 'Deny')>;
  routeFilterRuleType: Expressionable<('Community')>;
  communities: Expressionable<string[]>;
}

export interface RoutePropertiesFormat {
  addressPrefix: Expressionable<string>;
  nextHopType: Expressionable<('VirtualNetworkGateway' | 'VnetLocal' | 'Internet' | 'VirtualAppliance' | 'None')>;
  nextHopIpAddress?: Expressionable<string>;
  provisioningState?: Expressionable<string>;
}

export interface RouteTablePropertiesFormat {
  routes?: Expressionable<Route[]>;
  provisioningState?: Expressionable<string>;
}

export interface SecurityRule {
  properties?: Expressionable<SecurityRulePropertiesFormat>;
  name?: Expressionable<string>;
  etag?: Expressionable<string>;
}

export interface SecurityRulePropertiesFormat {
  description?: Expressionable<string>;
  protocol: Expressionable<('Tcp' | 'Udp' | '*')>;
  sourcePortRange?: Expressionable<string>;
  destinationPortRange?: Expressionable<string>;
  sourceAddressPrefix?: Expressionable<string>;
  sourceAddressPrefixes?: Expressionable<string[]>;
  destinationAddressPrefix?: Expressionable<string>;
  destinationAddressPrefixes?: Expressionable<string[]>;
  access: Expressionable<('Allow' | 'Deny')>;
  priority: Expressionable<number>;
  direction: Expressionable<('Inbound' | 'Outbound')>;
  provisioningState?: Expressionable<string>;
}

export interface Subnet {
  properties?: Expressionable<SubnetPropertiesFormat>;
  name: Expressionable<string>;
  etag?: Expressionable<string>;
}

export interface SubnetPropertiesFormat {
  addressPrefix: Expressionable<string>;
  networkSecurityGroup?: Expressionable<SubResource>;
  routeTable?: Expressionable<SubResource>;
  privateAccessServices?: Expressionable<PrivateAccessServicePropertiesFormat[]>;
  resourceNavigationLinks?: Expressionable<ResourceNavigationLink[]>;
  provisioningState?: Expressionable<string>;
}

export interface SubResource {
  id: Expressionable<string>;
}

export interface VirtualNetworkGateway {
  location: Expressionable<string>;
  properties: Expressionable<VirtualNetworkGatewayPropertiesFormat>;
  etag?: Expressionable<string>;
}

export interface VirtualNetworkGatewayConnectionPropertiesFormat {
  authorizationKey?: Expressionable<string>;
  virtualNetworkGateway1: Expressionable<VirtualNetworkGateway | SubResource>;
  virtualNetworkGateway2?: Expressionable<VirtualNetworkGateway | SubResource>;
  localNetworkGateway2?: Expressionable<LocalNetworkGateway | SubResource>;
  connectionType: Expressionable<('IPsec' | 'Vnet2Vnet' | 'ExpressRoute' | 'VPNClient')>;
  routingWeight?: Expressionable<number>;
  sharedKey?: Expressionable<string>;
  peer?: Expressionable<SubResource>;
  enableBgp?: Expressionable<boolean>;
  usePolicyBasedTrafficSelectors?: Expressionable<boolean>;
  ipsecPolicies?: Expressionable<IpsecPolicy[]>;
  resourceGuid?: Expressionable<string>;
}

export interface VirtualNetworkGatewayIPConfiguration {
  properties?: Expressionable<VirtualNetworkGatewayIPConfigurationPropertiesFormat>;
  name?: Expressionable<string>;
  etag?: Expressionable<string>;
}

export interface VirtualNetworkGatewayIPConfigurationPropertiesFormat {
  privateIPAllocationMethod?: Expressionable<('Static' | 'Dynamic')>;
  subnet?: Expressionable<SubResource>;
  publicIPAddress?: Expressionable<SubResource>;
}

export interface VirtualNetworkGatewayPropertiesFormat {
  ipConfigurations?: Expressionable<VirtualNetworkGatewayIPConfiguration[]>;
  gatewayType?: Expressionable<('Vpn' | 'ExpressRoute')>;
  vpnType?: Expressionable<('PolicyBased' | 'RouteBased')>;
  enableBgp?: Expressionable<boolean>;
  activeActive?: Expressionable<boolean>;
  gatewayDefaultSite?: Expressionable<SubResource>;
  sku?: Expressionable<VirtualNetworkGatewaySku>;
  vpnClientConfiguration?: Expressionable<VpnClientConfiguration>;
  bgpSettings?: Expressionable<BgpSettings>;
  radiusServer?: Expressionable<string>;
  radiusSecret?: Expressionable<string>;
  resourceGuid?: Expressionable<string>;
}

export interface VirtualNetworkGatewaySku {
  name?: Expressionable<('Basic' | 'HighPerformance' | 'Standard' | 'UltraPerformance' | 'VpnGw1' | 'VpnGw2' | 'VpnGw3')>;
  tier?: Expressionable<('Basic' | 'HighPerformance' | 'Standard' | 'UltraPerformance' | 'VpnGw1' | 'VpnGw2' | 'VpnGw3')>;
  capacity?: Expressionable<number>;
}

export interface VirtualNetworkPeering {
  properties?: Expressionable<VirtualNetworkPeeringPropertiesFormat>;
  name: Expressionable<string>;
  etag?: Expressionable<string>;
}

export interface VirtualNetworkPeeringPropertiesFormat {
  allowVirtualNetworkAccess?: Expressionable<boolean>;
  allowForwardedTraffic?: Expressionable<boolean>;
  allowGatewayTransit?: Expressionable<boolean>;
  useRemoteGateways?: Expressionable<boolean>;
  remoteVirtualNetwork: Expressionable<SubResource>;
  peeringState?: Expressionable<('Initiated' | 'Connected' | 'Disconnected')>;
  provisioningState?: Expressionable<string>;
}

export interface VirtualNetworkPropertiesFormat {
  addressSpace: Expressionable<AddressSpace>;
  dhcpOptions?: Expressionable<DhcpOptions>;
  subnets?: Expressionable<Subnet[]>;
  virtualNetworkPeerings?: Expressionable<VirtualNetworkPeering[]>;
  resourceGuid?: Expressionable<string>;
  provisioningState?: Expressionable<string>;
}

export interface VpnClientConfiguration {
  vpnClientAddressPool?: Expressionable<AddressSpace>;
  vpnClientRootCertificates?: Expressionable<VpnClientRootCertificate[]>;
  vpnClientRevokedCertificates?: Expressionable<VpnClientRevokedCertificate[]>;
  vpnClientProtocols?: Expressionable<('IkeV2' | 'SSTP')[]>;
}

export interface VpnClientRevokedCertificate {
  properties?: Expressionable<VpnClientRevokedCertificatePropertiesFormat>;
  name?: Expressionable<string>;
  etag?: Expressionable<string>;
}

export interface VpnClientRevokedCertificatePropertiesFormat {
  thumbprint?: Expressionable<string>;
}

export interface VpnClientRootCertificate {
  properties: Expressionable<VpnClientRootCertificatePropertiesFormat>;
  name?: Expressionable<string>;
  etag?: Expressionable<string>;
}

export interface VpnClientRootCertificatePropertiesFormat {
  publicCertData: Expressionable<string>;
}

export namespace applicationGateways {
  export function create(name: Expressionable<string>, properties: ApplicationGatewayPropertiesFormat, location: Expressionable<string>): ResourceDefinition<ApplicationGatewayPropertiesFormat> {
    return {
      type: 'Microsoft.Network/applicationGateways',
      apiVersion: '2017-06-01',
      name: name,
      location,
      properties,
    };
  }
}
export namespace connections {
  export function create(name: Expressionable<string>, properties: VirtualNetworkGatewayConnectionPropertiesFormat, location: Expressionable<string>): ResourceDefinition<VirtualNetworkGatewayConnectionPropertiesFormat> {
    return {
      type: 'Microsoft.Network/connections',
      apiVersion: '2017-06-01',
      name: name,
      location,
      properties,
    };
  }
}
export namespace expressRouteCircuits {
  interface AdditionalProps {
    sku?: Expressionable<ExpressRouteCircuitSku>;
  }
  
  export function create(name: Expressionable<string>, properties: ExpressRouteCircuitPropertiesFormat, location: Expressionable<string>, sku?: Expressionable<ExpressRouteCircuitSku>): ResourceDefinition<ExpressRouteCircuitPropertiesFormat> & AdditionalProps {
    return {
      type: 'Microsoft.Network/expressRouteCircuits',
      apiVersion: '2017-06-01',
      name: name,
      location,
      sku,
      properties,
    };
  }
}
export namespace expressRouteCircuits {
  export namespace authorizations {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: AuthorizationPropertiesFormat): ResourceDefinition<AuthorizationPropertiesFormat> {
      return {
        type: 'Microsoft.Network/expressRouteCircuits/authorizations',
        apiVersion: '2017-06-01',
        name: concatResourceName(...name),
        properties,
      };
    }
  }
}
export namespace expressRouteCircuits {
  export namespace peerings {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: ExpressRouteCircuitPeeringPropertiesFormat): ResourceDefinition<ExpressRouteCircuitPeeringPropertiesFormat> {
      return {
        type: 'Microsoft.Network/expressRouteCircuits/peerings',
        apiVersion: '2017-06-01',
        name: concatResourceName(...name),
        properties,
      };
    }
  }
}
export namespace loadBalancers {
  export function create(name: Expressionable<string>, properties: LoadBalancerPropertiesFormat, location: Expressionable<string>): ResourceDefinition<LoadBalancerPropertiesFormat> {
    return {
      type: 'Microsoft.Network/loadBalancers',
      apiVersion: '2017-06-01',
      name: name,
      location,
      properties,
    };
  }
}
export namespace localNetworkGateways {
  export function create(name: Expressionable<string>, properties: LocalNetworkGatewayPropertiesFormat, location: Expressionable<string>): ResourceDefinition<LocalNetworkGatewayPropertiesFormat> {
    return {
      type: 'Microsoft.Network/localNetworkGateways',
      apiVersion: '2017-06-01',
      name: name,
      location,
      properties,
    };
  }
}
export namespace networkInterfaces {
  export function create(name: Expressionable<string>, properties: NetworkInterfacePropertiesFormat, location: Expressionable<string>): ResourceDefinition<NetworkInterfacePropertiesFormat> {
    return {
      type: 'Microsoft.Network/networkInterfaces',
      apiVersion: '2017-06-01',
      name: name,
      location,
      properties,
    };
  }
}
export namespace networkSecurityGroups {
  export function create(name: Expressionable<string>, properties: NetworkSecurityGroupPropertiesFormat, location: Expressionable<string>): ResourceDefinition<NetworkSecurityGroupPropertiesFormat> {
    return {
      type: 'Microsoft.Network/networkSecurityGroups',
      apiVersion: '2017-06-01',
      name: name,
      location,
      properties,
    };
  }
}
export namespace networkSecurityGroups {
  export namespace securityRules {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: SecurityRulePropertiesFormat): ResourceDefinition<SecurityRulePropertiesFormat> {
      return {
        type: 'Microsoft.Network/networkSecurityGroups/securityRules',
        apiVersion: '2017-06-01',
        name: concatResourceName(...name),
        properties,
      };
    }
  }
}
export namespace networkWatchers {
  export function create(name: Expressionable<string>, properties: NetworkWatcherPropertiesFormat, location: Expressionable<string>): ResourceDefinition<NetworkWatcherPropertiesFormat> {
    return {
      type: 'Microsoft.Network/networkWatchers',
      apiVersion: '2017-06-01',
      name: name,
      location,
      properties,
    };
  }
}
export namespace networkWatchers {
  export namespace packetCaptures {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: PacketCaptureParameters): ResourceDefinition<PacketCaptureParameters> {
      return {
        type: 'Microsoft.Network/networkWatchers/packetCaptures',
        apiVersion: '2017-06-01',
        name: concatResourceName(...name),
        properties,
      };
    }
  }
}
export namespace publicIPAddresses {
  export function create(name: Expressionable<string>, properties: PublicIPAddressPropertiesFormat, location: Expressionable<string>): ResourceDefinition<PublicIPAddressPropertiesFormat> {
    return {
      type: 'Microsoft.Network/publicIPAddresses',
      apiVersion: '2017-06-01',
      name: name,
      location,
      properties,
    };
  }
}
export namespace routeFilters {
  export function create(name: Expressionable<string>, properties: RouteFilterPropertiesFormat, location: Expressionable<string>): ResourceDefinition<RouteFilterPropertiesFormat> {
    return {
      type: 'Microsoft.Network/routeFilters',
      apiVersion: '2017-06-01',
      name: name,
      location,
      properties,
    };
  }
}
export namespace routeFilters {
  export namespace routeFilterRules {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: RouteFilterRulePropertiesFormat, location?: Expressionable<string>): ResourceDefinition<RouteFilterRulePropertiesFormat> {
      return {
        type: 'Microsoft.Network/routeFilters/routeFilterRules',
        apiVersion: '2017-06-01',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace routeTables {
  export function create(name: Expressionable<string>, properties: RouteTablePropertiesFormat, location: Expressionable<string>): ResourceDefinition<RouteTablePropertiesFormat> {
    return {
      type: 'Microsoft.Network/routeTables',
      apiVersion: '2017-06-01',
      name: name,
      location,
      properties,
    };
  }
}
export namespace routeTables {
  export namespace routes {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: RoutePropertiesFormat): ResourceDefinition<RoutePropertiesFormat> {
      return {
        type: 'Microsoft.Network/routeTables/routes',
        apiVersion: '2017-06-01',
        name: concatResourceName(...name),
        properties,
      };
    }
  }
}
export namespace virtualNetworkGateways {
  export function create(name: Expressionable<string>, properties: VirtualNetworkGatewayPropertiesFormat, location: Expressionable<string>): ResourceDefinition<VirtualNetworkGatewayPropertiesFormat> {
    return {
      type: 'Microsoft.Network/virtualNetworkGateways',
      apiVersion: '2017-06-01',
      name: name,
      location,
      properties,
    };
  }
}
export namespace virtualNetworks {
  export function create(name: Expressionable<string>, properties: VirtualNetworkPropertiesFormat, location: Expressionable<string>): ResourceDefinition<VirtualNetworkPropertiesFormat> {
    return {
      type: 'Microsoft.Network/virtualNetworks',
      apiVersion: '2017-06-01',
      name: name,
      location,
      properties,
    };
  }
}
export namespace virtualNetworks {
  export namespace subnets {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: SubnetPropertiesFormat): ResourceDefinition<SubnetPropertiesFormat> {
      return {
        type: 'Microsoft.Network/virtualNetworks/subnets',
        apiVersion: '2017-06-01',
        name: concatResourceName(...name),
        properties,
      };
    }
  }
}
export namespace virtualNetworks {
  export namespace virtualNetworkPeerings {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: VirtualNetworkPeeringPropertiesFormat): ResourceDefinition<VirtualNetworkPeeringPropertiesFormat> {
      return {
        type: 'Microsoft.Network/virtualNetworks/virtualNetworkPeerings',
        apiVersion: '2017-06-01',
        name: concatResourceName(...name),
        properties,
      };
    }
  }
}