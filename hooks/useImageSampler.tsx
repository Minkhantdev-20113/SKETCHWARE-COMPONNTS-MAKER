<<<<<<< HEAD
"use client";
import { useRef } from 'react';

/*
  useImageSampler
  A small helper hook that creates an offscreen canvas to sample a pixel color
  from an image file. This is intentionally minimal: it provides a function
  `sampleCenter` which returns a hex color string sampled from the image center.
  Why: image-based sampling is a helpful UX for designers; implementing a full
  eyedropper is possible later, but center-sample is sufficient for the scaffold.
*/
export default function useImageSampler() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  async function sampleCenter(file: File): Promise<string | null> {
    try {
      const img = await loadImage(file);
      const canvas = canvasRef.current ?? document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      if (!ctx) return null;
      ctx.drawImage(img, 0, 0);
      const x = Math.floor(img.width / 2);
      const y = Math.floor(img.height / 2);
      const data = ctx.getImageData(x, y, 1, 1).data;
      const hex = rgbaToHex(data[0], data[1], data[2], data[3]);
      canvasRef.current = canvas;
      return hex;
    } catch (e) {
      return null;
    }
  }

  return { sampleCenter };
}

function loadImage(file: File): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve(img);
    };
    img.onerror = (e) => {
      URL.revokeObjectURL(url);
      reject(e);
    };
    img.src = url;
  });
}

function rgbaToHex(r: number, g: number, b: number, a: number) {
  const toHex = (n: number) => n.toString(16).padStart(2, '0').toUpperCase();
  // Convert alpha 0-255 to hex AA
  return `#${toHex(a)}${toHex(r)}${toHex(g)}${toHex(b)}`;
}
=======
"use client";
import { useRef } from 'react';

/*
  useImageSampler
  A small helper hook that creates an offscreen canvas to sample a pixel color
  from an image file. This is intentionally minimal: it provides a function
  `sampleCenter` which returns a hex color string sampled from the image center.
  Why: image-based sampling is a helpful UX for designers; implementing a full
  eyedropper is possible later, but center-sample is sufficient for the scaffold.
*/
export default function useImageSampler() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  async function sampleCenter(file: File): Promise<string | null> {
    try {
      const img = await loadImage(file);
      const canvas = canvasRef.current ?? document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      if (!ctx) return null;
      ctx.drawImage(img, 0, 0);
      const x = Math.floor(img.width / 2);
      const y = Math.floor(img.height / 2);
      const data = ctx.getImageData(x, y, 1, 1).data;
      const hex = rgbaToHex(data[0], data[1], data[2], data[3]);
      canvasRef.current = canvas;
      return hex;
    } catch (e) {
      return null;
    }
  }

  return { sampleCenter };
}

function loadImage(file: File): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve(img);
    };
    img.onerror = (e) => {
      URL.revokeObjectURL(url);
      reject(e);
    };
    img.src = url;
  });
}

function rgbaToHex(r: number, g: number, b: number, a: number) {
  const toHex = (n: number) => n.toString(16).padStart(2, '0').toUpperCase();
  // Convert alpha 0-255 to hex AA
  return `#${toHex(a)}${toHex(r)}${toHex(g)}${toHex(b)}`;
}
>>>>>>> e0a9267de792070e0a727aa26d900288ed444b96
