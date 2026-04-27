import { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
  name: string;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 bg-red-50 text-red-500 rounded-xl m-4 border border-red-100">
          <h2 className="text-sm font-bold uppercase tracking-widest mb-2">Something went wrong in {this.props.name}</h2>
          <p className="text-xs opacity-80">Check the console for details.</p>
        </div>
      );
    }

    return this.props.children;
  }
}
