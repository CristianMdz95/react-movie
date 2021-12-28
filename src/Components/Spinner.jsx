import { FaSpinner } from 'react-icons/fa';
import Style from '../Styles/Spinner.module.css';

export function Spinner() {
    return (
        <div className={Style.Spinner}>
            <FaSpinner className={Style.spinning} size={50}/>
        </div>
    )
}
