import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface CognitiveServicesAccountApiProperties {
  eventHubConnectionString?: Expressionable<string>;
  qnaRuntimeEndpoint?: Expressionable<string>;
  statisticsEnabled?: Expressionable<boolean>;
  storageAccountConnectionString?: Expressionable<string>;
}

export interface CognitiveServicesAccountProperties {
  apiProperties?: Expressionable<CognitiveServicesAccountApiProperties>;
  customSubDomainName?: Expressionable<string>;
  networkAcls?: Expressionable<NetworkRuleSet>;
}

export interface IpRule {
  value: Expressionable<string>;
}

export interface NetworkRuleSet {
  defaultAction?: Expressionable<('Allow' | 'Deny')>;
  ipRules?: Expressionable<IpRule[]>;
  virtualNetworkRules?: Expressionable<VirtualNetworkRule[]>;
}

export interface Sku {
  name: Expressionable<string>;
}

export interface VirtualNetworkRule {
  id: Expressionable<string>;
  ignoreMissingVnetServiceEndpoint?: Expressionable<boolean>;
  state?: Expressionable<string>;
}

export namespace accounts {
  export interface AddedResourceProps {
    kind?: Expressionable<string>;
    sku?: Expressionable<Sku>;
    tags?: Expressionable<any>;
  }
  
  export type AccountsResource = ResourceDefinition<CognitiveServicesAccountProperties> & AddedResourceProps;
  
  export function create(name: Expressionable<string>, properties: CognitiveServicesAccountProperties, location?: Expressionable<string>, sku?: Expressionable<Sku>, kind?: Expressionable<string>, tags?: Expressionable<any>): AccountsResource {
    return {
      type: 'Microsoft.CognitiveServices/accounts',
      apiVersion: '2017-04-18',
      name: [name],
      location,
      sku,
      kind,
      tags,
      properties,
    };
  }
}