import { faCheckCircle } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import styles from './AccountItem.module.scss'

function AccountItem() {
    return (
        <div className={styles["wrapper"]}>
            <img className={styles["avatar"]} src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/101f2bd32cb11214b9b54a4645ce325a~c5_300x300.webp?x-expires=1683604800&x-signature=b8owx6PGgwdqcR8cHbe4mzkxg9A%3D" alt="" />
            <div className={styles["info"]}>
                <h4 className={styles["name"]}>
                    <span>homm9k </span>
                    <FontAwesomeIcon className={styles["check"]} icon={faCheckCircle} />
                </h4>
                <p className={styles["username"]}>
                    HOMA
                </p>
            </div>
        </div>
    )
}

export default AccountItem