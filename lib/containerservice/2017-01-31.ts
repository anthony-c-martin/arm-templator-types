import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface ContainerServiceAgentPoolProfile {
  count: Expressionable<number>;
  dnsPrefix: Expressionable<string>;
  name: Expressionable<string>;
  vmSize: Expressionable<('Standard_A0' | 'Standard_A1' | 'Standard_A2' | 'Standard_A3' | 'Standard_A4' | 'Standard_A5' | 'Standard_A6' | 'Standard_A7' | 'Standard_A8' | 'Standard_A9' | 'Standard_A10' | 'Standard_A11' | 'Standard_D1' | 'Standard_D2' | 'Standard_D3' | 'Standard_D4' | 'Standard_D11' | 'Standard_D12' | 'Standard_D13' | 'Standard_D14' | 'Standard_D1_v2' | 'Standard_D2_v2' | 'Standard_D3_v2' | 'Standard_D4_v2' | 'Standard_D5_v2' | 'Standard_D11_v2' | 'Standard_D12_v2' | 'Standard_D13_v2' | 'Standard_D14_v2' | 'Standard_G1' | 'Standard_G2' | 'Standard_G3' | 'Standard_G4' | 'Standard_G5' | 'Standard_DS1' | 'Standard_DS2' | 'Standard_DS3' | 'Standard_DS4' | 'Standard_DS11' | 'Standard_DS12' | 'Standard_DS13' | 'Standard_DS14' | 'Standard_GS1' | 'Standard_GS2' | 'Standard_GS3' | 'Standard_GS4' | 'Standard_GS5')>;
}

export interface ContainerServiceCustomProfile {
  orchestrator: Expressionable<string>;
}

export interface ContainerServiceDiagnosticsProfile {
  vmDiagnostics: Expressionable<ContainerServiceVMDiagnostics>;
}

export interface ContainerServiceLinuxProfile {
  adminUsername: Expressionable<string>;
  ssh: Expressionable<ContainerServiceSshConfiguration>;
}

export interface ContainerServiceMasterProfile {
  count?: Expressionable<number>;
  dnsPrefix: Expressionable<string>;
}

export interface ContainerServiceOrchestratorProfile {
  orchestratorType: Expressionable<('Swarm' | 'DCOS' | 'Custom' | 'Kubernetes')>;
}

export interface ContainerServiceProperties {
  agentPoolProfiles: Expressionable<ContainerServiceAgentPoolProfile[]>;
  customProfile?: Expressionable<ContainerServiceCustomProfile>;
  diagnosticsProfile?: Expressionable<ContainerServiceDiagnosticsProfile>;
  linuxProfile: Expressionable<ContainerServiceLinuxProfile>;
  masterProfile: Expressionable<ContainerServiceMasterProfile>;
  orchestratorProfile?: Expressionable<ContainerServiceOrchestratorProfile>;
  servicePrincipalProfile?: Expressionable<ContainerServiceServicePrincipalProfile>;
  windowsProfile?: Expressionable<ContainerServiceWindowsProfile>;
}

export interface ContainerServiceServicePrincipalProfile {
  clientId: Expressionable<string>;
  secret: Expressionable<string>;
}

export interface ContainerServiceSshConfiguration {
  publicKeys: Expressionable<ContainerServiceSshPublicKey[]>;
}

export interface ContainerServiceSshPublicKey {
  keyData: Expressionable<string>;
}

export interface ContainerServiceVMDiagnostics {
  enabled: Expressionable<boolean>;
}

export interface ContainerServiceWindowsProfile {
  adminPassword: Expressionable<string>;
  adminUsername: Expressionable<string>;
}

export namespace containerServices {
  export function create(name: Expressionable<string>, properties: ContainerServiceProperties, location: Expressionable<string>): ResourceDefinition<ContainerServiceProperties> {
    return {
      type: 'Microsoft.ContainerService/containerServices',
      apiVersion: '2017-01-31',
      name: [name],
      location,
      properties,
    };
  }
}