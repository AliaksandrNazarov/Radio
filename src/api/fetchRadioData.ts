const API_RADIO_ENDPOINT = 'https://jobapi.teclead-ventures.de/recruiting/radios';

export interface IRadioStation {
  name: string;
  frequency: number;
  image: string;
}

export interface IRadiosData {
  radios: IRadioStation[];
}

const fetchRadioData = async (): Promise<IRadiosData> => {
  const response = await fetch(API_RADIO_ENDPOINT, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  return await response.json();
};

export { fetchRadioData };
