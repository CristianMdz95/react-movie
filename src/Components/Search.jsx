import Style from '../Styles/Search.module.css';
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react/cjs/react.development';
import { useNavigate } from 'react-router-dom';
import { useQuery } from './hooks/useQuery';
import { useEffect } from 'react';

export function Search() {
    const [searchText, setSearchText] = useState("");
    const history = useNavigate();

    const query = useQuery();
    const search = query.get('search');

    useEffect(() => {
        setSearchText(search || "");
    }, [search])

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
