import { testString } from '../src/module';
import { testObj } from '../src/module';
import { Car } from '../src/module';

describe('module', function () {

    const countryMessage = testString('Sweden');

    // BEFOREEACH ------------------------------------------------------------------------
    beforeEach(() => { 
        spyOn(testObj, 'testMethod'); 
        testObj.testMethod('Bob');
    });

    // TEST ------------------------------------------------------------------------
    it('should display which country you\'re from', function () {
        expect(countryMessage).toBe('I am from Sweden!');
    });

    // TEST ------------------------------------------------------------------------
    it('should call testMethod', () => {
        expect(testObj.testMethod).toHaveBeenCalledWith('Bob');
    });

    // TEST ------------------------------------------------------------------------
    it('Should be sped up by 50mph', () => {
        var ford = new Car();
        ford.accelerate(50);
        expect(ford.speed).toEqual(50);
    });

    // TEST ------------------------------------------------------------------------
    

    // TEST ------------------------------------------------------------------------


    // TEST ------------------------------------------------------------------------


    // TEST ------------------------------------------------------------------------


    // TEST ------------------------------------------------------------------------


    // TEST ------------------------------------------------------------------------

    
});