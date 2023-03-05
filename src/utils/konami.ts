const sequence: string[] = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
];

let index = 0;

const konami = (callback: CallableFunction) => {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
        if (event.code === sequence[index]) {
            index++;
        } else {
            index = 0;
        }

        if (index === sequence.length) {
            callback();
            index = 0;
        }
    });
}

export { sequence, konami };
