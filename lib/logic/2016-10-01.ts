import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface ResourceReference {
  id?: Expressionable<string>;
}

export interface WorkflowParameter {
  type?: Expressionable<('NotSpecified' | 'String' | 'SecureString' | 'Int' | 'Float' | 'Bool' | 'Array' | 'Object' | 'SecureObject')>;
  description?: Expressionable<string>;
}

export interface WorkflowProperties {
  state?: Expressionable<('NotSpecified' | 'Completed' | 'Enabled' | 'Disabled' | 'Deleted' | 'Suspended')>;
  integrationAccount?: Expressionable<ResourceReference>;
}

export namespace workflows {
  export function create(name: Expressionable<string>, properties: WorkflowProperties, location: Expressionable<string>): ResourceDefinition<WorkflowProperties> {
    return {
      type: 'Microsoft.Logic/workflows',
      apiVersion: '2016-10-01',
      name: name,
      location,
      properties,
    };
  }
}