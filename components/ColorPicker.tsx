<<<<<<< HEAD
"use client";
import React, { useState } from 'react';
import { isHexColor } from '../lib/validators';
import useImageSampler from '../hooks/useImageSampler';

/*
  ColorPicker supports manual hex input and a native color input fallback.
  Why: native picker provides cross-platform UX; hex input allows precision.
  Image-based sampling will be implemented as an optional hook later.
*/
export default function ColorPicker({ color, onChange }: { color?: string; onChange?: (c: string) => void }) {
  const [val, setVal] = useState(color ?? '#FFFFFF');
  const [imgError, setImgError] = useState<string | null>(null);
  const { sampleCenter } = useImageSampler();

  const nativeColorValue = isHexColor(val) && val.length === 9 ? `#${val.slice(3)}` : val;

  async function handleImage(file: File | null) {
    setImgError(null);
    if (!file) return;
    try {
      // sample center pixel color and apply
      const hex = await sampleCenter(file);
      if (hex) {
        setVal(hex);
        onChange?.(hex);
      } else {
        setImgError('Unable to sample image');
      }
    } catch (e) {
      setImgError('Image sampling failed');
    }
  }

  function handleInput(v: string) {
    setVal(v);
    try {
      if (isHexColor(v)) onChange?.(v);
      else onChange?.(v); // still call so parent can validate and show message
    } catch (e) {
      // swallow - UI will show validation messages elsewhere
    }
  }

  return (
    <div className="flex items-center gap-2">
      <input
        aria-label="Hex color"
        value={val}
        onChange={(e) => handleInput(e.target.value)}
        className="px-2 py-1 border rounded"
      />
      <input
        aria-label="System color picker"
        type="color"
        value={nativeColorValue}
        onChange={(e) => handleInput(e.target.value)}
        className="w-10 h-8 p-0 border-0"
      />
      <input
        type="file"
        accept="image/*"
        aria-label="Sample color from image"
        onChange={(e) => handleImage(e.target.files ? e.target.files[0] : null)}
        className="w-8 h-8"
      />
      {imgError ? <div className="text-xs text-red-600">{imgError}</div> : null}
    </div>
  );
}

=======
"use client";
import React, { useState } from 'react';
import { isHexColor } from '../lib/validators';
import useImageSampler from '../hooks/useImageSampler';

/*
  ColorPicker supports manual hex input and a native color input fallback.
  Why: native picker provides cross-platform UX; hex input allows precision.
  Image-based sampling will be implemented as an optional hook later.
*/
export default function ColorPicker({ color, onChange }: { color?: string; onChange?: (c: string) => void }) {
  const [val, setVal] = useState(color ?? '#FFFFFF');
  const [imgError, setImgError] = useState<string | null>(null);
  const { sampleCenter } = useImageSampler();

  const nativeColorValue = isHexColor(val) && val.length === 9 ? `#${val.slice(3)}` : val;

  async function handleImage(file: File | null) {
    setImgError(null);
    if (!file) return;
    try {
      // sample center pixel color and apply
      const hex = await sampleCenter(file);
      if (hex) {
        setVal(hex);
        onChange?.(hex);
      } else {
        setImgError('Unable to sample image');
      }
    } catch (e) {
      setImgError('Image sampling failed');
    }
  }

  function handleInput(v: string) {
    setVal(v);
    try {
      if (isHexColor(v)) onChange?.(v);
      else onChange?.(v); // still call so parent can validate and show message
    } catch (e) {
      // swallow - UI will show validation messages elsewhere
    }
  }

  return (
    <div className="flex items-center gap-2">
      <input
        aria-label="Hex color"
        value={val}
        onChange={(e) => handleInput(e.target.value)}
        className="px-2 py-1 border rounded"
      />
      <input
        aria-label="System color picker"
        type="color"
        value={nativeColorValue}
        onChange={(e) => handleInput(e.target.value)}
        className="w-10 h-8 p-0 border-0"
      />
      <input
        type="file"
        accept="image/*"
        aria-label="Sample color from image"
        onChange={(e) => handleImage(e.target.files ? e.target.files[0] : null)}
        className="w-8 h-8"
      />
      {imgError ? <div className="text-xs text-red-600">{imgError}</div> : null}
    </div>
  );
}
*** End Patch
>>>>>>> e0a9267de792070e0a727aa26d900288ed444b96
