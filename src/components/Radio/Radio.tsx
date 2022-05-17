import React, { useEffect, useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import { fetchRadioData, IRadioStation } from '@api';
import Accordion from 'react-native-collapsible/Accordion';
import { RadioListItem, RadioDetails, RadioHeader, RadioFooter, Fallback } from '@components';
import { styles } from './styles';

const TestError: Error = { name: 'Test Error', message: 'Some error message' };

const Radio = () => {
  const [stationsData, setStationsData] = useState<IRadioStation[]>([]);
  const [activeSections, setActiveSections] = useState<number[]>([]);
  const [selectedSection, setSelectedSection] = useState<number[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchRadioData();
        if (data?.radios) {
          setStationsData(data?.radios);
        }
      } catch (err) {
        setError(TestError);
      }
    })();
    // in prod app we should add here function for cancelling api call, if we go to another screen before loading is finished
    // like:
    // return () => stopFetchRadioData();
  }, []);

  const updateSections = (activeSection: number[]) => {
    setActiveSections(activeSection);
    setSelectedSection(activeSection);
  };

  const turnOffRadio = () => updateSections([]);

  const emulateError = () => setError(TestError);
  const resetError = () => setError(null);

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

  return error ? (
    <Fallback error={error} resetError={resetError} />
  ) : (
    <SafeAreaView style={styles.container}>
      <RadioHeader onPowerPress={turnOffRadio} onArrowPress={emulateError} />
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

export { Radio };
