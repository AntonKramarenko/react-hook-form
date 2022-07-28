import { useForm } from 'react-hook-form'
import './App.css';

function App() {

  const { register, formState: { errors }, handleSubmit, reset } = useForm({
    mode: 'onBlur'
  })

  const onSubmit = (data) => {
    alert(JSON.stringify(data))
    reset()
  }

  return (
    <div className="App">
      <h1>Hello</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          FirstName
          <input {...register('firstName', {
            required: 'Поле обязательно к заполнению',
            minLength: {
              value: 5,
              message: "Минимум 5 символов"
            }
          })} />
          <div>{errors?.firstName && <p>{errors?.firstName?.message || "Error"}</p>}</div>
        </label>

        <label>
          LastName
          <input {...register('lastName', {
            required: 'Поле обязательно к заполнению',
            minLength: {
              value: 5,
              message: "Минимум 5 символов"
            }
          })} />
          <div>{errors?.lastName && <p>{errors?.lastName?.message || "Error"}</p>}</div>
        </label>
        <input type='submit' />
      </form>
    </div>
  );
}

export default App;
