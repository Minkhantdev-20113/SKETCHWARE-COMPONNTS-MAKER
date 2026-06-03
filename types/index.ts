<<<<<<< HEAD
/**
 * Central TypeScript types used across the project.
 * Keeping types small and explicit makes serialization and codegen easier.
 */

export type Insets = { top: number; right: number; bottom: number; left: number };

export type Stroke = { width: number; color: string };

export type Ripple = { enabled: boolean; color?: string };

export type StyleModel = {
  id: string;
  color: string;
  width?: number | 'wrap' | 'match_parent';
  height?: number | 'wrap' | 'match_parent';
  padding?: Insets;
  margin?: Insets;
  cornerRadius?: number;
  stroke?: Stroke;
  elevation?: number;
  ripple?: Ripple;
  clickable?: boolean;
  // allow extensions without changing core types
  [key: string]: any;
};
=======
/**
 * Central TypeScript types used across the project.
 * Keeping types small and explicit makes serialization and codegen easier.
 */

export type Insets = { top: number; right: number; bottom: number; left: number };

export type Stroke = { width: number; color: string };

export type Ripple = { enabled: boolean; color?: string };

export type StyleModel = {
  id: string;
  color: string;
  width?: number | 'wrap' | 'match_parent';
  height?: number | 'wrap' | 'match_parent';
  padding?: Insets;
  margin?: Insets;
  cornerRadius?: number;
  stroke?: Stroke;
  elevation?: number;
  ripple?: Ripple;
  clickable?: boolean;
  // allow extensions without changing core types
  [key: string]: any;
};
>>>>>>> e0a9267de792070e0a727aa26d900288ed444b96
