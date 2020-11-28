import React , {Component} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {getPlaceInfo} from '../action/action'
import CardModel from '../Components/card';
import {CardColumns, Container, Row   } from 'react-bootstrap';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }



    componentDidMount() {
        this.props.getPlaceInfo()
        console.log(this.props)
    }

    renderBody({places_list}){
        console.log(places_list)
        if(places_list){
          return  places_list.map((place)=>{
                return <CardModel key={place.id} place={place}/>
            })
        }
    }
    render() { 
        console.log(this.props)
        return (
                  <CardColumns className="mt-5 container">
                      
                      {this.renderBody(this.props)}
                      
                      </CardColumns>

                
          );
    }
}
 

export default connect(
    (state)=>{
        console.log(state)
        return{
            places_list : state.place.list
        }
    }
    ,(dispatch)=>{
        return bindActionCreators({getPlaceInfo},dispatch)
    }
)(Home);