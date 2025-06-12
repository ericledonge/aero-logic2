import { Riddle } from '@/app/domain/RiddleService';
import useRandomRiddleData from '@/app/domain/useRandomRiddleData';
import { useState } from 'react';
import { createSolveRandomRiddleModel } from './solveRandomRiddle';
import { getAnswerFor } from '../../app/domain/RiddleAnswerAdapter';

export const useSolveRandomRiddle = ({ riddle }: { riddle: Riddle }) => {
    const { data, isLoading, error } = useRandomRiddleData({ excluded: riddle.id });

    const [selected, setSelected] = useState<string>();
    const [correct, setCorrect] = useState<{ id: string }>();

    const model = createSolveRandomRiddleModel({
        riddle,
        selectedAnswerId: selected,
        correctAnswerId: correct,
    });

    const handleClick = async (id: string) => {
        if (selected) {
            return;
        }

        setSelected(id);

        const data = await getAnswerFor(riddle.id); // could build a repository for this

        setCorrect(data);
    };

    return {
        ...model,
        // correctAnswerId: getAnswerFor(riddle.id),
        setSelected,
        correct,
        handleClick,
        isLoading,
        error,
    };
};
