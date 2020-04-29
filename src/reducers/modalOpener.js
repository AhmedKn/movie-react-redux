
const modalOpener = (state = {open : false} , action) =>{
    switch(action.type){
        case 'CLOSE' : return{open : false}
        case 'OPEN' : return{open : true}
        default : return state;
    }
}


export default modalOpener;