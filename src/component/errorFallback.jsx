import { ErrorBoundary } from 'react-error-boundary';

// Fallback component to display when an error occurs
export default function ErrorFallback({ error, resetErrorBoundary }) {
  return (
      <div role="alert">
        <p>Something went wrong:</p>
        <pre>{error.message}</pre>
        <button onClick={resetErrorBoundary}>Try again</button>
      </div>
  );
}
