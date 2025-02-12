import { html } from '@lion/core';

export const detailsThreeColumnStyles = html`
  <style>
    .psdk-grid-filter {
      display: grid;
      grid-template-columns: repeat(3,minmax(0,1fr));
      column-gap: calc(3 * 0.5rem);
      row-gap: calc(3 * 0.5rem);
      align-items: start;
    }
  </style>
`