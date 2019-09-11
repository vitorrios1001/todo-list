import React, { useEffect, useState } from 'react';
import firebase from 'firebase'

import { googleAuthProvider, app } from '../../services/firebase'
//import { firestore } from '../../services/firebase'

const Login = ({ history }) => {

    const [logs, setLogs] = useState([])

    const handleLogin = async () => {


        const result = await firebase.auth().signInWithPopup(googleAuthProvider);

        var token = result.credential.accessToken;
        var user = result.user;

        const userLogin = {
            id: user.uid,
            fullName: user.displayName,
            firtName: user.displayName.split(' ')[0],
            email: user.email,
            avatar: user.photoURL,
        }

        localStorage.setItem('user', JSON.stringify(userLogin))
        localStorage.setItem('token', token);

        console.log(result)
        console.log(token)
        console.log(user)
        console.log(userLogin)

    }

    // useEffect(() => {
    //     function gerarLog() {
    //         const log = {
    //             dataAtual: new Date(),
    //         }

    //         firestore.collection('log').add(log);
    //     }

    //     async function buscarLogs() {
    //         const data = await firestore.collection('log').get();

    //         let logs = [];

    //         data.forEach(item => {
    //             logs.push({
    //                 id: item.id,
    //                 ...item.data(),
    //             })
    //         })
    //         setLogs(logs);
    //     }

    //     gerarLog()
    //     buscarLogs();
    // }, [])


    return (
        <div>
            <h3>Login</h3>
            <button onClick={handleLogin} >
                Login Google
            </button>
            {
                logs.map((item, index) => <p key={index}>{Date(item.dataAtual)}</p>)
            }
        </div>
    )
}

export default Login;