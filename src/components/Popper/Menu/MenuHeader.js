import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import styles from './Menu.module.scss'

function MenuHeader({ title, onBack }) {
    return (
        <header className={styles["header-wrapper"]}>
            <button className={styles["back-btn"]} onClick={onBack} >
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <h4 className={styles["menu-title"]}>{title}</h4>
        </header>
    )
}
export default MenuHeader