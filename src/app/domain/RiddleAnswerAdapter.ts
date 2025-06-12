import { getAnswerFor as getAnswerForRiddleSdk } from 'riddle-exam';

export const getAnswerFor = async (id: string): Promise<{ id: string; text: string }> =>
    getAnswerForRiddleSdk(id);
