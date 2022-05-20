import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { users } from "../../database/users"
import './login.css'

export function Login() {
  console.log("se renderiza el login");
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm();

  useEffect(() => {
    const login = sessionStorage.getItem("SSLOGIN_1");
    
    if(!(login === null)) navigate("/")
  }, [])

  const handleOnSubmit = (data) => {
    // const { password, username } = data
    const { username, password } = data
    console.log(password);
    const userFinded = users.find(user => user.username === username && user.password === password)
    console.log(userFinded);
    sessionStorage.setItem("SSLOGIN_1", JSON.stringify(userFinded))
    navigate("/")
  }

  return (
    <div className='LoginWrapper'>
      <div className="Login">
        <h2 className='Login__title'>Inter to MyGifs</h2>

        <form onSubmit={handleSubmit(handleOnSubmit)} className='Login__form'>
          <label htmlFor="user" className='Login__label'>
            Username: 
            <input 
              type="text"
              id="user" 
              className='Login__input'
              {...register("username", { required: true })}/>
          </label>
          {errors.username?.type === 'required' && <p>Username is required!</p>}
          
          <label htmlFor="password" className='Login__label'>
            Password:
            <input
              type="password"
              id="password" 
              {...register("password", { required: true })}/>
          </label>
          {errors.password?.type === 'required' && <p>Password is required!</p>}
          
          <button type="submit" className='Login__submit'>
            Log in
          </button>
        </form>
      </div>
    </div>
  )
}