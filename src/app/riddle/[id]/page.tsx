import { getRiddle } from '@/app/domain/RandomRiddleAdapter';
import { RiddleAnswers } from './RiddleAnswers';
import { ClientLayout } from '../../ClientLayout';

export default async function RiddlePage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const id = (await params).id;
    const riddle = await getRiddle(id);

    return (
        <main className="text-lg">
            <p dangerouslySetInnerHTML={{ __html: riddle.contents }} className="mb-16" />
            <ClientLayout>
                <RiddleAnswers riddle={riddle} />
            </ClientLayout>
        </main>
    );
}
