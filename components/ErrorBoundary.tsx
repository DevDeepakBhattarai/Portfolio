import React, { Component, ReactElement } from "react";

interface Props {
  children: ReactElement;
}
interface State {}

export default class ErrorBoundary extends Component<Props, State> {
  state = { hasError: false };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log(error, errorInfo);
  }
  render() {
    return this.state.hasError ? <>Error</> : <>{this.props.children}</>;
  }
}
