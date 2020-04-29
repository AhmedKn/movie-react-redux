import React, { Component } from 'react'
import { connect } from 'react-redux'
import StarRatingComponent from 'react-star-rating-component';
import '../cssFiles/display.css'
import { deleteitem } from '../actions/delete'
import { update } from '../actions/update'
import Modal from 'react-modal'
import { edit } from '../actions/edit'
import { Link } from 'react-router-dom'




class Display extends Component{
    constructor(props){
        super(props)
        this.state = {
         todo : '',
         date : '',
         img : '',
         rate : 1
        }
        
    }
    render(){
        let arr = []
let newarr =[]
let rating;


this.props.movieadderRed.map(el => {
    
    arr.push(
        <div key={el.id} className='movie-card'>
                      
        <Modal className='edit-modal' isOpen={el.isOpen}>
        <div className='modal-content'>

<p className='edit-name'>Movie-Name *</p>
<input className='edit-input' placeholder='here...' value={this.state.todo}  onChange={(e) =>  this.setState({todo : e.target.value})} />
<p className='edit-name'>Release-date*</p>
<input className='edit-input' placeholder='here...' value={this.state.date} onChange={(e) =>  this.setState({date : e.target.value})}/>
<p className='edit-name'>image-Movie*</p>
<input className='edit-input' placeholder='here...' value={this.state.img} onChange={(e) =>  this.setState({img : e.target.value})}/>
<div>
<p className='edit-name'>Rate The Movie*:</p>
<StarRatingComponent 
className='edit-rate'
name="rate4" 
starCount={5}
onStarClick={(nextValue) => this.setState({rate : nextValue})}
value={this.state.rate}    

              
/>
<button onClick={() =>{this.props.edit({id :el.id ,todo : this.state.todo, date : this.state.date , img : this.state.img , rating : this.state.rate}); this.props.update(el.id)}}>Save changes</button>
</div>
</div>
        </Modal>
<img className='movie-img' width='200' height='250' alt='' src={el.inpSrc} />
<p className='movie-name'>{el.inpName}</p>
<p className='movie-date'>{el.inpDate}</p>
<StarRatingComponent 
className='stars-rate'
         name="rate2" 
         starCount={5}
         value={el.rating}                     
         /><br/>
<button className='desc-btn'><Link to={`/${el.id}`} className='desc-link'>Description</Link></button>
<div className='btn-section-movie-card'>
<button className='btn-edit' onClick={() =>{this.setState({todo : el.inpName , date : el.inpDate, img:el.inpSrc, rate : el.rating}); this.props.update(el.id)}}>Edit</button>
<button onClick={() => this.props.deleteitem(el.id)} className='btn-remove'>Remove</button>
</div>
</div>
            )
})
if (this.props.searcher[0].name ===''){
    return arr
}
else {
    this.props.movieadderRed.map(el => {
        if (el.inpName.toUpperCase().includes(this.props.searcher[0].name.toUpperCase()) && el.rating >= this.props.searcher[0].rate || el.inpName.toUpperCase().includes(this.props.searcher[0].name.toUpperCase()) && this.props.searcher[0].rate === undefined){
            newarr.push(
                <div key={el.id} className='movie-card'>
                      
                            <Modal className='edit-modal' isOpen={el.isOpen}>
                            <div className='modal-content'>
                
                <p className='edit-name'>Movie-Name *</p>
                <input className='edit-input' placeholder='here...' value={this.state.todo}  onChange={(e) =>  this.setState({todo : e.target.value})} />
                <p className='edit-name'>Release-date*</p>
                <input className='edit-input' placeholder='here...' value={this.state.date} onChange={(e) =>  this.setState({date : e.target.value})}/>
                <p className='edit-name'>image-Movie*</p>
                <input className='edit-input' placeholder='here...' value={this.state.img} onChange={(e) =>  this.setState({img : e.target.value})}/>
               <div>
               <p className='edit-name'>Rate The Movie*:</p>
                <StarRatingComponent 
                className='edit-rate'
                 name="rate4" 
                 starCount={5}
                 onStarClick={(nextValue) => this.setState({rate : nextValue})}
                 value={this.state.rate}    
                  
                                  
                 />
                 <button onClick={() =>{this.props.edit({id :el.id ,todo : this.state.todo, date : this.state.date , img : this.state.img , rating : this.state.rate}); this.props.update(el.id)}}>Save changes</button>
               </div>
               </div>
                            </Modal>
                <img className='movie-img' width='200' height='250' alt='' src={el.inpSrc} />
                <p className='movie-name'>{el.inpName}</p>
                <p className='movie-date'>{el.inpDate}</p>
                <StarRatingComponent 
                className='stars-rate'
                             name="rate2" 
                             starCount={5}
                             value={el.rating}                     
                             /><br/>
            <button className='desc-btn'><Link to={`/${el.id}`} className='desc-link'>Description</Link></button>
            <div className='btn-section-movie-card'>
                <button className='btn-edit' onClick={() =>{this.setState({todo : el.inpName , date : el.inpDate, img:el.inpSrc, rate : el.rating}); this.props.update(el.id)}}>Edit</button>
                <button onClick={() => this.props.deleteitem(el.id)} className='btn-remove'>Remove</button>
            </div>
            </div>
            )
        }
    })
    return newarr;
}

    }
    
}
const mapStatetTProps = state =>({
    movieadderRed : state.movieadderRed,
    searcher : state.searcher
    })
    
    const mapDispatchToProps = dispatch =>{
        return {
        deleteitem :(id) => dispatch(deleteitem(id)),
        update :(id) => dispatch(update(id)),
        edit : (data) => dispatch(edit(data))
        }
    }



export default connect(mapStatetTProps,mapDispatchToProps)(Display);


