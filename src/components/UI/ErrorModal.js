import styles from "./ErrorModal.module.scss"
import Card from "./Card";
import Button from "./Button";

const ErrorModal = ({title,content,onCloseModal}) => {
    return(
        <>
            <div className={styles.backdrop} onClick={onCloseModal}></div>
            <Card className={styles.modal}>
                <div className={styles.header}>
                    <h2>{title}</h2>
                </div>
                <div className={styles.content}>
                    <p>{content}</p>
                </div>
                <div className={styles.actions}>
                    <Button onClick={onCloseModal}>
                        Закрыть
                    </Button>
                </div>
            </Card>
        </>
    )
}

export default ErrorModal;