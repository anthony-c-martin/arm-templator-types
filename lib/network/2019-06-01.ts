import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface AddressSpace {
  addressPrefixes: Expressionable<string[]>;
}

export interface ApplicationGatewayAuthenticationCertificate {
  properties?: Expressionable<ApplicationGatewayAuthenticationCertificatePropertiesFormat>;
  name?: Expressionable<string>;
}

export interface ApplicationGatewayAuthenticationCertificatePropertiesFormat {
  data?: Expressionable<string>;
}

export interface ApplicationGatewayAutoscaleConfiguration {
  minCapacity: Expressionable<number>;
  maxCapacity?: Expressionable<number>;
}

export interface ApplicationGatewayBackendAddress {
  fqdn?: Expressionable<string>;
  ipAddress?: Expressionable<string>;
}

export interface ApplicationGatewayBackendAddressPool {
  properties?: Expressionable<ApplicationGatewayBackendAddressPoolPropertiesFormat>;
  name?: Expressionable<string>;
}

export interface ApplicationGatewayBackendAddressPoolPropertiesFormat {
  backendAddresses?: Expressionable<ApplicationGatewayBackendAddress[]>;
}

export interface ApplicationGatewayBackendHttpSettings {
  properties?: Expressionable<ApplicationGatewayBackendHttpSettingsPropertiesFormat>;
  name?: Expressionable<string>;
}

export interface ApplicationGatewayBackendHttpSettingsPropertiesFormat {
  port?: Expressionable<number>;
  protocol?: Expressionable<('Http' | 'Https')>;
  cookieBasedAffinity?: Expressionable<('Enabled' | 'Disabled')>;
  requestTimeout?: Expressionable<number>;
  probe?: Expressionable<SubResource>;
  authenticationCertificates?: Expressionable<SubResource[]>;
  trustedRootCertificates?: Expressionable<SubResource[]>;
  connectionDraining?: Expressionable<ApplicationGatewayConnectionDraining>;
  hostName?: Expressionable<string>;
  pickHostNameFromBackendAddress?: Expressionable<boolean>;
  affinityCookieName?: Expressionable<string>;
  probeEnabled?: Expressionable<boolean>;
  path?: Expressionable<string>;
}

export interface ApplicationGatewayConnectionDraining {
  enabled: Expressionable<boolean>;
  drainTimeoutInSec: Expressionable<number>;
}

export interface ApplicationGatewayCustomError {
  statusCode?: Expressionable<('HttpStatus403' | 'HttpStatus502')>;
  customErrorPageUrl?: Expressionable<string>;
}

export interface ApplicationGatewayFirewallDisabledRuleGroup {
  ruleGroupName: Expressionable<string>;
  rules?: Expressionable<number[]>;
}

export interface ApplicationGatewayFirewallExclusion {
  matchVariable: Expressionable<string>;
  selectorMatchOperator: Expressionable<string>;
  selector: Expressionable<string>;
}

export interface ApplicationGatewayFrontendIPConfiguration {
  properties?: Expressionable<ApplicationGatewayFrontendIPConfigurationPropertiesFormat>;
  name?: Expressionable<string>;
}

export interface ApplicationGatewayFrontendIPConfigurationPropertiesFormat {
  privateIPAddress?: Expressionable<string>;
  privateIPAllocationMethod?: Expressionable<('Static' | 'Dynamic')>;
  subnet?: Expressionable<SubResource>;
  publicIPAddress?: Expressionable<SubResource>;
}

export interface ApplicationGatewayFrontendPort {
  properties?: Expressionable<ApplicationGatewayFrontendPortPropertiesFormat>;
  name?: Expressionable<string>;
}

export interface ApplicationGatewayFrontendPortPropertiesFormat {
  port?: Expressionable<number>;
}

export interface ApplicationGatewayHeaderConfiguration {
  headerName?: Expressionable<string>;
  headerValue?: Expressionable<string>;
}

export interface ApplicationGatewayHttpListener {
  properties?: Expressionable<ApplicationGatewayHttpListenerPropertiesFormat>;
  name?: Expressionable<string>;
}

export interface ApplicationGatewayHttpListenerPropertiesFormat {
  frontendIPConfiguration?: Expressionable<SubResource>;
  frontendPort?: Expressionable<SubResource>;
  protocol?: Expressionable<('Http' | 'Https')>;
  hostName?: Expressionable<string>;
  sslCertificate?: Expressionable<SubResource>;
  requireServerNameIndication?: Expressionable<boolean>;
  customErrorConfigurations?: Expressionable<ApplicationGatewayCustomError[]>;
}

export interface ApplicationGatewayIPConfiguration {
  properties?: Expressionable<ApplicationGatewayIPConfigurationPropertiesFormat>;
  name?: Expressionable<string>;
}

export interface ApplicationGatewayIPConfigurationPropertiesFormat {
  subnet?: Expressionable<SubResource>;
}

export interface ApplicationGatewayPathRule {
  properties?: Expressionable<ApplicationGatewayPathRulePropertiesFormat>;
  name?: Expressionable<string>;
}

export interface ApplicationGatewayPathRulePropertiesFormat {
  paths?: Expressionable<string[]>;
  backendAddressPool?: Expressionable<SubResource>;
  backendHttpSettings?: Expressionable<SubResource>;
  redirectConfiguration?: Expressionable<SubResource>;
  rewriteRuleSet?: Expressionable<SubResource>;
}

export interface ApplicationGatewayProbe {
  properties?: Expressionable<ApplicationGatewayProbePropertiesFormat>;
  name?: Expressionable<string>;
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
  port?: Expressionable<number>;
}

export interface ApplicationGatewayPropertiesFormat {
  sku?: Expressionable<ApplicationGatewaySku>;
  sslPolicy?: Expressionable<ApplicationGatewaySslPolicy>;
  gatewayIPConfigurations?: Expressionable<ApplicationGatewayIPConfiguration[]>;
  authenticationCertificates?: Expressionable<ApplicationGatewayAuthenticationCertificate[]>;
  trustedRootCertificates?: Expressionable<ApplicationGatewayTrustedRootCertificate[]>;
  sslCertificates?: Expressionable<ApplicationGatewaySslCertificate[]>;
  frontendIPConfigurations?: Expressionable<ApplicationGatewayFrontendIPConfiguration[]>;
  frontendPorts?: Expressionable<ApplicationGatewayFrontendPort[]>;
  probes?: Expressionable<ApplicationGatewayProbe[]>;
  backendAddressPools?: Expressionable<ApplicationGatewayBackendAddressPool[]>;
  backendHttpSettingsCollection?: Expressionable<ApplicationGatewayBackendHttpSettings[]>;
  httpListeners?: Expressionable<ApplicationGatewayHttpListener[]>;
  urlPathMaps?: Expressionable<ApplicationGatewayUrlPathMap[]>;
  requestRoutingRules?: Expressionable<ApplicationGatewayRequestRoutingRule[]>;
  rewriteRuleSets?: Expressionable<ApplicationGatewayRewriteRuleSet[]>;
  redirectConfigurations?: Expressionable<ApplicationGatewayRedirectConfiguration[]>;
  webApplicationFirewallConfiguration?: Expressionable<ApplicationGatewayWebApplicationFirewallConfiguration>;
  firewallPolicy?: Expressionable<SubResource>;
  enableHttp2?: Expressionable<boolean>;
  enableFips?: Expressionable<boolean>;
  autoscaleConfiguration?: Expressionable<ApplicationGatewayAutoscaleConfiguration>;
  customErrorConfigurations?: Expressionable<ApplicationGatewayCustomError[]>;
}

export interface ApplicationGatewayRedirectConfiguration {
  properties?: Expressionable<ApplicationGatewayRedirectConfigurationPropertiesFormat>;
  name?: Expressionable<string>;
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
}

export interface ApplicationGatewayRequestRoutingRulePropertiesFormat {
  ruleType?: Expressionable<('Basic' | 'PathBasedRouting')>;
  backendAddressPool?: Expressionable<SubResource>;
  backendHttpSettings?: Expressionable<SubResource>;
  httpListener?: Expressionable<SubResource>;
  urlPathMap?: Expressionable<SubResource>;
  rewriteRuleSet?: Expressionable<SubResource>;
  redirectConfiguration?: Expressionable<SubResource>;
}

export interface ApplicationGatewayRewriteRule {
  name?: Expressionable<string>;
  ruleSequence?: Expressionable<number>;
  conditions?: Expressionable<ApplicationGatewayRewriteRuleCondition[]>;
  actionSet?: Expressionable<ApplicationGatewayRewriteRuleActionSet>;
}

export interface ApplicationGatewayRewriteRuleActionSet {
  requestHeaderConfigurations?: Expressionable<ApplicationGatewayHeaderConfiguration[]>;
  responseHeaderConfigurations?: Expressionable<ApplicationGatewayHeaderConfiguration[]>;
}

export interface ApplicationGatewayRewriteRuleCondition {
  variable?: Expressionable<string>;
  pattern?: Expressionable<string>;
  ignoreCase?: Expressionable<boolean>;
  negate?: Expressionable<boolean>;
}

export interface ApplicationGatewayRewriteRuleSet {
  properties?: Expressionable<ApplicationGatewayRewriteRuleSetPropertiesFormat>;
  name?: Expressionable<string>;
}

