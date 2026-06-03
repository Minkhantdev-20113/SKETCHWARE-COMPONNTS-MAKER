<<<<<<< HEAD
import { describe, expect, it } from 'vitest';
import { generateJava } from '../lib/codegen';

describe('generateJava', () => {
  it('produces a valid Java block for a simple model', () => {
    const model = {
      id: 'button1',
      color: '#FF112233',
      cornerRadius: 12,
      stroke: { width: 2, color: '#FF0000FF' },
      ripple: { enabled: true, color: '#FFE0E0E0' },
      clickable: true,
      elevation: 2,
    };

    const code = generateJava(model as any);
    expect(code).toContain('GradientDrawable g = new android.graphics.drawable.GradientDrawable();');
    expect(code).toContain('g.setColor(0xFF112233);');
    expect(code).toContain('g.setCornerRadius(12);');
    expect(code).toContain('g.setStroke(2, 0xFF0000FF);');
    expect(code).toContain('view.setClickable(true);');
  });
});
=======
import { describe, expect, it } from 'vitest';
import { generateJava } from '../lib/codegen';

describe('generateJava', () => {
  it('produces a valid Java block for a simple model', () => {
    const model = {
      id: 'button1',
      color: '#FF112233',
      cornerRadius: 12,
      stroke: { width: 2, color: '#FF0000FF' },
      ripple: { enabled: true, color: '#FFE0E0E0' },
      clickable: true,
      elevation: 2,
    };

    const code = generateJava(model as any);
    expect(code).toContain('GradientDrawable g = new android.graphics.drawable.GradientDrawable();');
    expect(code).toContain('g.setColor(0xFF112233);');
    expect(code).toContain('g.setCornerRadius(12);');
    expect(code).toContain('g.setStroke(2, 0xFF0000FF);');
    expect(code).toContain('view.setClickable(true);');
  });
});
>>>>>>> e0a9267de792070e0a727aa26d900288ed444b96
