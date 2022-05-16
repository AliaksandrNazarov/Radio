import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, useColorScheme, View, Text } from 'react-native';
import { fetchRadioData, IRadioStation } from '@api';
import Accordion from 'react-native-collapsible/Accordion';
import { RadioListItem, RadioDetails } from '@components';

import { Colors } from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const [stationsData, setStationsData] = useState<IRadioStation[]>([]);

  const [activeSections, setActiveSections] = useState<number[]>([]);
  const [selectedSection, setSelectedSection] = useState<number[]>([]);

  useEffect(() => {
    try {
      fetchRadioData(setStationsData);
    } catch (err) {
      // TODO: handle error somehow
    }
  }, []);

  const updateSections = (activeSection: number[]) => {
    setActiveSections(activeSection);
    setSelectedSection(activeSection);
  };

  const selectedSectionItem = stationsData.length ? stationsData[selectedSection[0]] : {};

  const renderContent = () => (
    <RadioDetails
      stationsData={stationsData}
      selectedSection={selectedSection}
      setSelectedSection={setSelectedSection}
    />
  );

  const backgroundStyle = {
    backgroundColor: Colors.darker,
    flex: 1,
  };

  // console.log('------------selectedSection--------------', selectedSection);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Accordion
        activeSections={activeSections}
        sections={stationsData}
        renderHeader={RadioListItem}
        renderContent={renderContent}
        onChange={updateSections}
      />
      {/* <View style={{ width: '100%', height: 50, backgroundColor: 'red' }}>
        <Text>{selectedSectionItem?.name || 'nothingx'}</Text>
      </View> */}
    </SafeAreaView>
  );
};

export default App;
