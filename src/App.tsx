import format from 'date-fns/format';
import { useState } from 'react';
import todoItemsDummy from './assets/dummy/todoItems';
import { FiCheck, FiChevronLeft, FiChevronRight, FiPlus } from "react-icons/fi";

function App() {
  const [todoItems, setTodoItems] = useState(todoItemsDummy);
  const [currentDate, setCurrentDate] = useState(new Date());

  return (
    <div
      style={{
        position: "relative",
        height: "100%",
        overflow: "hidden"
      }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          left: 0,
          right: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 0",
        }}>
        <div style={{ padding: 10 }}>
          <FiChevronLeft size={25} />
        </div>
        <div>
          <div style={{ fontSize: 24, fontWeight: 600 }}>
            {format(currentDate, 'MM월 dd일')}
          </div>
          <div style={{fontSize: 12}}>
            {format(currentDate, 'yyyy년')}
          </div>
        </div>
        <div style={{ padding: 10 }}>
          <FiChevronRight size={25} />
        </div>
      </div>
      <div
        style={{
          padding: "20px",
          height: "100%",
          overflowY: "auto",
        }}
      >
        {todoItems.map(item => {
          return (
            <div key={item.id}>
              {!item.isDone && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <div>{item.content}</div>
                  <div>
                    <FiCheck color="#666666" size={26} />
                  </div>
                </div>
              )}
              {item.isDone && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{ textDecoration: "line-through", color: "#666666" }}
                  >
                    {item.content}
                  </div>
                  <div>
                    <FiCheck color="#CFFF48" size={26} />
                  </div>
                </div>
              )}
            </div>
          )
        })}
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: "50%",
            background: "#cfff48",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            right: 20,
            bottom: 20,
          }}
        >
          <FiPlus color="#1e1e1e" size={24} />
        </div>
      </div>
    </div>
  )
}

export default App