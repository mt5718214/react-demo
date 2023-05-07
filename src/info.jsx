const Info = (props) => {
  return (
    <div>
      <h2>這是{props.name}的Info</h2>
      <li>username: {props.name}</li>
      <li>age: {props.age}</li>
    </div>
  )
}

export default Info