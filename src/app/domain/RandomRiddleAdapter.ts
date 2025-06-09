import { createClientAdapter } from '../common/adapter/ClientAdapterFactory';
import { Riddle } from './RiddleService';

export const useRandomRiddleAdapter = createClientAdapter({
    name: 'randomRiddle',
    callback: () => {
        console.log('getRandomRiddle');
        return getRandomRiddle();
    },
});

type Options = {
    excluded?: string;
};

export const getRandomRiddle = async (options?: Options): Promise<Riddle> => {
    let url;
    if (options) {
        url = `http://localhost:3000/api/random-riddle?excluded=${options?.excluded}`;
    } else {
        url = `http://localhost:3000/api/random-riddle`;
    }
    const response = await fetch(url);

    return response.json();
};
