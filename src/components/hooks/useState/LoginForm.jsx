import './index.css'
import { useState } from 'react'

export const LoginForm = () => {
  //* 1st way to manage multiple input fields:-
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault()
    // const loginData = {
    //     username,
    //     password,
    // };
    // console.log(loginData);
    console.log(user)
  }

  //* Best way to manage multiple input fields:-
  const [user, LoginUser] = useState({
    username: '',
    password: '',
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target
    LoginUser(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className='container'>
      <div className='card'>
        <h1>Login Form</h1>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            name='username'
            required
            autoComplete='off'
            value={user.username}
            // onChange={e => setUsername(e.target.value)}
            onChange={handleInputChange}
          />

          <label htmlFor='password'>password</label>
          <input
            type='password'
            name='password'
            required
            autoComplete='off'
            value={user.password}
            // onChange={e => setPassword(e.target.value)}
            onChange={handleInputChange}
          />

          <button type='submit'>Login</button>
        </form>
      </div>
    </div>
  )
}
