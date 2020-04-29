import React from 'react'
import MovieAdder from './movieAdder'
import Display from './display.js'
import '../cssFiles/app.css'
import Search from './search.js'



const App2 = () =>{
    return (
       <div>
           <Search />
            <div className='movie-section'>
            <Display />
            <MovieAdder />
        </div>
       </div>
    )
}

export default App2;