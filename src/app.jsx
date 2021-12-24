import { MoviesGrid } from "./Components/MoviesGrid";
import styles from "./Styles/App.module.css"

export function App() {
    return(
    <div>
        <header>
            <h1 className={styles.title}></h1>
        </header>

        <main>
            <MoviesGrid></MoviesGrid>
        </main>
    </div>
    );
}