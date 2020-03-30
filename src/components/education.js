import React , { Component } from 'react';
import  { Grid , Cell } from 'react-mdl';
class Education extends Component {
   render() {
       return(
          <Grid>
              <Cell className="temp" col={4}>
                <p className="temp">{this.props.startYear} - {this.props.endYear}</p>
              </Cell>
              <Cell className="temp" col={8}>
                  <h4 className="temp" style={{marginTop: '0px'}}>{this.props.schoolName}</h4>
                  <p className="temp">{this.props.schoolDescription}</p>
              </Cell>
          </Grid>
       )
   }
}

export default Education;