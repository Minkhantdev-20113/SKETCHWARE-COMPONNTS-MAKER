<<<<<<< HEAD
import { describe, expect, it } from 'vitest';
import { isHexColor, isValidId, clampNumber } from '../lib/validators';

describe('validators', () => {
  it('accepts valid 6- and 8-digit hex colors', () => {
    expect(isHexColor('#112233')).toBe(true);
    expect(isHexColor('#FF112233')).toBe(true);
    expect(isHexColor('#GHIJKL')).toBe(false);
  });

  it('validates IDs correctly', () => {
    expect(isValidId('button1')).toBe(true);
    expect(isValidId('_view')).toBe(true);
    expect(isValidId('1invalid')).toBe(false);
    expect(isValidId('bad-char!')).toBe(false);
  });

  it('clamps numbers to bounds', () => {
    expect(clampNumber(5, 0, 10)).toBe(5);
    expect(clampNumber(-1, 0, 10)).toBe(0);
    expect(clampNumber(20, 0, 10)).toBe(10);
  });
});
=======
import { describe, expect, it } from 'vitest';
import { isHexColor, isValidId, clampNumber } from '../lib/validators';

describe('validators', () => {
  it('accepts valid 6- and 8-digit hex colors', () => {
    expect(isHexColor('#112233')).toBe(true);
    expect(isHexColor('#FF112233')).toBe(true);
    expect(isHexColor('#GHIJKL')).toBe(false);
  });

  it('validates IDs correctly', () => {
    expect(isValidId('button1')).toBe(true);
    expect(isValidId('_view')).toBe(true);
    expect(isValidId('1invalid')).toBe(false);
    expect(isValidId('bad-char!')).toBe(false);
  });

  it('clamps numbers to bounds', () => {
    expect(clampNumber(5, 0, 10)).toBe(5);
    expect(clampNumber(-1, 0, 10)).toBe(0);
    expect(clampNumber(20, 0, 10)).toBe(10);
  });
});
>>>>>>> e0a9267de792070e0a727aa26d900288ed444b96
