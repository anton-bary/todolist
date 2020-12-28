import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

import './app.css';

const App = () => {

    const todoData = [
        {id: "dc", label: "Drink Coffee", important: false},
        {id: "dic", label: "Drink Irish Coffee", important: true},
        {id: "dw", label: "Drink Whiskey", important: false},
    ];

    return (
        <div className="todo-app">
            <AppHeader toDo={1} done={3}/> 
            <div className="top-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter />
            </div>
            
            <TodoList 
                todos={ todoData }
                onDeleted={ (id) => console.log('del', id) }
            />
        </div>
    );
}

export default App;  