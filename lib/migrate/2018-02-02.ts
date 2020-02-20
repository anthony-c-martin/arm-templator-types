import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface AssessmentProperties {
  azureLocation: Expressionable<('Unknown' | 'EastAsia' | 'SoutheastAsia' | 'AustraliaEast' | 'AustraliaSoutheast' | 'BrazilSouth' | 'CanadaCentral' | 'CanadaEast' | 'WestEurope' | 'NorthEurope' | 'CentralIndia' | 'SouthIndia' | 'WestIndia' | 'JapanEast' | 'JapanWest' | 'KoreaCentral' | 'KoreaSouth' | 'UkWest' | 'UkSouth' | 'NorthCentralUs' | 'EastUs' | 'WestUs2' | 'SouthCentralUs' | 'CentralUs' | 'EastUs2' | 'WestUs' | 'WestCentralUs' | 'GermanyCentral' | 'GermanyNortheast' | 'ChinaNorth' | 'ChinaEast')>;
  azureOfferCode: Expressionable<('Unknown' | 'MSAZR0003P' | 'MSAZR0044P' | 'MSAZR0059P' | 'MSAZR0060P' | 'MSAZR0062P' | 'MSAZR0063P' | 'MSAZR0064P' | 'MSAZR0029P' | 'MSAZR0022P' | 'MSAZR0023P' | 'MSAZR0148P' | 'MSAZR0025P' | 'MSAZR0036P' | 'MSAZR0120P' | 'MSAZR0121P' | 'MSAZR0122P' | 'MSAZR0123P' | 'MSAZR0124P' | 'MSAZR0125P' | 'MSAZR0126P' | 'MSAZR0127P' | 'MSAZR0128P' | 'MSAZR0129P' | 'MSAZR0130P' | 'MSAZR0111P' | 'MSAZR0144P' | 'MSAZR0149P' | 'MSMCAZR0044P' | 'MSMCAZR0059P' | 'MSMCAZR0060P' | 'MSMCAZR0063P' | 'MSMCAZR0120P' | 'MSMCAZR0121P' | 'MSMCAZR0125P' | 'MSMCAZR0128P' | 'MSAZRDE0003P' | 'MSAZRDE0044P')>;
  azurePricingTier: Expressionable<('Standard' | 'Basic')>;
  azureStorageRedundancy: Expressionable<('Unknown' | 'LocallyRedundant' | 'ZoneRedundant' | 'GeoRedundant' | 'ReadAccessGeoRedundant')>;
  scalingFactor: Expressionable<number>;
  percentile: Expressionable<('Percentile50' | 'Percentile90' | 'Percentile95' | 'Percentile99')>;
  timeRange: Expressionable<('Day' | 'Week' | 'Month')>;
  stage: Expressionable<('InProgress' | 'UnderReview' | 'Approved')>;
  currency: Expressionable<('Unknown' | 'USD' | 'DKK' | 'CAD' | 'IDR' | 'JPY' | 'KRW' | 'NZD' | 'NOK' | 'RUB' | 'SAR' | 'ZAR' | 'SEK' | 'TRY' | 'GBP' | 'MXN' | 'MYR' | 'INR' | 'HKD' | 'BRL' | 'TWD' | 'EUR' | 'CHF' | 'ARS' | 'AUD' | 'CNY')>;
  azureHybridUseBenefit: Expressionable<('Unknown' | 'Yes' | 'No')>;
  discountPercentage: Expressionable<number>;
  sizingCriterion: Expressionable<('PerformanceBased' | 'AsOnPremises')>;
}

export interface GroupProperties {
  machines: Expressionable<string[]>;
}

export interface ProjectProperties {
  customerWorkspaceId?: Expressionable<string>;
  customerWorkspaceLocation?: Expressionable<string>;
  provisioningState?: Expressionable<('Accepted' | 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Succeeded')>;
}

export namespace projects {
  export interface AddedResourceProps {
    tags?: Expressionable<any>;
  }
  
  export type ProjectsResource = ResourceDefinition<ProjectProperties> & AddedResourceProps;
  
  export function create(name: Expressionable<string>, properties: ProjectProperties, location?: Expressionable<string>, tags?: Expressionable<any>): ProjectsResource {
    return {
      type: 'Microsoft.Migrate/projects',
      apiVersion: '2018-02-02',
      name: [name],
      location,
      tags,
      properties,
    };
  }
}
export namespace projects {
  export namespace groups {
    export type GroupsResource = ResourceDefinition<GroupProperties>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: GroupProperties): GroupsResource {
      return {
        type: 'Microsoft.Migrate/projects/groups',
        apiVersion: '2018-02-02',
        name: name,
        properties,
      };
    }
  }
}
export namespace projects {
  export namespace groups {
    export namespace assessments {
      export type AssessmentsResource = ResourceDefinition<AssessmentProperties>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: AssessmentProperties): AssessmentsResource {
        return {
          type: 'Microsoft.Migrate/projects/groups/assessments',
          apiVersion: '2018-02-02',
          name: name,
          properties,
        };
      }
    }
  }
}