export interface ApplicationGatewayRewriteRuleSetPropertiesFormat {
  rewriteRules?: Expressionable<ApplicationGatewayRewriteRule[]>;
}

export interface ApplicationGatewaySku {
  name?: Expressionable<('Standard_Small' | 'Standard_Medium' | 'Standard_Large' | 'WAF_Medium' | 'WAF_Large' | 'Standard_v2' | 'WAF_v2')>;
  tier?: Expressionable<('Standard' | 'WAF' | 'Standard_v2' | 'WAF_v2')>;
  capacity?: Expressionable<number>;
}

export interface ApplicationGatewaySslCertificate {
  properties?: Expressionable<ApplicationGatewaySslCertificatePropertiesFormat>;
  name?: Expressionable<string>;
}

export interface ApplicationGatewaySslCertificatePropertiesFormat {
  data?: Expressionable<string>;
  password?: Expressionable<string>;
  keyVaultSecretId?: Expressionable<string>;
}

export interface ApplicationGatewaySslPolicy {
  disabledSslProtocols?: Expressionable<('TLSv1_0' | 'TLSv1_1' | 'TLSv1_2')[]>;
  policyType?: Expressionable<('Predefined' | 'Custom')>;
  policyName?: Expressionable<('AppGwSslPolicy20150501' | 'AppGwSslPolicy20170401' | 'AppGwSslPolicy20170401S')>;
  cipherSuites?: Expressionable<('TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384' | 'TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256' | 'TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA' | 'TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA' | 'TLS_DHE_RSA_WITH_AES_256_GCM_SHA384' | 'TLS_DHE_RSA_WITH_AES_128_GCM_SHA256' | 'TLS_DHE_RSA_WITH_AES_256_CBC_SHA' | 'TLS_DHE_RSA_WITH_AES_128_CBC_SHA' | 'TLS_RSA_WITH_AES_256_GCM_SHA384' | 'TLS_RSA_WITH_AES_128_GCM_SHA256' | 'TLS_RSA_WITH_AES_256_CBC_SHA256' | 'TLS_RSA_WITH_AES_128_CBC_SHA256' | 'TLS_RSA_WITH_AES_256_CBC_SHA' | 'TLS_RSA_WITH_AES_128_CBC_SHA' | 'TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384' | 'TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256' | 'TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384' | 'TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256' | 'TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA' | 'TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA' | 'TLS_DHE_DSS_WITH_AES_256_CBC_SHA256' | 'TLS_DHE_DSS_WITH_AES_128_CBC_SHA256' | 'TLS_DHE_DSS_WITH_AES_256_CBC_SHA' | 'TLS_DHE_DSS_WITH_AES_128_CBC_SHA' | 'TLS_RSA_WITH_3DES_EDE_CBC_SHA' | 'TLS_DHE_DSS_WITH_3DES_EDE_CBC_SHA' | 'TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256' | 'TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384')[]>;
  minProtocolVersion?: Expressionable<('TLSv1_0' | 'TLSv1_1' | 'TLSv1_2')>;
}

export interface ApplicationGatewayTrustedRootCertificate {
  properties?: Expressionable<ApplicationGatewayTrustedRootCertificatePropertiesFormat>;
  name?: Expressionable<string>;
}

export interface ApplicationGatewayTrustedRootCertificatePropertiesFormat {
  data?: Expressionable<string>;
  keyVaultSecretId?: Expressionable<string>;
}

export interface ApplicationGatewayUrlPathMap {
  properties?: Expressionable<ApplicationGatewayUrlPathMapPropertiesFormat>;
  name?: Expressionable<string>;
}

export interface ApplicationGatewayUrlPathMapPropertiesFormat {
  defaultBackendAddressPool?: Expressionable<SubResource>;
  defaultBackendHttpSettings?: Expressionable<SubResource>;
  defaultRewriteRuleSet?: Expressionable<SubResource>;
  defaultRedirectConfiguration?: Expressionable<SubResource>;
  pathRules?: Expressionable<ApplicationGatewayPathRule[]>;
}

export interface ApplicationGatewayWebApplicationFirewallConfiguration {
  enabled: Expressionable<boolean>;
  firewallMode: Expressionable<('Detection' | 'Prevention')>;
  ruleSetType: Expressionable<string>;
  ruleSetVersion: Expressionable<string>;
  disabledRuleGroups?: Expressionable<ApplicationGatewayFirewallDisabledRuleGroup[]>;
  requestBodyCheck?: Expressionable<boolean>;
  maxRequestBodySize?: Expressionable<number>;
  maxRequestBodySizeInKb?: Expressionable<number>;
  fileUploadLimitInMb?: Expressionable<number>;
  exclusions?: Expressionable<ApplicationGatewayFirewallExclusion[]>;
}

export interface ApplicationRuleCondition {
  sourceAddresses?: Expressionable<string[]>;
  destinationAddresses?: Expressionable<string[]>;
  protocols?: Expressionable<FirewallPolicyRuleConditionApplicationProtocol[]>;
  targetFqdns?: Expressionable<string[]>;
  fqdnTags?: Expressionable<string[]>;
  ruleConditionType: Expressionable<string>;
}

export interface ApplicationSecurityGroupPropertiesFormat {
}

export interface AuthorizationPropertiesFormat {
}

export interface AzureFirewallApplicationRule {
  name?: Expressionable<string>;
  description?: Expressionable<string>;
  sourceAddresses?: Expressionable<string[]>;
  protocols?: Expressionable<AzureFirewallApplicationRuleProtocol[]>;
  targetFqdns?: Expressionable<string[]>;
  fqdnTags?: Expressionable<string[]>;
}

export interface AzureFirewallApplicationRuleCollection {
  properties?: Expressionable<AzureFirewallApplicationRuleCollectionPropertiesFormat>;
  name?: Expressionable<string>;
}

export interface AzureFirewallApplicationRuleCollectionPropertiesFormat {
  priority?: Expressionable<number>;
  action?: Expressionable<AzureFirewallRCAction>;
  rules?: Expressionable<AzureFirewallApplicationRule[]>;
}

export interface AzureFirewallApplicationRuleProtocol {
  protocolType?: Expressionable<('Http' | 'Https')>;
  port?: Expressionable<number>;
}

export interface AzureFirewallIPConfiguration {
  properties?: Expressionable<AzureFirewallIPConfigurationPropertiesFormat>;
  name?: Expressionable<string>;
}

export interface AzureFirewallIPConfigurationPropertiesFormat {
  subnet?: Expressionable<SubResource>;
  publicIPAddress?: Expressionable<SubResource>;
}

export interface AzureFirewallNatRCAction {
  type?: Expressionable<('Snat' | 'Dnat')>;
}

export interface AzureFirewallNatRule {
  name?: Expressionable<string>;
  description?: Expressionable<string>;
  sourceAddresses?: Expressionable<string[]>;
  destinationAddresses?: Expressionable<string[]>;
  destinationPorts?: Expressionable<string[]>;
  protocols?: Expressionable<('TCP' | 'UDP' | 'Any' | 'ICMP')[]>;
  translatedAddress?: Expressionable<string>;
  translatedPort?: Expressionable<string>;
}

export interface AzureFirewallNatRuleCollection {
  properties?: Expressionable<AzureFirewallNatRuleCollectionProperties>;
  name?: Expressionable<string>;
}

export interface AzureFirewallNatRuleCollectionProperties {
  priority?: Expressionable<number>;
  action?: Expressionable<AzureFirewallNatRCAction>;
  rules?: Expressionable<AzureFirewallNatRule[]>;
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
}

export interface AzureFirewallPropertiesFormat {
  applicationRuleCollections?: Expressionable<AzureFirewallApplicationRuleCollection[]>;
  natRuleCollections?: Expressionable<AzureFirewallNatRuleCollection[]>;
  networkRuleCollections?: Expressionable<AzureFirewallNetworkRuleCollection[]>;
  ipConfigurations?: Expressionable<AzureFirewallIPConfiguration[]>;
  threatIntelMode?: Expressionable<('Alert' | 'Deny' | 'Off')>;
  virtualHub?: Expressionable<SubResource>;
  firewallPolicy?: Expressionable<SubResource>;
}

export interface AzureFirewallRCAction {
  type?: Expressionable<('Allow' | 'Deny')>;
}

export interface BackendAddressPool {
  properties?: Expressionable<BackendAddressPoolPropertiesFormat>;
  name: Expressionable<string>;
}

export interface BackendAddressPoolPropertiesFormat {
}

export interface BastionHostIPConfiguration {
  properties?: Expressionable<BastionHostIPConfigurationPropertiesFormat>;
  name?: Expressionable<string>;
}

export interface BastionHostIPConfigurationPropertiesFormat {
  subnet: Expressionable<SubResource>;
  publicIPAddress: Expressionable<SubResource>;
  privateIPAllocationMethod?: Expressionable<('Static' | 'Dynamic')>;
}

