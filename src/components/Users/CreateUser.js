import Card from "../UI/Card";
import Button from "../UI/Button"
import styles from "./CreateUser.module.scss"
import {Fragment, useState, useRef} from "react";
import ErrorModal from "../UI/ErrorModal";

const CreateUser = ({onCreateUser}) => {

    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [error, setError] = useState();

    const createUserHandler = (e) => {
        e.preventDefault();
        const inputUserName = nameInputRef.current.value;
        const inputUserAge = ageInputRef.current.value;

        if (inputUserAge.trim().length === 0 || inputUserName.trim().length === 0) {
            setError({
                title: 'Не корректный ввод !!!',
                content: 'Поля не могут быть пустыми !!!'
            })
            return;
        }

        onCreateUser(inputUserName, inputUserAge);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';

    };

    const errorHandler = (e) => {
        setError(null);
    }

    return (
        <Fragment>
            {error && <ErrorModal onCloseModal={errorHandler} title={error.title} content={error.content}/>}
            <Card className={styles.input}>
                <form onSubmit={createUserHandler}>
                    <label htmlFor="name">Имя</label>
                    <input id="name" type="text" ref={nameInputRef}/>

                    <label htmlFor="age">Возраст</label>
                    <input id="age" type="number" min="0" ref={ageInputRef}/>

                    <Button type="submit">Добавить нового пользователя</Button>
                </form>
            </Card>
        </Fragment>
    )
};

export default CreateUser;