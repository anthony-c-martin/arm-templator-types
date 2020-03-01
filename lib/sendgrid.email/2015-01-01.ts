import { Expressionable, ResourceDefinition } from 'arm-templator';

export namespace accounts {
  export interface AdditionalProps {
    plan: Expressionable<any>;
  }
  
  export type AccountsResource = ResourceDefinition<any, AdditionalProps>;
  
  export function create(name: Expressionable<string>, properties: any, plan: Expressionable<any>): AccountsResource {
    return {
      type: 'Sendgrid.Email/accounts',
      apiVersion: '2015-01-01',
      name: [name],
      properties,
      additional: {
        plan,
      },
    };
  }
}