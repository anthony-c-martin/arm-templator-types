import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export namespace accounts {
  export function create(name: Expressionable<string>, properties: any): ResourceDefinition<any> {
    return {
      type: 'Sendgrid.Email/accounts',
      apiVersion: '2015-01-01',
      name: name,
      properties,
    };
  }
}