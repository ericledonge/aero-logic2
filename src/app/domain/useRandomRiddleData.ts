import { useQuery } from '@tanstack/react-query';

import { getRandomRiddle } from './RandomRiddleAdapter';

const useRandomRiddleData = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['randomRiddle'],
        queryFn: () => getRandomRiddle(),
    });

    return {
        data,
        isLoading,
        error,
    };
};

export default useRandomRiddleData;
