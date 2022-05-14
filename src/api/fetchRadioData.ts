const API_RADIO_ENDPOINT = 'https://jobapi.teclead-ventures.de/recruiting/radios';

export interface IRadioStation {
  name: string;
  frequency: number;
  image: string;
}

export interface IRadiosData {
  radios: IRadioStation[];
}

const fetchRadioData = async (fn?: (data: IRadioStation[]) => void) => {
  const response = await fetch(API_RADIO_ENDPOINT, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  if (response.ok) {
    const data: IRadiosData = await response.json();
    if (data.radios) {
      fn?.(data.radios);
      return data.radios;
    }
  }
};

export { fetchRadioData };
