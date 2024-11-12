import React, { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './style.scss';

const ItemType = 'TODO';

const DraggableTodo = ({ todo, index, moveTodo, columnId }) => {
    const [, ref] = useDrag({
        type: ItemType,
        item: { index, columnId, id: todo.id },
    });

    const [, drop] = useDrop({
        accept: ItemType,
        hover(item) {
            if (item.columnId !== columnId) {
                moveTodo(item.index, index, item.columnId, columnId);
                item.index = index;
                item.columnId = columnId;
            }
        },
    });

    return (
        <li ref={node => ref(drop(node))} className="todo-item">
            {todo.content}
        </li>
    );
};

export function ToDo() {
    const [columns, setColumns] = useState({
        column1: [
            { id: '1', content: 'Задача 1' },
            { id: '2', content: 'Задача 2' },
        ],
        column2: [
            { id: '3', content: 'Задача 3' },
            { id: '4', content: 'Задача 4' },
        ],
    });

    // Состояния для каждого инпута по колонкам
    const [newTodoContent, setNewTodoContent] = useState({
        column1: '',
        column2: '',
    });

    // Функция перемещения задачи внутри колонки или между колонками
    const moveTodo = (fromIndex, toIndex, fromColumnId, toColumnId) => {
        const updatedColumns = { ...columns };
        const [movedTodo] = updatedColumns[fromColumnId].splice(fromIndex, 1);

        if (fromColumnId !== toColumnId) {
            updatedColumns[toColumnId].splice(toIndex, 0, movedTodo);
        } else {
            updatedColumns[toColumnId].splice(toIndex, 0, movedTodo);
        }

        setColumns(updatedColumns);
    };

    const addTodo = (columnId) => {
        const todoContent = newTodoContent[columnId].trim();
        if (todoContent === '') return; // Не добавлять пустую задачу

        const newTodo = {
            id: Date.now().toString(),
            content: todoContent,
        };

        setColumns((prevColumns) => ({
            ...prevColumns,
            [columnId]: [...prevColumns[columnId], newTodo],
        }));

        setNewTodoContent((prevContent) => ({
            ...prevContent,
            [columnId]: '', // Очистить инпут после добавления
        }));
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="todo-columns">
                {Object.keys(columns).map((columnId) => (
                    <div key={columnId} className="todo-column">
                        <h2>{columnId}</h2>
                        <ul className="todo-list">
                            {columns[columnId].map((todo, index) => (
                                <DraggableTodo
                                    key={todo.id}
                                    index={index}
                                    todo={todo}
                                    moveTodo={moveTodo}
                                    columnId={columnId}
                                />
                            ))}
                        </ul>

                        <div className="todo-add">
                            <input
                                type="text"
                                value={newTodoContent[columnId]}
                                onChange={(e) =>
                                    setNewTodoContent((prevContent) => ({
                                        ...prevContent,
                                        [columnId]: e.target.value,
                                    }))
                                }
                                placeholder="Новая задача..."
                            />
                            <button onClick={() => addTodo(columnId)}>Добавить</button>
                        </div>

                        {columns[columnId].length === 0 && (
                            <li className="empty-column" style={{ padding: '10px', color: 'gray' }}>
                                Пусто
                            </li>
                        )}
                    </div>
                ))}
            </div>
        </DndProvider>
    );
}

export default ToDo;
