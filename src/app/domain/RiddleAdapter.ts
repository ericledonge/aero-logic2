import { createServerAdapter } from '../common/adapter/ServerAdapterFactory';
import { Riddle } from './RiddleService';

export const useRiddleAdapter = createServerAdapter({
    name: 'riddle',
    callback: (id: string) => getRiddle(id),
});

export const getRiddle = async (id: string): Promise<Riddle> => {
    const response = await fetch(`http://localhost:3000/api/riddle/${id}`);

    return response.json();
};
