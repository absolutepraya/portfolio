import { expect, test } from 'bun:test';
import {
  getPlainTechnologyByLabel,
  getTechnologyByHref,
} from './tech_mentions';

test('resolves linked technologies by their official homepage', () => {
  const cloudflare = getTechnologyByHref('https://www.cloudflare.com/');

  expect(cloudflare?.labels).toContain('Cloudflare');
  expect(cloudflare?.logo).toBeDefined();
});

test('resolves Microsoft Foundry to its official Azure Architecture Icon', () => {
  expect(
    getTechnologyByHref('https://azure.microsoft.com/en-us/products/ai-foundry')
      ?.logo,
  ).toBeDefined();
});

test('resolves Microsoft Fabric and Azure service icons individually', () => {
  expect(
    getTechnologyByHref('https://www.microsoft.com/en-us/microsoft-fabric')
      ?.logo,
  ).toBeDefined();
  expect(
    getTechnologyByHref('https://azure.microsoft.com/en-us/products/functions')
      ?.logo,
  ).toBeDefined();
  expect(
    getTechnologyByHref('https://azure.microsoft.com/en-us/products/monitor')
      ?.logo,
  ).toBeDefined();
});

test('leaves languages as ordinary text without linked or icon treatment', () => {
  expect(getPlainTechnologyByLabel('Python')).toBeUndefined();
  expect(getPlainTechnologyByLabel('Go')).toBeUndefined();
});

test('leaves unmapped labels and URLs alone', () => {
  expect(getTechnologyByHref('https://example.com/')).toBeUndefined();
  expect(getPlainTechnologyByLabel('GraphQL')).toBeUndefined();
});
