import { FETCH_WEATHER_SUCCESS } from '../actions/index';
// eslint-disable-next-line
export default (state = [], action) => {
    // eslint-disable-next-line
    switch (action.type) {
        case FETCH_WEATHER_SUCCESS:
            return [action.payload.data, ...state];
    }

    return state;
}