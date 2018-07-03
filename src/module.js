export const testString = country => `I am from ${country}!`;

export const testObj = {
    testMethod: logString => {
        console.log(`Hello ${logString}`);
    }
};

export function Car() {
    this.speed = 0;

    this.getSpeed = () => {
        return this.speed
    }

    this.changeSpeed = speedChange => {
        this.speed += speedChange;
        return this.getSpeed();
    }

    this.accelerate = speedChange => {
        this.changeSpeed (speedChange);
    }

    this.decelerate = speedChange => {
        this.changeSpeed (-speedChange);
        return this.getSpeed();
    }

    this.stop = () => {
        this.speed = 0;
    }
}