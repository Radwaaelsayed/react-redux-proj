import React  from 'react';
import {Card,Container} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {getPlaceDetails} from '../action/action'


 class Details extends React.Component{
   state = {
     placeInfo : []
   }
     
  
   componentDidMount () {
     this.props.getPlaceDetails(this.props.match.params.id)
    }

    renderBody({placeDetails}){
      if(placeDetails)
      
        return (
          <Card  className="my-5 text-center border-0" item={placeDetails.id} key={placeDetails.id}>
          <Card.Img variant="top" src=".././images/map.png" height={300} />
           <Card.Body>
             <Card.Text>
             <h5 className="text-primary">{placeDetails.headerTitle}</h5>
             <hr className="text-center" width={65}></hr>
             <p>
             {placeDetails.description}
             </p>
             </Card.Text>
            </Card.Body>
          </Card>
        )
      
    }
    render(){
            return(
              <Container >
                {this.renderBody(this.props)}
              </Container>
            )
            }    
    
    }
   
 export default connect (
   (state)=>{
     return{
       placeDetails : state.place.details
     }
   },(dispatch)=>{
     return bindActionCreators({getPlaceDetails},dispatch)
   }
 )(Details);    