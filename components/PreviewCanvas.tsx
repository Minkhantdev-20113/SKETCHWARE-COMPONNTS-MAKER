<<<<<<< HEAD
"use client";
import React from 'react';
import { useUI } from '../store/uiContext';
import { REDMI_NOTE_13_5G } from '../lib/devicePresets';

/*
  PreviewCanvas renders a live preview area for the designed component.
  It currently shows a centered device-like frame. The real renderer will
  accept a `StyleModel` and draw the visual representation mapped from the model.
*/
export default function PreviewCanvas() {
  const ui = useUI();
  const model = ui.model;

  // If simulator is on, show a device frame scaled to the device's CSS width
  const device = ui.device ?? REDMI_NOTE_13_5G;
  const cssWidth = Math.min(Math.round(device.widthPx / device.dpr), 400);
  const cssHeight = Math.min(Math.round(device.heightPx / device.dpr), 760);

  const previewWidth = model.width === 'match_parent' ? '100%' : model.width === 'wrap' ? 'auto' : `${model.width}px`;
  const previewHeight = model.height === 'match_parent' ? '100%' : model.height === 'wrap' ? 'auto' : `${model.height}px`;

  const previewStyle: React.CSSProperties = {
    width: previewWidth,
    height: previewHeight,
    backgroundColor: model.color,
    borderRadius: model.cornerRadius ?? 0,
    border: model.stroke?.width ? `${model.stroke.width}px solid ${model.stroke.color}` : 'none',
    boxShadow: model.elevation ? `0 ${model.elevation}px ${model.elevation * 2}px rgba(15,23,42,0.12)` : 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: model.padding ? `${model.padding.top}px ${model.padding.right}px ${model.padding.bottom}px ${model.padding.left}px` : undefined,
    margin: model.margin ? `${model.margin.top}px ${model.margin.right}px ${model.margin.bottom}px ${model.margin.left}px` : undefined,
    color: '#0f172a',
    minWidth: 80,
    minHeight: 40,
  };

  return (
    <div className="h-full w-full flex items-center justify-center p-4">
      <div className={`rounded-2xl border ${ui.simulatorOn ? 'border-slate-300 dark:border-slate-700' : 'border-transparent'} overflow-hidden shadow-lg`} style={{ width: ui.simulatorOn ? cssWidth : 380, height: ui.simulatorOn ? cssHeight : 780, backgroundColor: ui.simulatorOn ? 'var(--c-surface)' : 'var(--c-surface)' }}>
        <div className="relative h-full w-full flex flex-col">
          <div className="px-4 pt-4 text-sm text-slate-500">{ui.simulatorOn ? `Device: ${device.name}` : 'Responsive preview'}</div>
          <div className="flex-1 flex items-center justify-center p-4">
            <div style={previewStyle} className="transition-all duration-200">
              <span className="text-sm font-medium">{model.id}</span>
            </div>
          </div>
          <div className="px-4 pb-4 text-xs text-slate-500">{model.clickable ? 'Clickable component' : 'Non-clickable component'}</div>
        </div>
      </div>
    </div>
  );
}
=======
"use client";
import React from 'react';
import { useUI } from '../store/uiContext';
import { REDMI_NOTE_13_5G } from '../lib/devicePresets';

/*
  PreviewCanvas renders a live preview area for the designed component.
  It currently shows a centered device-like frame. The real renderer will
  accept a `StyleModel` and draw the visual representation mapped from the model.
*/
export default function PreviewCanvas() {
  const ui = useUI();
  const model = ui.model;

  // If simulator is on, show a device frame scaled to the device's CSS width
  const device = ui.device ?? REDMI_NOTE_13_5G;
  const cssWidth = Math.min(Math.round(device.widthPx / device.dpr), 400);
  const cssHeight = Math.min(Math.round(device.heightPx / device.dpr), 760);

  const previewWidth = model.width === 'match_parent' ? '100%' : model.width === 'wrap' ? 'auto' : `${model.width}px`;
  const previewHeight = model.height === 'match_parent' ? '100%' : model.height === 'wrap' ? 'auto' : `${model.height}px`;

  const previewStyle: React.CSSProperties = {
    width: previewWidth,
    height: previewHeight,
    backgroundColor: model.color,
    borderRadius: model.cornerRadius ?? 0,
    border: model.stroke?.width ? `${model.stroke.width}px solid ${model.stroke.color}` : 'none',
    boxShadow: model.elevation ? `0 ${model.elevation}px ${model.elevation * 2}px rgba(15,23,42,0.12)` : 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: model.padding ? `${model.padding.top}px ${model.padding.right}px ${model.padding.bottom}px ${model.padding.left}px` : undefined,
    margin: model.margin ? `${model.margin.top}px ${model.margin.right}px ${model.margin.bottom}px ${model.margin.left}px` : undefined,
    color: '#0f172a',
    minWidth: 80,
    minHeight: 40,
  };

  return (
    <div className="h-full w-full flex items-center justify-center p-4">
      <div className={`rounded-2xl border ${ui.simulatorOn ? 'border-slate-300 dark:border-slate-700' : 'border-transparent'} overflow-hidden shadow-lg`} style={{ width: ui.simulatorOn ? cssWidth : 380, height: ui.simulatorOn ? cssHeight : 780, backgroundColor: ui.simulatorOn ? 'var(--c-surface)' : 'var(--c-surface)' }}>
        <div className="relative h-full w-full flex flex-col">
          <div className="px-4 pt-4 text-sm text-slate-500">{ui.simulatorOn ? `Device: ${device.name}` : 'Responsive preview'}</div>
          <div className="flex-1 flex items-center justify-center p-4">
            <div style={previewStyle} className="transition-all duration-200">
              <span className="text-sm font-medium">{model.id}</span>
            </div>
          </div>
          <div className="px-4 pb-4 text-xs text-slate-500">{model.clickable ? 'Clickable component' : 'Non-clickable component'}</div>
        </div>
      </div>
    </div>
  );
}
>>>>>>> e0a9267de792070e0a727aa26d900288ed444b96
