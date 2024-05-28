import classNames from 'classnames';
import styles from './call-external-comps.module.scss';
import { Headers } from '../headers/headers';
import { numnum, arr, diffJsx } from '../../_codux/boards/headers/headers.board';

export interface CallExternalCompsProps {
    className?: string;
}

const text = 'Hello, World!';

export const CallExternalComps = ({ className }: CallExternalCompsProps) => {

    const obj = {
            id: 1,
            name: 'John Doe',
            contacts: ['123-456-7890, ', '098-765-4321'],
        };


    return (
        <div className={classNames(styles.root, className)}>
            <Headers text={text} numnum={numnum} arr={arr} obj={obj} someJsx={diffJsx} />
        </div>
    );
};

export interface InternalCompProps {
    noam: string;
}

export const InternalComp = (props: InternalCompProps) => {

    return <div />
}

