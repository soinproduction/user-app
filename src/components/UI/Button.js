import styles from './Button.module.scss'

const Button = ({type, onClick, children}) => {
    return (
        <button onClick={onClick} className={styles.button} type={type || "button"}>
            {children}
        </button>
    )
}

export default Button;