export interface BastionHostPropertiesFormat {
  ipConfigurations?: Expressionable<BastionHostIPConfiguration[]>;
  dnsName?: Expressionable<string>;
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

export interface ContainerNetworkInterfaceConfiguration {
  properties?: Expressionable<ContainerNetworkInterfaceConfigurationPropertiesFormat>;
  name?: Expressionable<string>;
}

export interface ContainerNetworkInterfaceConfigurationPropertiesFormat {
  ipConfigurations?: Expressionable<IPConfigurationProfile[]>;
  containerNetworkInterfaces?: Expressionable<SubResource[]>;
}

export interface DdosCustomPolicyPropertiesFormat {
  protocolCustomSettings?: Expressionable<ProtocolCustomSettingsFormat[]>;
}

export interface DdosProtectionPlanPropertiesFormat {
}

export interface DdosSettings {
  ddosCustomPolicy?: Expressionable<SubResource>;
  protectionCoverage?: Expressionable<('Basic' | 'Standard')>;
}

export interface Delegation {
  properties?: Expressionable<ServiceDelegationPropertiesFormat>;
  name: Expressionable<string>;
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
  legacyMode?: Expressionable<number>;
  customerASN?: Expressionable<number>;
  routingRegistryName?: Expressionable<string>;
}

export interface ExpressRouteCircuitPeeringPropertiesFormat {
  peeringType?: Expressionable<('AzurePublicPeering' | 'AzurePrivatePeering' | 'MicrosoftPeering')>;
  state?: Expressionable<('Disabled' | 'Enabled')>;
  peerASN?: Expressionable<number>;
  primaryPeerAddressPrefix?: Expressionable<string>;
  secondaryPeerAddressPrefix?: Expressionable<string>;
  sharedKey?: Expressionable<string>;
  vlanId?: Expressionable<number>;
  microsoftPeeringConfig?: Expressionable<ExpressRouteCircuitPeeringConfig>;
  stats?: Expressionable<ExpressRouteCircuitStats>;
  gatewayManagerEtag?: Expressionable<string>;
  routeFilter?: Expressionable<SubResource>;
  ipv6PeeringConfig?: Expressionable<Ipv6ExpressRouteCircuitPeeringConfig>;
  expressRouteConnection?: Expressionable<SubResource>;
}

export interface ExpressRouteCircuitPropertiesFormat {
  allowClassicOperations?: Expressionable<boolean>;
  authorizations?: Expressionable<ExpressRouteCircuitAuthorization[]>;
  peerings?: Expressionable<ExpressRouteCircuitPeering[]>;
  serviceProviderNotes?: Expressionable<string>;
  serviceProviderProperties?: Expressionable<ExpressRouteCircuitServiceProviderProperties>;
  expressRoutePort?: Expressionable<SubResource>;
  bandwidthInGbps?: Expressionable<number>;
  gatewayManagerEtag?: Expressionable<string>;
}

export interface ExpressRouteCircuitServiceProviderProperties {
  serviceProviderName?: Expressionable<string>;
  peeringLocation?: Expressionable<string>;
  bandwidthInMbps?: Expressionable<number>;
}

export interface ExpressRouteCircuitSku {
  name?: Expressionable<string>;
  tier?: Expressionable<('Standard' | 'Premium' | 'Basic' | 'Local')>;
  family?: Expressionable<('UnlimitedData' | 'MeteredData')>;
}

export interface ExpressRouteCircuitStats {
  primarybytesIn?: Expressionable<number>;
  primarybytesOut?: Expressionable<number>;
  secondarybytesIn?: Expressionable<number>;
  secondarybytesOut?: Expressionable<number>;
}

export interface ExpressRouteConnectionProperties {
  expressRouteCircuitPeering: Expressionable<SubResource>;
  authorizationKey?: Expressionable<string>;
  routingWeight?: Expressionable<number>;
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
  ipv6PeeringConfig?: Expressionable<Ipv6ExpressRouteCircuitPeeringConfig>;
}

export interface ExpressRouteCrossConnectionProperties {
  peeringLocation?: Expressionable<string>;
  bandwidthInMbps?: Expressionable<number>;
  expressRouteCircuit?: Expressionable<SubResource>;
  serviceProviderProvisioningState?: Expressionable<('NotProvisioned' | 'Provisioning' | 'Provisioned' | 'Deprovisioning')>;
  serviceProviderNotes?: Expressionable<string>;
  peerings?: Expressionable<ExpressRouteCrossConnectionPeering[]>;
}

export interface ExpressRouteGatewayProperties {
  autoScaleConfiguration?: Expressionable<ExpressRouteGatewayPropertiesAutoScaleConfiguration>;
  virtualHub: Expressionable<SubResource>;
}

export interface ExpressRouteGatewayPropertiesAutoScaleConfiguration {
  bounds?: Expressionable<ExpressRouteGatewayPropertiesAutoScaleConfigurationBounds>;
}

export interface ExpressRouteGatewayPropertiesAutoScaleConfigurationBounds {
  min?: Expressionable<number>;
  max?: Expressionable<number>;
}

export interface ExpressRouteLink {
  properties?: Expressionable<ExpressRouteLinkPropertiesFormat>;
  name?: Expressionable<string>;
}

export interface ExpressRouteLinkPropertiesFormat {
  adminState?: Expressionable<('Enabled' | 'Disabled')>;
}

export interface ExpressRoutePortPropertiesFormat {
  peeringLocation?: Expressionable<string>;
  bandwidthInGbps?: Expressionable<number>;
  encapsulation?: Expressionable<('Dot1Q' | 'QinQ')>;
  links?: Expressionable<ExpressRouteLink[]>;
}

export interface FirewallPolicyFilterRule {
  action?: Expressionable<FirewallPolicyFilterRuleAction>;
  ruleConditions?: Expressionable<FirewallPolicyRuleCondition[]>;
  ruleType: Expressionable<string>;
}

export interface FirewallPolicyFilterRuleAction {
  type?: Expressionable<('Allow' | 'Deny' | 'Alert ')>;
}

export interface FirewallPolicyNatRule {
  action?: Expressionable<FirewallPolicyNatRuleAction>;
  translatedAddress?: Expressionable<string>;
  translatedPort?: Expressionable<string>;
  ruleCondition?: Expressionable<FirewallPolicyRuleCondition>;
  ruleType: Expressionable<string>;
}

export interface FirewallPolicyNatRuleAction {
  type?: Expressionable<('DNAT' | 'SNAT')>;
}

export interface FirewallPolicyPropertiesFormat {
  basePolicy?: Expressionable<SubResource>;
  threatIntelMode?: Expressionable<('Alert' | 'Deny' | 'Off')>;
}

export interface FirewallPolicyRule {
  name?: Expressionable<string>;
  priority?: Expressionable<number>;
  ruleType: Expressionable<string>;
}

export interface FirewallPolicyRuleCondition {
  name?: Expressionable<string>;
  description?: Expressionable<string>;
  ruleConditionType: Expressionable<string>;
}

export interface FirewallPolicyRuleConditionApplicationProtocol {
  protocolType?: Expressionable<('Http' | 'Https')>;
  port?: Expressionable<number>;
}

export interface FirewallPolicyRuleGroupProperties {
  priority?: Expressionable<number>;
  rules?: Expressionable<FirewallPolicyRule[]>;
}

export interface FrontendIPConfiguration {
  properties?: Expressionable<FrontendIPConfigurationPropertiesFormat>;
  name: Expressionable<string>;
  zones?: Expressionable<string[]>;
}

export interface FrontendIPConfigurationPropertiesFormat {
  privateIPAddress?: Expressionable<string>;
  privateIPAllocationMethod?: Expressionable<('Static' | 'Dynamic')>;
  privateIPAddressVersion?: Expressionable<('IPv4' | 'IPv6')>;
  subnet?: Expressionable<SubResource>;
  publicIPAddress?: Expressionable<SubResource>;
  publicIPPrefix?: Expressionable<SubResource>;
}

export interface HubVirtualNetworkConnection {
  properties?: Expressionable<HubVirtualNetworkConnectionProperties>;
  name?: Expressionable<string>;
}

export interface HubVirtualNetworkConnectionProperties {
  remoteVirtualNetwork?: Expressionable<SubResource>;
  allowHubToRemoteVnetTransit?: Expressionable<boolean>;
  allowRemoteVnetToUseHubVnetGateways?: Expressionable<boolean>;
  enableInternetSecurity?: Expressionable<boolean>;
}

export interface InboundNatPool {
  properties?: Expressionable<InboundNatPoolPropertiesFormat>;
  name: Expressionable<string>;
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
}

export interface InboundNatRule {
  properties?: Expressionable<InboundNatRulePropertiesFormat>;
  name: Expressionable<string>;
}

export interface InboundNatRulePropertiesFormat {
  frontendIPConfiguration: Expressionable<SubResource>;
  protocol: Expressionable<('Udp' | 'Tcp' | 'All')>;
  frontendPort: Expressionable<number>;
  backendPort: Expressionable<number>;
  idleTimeoutInMinutes?: Expressionable<number>;
  enableFloatingIP?: Expressionable<boolean>;
  enableTcpReset?: Expressionable<boolean>;
}

export interface IPConfigurationProfile {
  properties?: Expressionable<IPConfigurationProfilePropertiesFormat>;
  name?: Expressionable<string>;
}

export interface IPConfigurationProfilePropertiesFormat {
  subnet?: Expressionable<SubResource>;
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
}

export interface LoadBalancerSku {
  name?: Expressionable<('Basic' | 'Standard')>;
}

export interface LoadBalancingRule {
  properties?: Expressionable<LoadBalancingRulePropertiesFormat>;
  name: Expressionable<string>;
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
}

export interface LocalNetworkGatewayPropertiesFormat {
  localNetworkAddressSpace?: Expressionable<AddressSpace>;
  gatewayIpAddress?: Expressionable<string>;
  bgpSettings?: Expressionable<BgpSettings>;
}

export interface ManagedServiceIdentity {
  type?: Expressionable<('SystemAssigned' | 'UserAssigned' | 'SystemAssigned, UserAssigned' | 'None')>;
}

export interface ManagedServiceIdentityUserAssignedIdentitiesValue {
}

export interface MatchCondition {
  matchVariables: Expressionable<MatchVariable[]>;
  operator: Expressionable<('IPMatch' | 'Equal' | 'Contains' | 'LessThan' | 'GreaterThan' | 'LessThanOrEqual' | 'GreaterThanOrEqual' | 'BeginsWith' | 'EndsWith' | 'Regex')>;
  negationConditon?: Expressionable<boolean>;
  matchValues: Expressionable<string[]>;
  transforms?: Expressionable<('Lowercase' | 'Trim' | 'UrlDecode' | 'UrlEncode' | 'RemoveNulls' | 'HtmlEntityDecode')[]>;
}

export interface MatchVariable {
  variableName: Expressionable<('RemoteAddr' | 'RequestMethod' | 'QueryString' | 'PostArgs' | 'RequestUri' | 'RequestHeaders' | 'RequestBody' | 'RequestCookies')>;
  selector?: Expressionable<string>;
}

export interface NatGatewayPropertiesFormat {
  idleTimeoutInMinutes?: Expressionable<number>;
  publicIpAddresses?: Expressionable<SubResource[]>;
  publicIpPrefixes?: Expressionable<SubResource[]>;
}

export interface NatGatewaySku {
  name?: Expressionable<('Standard')>;
}

export interface NetworkInterfaceDnsSettings {
  dnsServers?: Expressionable<string[]>;
  internalDnsNameLabel?: Expressionable<string>;
}

export interface NetworkInterfaceIPConfiguration {
  properties?: Expressionable<NetworkInterfaceIPConfigurationPropertiesFormat>;
  name: Expressionable<string>;
}

export interface NetworkInterfaceIPConfigurationPropertiesFormat {
  virtualNetworkTaps?: Expressionable<SubResource[]>;
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
}

export interface NetworkInterfacePropertiesFormat {
  networkSecurityGroup?: Expressionable<SubResource>;
  ipConfigurations: Expressionable<NetworkInterfaceIPConfiguration[]>;
  dnsSettings?: Expressionable<NetworkInterfaceDnsSettings>;
  enableAcceleratedNetworking?: Expressionable<boolean>;
  enableIPForwarding?: Expressionable<boolean>;
}

export interface NetworkInterfaceTapConfigurationPropertiesFormat {
  virtualNetworkTap?: Expressionable<SubResource>;
}

export interface NetworkProfilePropertiesFormat {
  containerNetworkInterfaceConfigurations?: Expressionable<ContainerNetworkInterfaceConfiguration[]>;
}

export interface NetworkRuleCondition {
  ipProtocols?: Expressionable<('TCP' | 'UDP' | 'Any' | 'ICMP')[]>;
  sourceAddresses?: Expressionable<string[]>;
  destinationAddresses?: Expressionable<string[]>;
  destinationPorts?: Expressionable<string[]>;
  ruleConditionType: Expressionable<string>;
}

export interface NetworkSecurityGroupPropertiesFormat {
  securityRules?: Expressionable<SecurityRule[]>;
}

export interface NetworkWatcherPropertiesFormat {
}

export interface OutboundRule {
  properties?: Expressionable<OutboundRulePropertiesFormat>;
  name?: Expressionable<string>;
}

export interface OutboundRulePropertiesFormat {
  allocatedOutboundPorts?: Expressionable<number>;
  frontendIPConfigurations: Expressionable<SubResource[]>;
  backendAddressPool: Expressionable<SubResource>;
  protocol: Expressionable<('Tcp' | 'Udp' | 'All')>;
  enableTcpReset?: Expressionable<boolean>;
  idleTimeoutInMinutes?: Expressionable<number>;
}

export interface P2SVpnGatewayProperties {
  virtualHub?: Expressionable<SubResource>;
  vpnGatewayScaleUnit?: Expressionable<number>;
  p2SVpnServerConfiguration?: Expressionable<SubResource>;
  vpnClientAddressPool?: Expressionable<AddressSpace>;
  customRoutes?: Expressionable<AddressSpace>;
}

export interface P2SVpnServerConfigRadiusClientRootCertificate {
  properties?: Expressionable<P2SVpnServerConfigRadiusClientRootCertificatePropertiesFormat>;
  name?: Expressionable<string>;
}

export interface P2SVpnServerConfigRadiusClientRootCertificatePropertiesFormat {
  thumbprint?: Expressionable<string>;
}

export interface P2SVpnServerConfigRadiusServerRootCertificate {
  properties: Expressionable<P2SVpnServerConfigRadiusServerRootCertificatePropertiesFormat>;
  name?: Expressionable<string>;
}

export interface P2SVpnServerConfigRadiusServerRootCertificatePropertiesFormat {
  publicCertData: Expressionable<string>;
}

export interface P2SVpnServerConfiguration {
  properties?: Expressionable<P2SVpnServerConfigurationProperties>;
  name?: Expressionable<string>;
}

export interface P2SVpnServerConfigurationProperties {
  name?: Expressionable<string>;
  vpnProtocols?: Expressionable<('IkeV2' | 'OpenVPN')[]>;
  p2SVpnServerConfigVpnClientRootCertificates?: Expressionable<P2SVpnServerConfigVpnClientRootCertificate[]>;
  p2SVpnServerConfigVpnClientRevokedCertificates?: Expressionable<P2SVpnServerConfigVpnClientRevokedCertificate[]>;
  p2SVpnServerConfigRadiusServerRootCertificates?: Expressionable<P2SVpnServerConfigRadiusServerRootCertificate[]>;
  p2SVpnServerConfigRadiusClientRootCertificates?: Expressionable<P2SVpnServerConfigRadiusClientRootCertificate[]>;
  vpnClientIpsecPolicies?: Expressionable<IpsecPolicy[]>;
  radiusServerAddress?: Expressionable<string>;
  radiusServerSecret?: Expressionable<string>;
}

export interface P2SVpnServerConfigVpnClientRevokedCertificate {
  properties?: Expressionable<P2SVpnServerConfigVpnClientRevokedCertificatePropertiesFormat>;
  name?: Expressionable<string>;
}

export interface P2SVpnServerConfigVpnClientRevokedCertificatePropertiesFormat {
  thumbprint?: Expressionable<string>;
}

export interface P2SVpnServerConfigVpnClientRootCertificate {
  properties: Expressionable<P2SVpnServerConfigVpnClientRootCertificatePropertiesFormat>;
  name?: Expressionable<string>;
}

export interface P2SVpnServerConfigVpnClientRootCertificatePropertiesFormat {
  publicCertData: Expressionable<string>;
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

export interface PolicySettings {
  enabledState?: Expressionable<('Disabled' | 'Enabled')>;
  mode?: Expressionable<('Prevention' | 'Detection')>;
}

export interface PrivateEndpointConnectionProperties {
  privateLinkServiceConnectionState?: Expressionable<PrivateLinkServiceConnectionState>;
}

export interface PrivateEndpointProperties {
  subnet?: Expressionable<SubResource>;
  privateLinkServiceConnections?: Expressionable<PrivateLinkServiceConnection[]>;
  manualPrivateLinkServiceConnections?: Expressionable<PrivateLinkServiceConnection[]>;
}

export interface PrivateLinkServiceConnection {
  properties?: Expressionable<PrivateLinkServiceConnectionProperties>;
  name?: Expressionable<string>;
}

export interface PrivateLinkServiceConnectionProperties {
  privateLinkServiceId?: Expressionable<string>;
  groupIds?: Expressionable<string[]>;
  requestMessage?: Expressionable<string>;
  privateLinkServiceConnectionState?: Expressionable<PrivateLinkServiceConnectionState>;
}

export interface PrivateLinkServiceConnectionState {
  status?: Expressionable<string>;
  description?: Expressionable<string>;
  actionRequired?: Expressionable<string>;
}

export interface PrivateLinkServiceIpConfiguration {
  properties?: Expressionable<PrivateLinkServiceIpConfigurationProperties>;
  name?: Expressionable<string>;
}

export interface PrivateLinkServiceIpConfigurationProperties {
  privateIPAddress?: Expressionable<string>;
  privateIPAllocationMethod?: Expressionable<('Static' | 'Dynamic')>;
  subnet?: Expressionable<SubResource>;
  primary?: Expressionable<boolean>;
  privateIPAddressVersion?: Expressionable<('IPv4' | 'IPv6')>;
}

export interface PrivateLinkServiceProperties {
  loadBalancerFrontendIpConfigurations?: Expressionable<SubResource[]>;
  ipConfigurations?: Expressionable<PrivateLinkServiceIpConfiguration[]>;
  visibility?: Expressionable<PrivateLinkServicePropertiesVisibility>;
  autoApproval?: Expressionable<PrivateLinkServicePropertiesAutoApproval>;
  fqdns?: Expressionable<string[]>;
}

export interface PrivateLinkServicePropertiesAutoApproval {
  subscriptions?: Expressionable<string[]>;
}

export interface PrivateLinkServicePropertiesVisibility {
  subscriptions?: Expressionable<string[]>;
}

export interface Probe {
  properties?: Expressionable<ProbePropertiesFormat>;
  name: Expressionable<string>;
}

export interface ProbePropertiesFormat {
  protocol: Expressionable<('Http' | 'Tcp' | 'Https')>;
  port: Expressionable<number>;
  intervalInSeconds?: Expressionable<number>;
  numberOfProbes: Expressionable<number>;
  requestPath?: Expressionable<string>;
}

export interface ProtocolCustomSettingsFormat {
  protocol?: Expressionable<('Tcp' | 'Udp' | 'Syn')>;
  triggerRateOverride?: Expressionable<string>;
  sourceRateOverride?: Expressionable<string>;
  triggerSensitivityOverride?: Expressionable<('Relaxed' | 'Low' | 'Default' | 'High')>;
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
  ddosSettings?: Expressionable<DdosSettings>;
  ipTags?: Expressionable<IpTag[]>;
  ipAddress?: Expressionable<string>;
  publicIPPrefix?: Expressionable<SubResource>;
  idleTimeoutInMinutes?: Expressionable<number>;
}

export interface PublicIPAddressSku {
  name?: Expressionable<('Basic' | 'Standard')>;
}

export interface PublicIPPrefixPropertiesFormat {
  publicIPAddressVersion?: Expressionable<('IPv4' | 'IPv6')>;
  ipTags?: Expressionable<IpTag[]>;
  prefixLength?: Expressionable<number>;
}

export interface PublicIPPrefixSku {
  name?: Expressionable<('Standard')>;
}

export interface Route {
  properties?: Expressionable<RoutePropertiesFormat>;
  name?: Expressionable<string>;
}

export interface RouteFilterPropertiesFormat {
  rules?: Expressionable<RouteFilterRule[]>;
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
}

export interface RouteTablePropertiesFormat {
  routes?: Expressionable<Route[]>;
  disableBgpRoutePropagation?: Expressionable<boolean>;
}

export interface SecurityRule {
  properties?: Expressionable<SecurityRulePropertiesFormat>;
  name?: Expressionable<string>;
}

export interface SecurityRulePropertiesFormat {
  description?: Expressionable<string>;
  protocol: Expressionable<('Tcp' | 'Udp' | 'Icmp' | 'Esp' | '*')>;
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
}

export interface ServiceDelegationPropertiesFormat {
  serviceName?: Expressionable<string>;
}

export interface ServiceEndpointPolicyDefinition {
  properties?: Expressionable<ServiceEndpointPolicyDefinitionPropertiesFormat>;
  name?: Expressionable<string>;
}

export interface ServiceEndpointPolicyDefinitionPropertiesFormat {
  description?: Expressionable<string>;
  service?: Expressionable<string>;
  serviceResources?: Expressionable<string[]>;
}

export interface ServiceEndpointPolicyPropertiesFormat {
  serviceEndpointPolicyDefinitions?: Expressionable<ServiceEndpointPolicyDefinition[]>;
}

export interface ServiceEndpointPropertiesFormat {
  service?: Expressionable<string>;
  locations?: Expressionable<string[]>;
}

export interface Subnet {
  properties?: Expressionable<SubnetPropertiesFormat>;
  name: Expressionable<string>;
}

export interface SubnetPropertiesFormat {
  addressPrefix: Expressionable<string>;
  addressPrefixes?: Expressionable<string[]>;
  networkSecurityGroup?: Expressionable<SubResource>;
  routeTable?: Expressionable<SubResource>;
  natGateway?: Expressionable<SubResource>;
  serviceEndpoints?: Expressionable<ServiceEndpointPropertiesFormat[]>;
  serviceEndpointPolicies?: Expressionable<SubResource[]>;
  delegations?: Expressionable<Delegation[]>;
  privateEndpointNetworkPolicies?: Expressionable<string>;
  privateLinkServiceNetworkPolicies?: Expressionable<string>;
}

export interface SubResource {
  id: Expressionable<string>;
}

export interface VirtualHubProperties {
  virtualWan?: Expressionable<SubResource>;
  vpnGateway?: Expressionable<SubResource>;
  p2SVpnGateway?: Expressionable<SubResource>;
  expressRouteGateway?: Expressionable<SubResource>;
  virtualNetworkConnections?: Expressionable<HubVirtualNetworkConnection[]>;
  addressPrefix?: Expressionable<string>;
  routeTable?: Expressionable<VirtualHubRouteTable>;
}

export interface VirtualHubRoute {
  addressPrefixes?: Expressionable<string[]>;
  nextHopIpAddress?: Expressionable<string>;
}

export interface VirtualHubRouteTable {
  routes?: Expressionable<VirtualHubRoute[]>;
}

export interface VirtualNetworkGatewayConnectionPropertiesFormat {
  authorizationKey?: Expressionable<string>;
  virtualNetworkGateway1: Expressionable<SubResource>;
  virtualNetworkGateway2?: Expressionable<SubResource>;
  localNetworkGateway2?: Expressionable<SubResource>;
  connectionType: Expressionable<('IPsec' | 'Vnet2Vnet' | 'ExpressRoute' | 'VPNClient')>;
  connectionProtocol?: Expressionable<('IKEv2' | 'IKEv1')>;
  routingWeight?: Expressionable<number>;
  sharedKey?: Expressionable<string>;
  peer?: Expressionable<SubResource>;
  enableBgp?: Expressionable<boolean>;
  usePolicyBasedTrafficSelectors?: Expressionable<boolean>;
  ipsecPolicies?: Expressionable<IpsecPolicy[]>;
  expressRouteGatewayBypass?: Expressionable<boolean>;
}

export interface VirtualNetworkGatewayIPConfiguration {
  properties?: Expressionable<VirtualNetworkGatewayIPConfigurationPropertiesFormat>;
  name?: Expressionable<string>;
}

export interface VirtualNetworkGatewayIPConfigurationPropertiesFormat {
  privateIPAllocationMethod?: Expressionable<('Static' | 'Dynamic')>;
  subnet?: Expressionable<SubResource>;
  publicIPAddress?: Expressionable<SubResource>;
}

export interface VirtualNetworkGatewayPropertiesFormat {
  ipConfigurations?: Expressionable<VirtualNetworkGatewayIPConfiguration[]>;
  gatewayType?: Expressionable<('Vpn' | 'ExpressRoute' | 'HyperNet')>;
  vpnType?: Expressionable<('PolicyBased' | 'RouteBased')>;
  enableBgp?: Expressionable<boolean>;
  activeActive?: Expressionable<boolean>;
  gatewayDefaultSite?: Expressionable<SubResource>;
  sku?: Expressionable<VirtualNetworkGatewaySku>;
  vpnClientConfiguration?: Expressionable<VpnClientConfiguration>;
  bgpSettings?: Expressionable<BgpSettings>;
  customRoutes?: Expressionable<AddressSpace>;
}

export interface VirtualNetworkGatewaySku {
  name?: Expressionable<('Basic' | 'HighPerformance' | 'Standard' | 'UltraPerformance' | 'VpnGw1' | 'VpnGw2' | 'VpnGw3' | 'VpnGw1AZ' | 'VpnGw2AZ' | 'VpnGw3AZ' | 'ErGw1AZ' | 'ErGw2AZ' | 'ErGw3AZ')>;
  tier?: Expressionable<('Basic' | 'HighPerformance' | 'Standard' | 'UltraPerformance' | 'VpnGw1' | 'VpnGw2' | 'VpnGw3' | 'VpnGw1AZ' | 'VpnGw2AZ' | 'VpnGw3AZ' | 'ErGw1AZ' | 'ErGw2AZ' | 'ErGw3AZ')>;
}

export interface VirtualNetworkPeering {
  properties?: Expressionable<VirtualNetworkPeeringPropertiesFormat>;
  name: Expressionable<string>;
}

export interface VirtualNetworkPeeringPropertiesFormat {
  allowVirtualNetworkAccess?: Expressionable<boolean>;
  allowForwardedTraffic?: Expressionable<boolean>;
  allowGatewayTransit?: Expressionable<boolean>;
  useRemoteGateways?: Expressionable<boolean>;
  remoteVirtualNetwork: Expressionable<SubResource>;
  remoteAddressSpace?: Expressionable<AddressSpace>;
  peeringState?: Expressionable<('Initiated' | 'Connected' | 'Disconnected')>;
}

export interface VirtualNetworkPropertiesFormat {
  addressSpace: Expressionable<AddressSpace>;
  dhcpOptions?: Expressionable<DhcpOptions>;
  subnets?: Expressionable<Subnet[]>;
  virtualNetworkPeerings?: Expressionable<VirtualNetworkPeering[]>;
  enableDdosProtection?: Expressionable<boolean>;
  enableVmProtection?: Expressionable<boolean>;
  ddosProtectionPlan?: Expressionable<SubResource>;
}

export interface VirtualNetworkTapPropertiesFormat {
  destinationNetworkInterfaceIPConfiguration?: Expressionable<SubResource>;
  destinationLoadBalancerFrontEndIPConfiguration?: Expressionable<SubResource>;
  destinationPort?: Expressionable<number>;
}

export interface VirtualWanProperties {
  disableVpnEncryption?: Expressionable<boolean>;
  securityProviderName?: Expressionable<string>;
  allowBranchToBranchTraffic?: Expressionable<boolean>;
  allowVnetToVnetTraffic?: Expressionable<boolean>;
  office365LocalBreakoutCategory?: Expressionable<('Optimize' | 'OptimizeAndAllow' | 'All' | 'None')>;
  p2SVpnServerConfigurations?: Expressionable<P2SVpnServerConfiguration[]>;
}

export interface VpnClientConfiguration {
  vpnClientAddressPool?: Expressionable<AddressSpace>;
  vpnClientRootCertificates?: Expressionable<VpnClientRootCertificate[]>;
  vpnClientRevokedCertificates?: Expressionable<VpnClientRevokedCertificate[]>;
  vpnClientProtocols?: Expressionable<('IkeV2' | 'SSTP' | 'OpenVPN')[]>;
  vpnClientIpsecPolicies?: Expressionable<IpsecPolicy[]>;
  radiusServerAddress?: Expressionable<string>;
  radiusServerSecret?: Expressionable<string>;
  aadTenant?: Expressionable<string>;
  aadAudience?: Expressionable<string>;
  aadIssuer?: Expressionable<string>;
}

export interface VpnClientRevokedCertificate {
  properties?: Expressionable<VpnClientRevokedCertificatePropertiesFormat>;
  name?: Expressionable<string>;
}

export interface VpnClientRevokedCertificatePropertiesFormat {
  thumbprint?: Expressionable<string>;
}

export interface VpnClientRootCertificate {
  properties: Expressionable<VpnClientRootCertificatePropertiesFormat>;
  name?: Expressionable<string>;
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
  vpnConnectionProtocolType?: Expressionable<('IKEv2' | 'IKEv1')>;
  connectionBandwidth?: Expressionable<number>;
  sharedKey?: Expressionable<string>;
  enableBgp?: Expressionable<boolean>;
  usePolicyBasedTrafficSelectors?: Expressionable<boolean>;
  ipsecPolicies?: Expressionable<IpsecPolicy[]>;
  enableRateLimiting?: Expressionable<boolean>;
  enableInternetSecurity?: Expressionable<boolean>;
  useLocalAzureIpAddress?: Expressionable<boolean>;
  vpnLinkConnections?: Expressionable<VpnSiteLinkConnection[]>;
}

export interface VpnGatewayProperties {
  virtualHub?: Expressionable<SubResource>;
  connections?: Expressionable<VpnConnection[]>;
  bgpSettings?: Expressionable<BgpSettings>;
  vpnGatewayScaleUnit?: Expressionable<number>;
}

export interface VpnLinkBgpSettings {
  asn?: Expressionable<number>;
  bgpPeeringAddress?: Expressionable<string>;
}

export interface VpnLinkProviderProperties {
  linkProviderName?: Expressionable<string>;
  linkSpeedInMbps?: Expressionable<number>;
}

export interface VpnSiteLink {
  properties?: Expressionable<VpnSiteLinkProperties>;
  name?: Expressionable<string>;
}

export interface VpnSiteLinkConnection {
  properties?: Expressionable<VpnSiteLinkConnectionProperties>;
  name?: Expressionable<string>;
}

export interface VpnSiteLinkConnectionProperties {
  vpnSiteLink?: Expressionable<SubResource>;
  routingWeight?: Expressionable<number>;
  connectionStatus?: Expressionable<('Unknown' | 'Connecting' | 'Connected' | 'NotConnected')>;
  vpnConnectionProtocolType?: Expressionable<('IKEv2' | 'IKEv1')>;
  connectionBandwidth?: Expressionable<number>;
  sharedKey?: Expressionable<string>;
  enableBgp?: Expressionable<boolean>;
  usePolicyBasedTrafficSelectors?: Expressionable<boolean>;
  ipsecPolicies?: Expressionable<IpsecPolicy[]>;
  enableRateLimiting?: Expressionable<boolean>;
  useLocalAzureIpAddress?: Expressionable<boolean>;
}

export interface VpnSiteLinkProperties {
  linkProperties?: Expressionable<VpnLinkProviderProperties>;
  ipAddress?: Expressionable<string>;
  bgpProperties?: Expressionable<VpnLinkBgpSettings>;
}

export interface VpnSiteProperties {
  virtualWan?: Expressionable<SubResource>;
  deviceProperties?: Expressionable<DeviceProperties>;
  ipAddress?: Expressionable<string>;
  siteKey?: Expressionable<string>;
  addressSpace?: Expressionable<AddressSpace>;
  bgpProperties?: Expressionable<BgpSettings>;
  isSecuritySite?: Expressionable<boolean>;
  vpnSiteLinks?: Expressionable<VpnSiteLink[]>;
}

export interface WebApplicationFirewallCustomRule {
  name?: Expressionable<string>;
  priority: Expressionable<number>;
  ruleType: Expressionable<('MatchRule' | 'Invalid')>;
  matchConditions: Expressionable<MatchCondition[]>;
  action: Expressionable<('Allow' | 'Block' | 'Log')>;
}

export interface WebApplicationFirewallPolicyPropertiesFormat {
  policySettings?: Expressionable<PolicySettings>;
  customRules?: Expressionable<WebApplicationFirewallCustomRule[]>;
}

export namespace applicationGateways {
  export interface AdditionalProps {
    identity?: Expressionable<ManagedServiceIdentity>;
    zones?: Expressionable<string[]>;
  }
  
