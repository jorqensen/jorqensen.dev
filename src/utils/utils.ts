import { konami } from '@/utils/konami';

const randomElementFromArray = (array: any[]) => {
    return array[Math.floor((Math.random()*array.length))];
}

const randomInRange = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
}

export { konami, randomElementFromArray, randomInRange }
