import React, { useEffect, useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import { fetchRadioData, IRadioStation } from '@api';
import Accordion from 'react-native-collapsible/Accordion';
import { RadioListItem, RadioDetails, RadioHeader, RadioFooter } from '@components';
import { styles } from './styles';

const App = () => {
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

  const turnOffRadio = () => updateSections([]);

  const selectedSectionItem: IRadioStation = stationsData.length
    ? stationsData[selectedSection[0]]
    : ({} as IRadioStation);

  const renderContent = () => (
    <RadioDetails
      stationsData={stationsData}
      selectedSection={selectedSection}
      setSelectedSection={setSelectedSection}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <RadioHeader onPowerPress={turnOffRadio} />
      <View style={styles.containerAccordeonFooter}>
        <Accordion
          activeSections={activeSections}
          sections={stationsData}
          renderHeader={RadioListItem}
          renderContent={renderContent}
          onChange={updateSections}
          renderAsFlatList
        />
        <RadioFooter selectedSectionItem={selectedSectionItem} />
      </View>
    </SafeAreaView>
  );
};

export { App };
