import styles from './App.module.scss';
import ViteSvg from './assets/vite.svg';
import TypescriptSvg from './assets/typescript.svg';

function App() {
    return (
        <div className={styles.App}>
            <div>
                <img
                    src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                    alt=""
                />
            </div>
            <h2>Welcome to your App Component 🎉</h2>
            <span>
                Double click to edit App component
                <br />
                &amp; drag here elements from + Add <b>Elementsey</b> Panel
            </span>
            <p
                style={{
                    fontSize: '12px',
                    marginTop: '80px',
                    display: 'flex',
                    gap: '3px',
                    justifyContent: 'center',
                }}
            >
                This project is using <img src={ViteSvg} width="12" />+
                <img src={TypescriptSvg} width="12" />
                Visit vitejs.dev to learn more.
            </p>
        </div>
    );
}

export default App;
