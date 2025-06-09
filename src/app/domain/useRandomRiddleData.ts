import { useQuery } from '@tanstack/react-query';
import { useRandomRiddleAdapter } from './RandomRiddleAdapter';

const useRandomRiddleData = () => {
    const { getData } = useRandomRiddleAdapter();

    const { data, isLoading, error } = useQuery({
        queryKey: ['randomRiddle'],
        queryFn: () => getData(),
    });

    return {
        data,
        isLoading,
        error,
    };
};

export default useRandomRiddleData;
