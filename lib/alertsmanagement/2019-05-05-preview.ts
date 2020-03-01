import { Expressionable, ResourceDefinition } from 'arm-templator';

export interface ActionRuleProperties {
  conditions?: Expressionable<Conditions>;
  description?: Expressionable<string>;
  scope?: Expressionable<Scope>;
  status?: Expressionable<('Enabled' | 'Disabled')>;
}

export interface Condition {
  operator?: Expressionable<('Equals' | 'NotEquals' | 'Contains' | 'DoesNotContain')>;
  values?: Expressionable<string[]>;
}

export interface Conditions {
  alertContext?: Expressionable<Condition>;
  alertRuleId?: Expressionable<Condition>;
  description?: Expressionable<Condition>;
  monitorCondition?: Expressionable<Condition>;
  monitorService?: Expressionable<Condition>;
  severity?: Expressionable<Condition>;
  targetResourceType?: Expressionable<Condition>;
}

export interface Diagnostics {
  type: Expressionable<('Diagnostics')>;
}

export interface Scope {
  scopeType?: Expressionable<('ResourceGroup' | 'Resource')>;
  values?: Expressionable<string[]>;
}

export namespace actionRules {
  export interface AdditionalProps {
    tags?: Expressionable<any>;
  }
  
  export type ActionRulesResource = ResourceDefinition<ActionRuleProperties, AdditionalProps>;
  
  export function create(name: Expressionable<string>, properties: ActionRuleProperties, location: Expressionable<string>, tags?: Expressionable<any>): ActionRulesResource {
    return {
      type: 'Microsoft.AlertsManagement/actionRules',
      apiVersion: '2019-05-05-preview',
      name: [name],
      location,
      properties,
      additional: {
        tags,
      },
    };
  }
}