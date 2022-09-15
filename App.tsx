import React from 'react';
import { initialWindowMetrics, SafeAreaProvider } from "react-native-safe-area-context";
import { AppNavigator } from './src/common/navigation';

function App() {

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <AppNavigator/>
    </SafeAreaProvider>
  )
}
export default App;
