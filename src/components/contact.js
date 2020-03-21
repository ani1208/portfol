import React , { Component } from 'react';
import { Grid , Cell , List , ListItem , ListItemContent } from 'react-mdl';
import logo from './61570.jpg';
class contact extends Component  {
    render() {
        return (
           <div className="contact-body">
               <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Anirudh Varadarajan</h2>
                        <img
                            src={logo}
                            alt="avatar"
                            className="avatar-img1"
                            style={{ height: '300px'}}                        
                        />
                        <p style={{paddingTop: '1em'}}> Anirudh is currently working as a Software Engineering Intern at Altair Engineering . He loves to explore new technologies and has a skillset focussed in Programming and Development . He loves Football . Visca El Catalunia</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
    <div className="contact-list">                
 <List>
  <ListItem>
    <ListItemContent style={{fontSize: "25px" , fontFamily: "Anton"}}>
        <i className="fa fa-phone-square" aria-hidden="true"/>
        +91-8754380922</ListItemContent>
  </ListItem>
  <ListItem>
  <ListItemContent style={{fontSize: "25px" , fontFamily: "Anton"}}>
        <i className="fa fa-envelope" aria-hidden="true"/>
        ani1208dh@gmail.com</ListItemContent>
    </ListItem>
</List>
</div>
                    </Cell>
               </Grid>
           </div>
        )
       
    }
}

export default contact;