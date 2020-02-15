// Generated using 'npm run generate /Users/antm88/Desktop/azure-resource-manager-schemas/schemas/2018-09-01/Microsoft.IotCentral.json'
import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface AppProperties {
  displayName?: Expressionable<string>;
  subdomain?: Expressionable<string>;
  template?: Expressionable<string>;
}

export interface AppSkuInfo {
  name: Expressionable<('F1' | 'S1' | 'ST0' | 'ST1' | 'ST2')>;
}

export namespace IoTApps {
  export function create(name: Expressionable<string>, properties: AppProperties, location: Expressionable<string>): ResourceDefinition<AppProperties> {
    return {
      type: 'Microsoft.IoTCentral/IoTApps',
      apiVersion: '2018-09-01',
      name: name,
      location,
      properties,
    };
  }
}
