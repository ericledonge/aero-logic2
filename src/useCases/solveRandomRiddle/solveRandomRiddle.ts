export const createSolveRandomRiddleModel = ({
    riddle,
    selectedAnswerId,
    correctAnswerId,
}) => {
    return {
        sortedAnswers: [
            { id: 1, text: 'Answer 1', isCorrectAndSelected: false },
            { id: 2, text: 'Answer 2', isCorrectAndSelected: true },
            { id: 3, text: 'Answer 3', isCorrectAndSelected: false },
        ], // extended with isCorrectAndSelected
        selectedAnswerId: 1,
        correctAnswerId: 2,
        currentRandomRiddleId: 3,
        isCorrectAndSelected: selectedAnswerId === correctAnswerId,
    };
};
