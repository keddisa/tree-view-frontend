import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import './App.css';

import { connect } from 'react-redux';
import  { getTree } from './actions';

import history from './history';

import Root from './components/root';
import EditFactory from './components/edit-factory';
import DeleteFactory from './components/delete-factory';


class App extends Component {



  render() {
    return (
      <div>
        <Router history={history}>
          <Route path="/" exact component={Root} />
          <Route path="/edit/:id" exact component={EditFactory} />
          <Route path="/delete/:id" exact component = {DeleteFactory} />
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { tree: Object.values(state.tree) };
}

export default connect(mapStateToProps, { getTree })(App);
