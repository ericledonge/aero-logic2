import { useRouter } from 'next/navigation';

import useRandomRiddleData from '@/app/domain/useRandomRiddleData';

const useRandomRiddle = () => {
    const router = useRouter();

    const { data, isLoading, error } = useRandomRiddleData();

    const handleClick = () => {
        router.push(`/riddle/${data?.id}`);
    };
    // const riddleModel = createMyModel(riddle);
    // I can use models in the use case or in the component.

    return {
        id: data?.id,
        // ...riddleModel,
        handleClick,
    };
};

export default useRandomRiddle;
