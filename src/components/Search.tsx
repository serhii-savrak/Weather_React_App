import React, { FC, FormEvent, useState } from "react";
import { useDispatch } from 'react-redux';
import { setAlert } from '../store/actions/alertActons';
import { getWeather, setLoading } from '../store/actions/weatherActions';


interface SearchProps {
  title: string;
}

const Search: FC<SearchProps> = ({title}) => {

  const dispatch = useDispatch();
  const [city, setCity] = useState('');

  const changeHandler = (e: FormEvent<HTMLInputElement>) => {
    setCity(e.currentTarget.value)
  }

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(city.trim() === '') {
      return dispatch(setAlert('The city is required!'))
    }

    dispatch(setLoading())
    dispatch(getWeather(city));
    setCity('');
  }

  return (
<div className="hero">
  <div className="hero__body">
    <div className="container">
      <h1 className="hero__title">{title}</h1>

      <form onSubmit={submitHandler}>
      <div className="d-flex flex-column align-items-center">

        <input type="text"
        className="form-control mb-2"
        placeholder="Enter city name"
        style={{maxWidth: '300px'}}
        value={city}
        onChange={changeHandler}
         />
         <button className="btn btn-primary" style={{maxWidth: '300px', margin: '0 auto'}}>Search</button>

         </div>
      </form>
    </div>
  </div>
</div>
  )
}

export default Search;
