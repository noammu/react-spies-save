import classNames from 'classnames';
import styles from './headers.module.scss';

export interface HeadersProps {
    className?: string;
    text: string;
    numnum: number;
    arr: string[];
    obj: {
        id: number;
        name: string;
        contacts: string[];
    };
    someJsx: JSX.Element;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Headers = (props: HeadersProps) => {
    return (
        <div className={classNames(styles.root, props.className)}>
            <h1>{props.text}</h1>
            <h2>{props.numnum}</h2>
            <h3>{props.arr}</h3>
            <h4>
                {props.obj.id}: {props.obj.name}, contacts: {props.obj.contacts}
            </h4>
            <div>{props.someJsx}</div>
            <h6>repeater: {props.arr.map((a) => a)} </h6>
            <span>text</span>
        </div>
    );
};
