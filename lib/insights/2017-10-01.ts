// Generated using 'npm run generate /Users/antm88/Desktop/azure-resource-manager-schemas/schemas/2017-10-01/Microsoft.Insights.json'
import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface PricingPlanProperties {
  planType?: Expressionable<('Basic')>;
  cap?: Expressionable<number>;
  warningThreshold?: Expressionable<number>;
  stopSendNotificationWhenHitThreshold?: Expressionable<boolean>;
  stopSendNotificationWhenHitCap?: Expressionable<boolean>;
}

export namespace components {
  export namespace pricingPlans {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: PricingPlanProperties, location: Expressionable<string>): ResourceDefinition<PricingPlanProperties> {
      return {
        type: 'Microsoft.Insights/components/pricingPlans',
        apiVersion: '2017-10-01',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
