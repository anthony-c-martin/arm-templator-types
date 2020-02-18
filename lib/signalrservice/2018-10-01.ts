import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface ResourceSku {
  name: Expressionable<string>;
  tier?: Expressionable<('Free' | 'Basic' | 'Standard' | 'Premium')>;
  size?: Expressionable<string>;
  family?: Expressionable<string>;
  capacity?: Expressionable<number>;
}

export interface SignalRCreateOrUpdateProperties {
  hostNamePrefix?: Expressionable<string>;
  features?: Expressionable<SignalRFeature[]>;
}

export interface SignalRFeature {
  flag: Expressionable<('ServiceMode')>;
  value: Expressionable<string>;
}

export namespace SignalR {
  export function create(name: Expressionable<string>, properties: SignalRCreateOrUpdateProperties, location: Expressionable<string>): ResourceDefinition<SignalRCreateOrUpdateProperties> {
    return {
      type: 'Microsoft.SignalRService/SignalR',
      apiVersion: '2018-10-01',
      name: name,
      location,
      properties,
    };
  }
}