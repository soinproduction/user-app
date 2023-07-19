import styles from './Card.module.scss'
import classNames from "classnames";

const Card = (props) => {
    return(
        <div className={classNames(styles.card, props.className)}>
            {props.children}
        </div>
    )
}

export default Card;