import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export namespace accounts {
  export interface AddedResourceProps {
    plan: Expressionable<any>;
  }
  
  export type AccountsResource = ResourceDefinition<any> & AddedResourceProps;
  
  export function create(name: Expressionable<string>, properties: any, plan: Expressionable<any>): AccountsResource {
    return {
      type: 'Sendgrid.Email/accounts',
      apiVersion: '2015-01-01',
      name: [name],
      plan,
      properties,
    };
  }
}