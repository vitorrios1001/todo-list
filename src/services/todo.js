import { firestore } from './firebase';
import { generateId } from '../helpers/util'
import { getUserLogged } from '../helpers/auth';

export const getTodos = async () => {
  try {
    const userLogged = getUserLogged()

    const data = await firestore.collection('todo')
      .where("userId", "==", userLogged.id)
      .get();

    let todos = [];

    data.forEach(item => {
      todos.push({ ...item.data() })
    })

    return todos;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export const addTodo = async (todo) => {
  try {
    const userLogged = getUserLogged()

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

export const removeTodo = async (id) => {
  try {
    const userLogged = getUserLogged()

    const query = await firestore.collection('todo')
                                .where("userId", "==", userLogged.id)
                                .where("id", "==", id)
            
    query.get().then(resp => {
      resp.forEach(doc => {
        doc.ref.delete()
      })
    }).catch(err => {
      console.log(err)
      return false
    })                   
    
    return true
  } catch (error) {
    console.log(error);
    return false;
  }
}

export const changeStatusTodo = async (todoId, value) => {
  try {
    const userLogged = getUserLogged()

    const query = await firestore.collection('todo')
                                  .where("userId", "==", userLogged.id)
                                  .where("id", "==", todoId)
                                
    query.get().then(resp => {
      resp.forEach(doc => {
        doc.ref.update({ checked: value })
      })
    }).catch(err => {
      console.log(err)
      return false
    })        
    
    return true
  } catch (error) {
    console.log(error)
    return false;
  }
}