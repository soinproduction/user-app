import Card from "../UI/Card";
import Button from "../UI/Button"
import styles from "./CreateUser.module.scss"
import {useState} from "react";
import ErrorModal from "../UI/ErrorModal";

const CreateUser = ({onCreateUser}) => {
    const [inputName, setInputName] = useState("");
    const [inputAge, setInputAge] = useState("");
    const [error, setError] = useState();

    const nameChangeHandler = (e) => {setInputName( e.target.value)}
    const ageChangeHandler = (e) => {setInputAge( e.target.value)}

    const createUserHandler = (e) => {
        e.preventDefault();


        if (inputAge.trim().length === 0 || inputName.trim().length === 0) {

            setError({
                title: 'Не корректный ввод !!!',
                content: 'Поля не могут быть пустыми !!!'
            })

            return;
        }

        onCreateUser(inputName, inputAge);

        setInputName("");
        setInputAge("");
    };

    const errorHandler = (e) => {
        setError(null);
    }

    return(
        <>
            { error && <ErrorModal onCloseModal={errorHandler} title={error.title} content={error.content}/>}
            <Card className={styles.input}>
                <form onSubmit={createUserHandler}>
                    <label htmlFor="name">Имя</label>
                    <input id="name" type="text" onChange={nameChangeHandler} value={inputName}/>

                    <label htmlFor="age">Возраст</label>
                    <input id="age" type="number" min="0" onChange={ageChangeHandler} value={inputAge}/>

                    <Button type="submit">Добавить нового пользователя</Button>
                </form>
            </Card>
        </>
    )
};

export default  CreateUser;