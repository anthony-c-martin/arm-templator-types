import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface Sku {
  name: Expressionable<('F0' | 'P0' | 'P1' | 'P2' | 'S0' | 'S1' | 'S2' | 'S3' | 'S4' | 'S5' | 'S6')>;
}

export namespace accounts {
  export interface AddedResourceProps {
    kind: Expressionable<('Academic' | 'Bing.Autosuggest' | 'Bing.Search' | 'Bing.Speech' | 'Bing.SpellCheck' | 'ComputerVision' | 'ContentModerator' | 'Emotion' | 'Face' | 'LUIS' | 'Recommendations' | 'SpeakerRecognition' | 'Speech' | 'SpeechTranslation' | 'TextAnalytics' | 'TextTranslation' | 'WebLM')>;
    sku: Expressionable<Sku>;
    tags?: Expressionable<any>;
  }
  
  export type AccountsResource = ResourceDefinition<any> & AddedResourceProps;
  
  export function create(name: Expressionable<string>, properties: any, location: Expressionable<string>, sku: Expressionable<Sku>, kind: Expressionable<('Academic' | 'Bing.Autosuggest' | 'Bing.Search' | 'Bing.Speech' | 'Bing.SpellCheck' | 'ComputerVision' | 'ContentModerator' | 'Emotion' | 'Face' | 'LUIS' | 'Recommendations' | 'SpeakerRecognition' | 'Speech' | 'SpeechTranslation' | 'TextAnalytics' | 'TextTranslation' | 'WebLM')>, tags?: Expressionable<any>): AccountsResource {
    return {
      type: 'Microsoft.CognitiveServices/accounts',
      apiVersion: '2016-02-01-preview',
      name: [name],
      location,
      sku,
      kind,
      tags,
      properties,
    };
  }
}