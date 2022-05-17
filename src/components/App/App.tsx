import React from 'react';
import { Radio, Fallback } from '@components';
import ErrorBoundary from 'react-native-error-boundary';

const App = () => {
  const onError = () => {
    /* Log the error to an error reporting service */
  };

  return (
    <ErrorBoundary onError={onError} FallbackComponent={Fallback}>
      <Radio />
    </ErrorBoundary>
  );
};

export { App };