  export type ApplicationGatewaysResource = ResourceDefinition<ApplicationGatewayPropertiesFormat, AdditionalProps>;
  
  export function create(name: Expressionable<string>, properties: ApplicationGatewayPropertiesFormat, location: Expressionable<string>, identity?: Expressionable<ManagedServiceIdentity>, zones?: Expressionable<string[]>): ApplicationGatewaysResource {
    return {
      type: 'Microsoft.Network/applicationGateways',
      apiVersion: '2019-06-01',
      name: [name],
      location,
      properties,
      additional: {
        identity,
        zones,
      },
    };
  }
}
export namespace ApplicationGatewayWebApplicationFirewallPolicies {
  export type ApplicationGatewayWebApplicationFirewallPoliciesResource = ResourceDefinition<WebApplicationFirewallPolicyPropertiesFormat, undefined>;
  
  export function create(name: Expressionable<string>, properties: WebApplicationFirewallPolicyPropertiesFormat, location: Expressionable<string>): ApplicationGatewayWebApplicationFirewallPoliciesResource {
    return {
      type: 'Microsoft.Network/ApplicationGatewayWebApplicationFirewallPolicies',
      apiVersion: '2019-06-01',
      name: [name],
      location,
      properties,
    };
  }
}
export namespace applicationSecurityGroups {
  export type ApplicationSecurityGroupsResource = ResourceDefinition<ApplicationSecurityGroupPropertiesFormat, undefined>;
  
