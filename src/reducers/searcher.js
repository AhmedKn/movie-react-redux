let name='';
let rate;

const searcher = (state = [{name , rate}] , action) =>{
    switch(action.type){
        case 'SEARCH_RATE' : rate = action.rate
         return state = [{name , rate}]
        case 'SEARCH' :name = action.inp
             return state = [{name , rate}]
        default : return state
    }
}

export default searcher;