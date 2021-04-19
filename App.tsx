import { StatusBar } from 'expo-status-bar';
import React from 'react';

import Welcome from "./src/pages/Welcome"
import Confirm from "./src/pages/Confirm"

export default function App() {
  return (
    <>
      <Welcome />
      <StatusBar style="auto" />
    </>
  );
}