import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export namespace accounts {
  interface AdditionalProps {
    plan: Expressionable<any>;
  }
  
  export function create(name: Expressionable<string>, properties: any, plan: Expressionable<any>): ResourceDefinition<any> & AdditionalProps {
    return {
      type: 'Sendgrid.Email/accounts',
      apiVersion: '2015-01-01',
      name: [name],
      plan,
      properties,
    };
  }
}