import {combineReducers} from 'redux';
import CarsReducers from './car';
import carActive from './car-active';

const allReducers = combineReducers ({
    cars: CarsReducers,
    active: carActive
});

export default allReducers;