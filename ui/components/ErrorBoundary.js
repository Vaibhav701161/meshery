import { Button } from '@mui/material';
import React from 'react';
import { ErrorBoundary as SistentErrorBoundary } from '@sistent/react';

/**
 * ErrorBoundary is a React component that catches JavaScript errors in its child components and renders a fallback UI when an error occurs.
 * It should be used as a wrapper around components that might throw errors.
 * @deprecated use error boundary from sistent instead
 */
const ErrorBoundary = ({ children }) => {
  return (
    <SistentErrorBoundary
      fallback={({ error, resetErrorBoundary }) => (
        <div className="alert alert-danger">
          <p>Couldn&apos;t open form. Encountered the following error:</p>
          <pre>{error.message}</pre>
          <Button color="primary" variant="contained" onClick={resetErrorBoundary}>
            Refresh Form
          </Button>
        </div>
      )}
    >
      {children}
    </SistentErrorBoundary>
  );
};

export default ErrorBoundary;
