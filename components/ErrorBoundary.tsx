<<<<<<< HEAD
"use client";
import React, { ErrorInfo } from 'react';

/*
  ErrorBoundary captures rendering errors and shows a recovery UI.
  Why: robust error handling is required for a resilient editor experience.
*/
type State = { hasError: boolean; message?: string };

export default class ErrorBoundary extends React.Component<{ children: React.ReactNode }, State> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, message: error.message };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // TODO: send to logging service; for now we console.error
    // Keep lightweight to avoid introducing deps at scaffold time.
    console.error('ErrorBoundary caught', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-6">
          <h2 className="text-xl font-semibold">Something went wrong</h2>
          <p className="mt-2 text-sm text-slate-600">{this.state.message}</p>
          <button
            className="mt-4 px-3 py-2 bg-primary text-white rounded"
            onClick={() => this.setState({ hasError: false, message: undefined })}
          >
            Try again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
=======
"use client";
import React, { ErrorInfo } from 'react';

/*
  ErrorBoundary captures rendering errors and shows a recovery UI.
  Why: robust error handling is required for a resilient editor experience.
*/
type State = { hasError: boolean; message?: string };

export default class ErrorBoundary extends React.Component<{ children: React.ReactNode }, State> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, message: error.message };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // TODO: send to logging service; for now we console.error
    // Keep lightweight to avoid introducing deps at scaffold time.
    console.error('ErrorBoundary caught', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-6">
          <h2 className="text-xl font-semibold">Something went wrong</h2>
          <p className="mt-2 text-sm text-slate-600">{this.state.message}</p>
          <button
            className="mt-4 px-3 py-2 bg-primary text-white rounded"
            onClick={() => this.setState({ hasError: false, message: undefined })}
          >
            Try again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
>>>>>>> e0a9267de792070e0a727aa26d900288ed444b96
