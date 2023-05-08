import Button from "../../Button/Button"
import styles from './Menu.module.scss'

function MenuItem({ menu_data }) {
    return (
        <Button className={styles["menu-item"]} leftIcon={menu_data.icon} to={menu_data.to}> {menu_data.title} </Button>
    )
}
export default MenuItem