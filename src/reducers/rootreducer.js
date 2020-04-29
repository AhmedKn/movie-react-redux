import { combineReducers } from 'redux'
import modalOpener from './modalOpener.js'
import movieadderRed  from './movieadderRed.js'
import searcher from './searcher.js'

const rootReducer = combineReducers({
    modalOpener,movieadderRed,searcher
})

export default rootReducer