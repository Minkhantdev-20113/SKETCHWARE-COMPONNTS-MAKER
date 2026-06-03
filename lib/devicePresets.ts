<<<<<<< HEAD
/**
 * devicePresets.ts
 * Contains device profiles used by the preview simulator.
 * Each preset includes physical pixels and DPR so the preview can
 * calculate an appropriate CSS size for a faithful preview.
 */

export type DevicePreset = {
  id: string;
  name: string;
  widthPx: number;
  heightPx: number;
  dpr: number; // device pixel ratio
};

export const REDMI_NOTE_13_5G: DevicePreset = {
  id: 'redmi_note_13_5g',
  name: 'Redmi Note 13 5G',
  widthPx: 1080,
  heightPx: 2400,
  dpr: 3,
};

export const DEFAULT_MOBILE = {
  id: 'default_mobile',
  name: 'Default Mobile',
  widthPx: 390,
  heightPx: 844,
  dpr: 2,
};

export const ALL_PRESETS: DevicePreset[] = [REDMI_NOTE_13_5G, DEFAULT_MOBILE];
=======
/**
 * devicePresets.ts
 * Contains device profiles used by the preview simulator.
 * Each preset includes physical pixels and DPR so the preview can
 * calculate an appropriate CSS size for a faithful preview.
 */

export type DevicePreset = {
  id: string;
  name: string;
  widthPx: number;
  heightPx: number;
  dpr: number; // device pixel ratio
};

export const REDMI_NOTE_13_5G: DevicePreset = {
  id: 'redmi_note_13_5g',
  name: 'Redmi Note 13 5G',
  widthPx: 1080,
  heightPx: 2400,
  dpr: 3,
};

export const DEFAULT_MOBILE = {
  id: 'default_mobile',
  name: 'Default Mobile',
  widthPx: 390,
  heightPx: 844,
  dpr: 2,
};

export const ALL_PRESETS: DevicePreset[] = [REDMI_NOTE_13_5G, DEFAULT_MOBILE];
>>>>>>> e0a9267de792070e0a727aa26d900288ed444b96
