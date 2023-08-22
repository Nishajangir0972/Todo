import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1gRbfgUHh3zV0_Y7jU8MTHNOu8Ok4lq8Ylw&usqp=CAU" alt="" />
       <img src="https://t3.ftcdn.net/jpg/02/70/35/00/360_F_270350073_WO6yQAdptEnAhYKM5GuA9035wbRnVJSr.jpg" alt="" />
       
       <h1>Hello Nature</h1>
       <p>Nature, in the broadest sense, is the physical world or universe. "Nature" can refer to the phenomena of the physical world, and also to life in general. The study of nature is a large, if not the only, part of science</p>
      </div>
    

    <label htmlFor="First Name">First Name </label>
<input type="text" /><br />
<label htmlFor="Last Name">Last Name </label>
<input type="text" /><br />
<label htmlFor="Email">Email </label> 
<input type="email" /><br />
<label htmlFor="Number">Number </label>
<input type="text" />


    </>
  )
}

export default App
