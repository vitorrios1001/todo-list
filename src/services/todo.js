import { firestore } from './firebase';
import { generateId } from '../helpers/util'

export const getTodos = async () => {
    try {
        const userLogged = JSON.parse(localStorage.getItem('user'))

        const data = await firestore.collection('todo')
            .where("userId", "==", userLogged.id)
            .get();

        let todos = [];

        data.forEach(item => {
            todos.push({
                ...item.data(),
            })
        })

        return todos;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export const addTodo = async (todo) => {
    try {

        const userLogged = JSON.parse(localStorage.getItem('user'))

        const item = {
            id: generateId(),
            userId: userLogged.id,
            ...todo,
        }

        const data = await firestore.collection('todo').add(item);

        const itemInserted = await data.get()

        return itemInserted.data();
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const changeStatusTodo = async (todoId, value) => {
    try {
        const data = await firestore.collection('todo')

                                    .where('id', '==', todoId)
                                    .limit(1)
                                    .get();

        let todo = {};

        data.forEach((item, index) => {
            if(index === 0)
                todo = item.data();
        })
        



    } catch (error) {
        console.log(error)
        return false;
    }
}