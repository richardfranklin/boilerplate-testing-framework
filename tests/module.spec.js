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
        const ford = new Car();
        ford.accelerate(50);
        expect(ford.speed).toEqual(50);
    });

    // TEST ------------------------------------------------------------------------
    it ('spyOn() demo', () => {
        const bentley = new Car();
        spyOn(bentley, 'changeSpeed').and.callThrough();
        bentley.accelerate(50);
        expect(bentley.speed).toEqual(50);
    });

    // TEST ------------------------------------------------------------------------
    it ('spyOn() demo 2', () => {
        const audi = new Car();
        spyOn(audi, 'getSpeed').and.returnValue(50);
        expect(audi.changeSpeed()).toEqual(50);
    });

    // TEST ------------------------------------------------------------------------
    it ('spyOn() demo 3', () => {

        const fakeFunction = additional => {
            return additional + 5;
        };

        const honda = new Car();
        spyOn(honda, 'getSpeed').and.callFake(fakeFunction);
        expect(honda.getSpeed(70)).toEqual(75);
    });

    // TEST ------------------------------------------------------------------------


    
});