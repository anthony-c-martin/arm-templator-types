import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface EnterpriseKnowledgeGraphProperties {
  description?: Expressionable<string>;
  metadata?: Expressionable<any>;
  provisioningState?: Expressionable<('Creating' | 'Deleting' | 'Failed' | 'Succeeded')>;
}

export interface Sku {
  name: Expressionable<('F0' | 'S1')>;
}

export namespace services {
  export function create(name: Expressionable<string>, properties: EnterpriseKnowledgeGraphProperties, location: Expressionable<string>): ResourceDefinition<EnterpriseKnowledgeGraphProperties> {
    return {
      type: 'Microsoft.EnterpriseKnowledgeGraph/services',
      apiVersion: '2018-12-03',
      name: name,
      location,
      properties,
    };
  }
}