import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

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
  export interface AddedResourceProps {
    sku?: Expressionable<ResourceSku>;
  }
  
  export type SignalRResource = ResourceDefinition<SignalRCreateOrUpdateProperties> & AddedResourceProps;
  
  export function create(name: Expressionable<string>, properties: SignalRCreateOrUpdateProperties, location: Expressionable<string>, sku?: Expressionable<ResourceSku>): SignalRResource {
    return {
      type: 'Microsoft.SignalRService/SignalR',
      apiVersion: '2018-10-01',
      name: [name],
      location,
      sku,
      properties,
    };
  }
}