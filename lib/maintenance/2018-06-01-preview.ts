import { Expressionable, ResourceDefinition } from 'arm-templator';

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
  export interface AdditionalProps {
    tags?: Expressionable<any>;
  }
  
  export type MaintenanceConfigurationsResource = ResourceDefinition<MaintenanceConfigurationProperties, AdditionalProps>;
  
  export function create(name: Expressionable<string>, properties: MaintenanceConfigurationProperties, location?: Expressionable<string>, tags?: Expressionable<any>): MaintenanceConfigurationsResource {
    return {
      type: 'Microsoft.Maintenance/maintenanceConfigurations',
      apiVersion: '2018-06-01-preview',
      name: [name],
      location,
      properties,
      additional: {
        tags,
      },
    };
  }
}