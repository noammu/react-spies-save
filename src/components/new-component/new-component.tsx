import classNames from 'classnames';
import styles from './new-component.module.scss';

export interface NewComponentProps {
    className?: string;
    title: string;
}

export const NewComponent = ({ className, title }: NewComponentProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <nav>
                <a href="/home">Home</a> | <a href="/projects">Projects</a> |{' '}
                <a href="/about">About</a> | <a href="/contact">Contact Us</a>
            </nav>
            <h1 key={title}>Props is: {title}</h1>
            <h2>Heading 2</h2>
            <div className={styles.vidWrap}>
                <div className={styles.vidWrap}>
                    <video
                        controls={true}
                        src="https://wixplosives.github.io/codux-assets-storage/add-panel/video-placeholder.mp4"
                        className={styles.vid}
                    />
                </div>
                <div>
                    <img
                        src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                        alt=""
                        className={styles.imgimg}
                    />
                </div>
            </div>
            <span>
                <a href="/">Link</a>text1
            </span>
            <span>
                <p>This is a paragraph.</p>
            </span>
            <div>
                <ul>
                    <li>Coffee</li>
                    <li>Tea</li>
                    <li>Milk</li>
                </ul>
            </div>
        </div>
    );
};
