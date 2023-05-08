import styles from './Popper.module.scss'

function Wrapper({ children, className }) {
    return (
        <div className={`${styles['wrapper']} ${className}`}>
            {children}
        </div>
    )
}
export default Wrapper