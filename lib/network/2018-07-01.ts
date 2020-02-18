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

export interface ApplicationGatewayAutoscaleBounds {
  min: Expressionable<number>;
  max: Expressionable<number>;
}

export interface ApplicationGatewayAutoscaleConfiguration {
  bounds: Expressionable<ApplicationGatewayAutoscaleBounds>;
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
  enableHttp2?: Expressionable<boolean>;
  enableFips?: Expressionable<boolean>;
  autoscaleConfiguration?: Expressionable<ApplicationGatewayAutoscaleConfiguration>;
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
  name?: Expressionable<('Standard_Small' | 'Standard_Medium' | 'Standard_Large' | 'WAF_Medium' | 'WAF_Large' | 'Standard_v2' | 'WAF_v2')>;
  tier?: Expressionable<('Standard' | 'WAF' | 'Standard_v2' | 'WAF_v2')>;
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
  requestBodyCheck?: Expressionable<boolean>;
  maxRequestBodySize?: Expressionable<number>;
}

export interface ApplicationSecurityGroupPropertiesFormat {
}

export interface AuthorizationPropertiesFormat {
  authorizationKey?: Expressionable<string>;
  authorizationUseStatus?: Expressionable<('Available' | 'InUse')>;
  provisioningState?: Expressionable<string>;
}

export interface AzureFirewallApplicationRule {
  name?: Expressionable<string>;
  description?: Expressionable<string>;
  sourceAddresses?: Expressionable<string[]>;
  protocols?: Expressionable<AzureFirewallApplicationRuleProtocol[]>;
  targetUrls?: Expressionable<string[]>;
}

export interface AzureFirewallApplicationRuleCollection {
  properties?: Expressionable<AzureFirewallApplicationRuleCollectionPropertiesFormat>;
  name?: Expressionable<string>;
}

export interface AzureFirewallApplicationRuleCollectionPropertiesFormat {
  priority?: Expressionable<number>;
  action?: Expressionable<AzureFirewallRCAction>;
  rules?: Expressionable<AzureFirewallApplicationRule[]>;
  provisioningState?: Expressionable<('Succeeded' | 'Updating' | 'Deleting' | 'Failed')>;
}

export interface AzureFirewallApplicationRuleProtocol {
  protocolType?: Expressionable<('Http' | 'Https')>;
  port?: Expressionable<number>;
}

export interface AzureFirewallIPConfiguration {
  properties?: Expressionable<AzureFirewallIPConfigurationPropertiesFormat>;
  name?: Expressionable<string>;
  etag?: Expressionable<string>;
}

export interface AzureFirewallIPConfigurationPropertiesFormat {
  privateIPAddress?: Expressionable<string>;
  subnet?: Expressionable<SubResource>;
  internalPublicIpAddress?: Expressionable<SubResource>;
  publicIPAddress?: Expressionable<SubResource>;
  provisioningState?: Expressionable<('Succeeded' | 'Updating' | 'Deleting' | 'Failed')>;
}

export interface AzureFirewallNetworkRule {
  name?: Expressionable<string>;
  description?: Expressionable<string>;
  protocols?: Expressionable<('TCP' | 'UDP' | 'Any' | 'ICMP')[]>;
  sourceAddresses?: Expressionable<string[]>;
  destinationAddresses?: Expressionable<string[]>;
  destinationPorts?: Expressionable<string[]>;
}

export interface AzureFirewallNetworkRuleCollection {
  properties?: Expressionable<AzureFirewallNetworkRuleCollectionPropertiesFormat>;
  name?: Expressionable<string>;
}

export interface AzureFirewallNetworkRuleCollectionPropertiesFormat {
  priority?: Expressionable<number>;
  action?: Expressionable<AzureFirewallRCAction>;
  rules?: Expressionable<AzureFirewallNetworkRule[]>;
  provisioningState?: Expressionable<('Succeeded' | 'Updating' | 'Deleting' | 'Failed')>;
}

