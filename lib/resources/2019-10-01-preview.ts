import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface AzureCliScript {
  kind: Expressionable<('AzureCLI')>;
  properties: Expressionable<AzureCliScriptProperties>;
}

export interface AzureCliScriptProperties {
  arguments?: Expressionable<string>;
  azCliVersion: Expressionable<string>;
  cleanupPreference?: Expressionable<('Always' | 'OnSuccess' | 'OnExpiration')>;
  environmentVariables?: Expressionable<EnvironmentVariable[]>;
  forceUpdateTag?: Expressionable<string>;
  primaryScriptUri?: Expressionable<string>;
  retentionInterval: Expressionable<string>;
  scriptContent?: Expressionable<string>;
  supportingScriptUris?: Expressionable<string[]>;
  timeout?: Expressionable<string>;
}

export interface AzurePowerShellScript {
  kind: Expressionable<('AzurePowerShell')>;
  properties: Expressionable<AzurePowerShellScriptProperties>;
}

export interface AzurePowerShellScriptProperties {
  arguments?: Expressionable<string>;
  azPowerShellVersion: Expressionable<string>;
  cleanupPreference?: Expressionable<('Always' | 'OnSuccess' | 'OnExpiration')>;
  environmentVariables?: Expressionable<EnvironmentVariable[]>;
  forceUpdateTag?: Expressionable<string>;
  primaryScriptUri?: Expressionable<string>;
  retentionInterval: Expressionable<string>;
  scriptContent?: Expressionable<string>;
  supportingScriptUris?: Expressionable<string[]>;
  timeout?: Expressionable<string>;
}

export interface EnvironmentVariable {
  name: Expressionable<string>;
  secureValue?: Expressionable<string>;
  value?: Expressionable<string>;
}

export interface ManagedServiceIdentity {
  type?: Expressionable<('UserAssigned')>;
  userAssignedIdentities?: Expressionable<any>;
}

export interface UserAssignedIdentity {
  clientId?: Expressionable<string>;
  principalId?: Expressionable<string>;
}

export namespace deploymentScripts {
  export interface AdditionalProps {
    identity: Expressionable<ManagedServiceIdentity>;
    tags?: Expressionable<any>;
  }
  
  export type DeploymentScriptsResource = ResourceDefinition<AzurePowerShellScriptProperties | AzureCliScriptProperties, AdditionalProps>;
  
  export function create(name: Expressionable<string>, properties: AzurePowerShellScriptProperties | AzureCliScriptProperties, location: Expressionable<string>, identity: Expressionable<ManagedServiceIdentity>, tags?: Expressionable<any>): DeploymentScriptsResource {
    return {
      type: 'Microsoft.Resources/deploymentScripts',
      apiVersion: '2019-10-01-preview',
      name: [name],
      location,
      properties,
      additional: {
        identity,
        tags,
      },
    };
  }
}