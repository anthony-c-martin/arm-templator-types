import { Expressionable, ResourceDefinition } from 'arm-templator';

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
  export type WorkflowsResource = ResourceDefinition<WorkflowProperties, undefined>;
  
  export function create(name: Expressionable<string>, properties: WorkflowProperties, location?: Expressionable<string>): WorkflowsResource {
    return {
      type: 'Microsoft.Logic/workflows',
      apiVersion: '2017-07-01',
      name: [name],
      location,
      properties,
    };
  }
}