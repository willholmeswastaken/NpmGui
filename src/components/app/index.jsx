import React from 'react'
import { Route, Link } from 'react-router-dom'
import ModuleFinder from '../../components/moduleFinder';
import Header from '../header';

const App = () => (
  <div>
  <Header />
    <main style={{ padding: 25 }}>
      <Route exact path="/" component={ModuleFinder} />
      <Route exact path="/search" component={ModuleFinder} />
    </main>
  </div>
)

export default App
