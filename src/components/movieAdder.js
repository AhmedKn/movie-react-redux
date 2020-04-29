import React from 'react'
import Modal from 'react-modal'
import { connect } from 'react-redux'
import { opener } from '../actions/modalOpener.js'
import { closer } from '../actions/modalCloser.js'
import { movieadderAct } from '../actions/movieadderAct.js'
import StarRatingComponent from 'react-star-rating-component';
import '../cssFiles/movieAdder.css'



const MovieAdder =(props) =>{
    let inpName;
    let inpDate;
    let inpSrc;
    let rating;
    var k = 5;
    return (
        
        <div>
            <button className='btn-add' onClick={() => props.opener()}>+</button>
            <Modal className='modal' isOpen={props.modalOpener.open}>
                <div className='modal-content'>
                
                    <p className='input-name'>Movie-Name *</p>
                    <input className='input-modal' placeholder='here...' ref={node => (inpName = node)} />
                    <p className='input-name'>Release-date*</p>
                    <input className='input-modal' placeholder='here...' ref={node => (inpDate = node)} />
                    <p className='input-name'>image-Movie*</p>
                    <input className='input-modal' placeholder='here...' ref={node => (inpSrc = node)} />
                   <div className='rating-section'>
                   <p className='input-name'>Rate The Movie*:</p>
                    <StarRatingComponent 
                     name="rate1" 
                     starCount={5}
                     onStarClick={(nextValue) => rating = nextValue}
                     value={rating}                     
                     />
                   </div>
                    <div className='btn-section'>
                        <button className='btn' onClick={ e => {e.preventDefault()
                    if (inpName.value.length <=0){
                        alert("Movie Name is obligatory")
                    }  
                  else if (inpDate.value.length <=0){
                        alert("Movie Release Date is obligatory")
                    }  
                    else if (inpSrc.value.length <=0){
                        alert('Image Is obligatory')
                    }
                    else if (rating===undefined){
                        alert('Rate the Movie')
                    }

                    else if (inpName.value.length >0 && inpDate.value.length>0 && inpSrc.value.length >0){
                        props.adder({
                            inpName : inpName.value ,
                            inpDate : inpDate.value ,
                            inpSrc : inpSrc.value,
                              id : Math.floor(Math.random() * 100) + 1,
                               rating : rating,
                               isOpen:false,
                               isEditable:false
                            }
                            )
                            props.closer();
                            inpSrc.value = '';
                            inpName.value ='';
                            inpDate.value ='';
                            rating = undefined;
                            
                    }
                    }
                        
                        }>ADD</button>
                    <button className='btn' onClick={() => props.closer()}>close</button>
                    </div>
                </div>
            
            </Modal>
        </div>
    )
}



const mapStateToProps = (state) =>({
    modalOpener : state.modalOpener
})

const mapDispatchToProps = dispatch =>{
    return {
        closer : () => dispatch(closer()),
       opener  :() => dispatch(opener()),
       adder : (movie) => dispatch(movieadderAct(movie))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MovieAdder);