'use client';

import { useEffect, useMemo, useState } from 'react';
import { Riddle } from '../../domain/RiddleService';
import classNames from 'classnames';
import Link from 'next/link';
import { getAnswerFor, getRandomRiddle } from '@/app/domain/RiddleAdapter';
import { useSolveRandomRiddle } from '@/useCases/solveRandomRiddle/useSolveRandomRiddle';

type Props = {
    riddle: Riddle;
};

export const RiddleAnswers = ({ riddle }: Props) => {
    const {
        sortedAnswers,
        handleClick,
        setSelected,
        selectedAnswerId,
        correctAnswerId,
        currentRandomRiddleId,
        isCorrectAndSelected,
    } = useSolveRandomRiddle({ riddle });

    // const sorted = useMemo(
    //     () => riddle.answers.toSorted(() => Math.random() - 0.5),
    //     [riddle.answers],
    // );

    return (
        <>
            <p className="mb-5">Possible answers:</p>
            <ul>
                {sortedAnswers.map((answer) => (
                    <li
                        key={answer.id}
                        onClick={() => handleClick(answer.id)}
                        className={classNames('border py-2 pl-3 pr-2 my-1', {
                            'cursor-pointer': !selectedAnswerId,
                            'border-blue-500': !correctAnswerId,
                            "border-green-700 text-green-900 before:content-['✓']":
                                answer.isCorrectAndSelected,
                            "border-red-700 text-red-800  before:content-['✗']":
                                !answer.isCorrectAndSelected,
                        })}
                    >
                        <span className="pl-2">{answer.text}</span>
                    </li>
                ))}
            </ul>
            {isCorrectAndSelected && (
                <div className="bg-green-400 my-6 p-3">
                    {"Great job! You're right 🙏"}
                </div>
            )}
            {!isCorrectAndSelected && (
                <div className="bg-red-300  my-6 p-3">
                    {'This time your answer is wrong.'}
                </div>
            )}
            {selectedAnswerId && currentRandomRiddleId && (
                <div className="mt-5">
                    <Link href={`/riddle/${currentRandomRiddleId}`} className="underline">
                        Play one more
                    </Link>
                </div>
            )}
        </>
    );
};
