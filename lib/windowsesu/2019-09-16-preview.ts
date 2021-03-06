import { Expressionable, ResourceDefinition } from 'arm-templator';

export interface MultipleActivationKeyProperties {
  agreementNumber?: Expressionable<string>;
  installedServerNumber?: Expressionable<number>;
  isEligible?: Expressionable<boolean>;
  osType?: Expressionable<('Windows7' | 'WindowsServer2008' | 'WindowsServer2008R2')>;
  supportType?: Expressionable<('SupplementalServicing' | 'PremiumAssurance')>;
}

export namespace multipleActivationKeys {
  export interface AdditionalProps {
    tags?: Expressionable<any>;
  }
  
  export type MultipleActivationKeysResource = ResourceDefinition<MultipleActivationKeyProperties, AdditionalProps>;
  
  export function create(name: Expressionable<string>, properties: MultipleActivationKeyProperties, location: Expressionable<string>, tags?: Expressionable<any>): MultipleActivationKeysResource {
    return {
      type: 'Microsoft.WindowsESU/multipleActivationKeys',
      apiVersion: '2019-09-16-preview',
      name: [name],
      location,
      properties,
      additional: {
        tags,
      },
    };
  }
}