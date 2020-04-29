import React from 'react'
import App2 from './app2'
import Description from './description'
import { Route } from 'react-router-dom'


const App = () =>{
    return (
       <div>
           <Route path='/:id' component={Description} />
          <Route exact path="/" component={App2} />
       </div>
    )
}

export default App;