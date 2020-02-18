import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface Sku {
  name: Expressionable<string>;
  tier?: Expressionable<string>;
}

export interface WorkspaceCustomBooleanParameter {
  type?: Expressionable<('Bool' | 'Object' | 'String')>;
  value: Expressionable<boolean>;
}

export interface WorkspaceCustomObjectParameter {
  type?: Expressionable<('Bool' | 'Object' | 'String')>;
  value: Expressionable<any>;
}

export interface WorkspaceCustomParameters {
  amlWorkspaceId?: Expressionable<WorkspaceCustomStringParameter>;
  customPrivateSubnetName?: Expressionable<WorkspaceCustomStringParameter>;
  customPublicSubnetName?: Expressionable<WorkspaceCustomStringParameter>;
  customVirtualNetworkId?: Expressionable<WorkspaceCustomStringParameter>;
  enableNoPublicIp?: Expressionable<WorkspaceCustomBooleanParameter>;
  loadBalancerBackendPoolName?: Expressionable<WorkspaceCustomStringParameter>;
  loadBalancerId?: Expressionable<WorkspaceCustomStringParameter>;
  relayNamespaceName?: Expressionable<WorkspaceCustomStringParameter>;
  resourceTags?: Expressionable<WorkspaceCustomObjectParameter>;
  storageAccountName?: Expressionable<WorkspaceCustomStringParameter>;
  storageAccountSkuName?: Expressionable<WorkspaceCustomStringParameter>;
  vnetAddressPrefix?: Expressionable<WorkspaceCustomStringParameter>;
}

export interface WorkspaceCustomStringParameter {
  type?: Expressionable<('Bool' | 'Object' | 'String')>;
  value: Expressionable<string>;
}

export interface WorkspaceProperties {
  authorizations?: Expressionable<WorkspaceProviderAuthorization[]>;
  managedResourceGroupId: Expressionable<string>;
  parameters?: Expressionable<WorkspaceCustomParameters>;
  uiDefinitionUri?: Expressionable<string>;
}

export interface WorkspaceProviderAuthorization {
  principalId: Expressionable<string>;
  roleDefinitionId: Expressionable<string>;
}

export namespace workspaces {
  export function create(name: Expressionable<string>, properties: WorkspaceProperties, location: Expressionable<string>): ResourceDefinition<WorkspaceProperties> {
    return {
      type: 'Microsoft.Databricks/workspaces',
      apiVersion: '2018-04-01',
      name: name,
      location,
      properties,
    };
  }
}