  export function create(name: Expressionable<string>, properties: ApplicationSecurityGroupPropertiesFormat, location: Expressionable<string>): ApplicationSecurityGroupsResource {
    return {
      type: 'Microsoft.Network/applicationSecurityGroups',
      apiVersion: '2019-06-01',
      name: [name],
      location,
      properties,
    };
  }
}
export namespace azureFirewalls {
  export interface AdditionalProps {
    zones?: Expressionable<string[]>;
  }
  
  export type AzureFirewallsResource = ResourceDefinition<AzureFirewallPropertiesFormat, AdditionalProps>;
  
  export function create(name: Expressionable<string>, properties: AzureFirewallPropertiesFormat, location: Expressionable<string>, zones?: Expressionable<string[]>): AzureFirewallsResource {
    return {
      type: 'Microsoft.Network/azureFirewalls',
      apiVersion: '2019-06-01',
      name: [name],
      location,
      properties,
      additional: {
        zones,
      },
    };
  }
}
export namespace bastionHosts {
  export type BastionHostsResource = ResourceDefinition<BastionHostPropertiesFormat, undefined>;
  
  export function create(name: Expressionable<string>, properties: BastionHostPropertiesFormat, location: Expressionable<string>): BastionHostsResource {
    return {
      type: 'Microsoft.Network/bastionHosts',
      apiVersion: '2019-06-01',
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
      apiVersion: '2019-06-01',
      name: [name],
      location,
      properties,
    };
  }
}
export namespace ddosCustomPolicies {
  export type DdosCustomPoliciesResource = ResourceDefinition<DdosCustomPolicyPropertiesFormat, undefined>;
  
