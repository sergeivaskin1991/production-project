import { StateSchema } from 'app/providers/StoreProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { getProfileIsLoading } from 'entities/Profile';

describe('getProfileIsLoading.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                isLoading: true,
            },
        };
        expect(getProfileIsLoading(state as StateSchema)).toEqual(true);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileIsLoading(state as StateSchema)).toEqual(undefined);
    });
});
