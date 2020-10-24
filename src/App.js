import React from 'react'
import './App.css';


function App() {
  return (
    <div className="App">
        <h1> Подключение Redux к приложению </h1>
        <hr/>
        1. Подключить пакеты: <br/>
        npm i redux <br/>
        npm i redux-devtools-extension <br/>
        npm i react-redux <br/>
        <hr/>
        2. Файл index. js -
        <br/> обернуть App/ в Provider,
        <br/> добавить store
        <br/>  испортировать Provider из react-reduce.
        <hr/>
        3. создать папку redux
        <br/> создать в ней файлы store. js и reducer. js
        <hr/>
        4. в файле reducer
        <br/> создать переменную initialState (массив данных)
        <br/> создать функцию, передать в нее 2 агрумента: "состояние" и "действие",
        <br/> первый аргумент по умолчанию сделать равным initialState
        <br/> экспортировать функцию по умолчанию
        <hr/>
        5. в файле store
        <br/> создать переменную store
        <br/> сделать ее равной функции createStore (проимпортировать из redux),
        <br/> аргументы назначить функции: kanban и composeWithDevTools
        <br/> (аргументы проимпортировать из файла reducer и redux-devtools-extension)
        <br/> аргументом для последней назначить (вызвать с ()) функцию applyMiddleware
        <br/> (проимпортировать из redux)
          <hr/>
          5. Все нюансы смотри в файлах index, store и reducer с расширением js.
          <hr/>
          Успехов!
    </div>
  );
}

export default App;
