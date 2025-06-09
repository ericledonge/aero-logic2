import { createARandomRiddleModel } from '@/useCases/seeRandomRiddle/randomRiddleService';
import { RandomRiddleEntryControl } from './RandomRiddleEntryControl';
import { ClientLayout } from './ClientLayout';

export default function Home() {
    const { workInterval, timestamp } = createARandomRiddleModel(new Date());

    return (
        <main className="text-lg">
            <div>
                <p data-test="work-interval">Work Interval: {workInterval}</p>
                <p data-test="timestamp">Timestamp: {timestamp}</p>
                <div className="p-20 text-center">
                    <ClientLayout>
                        <RandomRiddleEntryControl />
                    </ClientLayout>
                </div>
            </div>
        </main>
    );
}