export interface AzureFirewallPropertiesFormat {
  applicationRuleCollections?: Expressionable<AzureFirewallApplicationRuleCollection[]>;
  networkRuleCollections?: Expressionable<AzureFirewallNetworkRuleCollection[]>;
  ipConfigurations?: Expressionable<AzureFirewallIPConfiguration[]>;
  provisioningState?: Expressionable<('Succeeded' | 'Updating' | 'Deleting' | 'Failed')>;
}

export interface AzureFirewallRCAction {
  type?: Expressionable<('Allow' | 'Deny')>;
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

export interface ConnectionMonitorDestination {
  resourceId?: Expressionable<string>;
  address?: Expressionable<string>;
  port?: Expressionable<number>;
}

export interface ConnectionMonitorParameters {
  source: Expressionable<ConnectionMonitorSource>;
  destination: Expressionable<ConnectionMonitorDestination>;
  autoStart?: Expressionable<boolean>;
  monitoringIntervalInSeconds?: Expressionable<number>;
}

export interface ConnectionMonitorSource {
  resourceId: Expressionable<string>;
  port?: Expressionable<number>;
}

export interface DdosProtectionPlanPropertiesFormat {
}

export interface DeviceProperties {
  deviceVendor?: Expressionable<string>;
  deviceModel?: Expressionable<string>;
  linkSpeedInMbps?: Expressionable<number>;
}

export interface DhcpOptions {
  dnsServers: Expressionable<string[]>;
}

export interface ExpressRouteCircuitAuthorization {
  properties?: Expressionable<AuthorizationPropertiesFormat>;
  name?: Expressionable<string>;
}

export interface ExpressRouteCircuitConnection {
  properties?: Expressionable<ExpressRouteCircuitConnectionPropertiesFormat>;
  name?: Expressionable<string>;
}

export interface ExpressRouteCircuitConnectionPropertiesFormat {
  expressRouteCircuitPeering?: Expressionable<SubResource>;
  peerExpressRouteCircuitPeering?: Expressionable<SubResource>;
  addressPrefix?: Expressionable<string>;
  authorizationKey?: Expressionable<string>;
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
  connections?: Expressionable<ExpressRouteCircuitConnection[]>;
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
  allowGlobalReach?: Expressionable<boolean>;
}

export interface ExpressRouteCircuitReference {
  id?: Expressionable<string>;
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

export interface ExpressRouteCrossConnectionPeering {
  properties?: Expressionable<ExpressRouteCrossConnectionPeeringProperties>;
  name?: Expressionable<string>;
}

export interface ExpressRouteCrossConnectionPeeringProperties {
  peeringType?: Expressionable<('AzurePublicPeering' | 'AzurePrivatePeering' | 'MicrosoftPeering')>;
  state?: Expressionable<('Disabled' | 'Enabled')>;
  peerASN?: Expressionable<number>;
  primaryPeerAddressPrefix?: Expressionable<string>;
  secondaryPeerAddressPrefix?: Expressionable<string>;
  sharedKey?: Expressionable<string>;
  vlanId?: Expressionable<number>;
  microsoftPeeringConfig?: Expressionable<ExpressRouteCircuitPeeringConfig>;
  gatewayManagerEtag?: Expressionable<string>;
  lastModifiedBy?: Expressionable<string>;
  ipv6PeeringConfig?: Expressionable<Ipv6ExpressRouteCircuitPeeringConfig>;
}

export interface ExpressRouteCrossConnectionProperties {
  peeringLocation?: Expressionable<string>;
  bandwidthInMbps?: Expressionable<number>;
  expressRouteCircuit?: Expressionable<ExpressRouteCircuitReference>;
  serviceProviderProvisioningState?: Expressionable<('NotProvisioned' | 'Provisioning' | 'Provisioned' | 'Deprovisioning')>;
  serviceProviderNotes?: Expressionable<string>;
  peerings?: Expressionable<ExpressRouteCrossConnectionPeering[]>;
}

export interface FrontendIPConfiguration {
  properties?: Expressionable<FrontendIPConfigurationPropertiesFormat>;
  name: Expressionable<string>;
  etag?: Expressionable<string>;
  zones?: Expressionable<string[]>;
}

export interface FrontendIPConfigurationPropertiesFormat {
  privateIPAddress?: Expressionable<string>;
  privateIPAllocationMethod?: Expressionable<('Static' | 'Dynamic')>;
  subnet?: Expressionable<SubResource>;
  publicIPAddress?: Expressionable<SubResource>;
  publicIPPrefix?: Expressionable<SubResource>;
  provisioningState?: Expressionable<string>;
}

export interface HubVirtualNetworkConnection {
  location: Expressionable<string>;
  properties?: Expressionable<HubVirtualNetworkConnectionProperties>;
}

export interface HubVirtualNetworkConnectionProperties {
  remoteVirtualNetwork?: Expressionable<SubResource>;
  allowHubToRemoteVnetTransit?: Expressionable<boolean>;
  allowRemoteVnetToUseHubVnetGateways?: Expressionable<boolean>;
  provisioningState?: Expressionable<('Succeeded' | 'Updating' | 'Deleting' | 'Failed')>;
}

export interface InboundNatPool {
  properties?: Expressionable<InboundNatPoolPropertiesFormat>;
  name: Expressionable<string>;
  etag?: Expressionable<string>;
}

export interface InboundNatPoolPropertiesFormat {
  frontendIPConfiguration: Expressionable<SubResource>;
  protocol: Expressionable<('Udp' | 'Tcp' | 'All')>;
  frontendPortRangeStart: Expressionable<number>;
  frontendPortRangeEnd: Expressionable<number>;
  backendPort: Expressionable<number>;
  idleTimeoutInMinutes?: Expressionable<number>;
  enableFloatingIP?: Expressionable<boolean>;
  enableTcpReset?: Expressionable<boolean>;
  provisioningState?: Expressionable<string>;
}

export interface InboundNatRule {
  properties?: Expressionable<InboundNatRulePropertiesFormat>;
  name: Expressionable<string>;
  etag?: Expressionable<string>;
}

export interface InboundNatRulePropertiesFormat {
  frontendIPConfiguration: Expressionable<SubResource>;
  protocol: Expressionable<('Udp' | 'Tcp' | 'All')>;
  frontendPort: Expressionable<number>;
  backendPort: Expressionable<number>;
  idleTimeoutInMinutes?: Expressionable<number>;
  enableFloatingIP?: Expressionable<boolean>;
  enableTcpReset?: Expressionable<boolean>;
  provisioningState?: Expressionable<string>;
}

export interface IpsecPolicy {
  saLifeTimeSeconds: Expressionable<number>;
  saDataSizeKilobytes: Expressionable<number>;
  ipsecEncryption: Expressionable<('None' | 'DES' | 'DES3' | 'AES128' | 'AES192' | 'AES256' | 'GCMAES128' | 'GCMAES192' | 'GCMAES256')>;
  ipsecIntegrity: Expressionable<('MD5' | 'SHA1' | 'SHA256' | 'GCMAES128' | 'GCMAES192' | 'GCMAES256')>;
  ikeEncryption: Expressionable<('DES' | 'DES3' | 'AES128' | 'AES192' | 'AES256' | 'GCMAES256' | 'GCMAES128')>;
  ikeIntegrity: Expressionable<('MD5' | 'SHA1' | 'SHA256' | 'SHA384' | 'GCMAES256' | 'GCMAES128')>;
  dhGroup: Expressionable<('None' | 'DHGroup1' | 'DHGroup2' | 'DHGroup14' | 'DHGroup2048' | 'ECP256' | 'ECP384' | 'DHGroup24')>;
  pfsGroup: Expressionable<('None' | 'PFS1' | 'PFS2' | 'PFS2048' | 'ECP256' | 'ECP384' | 'PFS24' | 'PFS14' | 'PFSMM')>;
}

export interface IpTag {
  ipTagType?: Expressionable<string>;
  tag?: Expressionable<string>;
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
  outboundRules?: Expressionable<OutboundRule[]>;
  resourceGuid?: Expressionable<string>;
  provisioningState?: Expressionable<string>;
}

export interface LoadBalancerSku {
  name?: Expressionable<('Basic' | 'Standard')>;
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
  protocol: Expressionable<('Udp' | 'Tcp' | 'All')>;
  loadDistribution?: Expressionable<('Default' | 'SourceIP' | 'SourceIPProtocol')>;
  frontendPort: Expressionable<number>;
  backendPort: Expressionable<number>;
  idleTimeoutInMinutes?: Expressionable<number>;
  enableFloatingIP?: Expressionable<boolean>;
  enableTcpReset?: Expressionable<boolean>;
  disableOutboundSnat?: Expressionable<boolean>;
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
  applicationSecurityGroups?: Expressionable<SubResource[]>;
  provisioningState?: Expressionable<string>;
}

export interface NetworkInterfacePropertiesFormat {
  virtualMachine?: Expressionable<SubResource>;
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

export interface OutboundRule {
  properties?: Expressionable<OutboundRulePropertiesFormat>;
  name?: Expressionable<string>;
  etag?: Expressionable<string>;
}

export interface OutboundRulePropertiesFormat {
  allocatedOutboundPorts?: Expressionable<number>;
  frontendIPConfigurations: Expressionable<SubResource[]>;
  backendAddressPool: Expressionable<SubResource>;
  provisioningState?: Expressionable<string>;
  protocol: Expressionable<('Tcp' | 'Udp' | 'All')>;
  enableTcpReset?: Expressionable<boolean>;
  idleTimeoutInMinutes?: Expressionable<number>;
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
  bytesToCapturePerPacket?: Expressionable<number>;
  totalBytesPerSession?: Expressionable<number>;
  timeLimitInSeconds?: Expressionable<number>;
  storageLocation: Expressionable<PacketCaptureStorageLocation>;
  filters?: Expressionable<PacketCaptureFilter[]>;
}

export interface PacketCaptureStorageLocation {
  storageId?: Expressionable<string>;
  storagePath?: Expressionable<string>;
  filePath?: Expressionable<string>;
}

export interface Policies {
  allowBranchToBranchTraffic?: Expressionable<boolean>;
  allowVnetToVnetTraffic?: Expressionable<boolean>;
}

export interface Probe {
  properties?: Expressionable<ProbePropertiesFormat>;
  name: Expressionable<string>;
  etag?: Expressionable<string>;
}

export interface ProbePropertiesFormat {
  protocol: Expressionable<('Http' | 'Tcp' | 'Https')>;
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
  ipTags?: Expressionable<IpTag[]>;
  ipAddress?: Expressionable<string>;
  publicIPPrefix?: Expressionable<SubResource>;
  idleTimeoutInMinutes?: Expressionable<number>;
  resourceGuid?: Expressionable<string>;
  provisioningState?: Expressionable<string>;
}

export interface PublicIPAddressSku {
  name?: Expressionable<('Basic' | 'Standard')>;
}

export interface PublicIPPrefixPropertiesFormat {
  publicIPAddressVersion?: Expressionable<('IPv4' | 'IPv6')>;
  ipTags?: Expressionable<IpTag[]>;
  prefixLength?: Expressionable<number>;
  ipPrefix?: Expressionable<string>;
  publicIPAddresses?: Expressionable<ReferencedPublicIpAddress[]>;
  resourceGuid?: Expressionable<string>;
  provisioningState?: Expressionable<string>;
}

export interface PublicIPPrefixSku {
  name?: Expressionable<('Standard')>;
}

export interface ReferencedPublicIpAddress {
  id?: Expressionable<string>;
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
  disableBgpRoutePropagation?: Expressionable<boolean>;
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
  sourceApplicationSecurityGroups?: Expressionable<SubResource[]>;
  destinationAddressPrefix?: Expressionable<string>;
  destinationAddressPrefixes?: Expressionable<string[]>;
  destinationApplicationSecurityGroups?: Expressionable<SubResource[]>;
  sourcePortRanges?: Expressionable<string[]>;
  destinationPortRanges?: Expressionable<string[]>;
  access: Expressionable<('Allow' | 'Deny')>;
  priority: Expressionable<number>;
  direction: Expressionable<('Inbound' | 'Outbound')>;
  provisioningState?: Expressionable<string>;
}

export interface ServiceEndpointPolicyDefinition {
  properties?: Expressionable<ServiceEndpointPolicyDefinitionPropertiesFormat>;
  name?: Expressionable<string>;
  etag?: Expressionable<string>;
}

export interface ServiceEndpointPolicyDefinitionPropertiesFormat {
  description?: Expressionable<string>;
  service?: Expressionable<string>;
  serviceResources?: Expressionable<string[]>;
  provisioningState?: Expressionable<string>;
}

export interface ServiceEndpointPolicyPropertiesFormat {
  serviceEndpointPolicyDefinitions?: Expressionable<ServiceEndpointPolicyDefinition[]>;
  resourceGuid?: Expressionable<string>;
  provisioningState?: Expressionable<string>;
}

export interface ServiceEndpointPropertiesFormat {
  service?: Expressionable<string>;
  locations?: Expressionable<string[]>;
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
  serviceEndpoints?: Expressionable<ServiceEndpointPropertiesFormat[]>;
  serviceEndpointPolicies?: Expressionable<SubResource[]>;
  resourceNavigationLinks?: Expressionable<ResourceNavigationLink[]>;
  provisioningState?: Expressionable<string>;
}

export interface SubResource {
  id: Expressionable<string>;
}

export interface VirtualHubProperties {
  virtualWan?: Expressionable<SubResource>;
  hubVirtualNetworkConnections?: Expressionable<HubVirtualNetworkConnection[]>;
  addressPrefix?: Expressionable<string>;
  provisioningState?: Expressionable<('Succeeded' | 'Updating' | 'Deleting' | 'Failed')>;
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
  expressRouteGatewayBypass?: Expressionable<boolean>;
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
  resourceGuid?: Expressionable<string>;
}

export interface VirtualNetworkGatewaySku {
  name?: Expressionable<('Basic' | 'HighPerformance' | 'Standard' | 'UltraPerformance' | 'VpnGw1' | 'VpnGw2' | 'VpnGw3' | 'VpnGw1AZ' | 'VpnGw2AZ' | 'VpnGw3AZ' | 'ErGw1AZ' | 'ErGw2AZ' | 'ErGw3AZ')>;
  tier?: Expressionable<('Basic' | 'HighPerformance' | 'Standard' | 'UltraPerformance' | 'VpnGw1' | 'VpnGw2' | 'VpnGw3' | 'VpnGw1AZ' | 'VpnGw2AZ' | 'VpnGw3AZ' | 'ErGw1AZ' | 'ErGw2AZ' | 'ErGw3AZ')>;
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
  remoteAddressSpace?: Expressionable<AddressSpace>;
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
  enableDdosProtection?: Expressionable<boolean>;
  enableVmProtection?: Expressionable<boolean>;
  ddosProtectionPlan?: Expressionable<SubResource>;
}

export interface VirtualWanProperties {
  disableVpnEncryption?: Expressionable<boolean>;
  provisioningState?: Expressionable<('Succeeded' | 'Updating' | 'Deleting' | 'Failed')>;
}

export interface VpnClientConfiguration {
  vpnClientAddressPool?: Expressionable<AddressSpace>;
  vpnClientRootCertificates?: Expressionable<VpnClientRootCertificate[]>;
  vpnClientRevokedCertificates?: Expressionable<VpnClientRevokedCertificate[]>;
  vpnClientProtocols?: Expressionable<('IkeV2' | 'SSTP' | 'OpenVPN')[]>;
  vpnClientIpsecPolicies?: Expressionable<IpsecPolicy[]>;
  radiusServerAddress?: Expressionable<string>;
  radiusServerSecret?: Expressionable<string>;
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

export interface VpnConnection {
  properties?: Expressionable<VpnConnectionProperties>;
  name?: Expressionable<string>;
}

export interface VpnConnectionProperties {
  remoteVpnSite?: Expressionable<SubResource>;
  routingWeight?: Expressionable<number>;
  connectionStatus?: Expressionable<('Unknown' | 'Connecting' | 'Connected' | 'NotConnected')>;
  sharedKey?: Expressionable<string>;
  enableBgp?: Expressionable<boolean>;
  ipsecPolicies?: Expressionable<IpsecPolicy[]>;
  provisioningState?: Expressionable<('Succeeded' | 'Updating' | 'Deleting' | 'Failed')>;
}

export interface VpnGatewayProperties {
  virtualHub?: Expressionable<SubResource>;
  connections?: Expressionable<VpnConnection[]>;
  bgpSettings?: Expressionable<BgpSettings>;
  provisioningState?: Expressionable<('Succeeded' | 'Updating' | 'Deleting' | 'Failed')>;
  policies?: Expressionable<Policies>;
}

export interface VpnSiteProperties {
  virtualWAN?: Expressionable<SubResource>;
  deviceProperties?: Expressionable<DeviceProperties>;
  ipAddress?: Expressionable<string>;
  siteKey?: Expressionable<string>;
  addressSpace?: Expressionable<AddressSpace>;
  bgpProperties?: Expressionable<BgpSettings>;
  provisioningState?: Expressionable<('Succeeded' | 'Updating' | 'Deleting' | 'Failed')>;
}

export namespace applicationGateways {
  export function create(name: Expressionable<string>, properties: ApplicationGatewayPropertiesFormat, location: Expressionable<string>): ResourceDefinition<ApplicationGatewayPropertiesFormat> {
    return {
      type: 'Microsoft.Network/applicationGateways',
      apiVersion: '2018-07-01',
      name: name,
      location,
      properties,
    };
  }
}
export namespace applicationSecurityGroups {
  export function create(name: Expressionable<string>, properties: ApplicationSecurityGroupPropertiesFormat, location: Expressionable<string>): ResourceDefinition<ApplicationSecurityGroupPropertiesFormat> {
    return {
      type: 'Microsoft.Network/applicationSecurityGroups',
      apiVersion: '2018-07-01',
      name: name,
      location,
      properties,
    };
  }
}
export namespace azureFirewalls {
  export function create(name: Expressionable<string>, properties: AzureFirewallPropertiesFormat, location: Expressionable<string>): ResourceDefinition<AzureFirewallPropertiesFormat> {
    return {
      type: 'Microsoft.Network/azureFirewalls',
      apiVersion: '2018-07-01',
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
      apiVersion: '2018-07-01',
      name: name,
      location,
      properties,
    };
  }
}
export namespace ddosProtectionPlans {
  export function create(name: Expressionable<string>, properties: DdosProtectionPlanPropertiesFormat, location: Expressionable<string>): ResourceDefinition<DdosProtectionPlanPropertiesFormat> {
    return {
      type: 'Microsoft.Network/ddosProtectionPlans',
      apiVersion: '2018-07-01',
      name: name,
      location,
      properties,
    };
  }
}
export namespace expressRouteCircuits {
  export function create(name: Expressionable<string>, properties: ExpressRouteCircuitPropertiesFormat, location: Expressionable<string>): ResourceDefinition<ExpressRouteCircuitPropertiesFormat> {
    return {
      type: 'Microsoft.Network/expressRouteCircuits',
      apiVersion: '2018-07-01',
      name: name,
      location,
      properties,
    };
  }
}
export namespace expressRouteCircuits {
  export namespace authorizations {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: AuthorizationPropertiesFormat): ResourceDefinition<AuthorizationPropertiesFormat> {
      return {
        type: 'Microsoft.Network/expressRouteCircuits/authorizations',
        apiVersion: '2018-07-01',
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
        apiVersion: '2018-07-01',
        name: concatResourceName(...name),
        properties,
      };
    }
  }
}
export namespace expressRouteCircuits {
  export namespace peerings {
    export namespace connections {
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: ExpressRouteCircuitConnectionPropertiesFormat): ResourceDefinition<ExpressRouteCircuitConnectionPropertiesFormat> {
        return {
          type: 'Microsoft.Network/expressRouteCircuits/peerings/connections',
          apiVersion: '2018-07-01',
          name: concatResourceName(...name),
          properties,
        };
      }
    }
  }
}
export namespace expressRouteCrossConnections {
  export function create(name: Expressionable<string>, properties: ExpressRouteCrossConnectionProperties, location: Expressionable<string>): ResourceDefinition<ExpressRouteCrossConnectionProperties> {
    return {
      type: 'Microsoft.Network/expressRouteCrossConnections',
      apiVersion: '2018-07-01',
      name: name,
      location,
      properties,
    };
  }
}
export namespace expressRouteCrossConnections {
  export namespace peerings {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: ExpressRouteCrossConnectionPeeringProperties): ResourceDefinition<ExpressRouteCrossConnectionPeeringProperties> {
      return {
        type: 'Microsoft.Network/expressRouteCrossConnections/peerings',
        apiVersion: '2018-07-01',
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
      apiVersion: '2018-07-01',
      name: name,
      location,
      properties,
    };
  }
}
export namespace loadBalancers {
  export namespace inboundNatRules {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: InboundNatRulePropertiesFormat): ResourceDefinition<InboundNatRulePropertiesFormat> {
      return {
        type: 'Microsoft.Network/loadBalancers/inboundNatRules',
        apiVersion: '2018-07-01',
        name: concatResourceName(...name),
        properties,
      };
    }
  }
}
export namespace localNetworkGateways {
  export function create(name: Expressionable<string>, properties: LocalNetworkGatewayPropertiesFormat, location: Expressionable<string>): ResourceDefinition<LocalNetworkGatewayPropertiesFormat> {
    return {
      type: 'Microsoft.Network/localNetworkGateways',
      apiVersion: '2018-07-01',
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
      apiVersion: '2018-07-01',
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
      apiVersion: '2018-07-01',
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
        apiVersion: '2018-07-01',
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
      apiVersion: '2018-07-01',
      name: name,
      location,
      properties,
    };
  }
}
export namespace networkWatchers {
  export namespace connectionMonitors {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: ConnectionMonitorParameters, location: Expressionable<string>): ResourceDefinition<ConnectionMonitorParameters> {
      return {
        type: 'Microsoft.Network/networkWatchers/connectionMonitors',
        apiVersion: '2018-07-01',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace networkWatchers {
  export namespace packetCaptures {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: PacketCaptureParameters): ResourceDefinition<PacketCaptureParameters> {
      return {
        type: 'Microsoft.Network/networkWatchers/packetCaptures',
        apiVersion: '2018-07-01',
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
      apiVersion: '2018-07-01',
      name: name,
      location,
      properties,
    };
  }
}
export namespace publicIPPrefixes {
  export function create(name: Expressionable<string>, properties: PublicIPPrefixPropertiesFormat, location: Expressionable<string>): ResourceDefinition<PublicIPPrefixPropertiesFormat> {
    return {
      type: 'Microsoft.Network/publicIPPrefixes',
      apiVersion: '2018-07-01',
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
      apiVersion: '2018-07-01',
      name: name,
      location,
      properties,
    };
  }
}
export namespace routeFilters {
  export namespace routeFilterRules {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: RouteFilterRulePropertiesFormat, location: Expressionable<string>): ResourceDefinition<RouteFilterRulePropertiesFormat> {
      return {
        type: 'Microsoft.Network/routeFilters/routeFilterRules',
        apiVersion: '2018-07-01',
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
      apiVersion: '2018-07-01',
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
        apiVersion: '2018-07-01',
        name: concatResourceName(...name),
        properties,
      };
    }
  }
}
export namespace serviceEndpointPolicies {
  export function create(name: Expressionable<string>, properties: ServiceEndpointPolicyPropertiesFormat, location: Expressionable<string>): ResourceDefinition<ServiceEndpointPolicyPropertiesFormat> {
    return {
      type: 'Microsoft.Network/serviceEndpointPolicies',
      apiVersion: '2018-07-01',
      name: name,
      location,
      properties,
    };
  }
}
export namespace serviceEndpointPolicies {
  export namespace serviceEndpointPolicyDefinitions {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: ServiceEndpointPolicyDefinitionPropertiesFormat): ResourceDefinition<ServiceEndpointPolicyDefinitionPropertiesFormat> {
      return {
        type: 'Microsoft.Network/serviceEndpointPolicies/serviceEndpointPolicyDefinitions',
        apiVersion: '2018-07-01',
        name: concatResourceName(...name),
        properties,
      };
    }
  }
}
export namespace virtualHubs {
  export function create(name: Expressionable<string>, properties: VirtualHubProperties, location: Expressionable<string>): ResourceDefinition<VirtualHubProperties> {
    return {
      type: 'Microsoft.Network/virtualHubs',
      apiVersion: '2018-07-01',
      name: name,
      location,
      properties,
    };
  }
}
export namespace virtualNetworkGateways {
  export function create(name: Expressionable<string>, properties: VirtualNetworkGatewayPropertiesFormat, location: Expressionable<string>): ResourceDefinition<VirtualNetworkGatewayPropertiesFormat> {
    return {
      type: 'Microsoft.Network/virtualNetworkGateways',
      apiVersion: '2018-07-01',
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
      apiVersion: '2018-07-01',
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
        apiVersion: '2018-07-01',
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
        apiVersion: '2018-07-01',
        name: concatResourceName(...name),
        properties,
      };
    }
  }
}
export namespace virtualWans {
  export function create(name: Expressionable<string>, properties: VirtualWanProperties, location: Expressionable<string>): ResourceDefinition<VirtualWanProperties> {
    return {
      type: 'Microsoft.Network/virtualWans',
      apiVersion: '2018-07-01',
      name: name,
      location,
      properties,
    };
  }
}
export namespace vpnGateways {
  export function create(name: Expressionable<string>, properties: VpnGatewayProperties, location: Expressionable<string>): ResourceDefinition<VpnGatewayProperties> {
    return {
      type: 'Microsoft.Network/vpnGateways',
      apiVersion: '2018-07-01',
      name: name,
      location,
      properties,
    };
  }
}
export namespace vpnGateways {
  export namespace vpnConnections {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: VpnConnectionProperties): ResourceDefinition<VpnConnectionProperties> {
      return {
        type: 'Microsoft.Network/vpnGateways/vpnConnections',
        apiVersion: '2018-07-01',
        name: concatResourceName(...name),
        properties,
      };
    }
  }
}
export namespace vpnSites {
  export function create(name: Expressionable<string>, properties: VpnSiteProperties, location: Expressionable<string>): ResourceDefinition<VpnSiteProperties> {
    return {
      type: 'Microsoft.Network/vpnSites',
      apiVersion: '2018-07-01',
      name: name,
      location,
      properties,
    };
  }
}