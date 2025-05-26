import { createARandomRiddleModel } from '@/useCases/seeRandomRiddle/randomRiddleService';
import { RandomRiddleEntryControl } from './RandomRiddleEntryControl';

export default function Home() {
    const { workInterval, timestamp } = createARandomRiddleModel();

    return (
        <main className="text-lg">
            <div>
                <p>Work Interval: {workInterval}</p>
                <p>Timestamp: {timestamp}</p>
                <div className="p-20 text-center">
                    <RandomRiddleEntryControl />
                </div>
            </div>
        </main>
    );
}
