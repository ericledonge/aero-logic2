import { Riddle } from './RiddleService';
import { getAnswerFor as getAnswerForRiddleSdk } from 'riddle-exam';

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

export const getRiddle = async (id: string): Promise<Riddle> => {
    const response = await fetch(`http://localhost:3000/api/riddle/${id}`);

    return response.json();
};

export const getAnswerFor = async (id: string): Promise<{ id: string; text: string }> =>
    getAnswerForRiddleSdk(id);
