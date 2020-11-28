import React , {useEffect} from 'react';
import {Card,Container} from 'react-bootstrap'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getNews} from '../action/action'

 const News = (props) => {
   

useEffect(()=>{
 props.getNews()
})

  
  const renderBody = ({news})=>{
    if(news)
    return news.map((newelem)=>{
      return(
        <Card className="mt-2">
        <Card.Header>{newelem.newsTitle}</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>
             {newelem.newsText}
            </p>
          </blockquote>
        </Card.Body>
      </Card>
      )
    })

  }
     return(
      <Container className="my-5">

      {renderBody(props)}
      
      </Container>

 )}



 export default connect(
   (state)=>{
     console.log(state)
     return {
      news : state.place.news
     }
   },(dispatch)=>{
     return bindActionCreators({getNews},dispatch)
   }
 )(News) ;