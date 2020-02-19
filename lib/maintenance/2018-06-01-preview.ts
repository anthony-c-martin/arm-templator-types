import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface ConfigurationAssignmentProperties {
  maintenanceConfigurationId?: Expressionable<string>;
  resourceId?: Expressionable<string>;
}

export interface MaintenanceConfigurationProperties {
  extensionProperties?: Expressionable<any>;
  maintenanceScope?: Expressionable<('All' | 'Host' | 'Resource' | 'InResource')>;
  namespace?: Expressionable<string>;
}

export namespace maintenanceConfigurations {
  export function create(name: Expressionable<string>, properties: MaintenanceConfigurationProperties, location?: Expressionable<string>): ResourceDefinition<MaintenanceConfigurationProperties> {
    return {
      type: 'Microsoft.Maintenance/maintenanceConfigurations',
      apiVersion: '2018-06-01-preview',
      name: [name],
      location,
      properties,
    };
  }
}