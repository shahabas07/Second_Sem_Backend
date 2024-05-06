import React from "react"

function App() {
fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => response.json())
.then (data => console.log(data))
.catch(error => console.error(error))

    return (
    <>
      <h1>backend dev</h1>
      <h2>open console to see the fetch data</h2>
    </>
  )
}

export default App
