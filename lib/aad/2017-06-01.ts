import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface DomainSecuritySettings {
  ntlmV1?: Expressionable<('Enabled' | 'Disabled')>;
  syncNtlmPasswords?: Expressionable<('Enabled' | 'Disabled')>;
  tlsV1?: Expressionable<('Enabled' | 'Disabled')>;
}

export interface DomainServiceProperties {
  domainName?: Expressionable<string>;
  domainSecuritySettings?: Expressionable<DomainSecuritySettings>;
  filteredSync?: Expressionable<('Enabled' | 'Disabled')>;
  ldapsSettings?: Expressionable<LdapsSettings>;
  notificationSettings?: Expressionable<NotificationSettings>;
  subnetId?: Expressionable<string>;
}

export interface LdapsSettings {
  externalAccess?: Expressionable<('Enabled' | 'Disabled')>;
  ldaps?: Expressionable<('Enabled' | 'Disabled')>;
  pfxCertificate?: Expressionable<string>;
  pfxCertificatePassword?: Expressionable<string>;
}

export interface NotificationSettings {
  additionalRecipients?: Expressionable<string[]>;
  notifyDcAdmins?: Expressionable<('Enabled' | 'Disabled')>;
  notifyGlobalAdmins?: Expressionable<('Enabled' | 'Disabled')>;
}

export namespace domainServices {
  export function create(name: Expressionable<string>, properties: DomainServiceProperties, location: Expressionable<string>): ResourceDefinition<DomainServiceProperties> {
    return {
      type: 'Microsoft.AAD/domainServices',
      apiVersion: '2017-06-01',
      name: name,
      location,
      properties,
    };
  }
}