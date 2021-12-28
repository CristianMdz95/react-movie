import Style from '../Styles/Search.module.css';
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react/cjs/react.development';
import { useNavigate } from 'react-router-dom';

export function Search() {
    const [searchText, setSearchText] = useState("");
    const history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        history("/?search=" + searchText);
    }

    return (
        <form className={Style.searchContainer} onSubmit={handleSubmit}>
            <div className={Style.searchBox}>
                <input type="text" className={Style.searchInput}
                 value={searchText}
                 onChange={(e) => setSearchText(e.target.value)}/>

                <button type='submit' className={Style.seachButton}>
                    <FaSearch size={20}/>
                </button>
            </div>
        </form>
    )
}
