import { Expressionable, ResourceDefinition } from 'arm-templator';

export interface PricingPlanProperties {
  planType?: Expressionable<('Basic')>;
  cap?: Expressionable<number>;
  warningThreshold?: Expressionable<number>;
  stopSendNotificationWhenHitThreshold?: Expressionable<boolean>;
  stopSendNotificationWhenHitCap?: Expressionable<boolean>;
}

export namespace components {
  export namespace pricingPlans {
    export type PricingPlansResource = ResourceDefinition<PricingPlanProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: PricingPlanProperties, location: Expressionable<string>): PricingPlansResource {
      return {
        type: 'Microsoft.Insights/components/pricingPlans',
        apiVersion: '2017-10-01',
        name: name,
        location,
        properties,
      };
    }
  }
}