import styles from "./ErrorModal.module.scss"
import Card from "./Card";
import Button from "./Button";
import {Fragment} from "react";
import ReactDom from "react-dom";

const Backdrop = ({onCloseModal}) => {
    return  <div className={styles.backdrop} onClick={onCloseModal}></div>
}

const Modal = ({title, content, onCloseModal}) => {
    return  (
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
    )
}

const ErrorModal = ({title,content,onCloseModal}) => {
    return(
        <Fragment>
            {ReactDom.createPortal(
                <Backdrop onCloseModal={onCloseModal}/> ,
                document.getElementById('backdrop'))}

            {ReactDom.createPortal(
                <Modal title={title} content={content} onCloseModal={onCloseModal} />,
                document.getElementById('modal'))}
        </Fragment>
    )
}

export default ErrorModal;