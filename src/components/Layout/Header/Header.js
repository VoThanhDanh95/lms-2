import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faEarthAsia } from '@fortawesome/free-solid-svg-icons'
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons'
import { faKeyboard } from '@fortawesome/free-solid-svg-icons'
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional

import styles from './Header.module.scss'
import logo from '../../../assets/images/logo.svg'
import Wrapper from '../../Popper/Wrapper';
import AccountItem from '../../AccountItem/AccountItem';
import Button from '../../Button/Button';
import Menu from '../../Popper/Menu/Menu';

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState([])

    useEffect(() => {
        setTimeout(() => { setSearchResult([]) }, 0)
    }, [])



    return (
        <header className={styles['wrapper']}>
            <div className={styles["inner"]}>
                <img src={logo} alt="Tiktok" />

                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={attrs => (
                        <div className={styles['search-result']}>
                            <Wrapper>
                                <h4 className={styles['account-label']}> Accounts </h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </Wrapper>
                        </div>
                    )}
                >
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
                </Tippy>

                <div className={styles["actions"]}>
                    <Button text>Upload</Button>
                    <Button primary>Log in</Button>
                    <Menu
                        items={MENU_ITEMS}
                    >
                        <button className={styles["more-btn"]}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </Menu>
                </div>
            </div>


        </header>
    )
}
export default Header