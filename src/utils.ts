import Konami from '@/classes/Konami';

const randomElementFromArray = (array: any[]) => {
    return array[Math.floor((Math.random()*array.length))];
}

const randomInRange = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
}

export { Konami, randomElementFromArray, randomInRange }
