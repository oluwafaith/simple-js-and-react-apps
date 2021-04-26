import React, { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{display: "flex", alignItems:"center", justifyContent:"center", marginTop:"100px"}}>
        
          <div style={{fontSize:"20px", padding:"20px", marginTop:"20px", backgroundColor:"pink", borderRadius: "10px"}} onClick={() => setCount((count) => count + 1)}>
            increment
          </div>
        
        <div style={{margin:"40px 20px 20px 20px", fontSize:"20px"}}>{count}</div>
        
          <div style={{fontSize:"20px", padding:"20px", marginTop:"20px", backgroundColor:"pink", borderRadius: "10px"}} onClick={() => setCount((count) => count - 1)}>
          decrement
          </div>
    </div>
  )
}

export default App
