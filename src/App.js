import CreateUser from "./components/Users/CreateUser";
import UserList from "./components/Users/UserList";
import {Fragment, useState} from "react";




const App = () => {

    const [data, setData] = useState([])

    const createUserHandler = (name, age) => {
        setData((prevState) => {
            return [...prevState, {name: name, age: age,id: Math.floor(Math.random() * 90) + 10}];
        })
    }


    return (
        <Fragment>
            <CreateUser onCreateUser={createUserHandler}/>
            <UserList users={data}/>
        </Fragment>
    )
};

export default App;
