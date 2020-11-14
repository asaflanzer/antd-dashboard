import React from 'react';
import ApplicationRoutes from './config/ApplicationRoutes';
import { StripeProvider } from 'react-stripe-elements';

function App() {
  return (
    <StripeProvider apiKey="pk_test_12345">
      <ApplicationRoutes />
    </StripeProvider>
  );
}

export default App;
