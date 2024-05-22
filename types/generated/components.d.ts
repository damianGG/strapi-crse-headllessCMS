import type { Schema, Attribute } from '@strapi/strapi';

export interface PageHeader extends Schema.Component {
  collectionName: 'components_page_headers';
  info: {
    displayName: 'Header';
    icon: 'chartBubble';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Obrazek: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'page.header': PageHeader;
    }
  }
}
