import { Form, FormButtons } from "./components/formItems";
import { Wrapper, TodosWrapper } from "./components/wrappers";
import { TodoItem } from "./components/todoItem";
import { useState } from "react";

let id = 3;
function App() {
  const [selectedType, setSelectType] = useState("All");
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  // 輸入框
  function handleInputChnage(e) {
    setValue(e.target.value);
  }

  // 新增
  function handleAddTodo(e) {
    e.preventDefault();
    if (value !== "") {
      setTodos([
        {
          id,
          content: value,
          isDone: false,
          isShowed: selectedType !== "Completed",
        },
        ...todos,
      ]);

      id += 1;
      setValue("");
    }
  }

  // 刪除功能
  function handleDeleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  // 切換狀態
  function handleToggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      })
    );
  }

  // 編輯功能
  function handlgeEditTodo(e) {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== Number(e.target.id)) return todo;
        return {
          ...todo,
          content: e.target.value,
        };
      })
    );
  }

  // 清空已完成
  function handleClearTodos() {
    setTodos(todos.filter((todo) => !todo.isDone));
  }

  // 設置篩選按鈕
  function handleSelectType(e) {
    const mode = e.target.id;
    setSelectType(mode);

    switch (mode) {
      case "Completed":
        setTodos(
          todos.map((todo) => {
            if (todo.isDone) {
              return {
                ...todo,
                isShowed: true,
              };
            }
            return {
              ...todo,
              isShowed: false,
            };
          })
        );
        break;
      case "Incomplete":
        setTodos(
          todos.map((todo) => {
            if (!todo.isDone) {
              return {
                ...todo,
                isShowed: true,
              };
            }
            return {
              ...todo,
              isShowed: false,
            };
          })
        );
        break;
      default:
        setTodos(
          todos.map((todo) => {
            return {
              ...todo,
              isShowed: true,
            };
          })
        );
        break;
    }
  }

  return (
    <div className="App">
      <Wrapper>
        <Form
          value={value}
          handleInputChnage={handleInputChnage}
          handleAddTodo={handleAddTodo}
        />
        <FormButtons
          selectedType={selectedType}
          handleSelectType={handleSelectType}
          handleClearTodos={handleClearTodos}
        />
        <TodosWrapper>
          {todos.map((todo) => {
            if (todo.isShowed) {
              return (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  handlgeEditTodo={handlgeEditTodo}
                  handleToggleTodo={handleToggleTodo}
                  handleDeleteTodo={handleDeleteTodo}
                />
              );
            }
            return null;
          })}
        </TodosWrapper>
      </Wrapper>
    </div>
  );
}

export default App;
