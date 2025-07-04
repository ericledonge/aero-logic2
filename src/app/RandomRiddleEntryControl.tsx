'use client';

import useRandomRiddle from '@/useCases/seeRandomRiddle/useRandomRiddle';

export const RandomRiddleEntryControl = () => {
    const { id, handleClick } = useRandomRiddle();

    if (!id) {
        return null;
    }

    return (
        <button
            onClick={handleClick}
            className="border border-blue-500 p-5"
            data-test="random-riddle-entry-control"
        >
            Resolve random riddle
        </button>
    );
};
