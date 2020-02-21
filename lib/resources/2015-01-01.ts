import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface templateLink {
  uri: Expressionable<string>;
  contentVersion?: Expressionable<string>;
}

export interface parametersLink {
  uri: Expressionable<string>;
  contentVersion?: Expressionable<string>;
}

export interface TemplateExpressionEvaluationOptions {
  scope: Expressionable<TemplateExpressionEvaluationScope>;
}

export interface TemplateExpressionEvaluationScope {
}

export namespace deployments {
  export type DeploymentsResource = ResourceDefinition<any, undefined>;
  
  export function create(name: Expressionable<string>, properties: any): DeploymentsResource {
    return {
      type: 'Microsoft.Resources/deployments',
      apiVersion: '2015-01-01',
      name: [name],
      properties,
    };
  }
}
export namespace links {
  export type LinksResource = ResourceDefinition<any, undefined>;
  
  export function create(name: Expressionable<string>, properties: any): LinksResource {
    return {
      type: 'Microsoft.Resources/links',
      apiVersion: '2015-01-01',
      name: [name],
      properties,
    };
  }
}