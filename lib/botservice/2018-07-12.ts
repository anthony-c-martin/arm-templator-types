// Generated using 'npm run generate /Users/antm88/Desktop/azure-resource-manager-schemas/schemas/2018-07-12/Microsoft.BotService.json'
import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface BotProperties {
  description?: Expressionable<string>;
  developerAppInsightKey?: Expressionable<string>;
  developerAppInsightsApiKey?: Expressionable<string>;
  developerAppInsightsApplicationId?: Expressionable<string>;
  displayName: Expressionable<string>;
  endpoint: Expressionable<string>;
  iconUrl?: Expressionable<string>;
  luisAppIds?: Expressionable<string[]>;
  luisKey?: Expressionable<string>;
  msaAppId: Expressionable<string>;
}

export interface Channel {
}

export interface ConnectionSettingParameter {
  key?: Expressionable<string>;
  value?: Expressionable<string>;
}

export interface ConnectionSettingProperties {
  clientId?: Expressionable<string>;
  clientSecret?: Expressionable<string>;
  parameters?: Expressionable<ConnectionSettingParameter[]>;
  scopes?: Expressionable<string>;
  serviceProviderDisplayName?: Expressionable<string>;
  serviceProviderId?: Expressionable<string>;
}

export interface DirectLineChannel {
  channelName: Expressionable<('DirectLineChannel')>;
  properties?: Expressionable<DirectLineChannelProperties>;
}

export interface DirectLineChannelProperties {
  sites?: Expressionable<DirectLineSite[]>;
}

export interface DirectLineSite {
  isEnabled: Expressionable<boolean>;
  isSecureSiteEnabled?: Expressionable<boolean>;
  isV1Enabled: Expressionable<boolean>;
  isV3Enabled: Expressionable<boolean>;
  siteName: Expressionable<string>;
  trustedOrigins?: Expressionable<string[]>;
}

export interface EmailChannel {
  channelName: Expressionable<('EmailChannel')>;
  properties?: Expressionable<EmailChannelProperties>;
}

export interface EmailChannelProperties {
  emailAddress: Expressionable<string>;
  isEnabled: Expressionable<boolean>;
  password: Expressionable<string>;
}

export interface EnterpriseChannelNode {
  azureLocation: Expressionable<string>;
  azureSku: Expressionable<string>;
  name: Expressionable<string>;
  state?: Expressionable<('Creating' | 'CreateFailed' | 'Started' | 'Starting' | 'StartFailed' | 'Stopped' | 'Stopping' | 'StopFailed' | 'Deleting' | 'DeleteFailed')>;
}

export interface EnterpriseChannelProperties {
  nodes: Expressionable<EnterpriseChannelNode[]>;
  state?: Expressionable<('Creating' | 'CreateFailed' | 'Started' | 'Starting' | 'StartFailed' | 'Stopped' | 'Stopping' | 'StopFailed' | 'Deleting' | 'DeleteFailed')>;
}

export interface FacebookChannel {
  channelName: Expressionable<('FacebookChannel')>;
  properties?: Expressionable<FacebookChannelProperties>;
}

export interface FacebookChannelProperties {
  appId: Expressionable<string>;
  appSecret: Expressionable<string>;
  isEnabled: Expressionable<boolean>;
  pages?: Expressionable<FacebookPage[]>;
}

export interface FacebookPage {
  accessToken: Expressionable<string>;
  id: Expressionable<string>;
}

export interface KikChannel {
  channelName: Expressionable<('KikChannel')>;
  properties?: Expressionable<KikChannelProperties>;
}

export interface KikChannelProperties {
  apiKey: Expressionable<string>;
  isEnabled: Expressionable<boolean>;
  isValidated?: Expressionable<boolean>;
  userName: Expressionable<string>;
}

export interface MsTeamsChannel {
  channelName: Expressionable<('MsTeamsChannel')>;
  properties?: Expressionable<MsTeamsChannelProperties>;
}

export interface MsTeamsChannelProperties {
  callingWebHook?: Expressionable<string>;
  enableCalling?: Expressionable<boolean>;
  isEnabled: Expressionable<boolean>;
}

export interface Sku {
  name: Expressionable<('F0' | 'S1')>;
}

export interface SkypeChannel {
  channelName: Expressionable<('SkypeChannel')>;
  properties?: Expressionable<SkypeChannelProperties>;
}

export interface SkypeChannelProperties {
  callingWebHook?: Expressionable<string>;
  enableCalling?: Expressionable<boolean>;
  enableGroups?: Expressionable<boolean>;
  enableMediaCards?: Expressionable<boolean>;
  enableMessaging?: Expressionable<boolean>;
  enableScreenSharing?: Expressionable<boolean>;
  enableVideo?: Expressionable<boolean>;
  groupsMode?: Expressionable<string>;
  isEnabled: Expressionable<boolean>;
}

export interface SlackChannel {
  channelName: Expressionable<('SlackChannel')>;
  properties?: Expressionable<SlackChannelProperties>;
}

export interface SlackChannelProperties {
  clientId: Expressionable<string>;
  clientSecret: Expressionable<string>;
  isEnabled: Expressionable<boolean>;
  landingPageUrl?: Expressionable<string>;
  verificationToken: Expressionable<string>;
}

export interface SmsChannel {
  channelName: Expressionable<('SmsChannel')>;
  properties?: Expressionable<SmsChannelProperties>;
}

export interface SmsChannelProperties {
  accountSID: Expressionable<string>;
  authToken: Expressionable<string>;
  isEnabled: Expressionable<boolean>;
  isValidated?: Expressionable<boolean>;
  phone: Expressionable<string>;
}

export interface TelegramChannel {
  channelName: Expressionable<('TelegramChannel')>;
  properties?: Expressionable<TelegramChannelProperties>;
}

export interface TelegramChannelProperties {
  accessToken: Expressionable<string>;
  isEnabled: Expressionable<boolean>;
  isValidated?: Expressionable<boolean>;
}

export interface WebChatChannel {
  channelName: Expressionable<('WebChatChannel')>;
  properties?: Expressionable<WebChatChannelProperties>;
}

export interface WebChatChannelProperties {
  sites?: Expressionable<WebChatSite[]>;
}

export interface WebChatSite {
  enablePreview: Expressionable<boolean>;
  isEnabled: Expressionable<boolean>;
  siteName: Expressionable<string>;
}

export namespace botServices {
  export function create(name: Expressionable<string>, properties: BotProperties, location: Expressionable<string>): ResourceDefinition<BotProperties> {
    return {
      type: 'Microsoft.BotService/botServices',
      apiVersion: '2018-07-12',
      name: name,
      location,
      properties,
    };
  }
}
export namespace botServices {
  export namespace channels {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: Channel, location: Expressionable<string>): ResourceDefinition<Channel> {
      return {
        type: 'Microsoft.BotService/botServices/channels',
        apiVersion: '2018-07-12',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace botServices {
  export namespace Connections {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: ConnectionSettingProperties, location: Expressionable<string>): ResourceDefinition<ConnectionSettingProperties> {
      return {
        type: 'Microsoft.BotService/botServices/Connections',
        apiVersion: '2018-07-12',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace enterpriseChannels {
  export function create(name: Expressionable<string>, properties: EnterpriseChannelProperties, location: Expressionable<string>): ResourceDefinition<EnterpriseChannelProperties> {
    return {
      type: 'Microsoft.BotService/enterpriseChannels',
      apiVersion: '2018-07-12',
      name: name,
      location,
      properties,
    };
  }
}
