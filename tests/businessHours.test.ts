import { test } from 'node:test';
import assert from 'node:assert/strict';
import { isBusinessHours } from '../src/businessHours';
for (const [instant, expected] of [
  ['2026-11-09T06:59:59Z', false], ['2026-11-09T07:00:00Z', true],
  ['2026-11-09T15:59:59Z', true], ['2026-11-09T16:00:00Z', false],
  ['2026-11-14T10:00:00Z', false], ['2026-11-15T10:00:00Z', false],
] as const) {
  test(instant, () => assert.equal(isBusinessHours(new Date(instant)), expected));
}
