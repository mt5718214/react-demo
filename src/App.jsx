import Info from './info'

function App() {
  const users = [
    { name: "小明", age: 16 },
    { name: "小美", age: 17 },
    { name: "小華", age: 15 },
  ]
  return (
    <div>
      <h1>這是App.js的h1標籤</h1>

      {users.map(user => {
        return <Info name={user.name} age={user.age}/>
      })}
    </div>
  );
}

export default App;
