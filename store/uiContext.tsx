<<<<<<< HEAD
"use client";
import React, { createContext, useContext, useState, useCallback } from 'react';
import { DevicePreset, ALL_PRESETS } from '../lib/devicePresets';
import { StyleModel } from '../types';
import { setPref, getPref } from '../lib/sharedPrefs';

/**
 * Persistence keys used in localStorage via sharedPrefs
 */
const KEY_CURRENT_MODEL = 'currentModel';
const KEY_ID_USAGE = 'ids:usageCounts';

/**
 * uiContext.tsx
 * Provides global UI state for the editor: selected device preset, whether the
 * device simulator is active, and the current working StyleModel. This keeps
 * simple state outside of individual components and makes serialization easier.
 */

type UIContextType = {
  device?: DevicePreset;
  simulatorOn: boolean;
  toggleSimulator: () => void;
  setDevice: (d: DevicePreset) => void;
  model: StyleModel;
  setModel: (m: StyleModel) => void;
};

const defaultModel: StyleModel = {
  id: 'sample_view',
  color: '#FFFFFF',
  width: 'match_parent',
  height: 48,
  padding: { top: 8, right: 8, bottom: 8, left: 8 },
  margin: { top: 0, right: 0, bottom: 0, left: 0 },
  cornerRadius: 8,
  stroke: { width: 0, color: '#000000' },
  elevation: 2,
  ripple: { enabled: true, color: '#E0E0E0' },
  clickable: true,
};

const UIContext = createContext<UIContextType | undefined>(undefined);

export function useUI() {
  const ctx = useContext(UIContext);
  if (!ctx) throw new Error('useUI must be used within UIProvider');
  return ctx;
}

export default function UIProvider({ children }: { children: React.ReactNode }) {
  const [simulatorOn, setSimulatorOn] = useState<boolean>(() => false);
  const [device, setDeviceState] = useState<DevicePreset | undefined>(() => ALL_PRESETS[0]);

  // initialize model from persistence if available
  const [model, setModelState] = useState<StyleModel>(() => {
    try {
      const saved = getPref<StyleModel>(KEY_CURRENT_MODEL);
      return saved ?? defaultModel;
    } catch (e) {
      return defaultModel;
    }
  });

  function toggleSimulator() {
    setSimulatorOn((s) => !s);
  }

  function setDevice(d: DevicePreset) {
    setDeviceState(d);
  }

  const setModel = useCallback((m: StyleModel) => {
    setModelState(m);
    try {
      // persist the current model for next session
      setPref(KEY_CURRENT_MODEL, m);

      // update ID usage counts
      if (m.id) {
        const counts = getPref<Record<string, number>>(KEY_ID_USAGE, {}) ?? {};
        const prev = counts[m.id] || 0;
        counts[m.id] = prev + 1;
        setPref(KEY_ID_USAGE, counts);
      }
    } catch (e) {
      // swallow persistence errors; UI may show notifications later
      console.error('Failed to persist model', e);
    }
  }, []);

  return (
    <UIContext.Provider value={{ device, simulatorOn, toggleSimulator, setDevice, model, setModel }}>
      {children}
    </UIContext.Provider>
  );
}
=======
"use client";
import React, { createContext, useContext, useState, useCallback } from 'react';
import { DevicePreset, ALL_PRESETS } from '../lib/devicePresets';
import { StyleModel } from '../types';
import { setPref, getPref } from '../lib/sharedPrefs';

/**
 * Persistence keys used in localStorage via sharedPrefs
 */
const KEY_CURRENT_MODEL = 'currentModel';
const KEY_ID_USAGE = 'ids:usageCounts';

/**
 * uiContext.tsx
 * Provides global UI state for the editor: selected device preset, whether the
 * device simulator is active, and the current working StyleModel. This keeps
 * simple state outside of individual components and makes serialization easier.
 */

type UIContextType = {
  device?: DevicePreset;
  simulatorOn: boolean;
  toggleSimulator: () => void;
  setDevice: (d: DevicePreset) => void;
  model: StyleModel;
  setModel: (m: StyleModel) => void;
};

const defaultModel: StyleModel = {
  id: 'sample_view',
  color: '#FFFFFF',
  width: 'match_parent',
  height: 48,
  padding: { top: 8, right: 8, bottom: 8, left: 8 },
  margin: { top: 0, right: 0, bottom: 0, left: 0 },
  cornerRadius: 8,
  stroke: { width: 0, color: '#000000' },
  elevation: 2,
  ripple: { enabled: true, color: '#E0E0E0' },
  clickable: true,
};

const UIContext = createContext<UIContextType | undefined>(undefined);

export function useUI() {
  const ctx = useContext(UIContext);
  if (!ctx) throw new Error('useUI must be used within UIProvider');
  return ctx;
}

export default function UIProvider({ children }: { children: React.ReactNode }) {
  const [simulatorOn, setSimulatorOn] = useState<boolean>(() => false);
  const [device, setDeviceState] = useState<DevicePreset | undefined>(() => ALL_PRESETS[0]);

  // initialize model from persistence if available
  const [model, setModelState] = useState<StyleModel>(() => {
    try {
      const saved = getPref<StyleModel>(KEY_CURRENT_MODEL);
      return saved ?? defaultModel;
    } catch (e) {
      return defaultModel;
    }
  });

  function toggleSimulator() {
    setSimulatorOn((s) => !s);
  }

  function setDevice(d: DevicePreset) {
    setDeviceState(d);
  }

  const setModel = useCallback((m: StyleModel) => {
    setModelState(m);
    try {
      // persist the current model for next session
      setPref(KEY_CURRENT_MODEL, m);

      // update ID usage counts
      if (m.id) {
        const counts = getPref<Record<string, number>>(KEY_ID_USAGE, {});
        const prev = counts[m.id] || 0;
        counts[m.id] = prev + 1;
        setPref(KEY_ID_USAGE, counts);
      }
    } catch (e) {
      // swallow persistence errors; UI may show notifications later
      console.error('Failed to persist model', e);
    }
  }, []);

  return (
    <UIContext.Provider value={{ device, simulatorOn, toggleSimulator, setDevice, model, setModel }}>
      {children}
    </UIContext.Provider>
  );
}
>>>>>>> e0a9267de792070e0a727aa26d900288ed444b96
