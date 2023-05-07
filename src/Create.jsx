import { useState } from "react"

const Create = ({ msg, setMsg }) => {
  const [input, setInput] = useState("")

  const submitHandler = (e) => {
    e.preventDefault()
    if(!input.trim()) return

    setMsg([...msg, input])
    setInput("")
  }
  const changeHandler = (e) => {
    setInput(e.target.value)
  }

  return (
    <form>
      <input onChange={changeHandler} value={input} type="text" />
      <button onClick={submitHandler}>Submit</button>
    </form>
  )
}

export default Create