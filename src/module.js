export const testString = country => `I am from ${country}!`;

export const testObj = {
    testMethod: logString => {
        console.log(`Hello ${logString}`);
    }
};

export function Car() {
    this.speed = 0;
    this.accelerate = accSpeed => {
        this.speed += accSpeed;
    }
    this.stop = () => {
        this.speed = 0;
    }
}