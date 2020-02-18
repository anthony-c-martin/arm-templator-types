import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface Resource {
  name?: Expressionable<string>;
  type?: Expressionable<string>;
}

export interface Kind {
  kind?: Expressionable<string>;
}

export interface Location {
  location?: Expressionable<string>;
}

export interface JitNetworkAccessPoliciesList {
  value?: Expressionable<JitNetworkAccessPolicy[]>;
  nextLink?: Expressionable<string>;
}

export interface JitNetworkAccessPolicy {
  properties: Expressionable<JitNetworkAccessPolicyProperties>;
}

export interface JitNetworkAccessPolicyProperties {
  virtualMachines: Expressionable<JitNetworkAccessPolicyVirtualMachine[]>;
  requests?: Expressionable<JitNetworkAccessRequest[]>;
  provisioningState?: Expressionable<string>;
}

export interface JitNetworkAccessPolicyVirtualMachine {
  id: Expressionable<string>;
  ports: Expressionable<JitNetworkAccessPortRule[]>;
}

export interface JitNetworkAccessPortRule {
  number: Expressionable<PortNumber>;
  protocol: Expressionable<('TCP' | 'UDP' | '*')>;
  allowedSourceAddressPrefix?: Expressionable<string>;
  allowedSourceAddressPrefixes?: Expressionable<string[]>;
  maxRequestAccessDuration: Expressionable<string>;
}

export interface JitNetworkAccessRequest {
  virtualMachines: Expressionable<JitNetworkAccessRequestVirtualMachine[]>;
  startTimeUtc: Expressionable<string>;
  requestor: Expressionable<string>;
}

export interface JitNetworkAccessRequestVirtualMachine {
  id: Expressionable<string>;
  ports: Expressionable<JitNetworkAccessRequestPort[]>;
}

export interface JitNetworkAccessRequestPort {
  number: Expressionable<PortNumber>;
  allowedSourceAddressPrefix?: Expressionable<string>;
  allowedSourceAddressPrefixes?: Expressionable<string[]>;
  endTimeUtc: Expressionable<string>;
  status: Expressionable<('Revoked' | 'Initiated')>;
  statusReason: Expressionable<('Expired' | 'UserRequested' | 'NewerRequestInitiated')>;
}

export interface PortNumber {
}

export namespace locations {
  export namespace jitNetworkAccessPolicies {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: JitNetworkAccessPolicyProperties): ResourceDefinition<JitNetworkAccessPolicyProperties> {
      return {
        type: 'Microsoft.Security/locations/jitNetworkAccessPolicies',
        apiVersion: '2015-06-01-preview',
        name: concatResourceName(...name),
        properties,
      };
    }
  }
}