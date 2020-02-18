import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface publicIPAddressDnsSettings {
  domainNameLabel: Expressionable<string>;
  reverseFqdn?: Expressionable<string>;
}

export interface networkInterfaceDnsSettings {
  dnsServers?: Expressionable<string[]>;
  internalDnsNameLabel?: Expressionable<string>;
}

export interface id {
  id: Expressionable<string>;
}

export interface ipConfiguration {
  name: Expressionable<string>;
  properties: Expressionable<ipConfigurationProperties>;
}

export interface ipConfigurationProperties {
  subnet: Expressionable<id>;
  privateIPAddress?: Expressionable<string>;
  privateIPAllocationMethod: Expressionable<('Dynamic' | 'Static')>;
  publicIPAddress?: Expressionable<id>;
  loadBalancerBackendAddressPools?: Expressionable<id[]>;
  loadBalancerInboundNatRules?: Expressionable<id[]>;
}

export interface addressSpace {
  addressPrefixes: Expressionable<string[]>;
}

export interface dhcpOptions {
  dnsServers: Expressionable<string[]>;
}

export interface subnetProperties {
  addressPrefix: Expressionable<string>;
  networkSecurityGroup?: Expressionable<id>;
  routeTable?: Expressionable<id>;
}

export interface subnet {
  name: Expressionable<string>;
  properties: Expressionable<subnetProperties>;
}

export interface virtualNetworkPeeringPropertiesFormat {
  allowVirtualNetworkAccess?: Expressionable<boolean>;
  allowForwardedTraffic?: Expressionable<boolean>;
  allowGatewayTransit?: Expressionable<boolean>;
  useRemoteGateways?: Expressionable<boolean>;
  remoteVirtualNetwork?: Expressionable<id>;
  peeringState?: Expressionable<('Initiated' | 'Connected' | 'Disconnected')>;
}

export interface virtualNetworkPeering {
  name: Expressionable<string>;
  properties: Expressionable<virtualNetworkPeeringPropertiesFormat>;
}

export interface frontendIPConfigurationsExternalProperties {
  publicIPAddress: Expressionable<id>;
}

export interface frontendIPConfigurationsInternalProperties {
  subnet: Expressionable<id>;
  privateIPAddress?: Expressionable<string>;
  privateIPAllocationMethod: Expressionable<('Dynamic' | 'Static')>;
}

export interface frontendIPConfigurations {
  name: Expressionable<string>;
  properties: Expressionable<any>;
}

export interface backendAddressPools {
  name: Expressionable<string>;
}

export interface loadBalancingRulesProperties {
  frontendIPConfiguration: Expressionable<id>;
  backendAddressPool: Expressionable<id>;
  protocol: Expressionable<('Udp' | 'Tcp')>;
  frontendPort: Expressionable<number>;
  backendPort: Expressionable<number>;
  probe?: Expressionable<id>;
  enableFloatingIP?: Expressionable<boolean>;
  idleTimeoutInMinutes?: Expressionable<number>;
  loadDistribution?: Expressionable<('Default' | 'SourceIP' | 'SourceIPProtocol')>;
}

export interface loadBalancingRules {
  name: Expressionable<string>;
  properties: Expressionable<loadBalancingRulesProperties>;
}

export interface probeProperties {
  protocol: Expressionable<('Http' | 'Tcp')>;
  port: Expressionable<number>;
  requestPath?: Expressionable<string>;
  intervalInSeconds?: Expressionable<number>;
  numberOfProbes?: Expressionable<number>;
}

export interface probes {
  name: Expressionable<string>;
  properties: Expressionable<probeProperties>;
}

export interface inboundNatRulesProperties {
  frontendIPConfiguration: Expressionable<id>;
  protocol: Expressionable<string>;
  frontendPort: Expressionable<number>;
  backendPort: Expressionable<number>;
}

export interface inboundNatRules {
  name: Expressionable<string>;
  properties: Expressionable<inboundNatRulesProperties>;
}

export interface inboundNatPoolsProperties {
  frontendIPConfiguration: Expressionable<id>;
  protocol: Expressionable<string>;
  frontendPortRangeStart: Expressionable<number>;
  frontendPortRangeEnd: Expressionable<number>;
  backendPort: Expressionable<number>;
}

export interface inboundNatPools {
  name: Expressionable<string>;
  properties: Expressionable<inboundNatPoolsProperties>;
}

export interface outboundNatRulesProperties {
  frontendIPConfigurations: Expressionable<id[]>;
  backendAddressPool: Expressionable<id>;
}

export interface outboundNatRules {
  name: Expressionable<string>;
  properties: Expressionable<outboundNatRulesProperties>;
}

export interface securityruleProperties {
  description?: Expressionable<string>;
  protocol: Expressionable<('Tcp' | 'Udp' | '*')>;
  sourcePortRange: Expressionable<string>;
  destinationPortRange: Expressionable<string>;
  sourceAddressPrefix: Expressionable<string>;
  destinationAddressPrefix: Expressionable<string>;
  access: Expressionable<('Allow' | 'Deny')>;
  priority: Expressionable<number>;
  direction: Expressionable<('Inbound' | 'Outbound')>;
}

export interface securityRules {
  name: Expressionable<string>;
  properties: Expressionable<securityruleProperties>;
}

export interface routeProperties {
  addressPrefix: Expressionable<string>;
  nextHopType: Expressionable<('VirtualNetworkGateway' | 'VnetLocal' | 'Internet' | 'VirtualAppliance' | 'HyperNetGateway' | 'None')>;
  nextHopIpAddress?: Expressionable<string>;
}

export interface routes {
  name: Expressionable<string>;
  properties: Expressionable<routeProperties>;
}

export interface SubResource {
  id?: Expressionable<string>;
}

export namespace publicIPAddresses {
  export function create(name: Expressionable<string>, properties: any): ResourceDefinition<any> {
    return {
      type: 'Microsoft.Network/publicIPAddresses',
      apiVersion: '2016-10-01',
      name: name,
      properties,
    };
  }
}
export namespace networkInterfaces {
  export function create(name: Expressionable<string>, properties: any): ResourceDefinition<any> {
    return {
      type: 'Microsoft.Network/networkInterfaces',
      apiVersion: '2016-10-01',
      name: name,
      properties,
    };
  }
}
export namespace virtualNetworks {
  export function create(name: Expressionable<string>, properties: any): ResourceDefinition<any> {
    return {
      type: 'Microsoft.Network/virtualNetworks',
      apiVersion: '2016-10-01',
      name: name,
      properties,
    };
  }
}
export namespace loadBalancers {
  export function create(name: Expressionable<string>, properties: any): ResourceDefinition<any> {
    return {
      type: 'Microsoft.Network/loadBalancers',
      apiVersion: '2016-10-01',
      name: name,
      properties,
    };
  }
}
export namespace networkSecurityGroups {
  export function create(name: Expressionable<string>, properties: any): ResourceDefinition<any> {
    return {
      type: 'Microsoft.Network/networkSecurityGroups',
      apiVersion: '2016-10-01',
      name: name,
      properties,
    };
  }
}
export namespace routeTables {
  export function create(name: Expressionable<string>, properties: any): ResourceDefinition<any> {
    return {
      type: 'Microsoft.Network/routeTables',
      apiVersion: '2016-10-01',
      name: name,
      properties,
    };
  }
}