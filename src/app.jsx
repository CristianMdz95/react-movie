import { MoviesGrid } from "./Components/MoviesGrid";
import styles from "./Styles/App.module.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// <MoviesGrid></MoviesGrid>
export function App() {
    return (
        <Router>
            <header>
                <h1 className={styles.title}>Pruba</h1>
            </header>

            <main>
                <Routes>
                    <Route path="/movie"> Movie </Route>
                    <Route path="/"> Home </Route>
                </Routes>
            </main>
            
        </Router>
    );
}