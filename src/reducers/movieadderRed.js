const movieadderRed = (state =[{
        inpName : 'Fight Club' ,
        inpDate : '1999' ,
        inpSrc : 'https://i.pinimg.com/originals/78/03/cd/7803cd8f90fd5ae6f39c91d7274bead1.jpg',
          id : 1,
           rating : 5,
           isOpen:false,
            isEditable:false
        },{
            inpName : 'Snatch' ,
            inpDate : '2000' ,
            inpSrc : 'https://fr.web.img4.acsta.net/pictures/15/11/05/12/34/040210.jpg',
              id : 2,
               rating : 4,
               isOpen:false,
                               isEditable:false
            },{
                inpName : 'V For Vendetta' ,
                inpDate : '2005' ,
                inpSrc : 'https://i.pinimg.com/originals/02/ae/33/02ae3383c4cba235115318dac7769713.jpg',
                  id : 3,
                   rating : 5,
                   isOpen:false,
                               isEditable:false
                },{
                    inpName : 'WALL-E' ,
                    inpDate : '2008' ,
                    inpSrc : 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/WALL-Eposter.jpg/220px-WALL-Eposter.jpg',
                      id : 4,
                       rating : 4,
                       isOpen:false,
                               isEditable:false
                    }
    ] , action) =>{
    switch(action.type){
        case 'ADD_MOVIE' : return [...state , action.movie]
        case 'DELETE' : return state = state.filter(el => el.id!==action.id)
        case 'UPDATE' : return state.map(el => el.id === action.id? {...el , isOpen : !el.isOpen} : el); 
        case 'EDIT' :return state.map(el =>el.id === action.data.id? {...el ,inpName : action.data.todo , inpDate : action.data.date , inpSrc: action.data.img , rating : action.data.rating }:el )
        default : return state
    }
}

export default movieadderRed;


