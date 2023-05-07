import Info from './info'

function App() {
  let number = 0
  const users = [
    { name: "小明", age: 16 },
    { name: "小美", age: 17 },
    { name: "小華", age: 15 },
  ]

  const buttonHandler = () => {
    alert("你按了button!")
  }
  const buttonHandler2 = (number) => {
    alert(`加一了！, 現在數值是${++number}`)
  }

  return (
    <div>
      <h1>這是App.js的h1標籤</h1>

      {users.map(user => {
        return <Info name={user.name} age={user.age}/>
      })}

      <br />
      <button onClick={buttonHandler}>快按我！</button>
      <button onClick={() => { buttonHandler2(number) }}>加1</button>
    </div>
  );
}

export default App;
