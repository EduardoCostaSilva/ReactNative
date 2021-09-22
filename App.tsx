import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import PagesRoutes from "./src/pages.routes";

export default function App() {
  return (
    <NavigationContainer>
    <PagesRoutes />
  </NavigationContainer>
  );
}



  

