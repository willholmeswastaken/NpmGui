import React from 'react'
import { Route, Link } from 'react-router-dom'
import ModuleFinder from '../../components/moduleFinder';

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/search">Search</Link>
    </header>

    <main>
      <Route exact path="/" component={ModuleFinder} />
      <Route exact path="/search" component={ModuleFinder} />
    </main>
  </div>
)

export default App
