import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface ResourceReference {
  id?: Expressionable<string>;
}

export interface Sku {
  name?: Expressionable<('NotSpecified' | 'Free' | 'Shared' | 'Basic' | 'Standard' | 'Premium')>;
  plan?: Expressionable<ResourceReference>;
}

export interface WorkflowParameter {
  type?: Expressionable<('NotSpecified' | 'String' | 'SecureString' | 'Int' | 'Float' | 'Bool' | 'Array' | 'Object' | 'SecureObject')>;
  description?: Expressionable<string>;
}

export interface WorkflowProperties {
  state?: Expressionable<('NotSpecified' | 'Completed' | 'Enabled' | 'Disabled' | 'Deleted' | 'Suspended')>;
  sku?: Expressionable<Sku>;
  integrationAccount?: Expressionable<ResourceReference>;
}

export interface integrationAccountsAgreementsProperties {
  hostPartner?: Expressionable<string>;
  guestPartner?: Expressionable<string>;
  hostIdentity?: Expressionable<IdentityProperties>;
  guestIdentity?: Expressionable<IdentityProperties>;
  agreementType?: Expressionable<string>;
}

export interface IdentityProperties {
  qualifier?: Expressionable<string>;
  value?: Expressionable<string>;
}

export interface integrationAccountsCertificatesProperties {
  publicCertificate?: Expressionable<string>;
  key?: Expressionable<keyProperties>;
}

export interface keyProperties {
  keyName?: Expressionable<string>;
  keyVault?: Expressionable<keyVaultProperties>;
}

export interface keyVaultProperties {
  name?: Expressionable<string>;
  id?: Expressionable<string>;
  type?: Expressionable<('Microsoft.KeyVault/vaults')>;
}

export interface integrationAccountsMapsProperties {
  mapType?: Expressionable<string>;
  content?: Expressionable<string>;
  contentLink?: Expressionable<contentLinkProperties>;
  contentType?: Expressionable<string>;
}

export interface integrationAccountsPartnersProperties {
  partnerType?: Expressionable<string>;
}

export interface integrationAccountsSchemasProperties {
  schemaType?: Expressionable<string>;
  targetNamespace?: Expressionable<string>;
  documentName?: Expressionable<string>;
  content?: Expressionable<string>;
  contentLink?: Expressionable<contentLinkProperties>;
  contentType?: Expressionable<string>;
}

export interface contentLinkProperties {
  uri?: Expressionable<string>;
  contentVersion?: Expressionable<string>;
  contentSize?: Expressionable<number>;
  contentHash?: Expressionable<contentHashProperties>;
}

export interface contentHashProperties {
  algorithm?: Expressionable<string>;
  value?: Expressionable<string>;
}

export interface integrationAccountsAssembliesProperties {
  assemblyName?: Expressionable<string>;
  assemblyVersion?: Expressionable<string>;
  content?: Expressionable<string>;
  contentLink?: Expressionable<contentLinkProperties>;
  contentType?: Expressionable<string>;
}

export interface integrationAccountsBatchConfigurationsProperties {
  batchGroupName?: Expressionable<string>;
  releaseCriteria?: Expressionable<batchReleaseCriteriaProperties>;
}

export interface batchReleaseCriteriaProperties {
  messageCount?: Expressionable<number>;
  batchSize?: Expressionable<number>;
}

export namespace workflows {
  export function create(name: Expressionable<string>, properties: WorkflowProperties, location: Expressionable<string>): ResourceDefinition<WorkflowProperties> {
    return {
      type: 'Microsoft.Logic/workflows',
      apiVersion: '2016-06-01',
      name: name,
      location,
      properties,
    };
  }
}
export namespace integrationAccounts {
  export function create(name: Expressionable<string>, properties: any, location: Expressionable<string>): ResourceDefinition<any> {
    return {
      type: 'Microsoft.Logic/integrationAccounts',
      apiVersion: '2016-06-01',
      name: name,
      location,
      properties,
    };
  }
}
export namespace integrationAccounts {
  export namespace agreements {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: integrationAccountsAgreementsProperties, location: Expressionable<string>): ResourceDefinition<integrationAccountsAgreementsProperties> {
      return {
        type: 'Microsoft.Logic/integrationAccounts/agreements',
        apiVersion: '2016-06-01',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace integrationAccounts {
  export namespace certificates {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: integrationAccountsCertificatesProperties, location: Expressionable<string>): ResourceDefinition<integrationAccountsCertificatesProperties> {
      return {
        type: 'Microsoft.Logic/integrationAccounts/certificates',
        apiVersion: '2016-06-01',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace integrationAccounts {
  export namespace maps {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: integrationAccountsMapsProperties, location: Expressionable<string>): ResourceDefinition<integrationAccountsMapsProperties> {
      return {
        type: 'Microsoft.Logic/integrationAccounts/maps',
        apiVersion: '2016-06-01',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace integrationAccounts {
  export namespace partners {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: integrationAccountsPartnersProperties, location: Expressionable<string>): ResourceDefinition<integrationAccountsPartnersProperties> {
      return {
        type: 'Microsoft.Logic/integrationAccounts/partners',
        apiVersion: '2016-06-01',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace integrationAccounts {
  export namespace schemas {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: integrationAccountsSchemasProperties, location: Expressionable<string>): ResourceDefinition<integrationAccountsSchemasProperties> {
      return {
        type: 'Microsoft.Logic/integrationAccounts/schemas',
        apiVersion: '2016-06-01',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace integrationAccounts {
  export namespace assemblies {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: integrationAccountsAssembliesProperties, location: Expressionable<string>): ResourceDefinition<integrationAccountsAssembliesProperties> {
      return {
        type: 'Microsoft.Logic/integrationAccounts/assemblies',
        apiVersion: '2016-06-01',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace integrationAccounts {
  export namespace batchConfigurations {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: integrationAccountsBatchConfigurationsProperties, location: Expressionable<string>): ResourceDefinition<integrationAccountsBatchConfigurationsProperties> {
      return {
        type: 'Microsoft.Logic/integrationAccounts/batchConfigurations',
        apiVersion: '2016-06-01',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}