  export function create(name: Expressionable<string>, properties: DdosCustomPolicyPropertiesFormat, location: Expressionable<string>): DdosCustomPoliciesResource {
    return {
      type: 'Microsoft.Network/ddosCustomPolicies',
      apiVersion: '2019-06-01',
      name: [name],
      location,
      properties,
    };
  }
}
export namespace ddosProtectionPlans {
  export type DdosProtectionPlansResource = ResourceDefinition<DdosProtectionPlanPropertiesFormat, undefined>;
  
  export function create(name: Expressionable<string>, properties: DdosProtectionPlanPropertiesFormat, location?: Expressionable<string>): DdosProtectionPlansResource {
    return {
      type: 'Microsoft.Network/ddosProtectionPlans',
      apiVersion: '2019-06-01',
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
      apiVersion: '2019-06-01',
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
        apiVersion: '2019-06-01',
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
        apiVersion: '2019-06-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace expressRouteCircuits {
  export namespace peerings {
    export namespace connections {
      export type ConnectionsResource = ResourceDefinition<ExpressRouteCircuitConnectionPropertiesFormat, undefined>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: ExpressRouteCircuitConnectionPropertiesFormat): ConnectionsResource {
        return {
          type: 'Microsoft.Network/expressRouteCircuits/peerings/connections',
          apiVersion: '2019-06-01',
          name: name,
          properties,
        };
      }
    }
  }
}
export namespace expressRouteCrossConnections {
  export type ExpressRouteCrossConnectionsResource = ResourceDefinition<ExpressRouteCrossConnectionProperties, undefined>;
  
