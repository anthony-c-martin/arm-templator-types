import { Expressionable, ResourceDefinition } from 'arm-templator';

export interface Address {
  address1: Expressionable<string>;
  address2?: Expressionable<string>;
  city: Expressionable<string>;
  country: Expressionable<string>;
  postalCode: Expressionable<string>;
  state: Expressionable<string>;
}

export interface Contact {
  addressMailing?: Expressionable<Address>;
  email: Expressionable<string>;
  fax?: Expressionable<string>;
  jobTitle?: Expressionable<string>;
  nameFirst: Expressionable<string>;
  nameLast: Expressionable<string>;
  nameMiddle?: Expressionable<string>;
  organization?: Expressionable<string>;
  phone: Expressionable<string>;
}

export interface Domain_properties {
  contactAdmin?: Expressionable<Contact>;
  contactBilling?: Expressionable<Contact>;
  contactRegistrant?: Expressionable<Contact>;
  contactTech?: Expressionable<Contact>;
  nameServers?: Expressionable<string[]>;
  privacy?: Expressionable<boolean>;
  autoRenew?: Expressionable<(true)>;
  managedHostNames?: Expressionable<HostName[]>;
  consent?: Expressionable<DomainPurchaseConsent>;
  domainNotRenewableReasons?: Expressionable<('RegistrationStatusNotSupportedForRenewal' | 'ExpirationNotInRenewalTimeRange' | 'SubscriptionNotActive')[]>;
}

export interface DomainOwnershipIdentifier_properties {
  ownershipId?: Expressionable<string>;
}

export interface DomainPurchaseConsent {
  agreementKeys?: Expressionable<string[]>;
  agreedBy?: Expressionable<string>;
  agreedAt?: Expressionable<string>;
}

export interface HostName {
  name?: Expressionable<string>;
  siteNames?: Expressionable<string[]>;
  azureResourceName?: Expressionable<string>;
  azureResourceType?: Expressionable<('Website' | 'TrafficManager')>;
  customHostNameDnsRecordType?: Expressionable<('CName' | 'A')>;
  hostNameType?: Expressionable<('Verified' | 'Managed')>;
}

export namespace domains {
  export type DomainsResource = ResourceDefinition<Domain_properties, undefined>;
  
  export function create(name: Expressionable<string>, properties: Domain_properties): DomainsResource {
    return {
      type: 'Microsoft.DomainRegistration/domains',
      apiVersion: '2015-04-01',
      name: [name],
      properties,
    };
  }
}
export namespace domains {
  export namespace domainOwnershipIdentifiers {
    export type DomainOwnershipIdentifiersResource = ResourceDefinition<DomainOwnershipIdentifier_properties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: DomainOwnershipIdentifier_properties): DomainOwnershipIdentifiersResource {
      return {
        type: 'Microsoft.DomainRegistration/domains/domainOwnershipIdentifiers',
        apiVersion: '2015-04-01',
        name: name,
        properties,
      };
    }
  }
}