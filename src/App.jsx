import { useState, useEffect } from 'react'
import Info from './info'
import Create from './Create'

function App() {
  // react component在state或props改變時都會重新渲染
  // state狀態
  const [number, setNumber] = useState(0)
  const [msg, setMsg] = useState([])

  // dummy data
  const users = [
    { name: "小明", age: 16 },
    { name: "小美", age: 17 },
    { name: "小華", age: 15 },
  ]

  /**
   * 根據DependencyList裡的state變動, 從而觸發effect function的發生,
   * 此外當頁面第一次render時也會觸發effect function,
   * 若DependencyList為空, 則只會在頁面第一次render時觸發
   */
  useEffect(() => {
    console.log('我只會出現一次唷~');
  }, [])
  useEffect(() => {
    console.log('number改變了!');
  }, [number])
  useEffect(() => {
    console.log('number或msg改變了!');
  }, [number, msg])

  const buttonHandler = () => {
    alert("你按了button!")
  }
  const buttonHandler2 = (number) => {
    setNumber(++number)
  }

  return (
    <div>
      {users.map(user => {
        return <Info name={user.name} age={user.age}/>
      })}

      <br />
      <button onClick={buttonHandler}>快按我！</button>
      <button onClick={() => { buttonHandler2(number) }}>加1</button>
      <p>現在數值是{number}</p>

      <Create msg={msg} setMsg={setMsg}/>
      <ul>
        {
          msg.map((m, i) => {
            return <li key={i}>{m}</li>
          })
        }
      </ul>
    </div>
  );
}

export default App;
