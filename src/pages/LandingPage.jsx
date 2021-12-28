import { MoviesGrid } from "../Components/MoviesGrid";
import { Search } from "../Components/Search";

export default function LandingPage() {
    return (
        <div>
            <Search></Search>
            <br/>
            <MoviesGrid></MoviesGrid>            
        </div>
    )
}
