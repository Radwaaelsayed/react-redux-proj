import React,{Component} from 'react';
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore , applyMiddleware} from 'redux';
import reducers from './reducer/index'
import promiseMiddleware from 'redux-promise';

import NavBar from './Components/layout/navbar';
import Footer from './Components/layout/footer';
import Home from './containers/home';
import NotFoundPage from './Components/notfoundpage';
import Contacts from './Components/contacts';
import News from './containers/news';
import Details from './containers/details';

const storeWithMiddleWare = applyMiddleware(promiseMiddleware)(createStore)
  class App extends Component {
    render() {
      return (
        <Provider store={storeWithMiddleWare(reducers)}>
            <div className = "App">
                    <BrowserRouter>
                    <NavBar />
                    <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/contact" component={Contacts}/>
                    <Route path="/news" component={News}/>
                    <Route path="/places/:id" component={Details}/>
                    <Route exact path="/places" component={Home}/>
                    <Route path="*" component={NotFoundPage}/>
                    </Switch>
                    </BrowserRouter>
                    <Footer />
              </div>
        </Provider> 
       
      
  );
  }
}
export default App;
