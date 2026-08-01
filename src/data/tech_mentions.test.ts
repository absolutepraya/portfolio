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

test('keeps Microsoft Foundry and Fabric as text links until licensed logos arrive', () => {
  expect(
    getTechnologyByHref('https://azure.microsoft.com/en-us/products/ai-foundry')
      ?.logo,
  ).toBeUndefined();
  expect(
    getTechnologyByHref('https://www.microsoft.com/en-us/microsoft-fabric')
      ?.logo,
  ).toBeUndefined();
});

test('resolves languages as non-linked technology mentions', () => {
  expect(getPlainTechnologyByLabel('Python')?.href).toBeUndefined();
  expect(getPlainTechnologyByLabel('Go')?.href).toBeUndefined();
});

test('leaves unmapped labels and URLs alone', () => {
  expect(getTechnologyByHref('https://example.com/')).toBeUndefined();
  expect(getPlainTechnologyByLabel('GraphQL')).toBeUndefined();
});
