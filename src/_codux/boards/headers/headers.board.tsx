import { createBoard } from '@wixc3/react-board';
import { Headers } from '../../../components/headers/headers';

const text = 'text';
export const numnum = 42;
export const arr = ['one ', 'two ', 'three '];

export const diffJsx = <p>Something Different</p>;

export default createBoard({
    name: 'Headers',
    Board: () => {
        const obj = {
            id: 1,
            name: 'John Doe',
            contacts: ['123-456-7890, ', '098-765-4321'],
        };
        const someJsx = <h5>Some JSX</h5>;
        return <Headers text={text} numnum={numnum} arr={arr} obj={obj} someJsx={someJsx} />;
    },
    isSnippet: true,
});
