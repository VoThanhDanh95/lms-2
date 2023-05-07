import styles from './Header.module.scss'
import logo from '../../../assets/images/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function Header() {
    return (
        <header className={styles['wrapper']}>
            <div className={styles["inner"]}>
                <img src={logo} alt="Tiktok" />

                <div className={styles["search"]}>
                    <input placeholder='Search accounts and videos' spellCheck={false} />
                    <button className={styles["clear"]}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>

                    <FontAwesomeIcon className={styles["loading"]} icon={faSpinner} />

                    <button className={styles["search-btn"]}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>

                <div className={styles["actions"]}></div>
            </div>


        </header>
    )
}
export default Header