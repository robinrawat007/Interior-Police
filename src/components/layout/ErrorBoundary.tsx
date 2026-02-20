import { Component, type ErrorInfo, type ReactNode } from "react";
import { Button } from "@/components/ui/button";

interface Props {
    children?: ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
    };

    public static getDerivedStateFromError(error: Error): State {
        // Update state so the next render will show the fallback UI.
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    private handleReset = () => {
        this.setState({ hasError: false, error: undefined });
        window.location.href = "/";
    };

    public render() {
        if (this.state.hasError) {
            return (
                <div className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
                    <div className="max-w-md space-y-4">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Something went wrong</h1>
                        <p className="text-muted-foreground">
                            An unexpected error has occurred. We've been notified and are looking into it.
                        </p>
                        <div className="flex gap-4 justify-center">
                            <Button onClick={this.handleReset}>
                                Back to Home
                            </Button>
                            <Button variant="outline" onClick={() => window.location.reload()}>
                                Try Again
                            </Button>
                        </div>
                        {process.env.NODE_ENV !== "production" && (
                            <pre className="mt-8 overflow-auto rounded bg-muted p-4 text-left text-xs text-destructive">
                                {this.state.error?.toString()}
                            </pre>
                        )}
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}
