import React, {FC} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';


import { RootState } from './store/';
import Search from './components/Search';
import Alert from './components/Alert';
import Weather from './components/Weather';
import { setAlert } from './store/actions/alertActons';
import { setError } from './store/actions/weatherActions';
import Spinners from './components/Spinners';

const App: FC = () => {

  const dispatch = useDispatch();
  const weatherData = useSelector((state: RootState) => state.weather.data);
  const loading = useSelector((state: RootState) => state.weather.loading);
  const error = useSelector((state: RootState) => state.weather.error);
  const alertMessage = useSelector((state: RootState) => state.alert.message);


  return (
    <div className="">
      <Search title='To get forecast, enter city name (for example: Kyiv, New York...) and press the search button'/>
      {loading ?  <Spinners/> : weatherData && <Weather data={weatherData}/> }

      {alertMessage && <Alert message={alertMessage} onClose={() => dispatch(setAlert(''))}/>}
      {error && <Alert message={error} onClose={() => dispatch(setError())} />}

    </div>
  );
}

export default App;
