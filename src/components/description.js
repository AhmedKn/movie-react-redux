import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import StarRatingComponent from 'react-star-rating-component';
import { Link } from 'react-router-dom'
import '../cssFiles/description.css'


class Description extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            id : this.props.match.params.id
        }
    }
    render(){
   const targetMovie = this.props.movieadderRed.find(el => el.id == this.state.id) 
   const { inpName , inpDate , inpSrc , rating, id} = targetMovie
   return (
    <div>
        <div className='navbar-desc'>
    <button className='btn-desc-home'><Link to='/'><i className='fa fa-home'></i></Link></button>
    <p><Link to='/' className='site-name'>Movies House</Link></p>
    </div>
       <div className='descrip-movie'>
           
           {targetMovie ? <div className='descrip-movie' key={id}>
           <img src={inpSrc} width='300' height='400' />
           <p className='name-desc'>{inpName}</p>
           <p className='name-desc'>{inpDate}</p>
           <StarRatingComponent 
                     name="rate1" 
                     starCount={5}
                     value={rating}                     
                     />
       </div> : <Redirect to='/'/>}
       </div>
    
    </div>   
   )
    }
}

const mapStateToProps = state =>({
    movieadderRed : state.movieadderRed
})

export default connect(mapStateToProps)(Description)
