import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';

const here = dirname(fileURLToPath(import.meta.url));
const page = await readFile(join(here, '..', 'src', 'pages', 'index.astro'), 'utf8');

test('HypeSiege marketing page loads the reviewed anonymous ORES Chat component', () => {
  assert.match(page, /https:\/\/ores-chat\.github\.io\/components\/v1\/ores-chat-footer-link\.js/);
  assert.match(page, /<ores-chat-footer-link context-id="hypesiege-marketing">/);
  assert.match(page, /https:\/\/ores-chat\.github\.io\/chat\/\?context=hypesiege-marketing/);
  assert.match(page, /target="_blank"\s+rel="noopener noreferrer"/);
});

test('HypeSiege marketing CSP keeps public chat anonymous and same-origin by default', () => {
  assert.match(page, /Content-Security-Policy/);
  assert.match(page, /script-src 'self' https:\/\/ores-chat\.github\.io/);
  assert.match(page, /connect-src 'self'/);
  assert.match(page, /frame-ancestors 'none'/);
  assert.doesNotMatch(page, /Authorization\s*:/i);
});
