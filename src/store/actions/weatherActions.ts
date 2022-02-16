import { REACT_APP_API_KEY } from './../../variables';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { WeatherAction, WeatherData, WeatherError, GET_WEATHER, SET_LOADING, SET_ERROR } from '../types';

export const getWeather = (city: string): ThunkAction<void, RootState, null, WeatherAction> => {
  return async dispatch => {
    try {
      console.log(REACT_APP_API_KEY)
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${REACT_APP_API_KEY}`);

      if(!res.ok) {
        const resData: WeatherError = await res.json();
        throw new Error(resData.message)
      }

      const resData: WeatherData = await res.json();

      setTimeout(() => {
        dispatch({
          type: GET_WEATHER,
          payload: resData
        });
      }, 3000)


    } catch(err: any) {

      dispatch({
        type: SET_ERROR,
        payload: err.message,
      })
    }
  }
}

export const setLoading = (): WeatherAction => {
  return {
    type: SET_LOADING
  }
}

export const setError = (): WeatherAction => {
  return {
    type: SET_ERROR,
    payload: ''
  }
}