  export function create(name: Expressionable<string>, properties: ExpressRouteCrossConnectionProperties, location: Expressionable<string>): ExpressRouteCrossConnectionsResource {
    return {
      type: 'Microsoft.Network/expressRouteCrossConnections',
      apiVersion: '2019-06-01',
      name: [name],
      location,
      properties,
    };
  }
}
export namespace expressRouteCrossConnections {
  export namespace peerings {
    export type PeeringsResource = ResourceDefinition<ExpressRouteCrossConnectionPeeringProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: ExpressRouteCrossConnectionPeeringProperties): PeeringsResource {
      return {
        type: 'Microsoft.Network/expressRouteCrossConnections/peerings',
        apiVersion: '2019-06-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace expressRouteGateways {
  export type ExpressRouteGatewaysResource = ResourceDefinition<ExpressRouteGatewayProperties, undefined>;
  
  export function create(name: Expressionable<string>, properties: ExpressRouteGatewayProperties, location: Expressionable<string>): ExpressRouteGatewaysResource {
    return {
      type: 'Microsoft.Network/expressRouteGateways',
      apiVersion: '2019-06-01',
      name: [name],
      location,
      properties,
    };
  }
}
export namespace expressRouteGateways {
  export namespace expressRouteConnections {
    export type ExpressRouteConnectionsResource = ResourceDefinition<ExpressRouteConnectionProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: ExpressRouteConnectionProperties): ExpressRouteConnectionsResource {
      return {
        type: 'Microsoft.Network/expressRouteGateways/expressRouteConnections',
        apiVersion: '2019-06-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace ExpressRoutePorts {
  export type ExpressRoutePortsResource = ResourceDefinition<ExpressRoutePortPropertiesFormat, undefined>;
  
  export function create(name: Expressionable<string>, properties: ExpressRoutePortPropertiesFormat, location: Expressionable<string>): ExpressRoutePortsResource {
    return {
      type: 'Microsoft.Network/ExpressRoutePorts',
      apiVersion: '2019-06-01',
      name: [name],
      location,
      properties,
    };
  }
}
export namespace firewallPolicies {
  export type FirewallPoliciesResource = ResourceDefinition<FirewallPolicyPropertiesFormat, undefined>;
  
  export function create(name: Expressionable<string>, properties: FirewallPolicyPropertiesFormat, location: Expressionable<string>): FirewallPoliciesResource {
    return {
      type: 'Microsoft.Network/firewallPolicies',
      apiVersion: '2019-06-01',
      name: [name],
      location,
      properties,
    };
  }
}
export namespace firewallPolicies {
  export namespace ruleGroups {
    export type RuleGroupsResource = ResourceDefinition<FirewallPolicyRuleGroupProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: FirewallPolicyRuleGroupProperties): RuleGroupsResource {
      return {
        type: 'Microsoft.Network/firewallPolicies/ruleGroups',
        apiVersion: '2019-06-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace loadBalancers {
  export interface AdditionalProps {
    sku?: Expressionable<LoadBalancerSku>;
  }
  
  export type LoadBalancersResource = ResourceDefinition<LoadBalancerPropertiesFormat, AdditionalProps>;
  
  export function create(name: Expressionable<string>, properties: LoadBalancerPropertiesFormat, location: Expressionable<string>, sku?: Expressionable<LoadBalancerSku>): LoadBalancersResource {
    return {
      type: 'Microsoft.Network/loadBalancers',
      apiVersion: '2019-06-01',
      name: [name],
      location,
      properties,
      additional: {
        sku,
      },
    };
  }
}
export namespace loadBalancers {
  export namespace inboundNatRules {
    export type InboundNatRulesResource = ResourceDefinition<InboundNatRulePropertiesFormat, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: InboundNatRulePropertiesFormat): InboundNatRulesResource {
      return {
        type: 'Microsoft.Network/loadBalancers/inboundNatRules',
        apiVersion: '2019-06-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace localNetworkGateways {
  export type LocalNetworkGatewaysResource = ResourceDefinition<LocalNetworkGatewayPropertiesFormat, undefined>;
  
  export function create(name: Expressionable<string>, properties: LocalNetworkGatewayPropertiesFormat, location: Expressionable<string>): LocalNetworkGatewaysResource {
    return {
      type: 'Microsoft.Network/localNetworkGateways',
      apiVersion: '2019-06-01',
      name: [name],
      location,
      properties,
    };
  }
}
export namespace natGateways {
  export interface AdditionalProps {
    sku?: Expressionable<NatGatewaySku>;
    zones?: Expressionable<string[]>;
  }
  
  export type NatGatewaysResource = ResourceDefinition<NatGatewayPropertiesFormat, AdditionalProps>;
  
  export function create(name: Expressionable<string>, properties: NatGatewayPropertiesFormat, location: Expressionable<string>, sku?: Expressionable<NatGatewaySku>, zones?: Expressionable<string[]>): NatGatewaysResource {
    return {
      type: 'Microsoft.Network/natGateways',
      apiVersion: '2019-06-01',
      name: [name],
      location,
      properties,
      additional: {
        sku,
        zones,
      },
    };
  }
}
export namespace networkInterfaces {
  export type NetworkInterfacesResource = ResourceDefinition<NetworkInterfacePropertiesFormat, undefined>;
  
  export function create(name: Expressionable<string>, properties: NetworkInterfacePropertiesFormat, location: Expressionable<string>): NetworkInterfacesResource {
    return {
      type: 'Microsoft.Network/networkInterfaces',
      apiVersion: '2019-06-01',
      name: [name],
      location,
      properties,
    };
  }
}
export namespace networkInterfaces {
  export namespace tapConfigurations {
    export type TapConfigurationsResource = ResourceDefinition<NetworkInterfaceTapConfigurationPropertiesFormat, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: NetworkInterfaceTapConfigurationPropertiesFormat): TapConfigurationsResource {
      return {
        type: 'Microsoft.Network/networkInterfaces/tapConfigurations',
        apiVersion: '2019-06-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace networkProfiles {
  export type NetworkProfilesResource = ResourceDefinition<NetworkProfilePropertiesFormat, undefined>;
  
  export function create(name: Expressionable<string>, properties: NetworkProfilePropertiesFormat, location: Expressionable<string>): NetworkProfilesResource {
    return {
      type: 'Microsoft.Network/networkProfiles',
      apiVersion: '2019-06-01',
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
      apiVersion: '2019-06-01',
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
        apiVersion: '2019-06-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace networkWatchers {
  export type NetworkWatchersResource = ResourceDefinition<NetworkWatcherPropertiesFormat, undefined>;
  
  export function create(name: Expressionable<string>, properties: NetworkWatcherPropertiesFormat, location: Expressionable<string>): NetworkWatchersResource {
    return {
      type: 'Microsoft.Network/networkWatchers',
      apiVersion: '2019-06-01',
      name: [name],
      location,
      properties,
    };
  }
}
export namespace networkWatchers {
  export namespace connectionMonitors {
    export type ConnectionMonitorsResource = ResourceDefinition<ConnectionMonitorParameters, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: ConnectionMonitorParameters, location?: Expressionable<string>): ConnectionMonitorsResource {
      return {
        type: 'Microsoft.Network/networkWatchers/connectionMonitors',
        apiVersion: '2019-06-01',
        name: name,
        location,
        properties,
      };
    }
  }
}
export namespace networkWatchers {
  export namespace packetCaptures {
    export type PacketCapturesResource = ResourceDefinition<PacketCaptureParameters, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: PacketCaptureParameters): PacketCapturesResource {
      return {
        type: 'Microsoft.Network/networkWatchers/packetCaptures',
        apiVersion: '2019-06-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace p2svpnGateways {
  export type P2svpnGatewaysResource = ResourceDefinition<P2SVpnGatewayProperties, undefined>;
  
  export function create(name: Expressionable<string>, properties: P2SVpnGatewayProperties, location: Expressionable<string>): P2svpnGatewaysResource {
    return {
      type: 'Microsoft.Network/p2svpnGateways',
      apiVersion: '2019-06-01',
      name: [name],
      location,
      properties,
    };
  }
}
export namespace privateEndpoints {
  export type PrivateEndpointsResource = ResourceDefinition<PrivateEndpointProperties, undefined>;
  
  export function create(name: Expressionable<string>, properties: PrivateEndpointProperties, location: Expressionable<string>): PrivateEndpointsResource {
    return {
      type: 'Microsoft.Network/privateEndpoints',
      apiVersion: '2019-06-01',
      name: [name],
      location,
      properties,
    };
  }
}
export namespace privateLinkServices {
  export type PrivateLinkServicesResource = ResourceDefinition<PrivateLinkServiceProperties, undefined>;
  
  export function create(name: Expressionable<string>, properties: PrivateLinkServiceProperties, location: Expressionable<string>): PrivateLinkServicesResource {
    return {
      type: 'Microsoft.Network/privateLinkServices',
      apiVersion: '2019-06-01',
      name: [name],
      location,
      properties,
    };
  }
}
export namespace privateLinkServices {
  export namespace privateEndpointConnections {
    export type PrivateEndpointConnectionsResource = ResourceDefinition<PrivateEndpointConnectionProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: PrivateEndpointConnectionProperties): PrivateEndpointConnectionsResource {
      return {
        type: 'Microsoft.Network/privateLinkServices/privateEndpointConnections',
        apiVersion: '2019-06-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace publicIPAddresses {
  export interface AdditionalProps {
    sku?: Expressionable<PublicIPAddressSku>;
    zones?: Expressionable<string[]>;
  }
  
  export type PublicIPAddressesResource = ResourceDefinition<PublicIPAddressPropertiesFormat, AdditionalProps>;
  
  export function create(name: Expressionable<string>, properties: PublicIPAddressPropertiesFormat, location: Expressionable<string>, sku?: Expressionable<PublicIPAddressSku>, zones?: Expressionable<string[]>): PublicIPAddressesResource {
    return {
      type: 'Microsoft.Network/publicIPAddresses',
      apiVersion: '2019-06-01',
      name: [name],
      location,
      properties,
      additional: {
        sku,
        zones,
      },
    };
  }
}
export namespace publicIPPrefixes {
  export interface AdditionalProps {
    sku?: Expressionable<PublicIPPrefixSku>;
    zones?: Expressionable<string[]>;
  }
  
  export type PublicIPPrefixesResource = ResourceDefinition<PublicIPPrefixPropertiesFormat, AdditionalProps>;
  
  export function create(name: Expressionable<string>, properties: PublicIPPrefixPropertiesFormat, location: Expressionable<string>, sku?: Expressionable<PublicIPPrefixSku>, zones?: Expressionable<string[]>): PublicIPPrefixesResource {
    return {
      type: 'Microsoft.Network/publicIPPrefixes',
      apiVersion: '2019-06-01',
      name: [name],
      location,
      properties,
      additional: {
        sku,
        zones,
      },
    };
  }
}
export namespace routeFilters {
  export type RouteFiltersResource = ResourceDefinition<RouteFilterPropertiesFormat, undefined>;
  
  export function create(name: Expressionable<string>, properties: RouteFilterPropertiesFormat, location: Expressionable<string>): RouteFiltersResource {
    return {
      type: 'Microsoft.Network/routeFilters',
      apiVersion: '2019-06-01',
      name: [name],
      location,
      properties,
    };
  }
}
export namespace routeFilters {
  export namespace routeFilterRules {
    export type RouteFilterRulesResource = ResourceDefinition<RouteFilterRulePropertiesFormat, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: RouteFilterRulePropertiesFormat, location?: Expressionable<string>): RouteFilterRulesResource {
      return {
        type: 'Microsoft.Network/routeFilters/routeFilterRules',
        apiVersion: '2019-06-01',
        name: name,
        location,
        properties,
      };
    }
  }
}
export namespace routeTables {
  export type RouteTablesResource = ResourceDefinition<RouteTablePropertiesFormat, undefined>;
  
  export function create(name: Expressionable<string>, properties: RouteTablePropertiesFormat, location: Expressionable<string>): RouteTablesResource {
    return {
      type: 'Microsoft.Network/routeTables',
      apiVersion: '2019-06-01',
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
        apiVersion: '2019-06-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace serviceEndpointPolicies {
  export type ServiceEndpointPoliciesResource = ResourceDefinition<ServiceEndpointPolicyPropertiesFormat, undefined>;
  
  export function create(name: Expressionable<string>, properties: ServiceEndpointPolicyPropertiesFormat, location: Expressionable<string>): ServiceEndpointPoliciesResource {
    return {
      type: 'Microsoft.Network/serviceEndpointPolicies',
      apiVersion: '2019-06-01',
      name: [name],
      location,
      properties,
    };
  }
}
export namespace serviceEndpointPolicies {
  export namespace serviceEndpointPolicyDefinitions {
    export type ServiceEndpointPolicyDefinitionsResource = ResourceDefinition<ServiceEndpointPolicyDefinitionPropertiesFormat, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: ServiceEndpointPolicyDefinitionPropertiesFormat): ServiceEndpointPolicyDefinitionsResource {
      return {
        type: 'Microsoft.Network/serviceEndpointPolicies/serviceEndpointPolicyDefinitions',
        apiVersion: '2019-06-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace virtualHubs {
  export type VirtualHubsResource = ResourceDefinition<VirtualHubProperties, undefined>;
  
  export function create(name: Expressionable<string>, properties: VirtualHubProperties, location: Expressionable<string>): VirtualHubsResource {
    return {
      type: 'Microsoft.Network/virtualHubs',
      apiVersion: '2019-06-01',
      name: [name],
      location,
      properties,
    };
  }
}
export namespace virtualNetworkGateways {
  export type VirtualNetworkGatewaysResource = ResourceDefinition<VirtualNetworkGatewayPropertiesFormat, undefined>;
  
  export function create(name: Expressionable<string>, properties: VirtualNetworkGatewayPropertiesFormat, location: Expressionable<string>): VirtualNetworkGatewaysResource {
    return {
      type: 'Microsoft.Network/virtualNetworkGateways',
      apiVersion: '2019-06-01',
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
      apiVersion: '2019-06-01',
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
        apiVersion: '2019-06-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace virtualNetworks {
  export namespace virtualNetworkPeerings {
    export type VirtualNetworkPeeringsResource = ResourceDefinition<VirtualNetworkPeeringPropertiesFormat, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: VirtualNetworkPeeringPropertiesFormat): VirtualNetworkPeeringsResource {
      return {
        type: 'Microsoft.Network/virtualNetworks/virtualNetworkPeerings',
        apiVersion: '2019-06-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace virtualNetworkTaps {
  export type VirtualNetworkTapsResource = ResourceDefinition<VirtualNetworkTapPropertiesFormat, undefined>;
  
  export function create(name: Expressionable<string>, properties: VirtualNetworkTapPropertiesFormat, location: Expressionable<string>): VirtualNetworkTapsResource {
    return {
      type: 'Microsoft.Network/virtualNetworkTaps',
      apiVersion: '2019-06-01',
      name: [name],
      location,
      properties,
    };
  }
}
export namespace virtualWans {
  export type VirtualWansResource = ResourceDefinition<VirtualWanProperties, undefined>;
  
  export function create(name: Expressionable<string>, properties: VirtualWanProperties, location: Expressionable<string>): VirtualWansResource {
    return {
      type: 'Microsoft.Network/virtualWans',
      apiVersion: '2019-06-01',
      name: [name],
      location,
      properties,
    };
  }
}
export namespace virtualWans {
  export namespace p2sVpnServerConfigurations {
    export type P2sVpnServerConfigurationsResource = ResourceDefinition<P2SVpnServerConfigurationProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: P2SVpnServerConfigurationProperties): P2sVpnServerConfigurationsResource {
      return {
        type: 'Microsoft.Network/virtualWans/p2sVpnServerConfigurations',
        apiVersion: '2019-06-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace vpnGateways {
  export type VpnGatewaysResource = ResourceDefinition<VpnGatewayProperties, undefined>;
  
  export function create(name: Expressionable<string>, properties: VpnGatewayProperties, location: Expressionable<string>): VpnGatewaysResource {
    return {
      type: 'Microsoft.Network/vpnGateways',
      apiVersion: '2019-06-01',
      name: [name],
      location,
      properties,
    };
  }
}
export namespace vpnGateways {
  export namespace vpnConnections {
    export type VpnConnectionsResource = ResourceDefinition<VpnConnectionProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: VpnConnectionProperties): VpnConnectionsResource {
      return {
        type: 'Microsoft.Network/vpnGateways/vpnConnections',
        apiVersion: '2019-06-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace vpnSites {
  export type VpnSitesResource = ResourceDefinition<VpnSiteProperties, undefined>;
  
  export function create(name: Expressionable<string>, properties: VpnSiteProperties, location: Expressionable<string>): VpnSitesResource {
    return {
      type: 'Microsoft.Network/vpnSites',
      apiVersion: '2019-06-01',
      name: [name],
      location,
      properties,
    };
  }
}