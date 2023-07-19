import styles from "./UserList.module.scss"
import Card from "../UI/Card";
const UserList = ({users}) => {

    let markup = users.length !== 0 ?
        <Card className={styles.users}>
            <ul>
                {users.map((user) => (
                    <li key={user.id} id={user.id}>
                        <span>
                            {user.name}
                        </span>
                        -
                        <span>
                             {user.age}лет
                         </span>
                    </li>
                ))}
            </ul>
        </Card> : '';



    return markup;
}

export default UserList;