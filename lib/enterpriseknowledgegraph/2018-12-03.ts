import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface EnterpriseKnowledgeGraphProperties {
  description?: Expressionable<string>;
  metadata?: Expressionable<any>;
  provisioningState?: Expressionable<('Creating' | 'Deleting' | 'Failed' | 'Succeeded')>;
}

export interface Sku {
  name: Expressionable<('F0' | 'S1')>;
}

export namespace services {
  export interface AddedResourceProps {
    sku?: Expressionable<Sku>;
    tags?: Expressionable<any>;
  }
  
  export type ServicesResource = ResourceDefinition<EnterpriseKnowledgeGraphProperties> & AddedResourceProps;
  
  export function create(name: Expressionable<string>, properties: EnterpriseKnowledgeGraphProperties, location?: Expressionable<string>, sku?: Expressionable<Sku>, tags?: Expressionable<any>): ServicesResource {
    return {
      type: 'Microsoft.EnterpriseKnowledgeGraph/services',
      apiVersion: '2018-12-03',
      name: [name],
      location,
      sku,
      tags,
      properties,
    };
  }
}