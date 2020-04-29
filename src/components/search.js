import React from 'react'
import { connect } from 'react-redux'
import StarRatingComponent from 'react-star-rating-component';
import { search } from '../actions/search.js'
import { search2 } from '../actions/search.js'
import '../cssFiles/search.css'
import { Link } from 'react-router-dom'



const Serach = (props)=>{
    let input;
    let rating;
    return (
        <form onKeyUp={() => props.search(input.value)} onKeyDown={() => props.search(input.value)} onClick={() => props.search2(rating)}>
            <div className='search-section'>
            <button className='btn-home'><Link to='/'><i class="fa fa-home" aria-hidden="true"></i></Link></button>
            <p className='name-site'><Link to='/' className='name-sites' >Movies House</Link></p>
            <StarRatingComponent 
            className='rate-search'
                     name="rate3" 
                     starCount={5}
                     onStarClick={(nextValue) => rating = nextValue}
                     value={rating}                     
                     />
            <input className='search-input' placeholder='Search...'  ref={(node) =>(input = node)} />
        </div>
        </form>
    )
}

const mapDispatchToProps = dispatch =>{
    return {
      search :(input) => dispatch(search(input)),
      search2 : (rating) => dispatch(search2(rating))
    }
}

export default connect(null ,mapDispatchToProps)(Serach);

