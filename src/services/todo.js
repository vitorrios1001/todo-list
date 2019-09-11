import { firestore } from './firebase';
import { generateId } from '../helpers/util'

export const getTodos = async () => {
    try {
        const data = await firestore.collection('todo').get();

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

        await firestore.collection('todo').add(item);

        return todo;
    } catch (error) {
        console.log(error);
        return null;
    }
}