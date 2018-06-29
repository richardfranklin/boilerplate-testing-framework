import { testString } from '../src/module';

describe('module', function () {

    const countryMessage = testString('Sweden');

    it('should display which country you\'re from', function () {
        expect(countryMessage).toBe('I am from Sweden!');
    });
   
});