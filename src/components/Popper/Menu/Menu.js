import Tippy from '@tippyjs/react/headless';

import Wrapper from "../Wrapper"
import styles from './Menu.module.scss'
import MenuItem from './MenuItem';
import MenuHeader from './MenuHeader';



function Menu({ children, items=[] }) {
    const renderItems = (items) => {
        return (items.map((menu, index) => {
            return (
                <MenuItem menu_data={menu} key={index} />
            )
        }))
    }

    return (
        <Tippy
            // visible
            interactive
            delay={[0, 500]}
            placement='bottom-end'
            render={attrs => (
                <div className={styles['menu-items']} tabIndex="-1" {...attrs}>
                    <Wrapper className={styles["custom-popper-wrapper"]}>
                        <MenuHeader title={"Language"} />
                        {renderItems(items)}
                    </Wrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    )
}

export default Menu