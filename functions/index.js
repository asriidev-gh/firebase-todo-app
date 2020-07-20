const functions = require('firebase-functions');

const app = require('express')();
const auth = require('./util/auth');

// TODOs APIs  --------------------------------------//

// Routes
const {
    getAllTodos,
    postOneTodo,
    deleteTodo,
    editTodo,
    getOneTodo
} = require('./APIs/todos')

// Endpoints

app.get('/todos', auth, getAllTodos);
app.get('/todo/:todoId', auth, getOneTodo);
app.post('/todo',auth, postOneTodo);
app.delete('/todo/:todoId',auth, deleteTodo);
app.put('/todo/:todoId',auth, editTodo);

// AUTHENTICATION LIB  ------------------------------//

// Routes
const {
    loginUser,
    signUpUser,
    uploadProfilePhoto,
    getUserDetail,
    updateUserDetails
} = require('./APIs/users')

// Endpoints
app.post('/signup', signUpUser);
app.post('/login', loginUser);
app.post('/user/image', auth, uploadProfilePhoto)
app.get('/user', auth, getUserDetail);
app.post('/user', auth, updateUserDetails);

exports.api = functions.https.onRequest(app);
