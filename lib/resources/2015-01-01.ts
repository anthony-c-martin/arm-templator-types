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
  export function create(name: Expressionable<string>, properties: any): ResourceDefinition<any> {
    return {
      type: 'Microsoft.Resources/deployments',
      apiVersion: '2015-01-01',
      name: [name],
      properties,
    };
  }
}
export namespace links {
  export function create(name: Expressionable<string>, properties: any): ResourceDefinition<any> {
    return {
      type: 'Microsoft.Resources/links',
      apiVersion: '2015-01-01',
      name: [name],
      properties,
    };
  }
}