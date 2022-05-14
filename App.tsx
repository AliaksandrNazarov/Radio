import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, useColorScheme } from 'react-native';
import { fetchRadioData, IRadioStation } from '@api';

import { Colors } from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const [stationsData, setStationsData] = useState<IRadioStation[] | null>(null);

  useEffect(() => {
    try {
      fetchRadioData(setStationsData);
    } catch (err) {
      // TODO: handle error somehow
    }
  }, []);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  console.log('------------stationsData--------------', stationsData);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle} />
    </SafeAreaView>
  );
};

export default App;
