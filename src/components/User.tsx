import {useState} from 'react';

interface UserModel {
    uid: string;
    name: string;
}

export const User = () => {

    const [user, setUser] = useState<UserModel>();
    const login = () => {
        setUser({
            uid: 'ABC123',
            name: 'Andrés Bolaños'
        })
    }

    return (
        <div>
            <h3>User: UseState</h3>
            <button
                onClick={login}
                className="btn btn-outline-primary">
                Login
            </button>

            {
                (!user) ? <pre> There is not user </pre> : <pre> {JSON.stringify( user )}</pre>
            }

        </div>
    )
}
