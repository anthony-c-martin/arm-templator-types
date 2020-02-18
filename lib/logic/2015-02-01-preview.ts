import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface ResourceReference {
  id?: Expressionable<string>;
}

export interface Sku {
  name?: Expressionable<('NotSpecified' | 'Free' | 'Shared' | 'Basic' | 'Standard' | 'Premium')>;
  plan?: Expressionable<ResourceReference>;
}

export interface WorkflowParameter {
  type?: Expressionable<('NotSpecified' | 'String' | 'SecureString' | 'Int' | 'Float' | 'Bool' | 'Array' | 'Object' | 'SecureObject')>;
}

export interface WorkflowProperties {
  state?: Expressionable<('NotSpecified' | 'Enabled' | 'Disabled' | 'Deleted' | 'Suspended')>;
  sku?: Expressionable<Sku>;
}

export namespace workflows {
  export function create(name: Expressionable<string>, properties: WorkflowProperties): ResourceDefinition<WorkflowProperties> {
    return {
      type: 'Microsoft.Logic/workflows',
      apiVersion: '2015-02-01-preview',
      name: name,
      properties,
    };
  }
}