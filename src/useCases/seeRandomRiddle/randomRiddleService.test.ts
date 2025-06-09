import { describe, expect, it } from 'vitest';
import { createARandomRiddleModel } from './randomRiddleService';

describe('randomRiddleService', () => {
    it('returns model when it is easy jet work interval', () => {
        const date = new Date('2025-06-09T12:00:00');
        const riddle = createARandomRiddleModel(date);

        expect(riddle.workInterval).toBe('Easy jets');
    });

    it('returns model with returning pips work interval', () => {
        const date = new Date('2025-06-09T18:00:00');
        const riddle = createARandomRiddleModel(date);

        expect(riddle.workInterval).toBe('Returning pips');
    });

    it('returns model with sleepies work interval', () => {
        const dates = [new Date('2025-06-09T23:30:00'), new Date('2025-06-09T04:00:00')];

        dates.forEach((date) => {
            const riddle = createARandomRiddleModel(date);

            expect(riddle.workInterval).toBe('Sleepies');
        });
    });

    it('returns model with busy times work interval', () => {
        const date = new Date('2025-06-09T06:00:00');
        const riddle = createARandomRiddleModel(date);

        expect(riddle.workInterval).toBe('Busy Times');
    });

    it('returns model with timestamp', () => {
        const date = new Date('2025-06-09T23:30:00');

        const result = createARandomRiddleModel(date);

        expect(result.timestamp).toBe('2025-06-09 23:30');
    });
});
