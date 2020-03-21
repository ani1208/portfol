import React , { Component } from 'react';
import { Grid , Card, CardTitle, CardText, CardActions , Button , CardMenu , IconButton ,  Cell , List , Icon, ListItem , ListItemAction, ListItemContent } from 'react-mdl';
import { withRouter } from 'react-router-dom';
class about extends Component  {
    render() {
        return (
            <div className="about-body">
               <Grid className="about-grid">
                    <Cell col={6}>
                    <h2>Workshops / Certifications</h2>
                    <div className="about-list">
                    <List style={{width: '650px'}}>
  <ListItem threeLine>
    <ListItemContent style={{fontSize: "20px" , fontFamily: "Oxygen" , color: "white"}} subtitle="Udemy Certification"><i className="fa fa-bandcamp" aria-hidden="true"/>Python 3 bootcamp</ListItemContent>
    <ListItemAction>
      <a href="https://www.udemy.com/certificate/UC-9SUUKMAU/"><i className="fa fa-link" aria-hidden="true"/></a>
    </ListItemAction>
  </ListItem>
  <ListItem threeLine>
    <ListItemContent style={{fontSize: "20px" , fontFamily: "Oxygen" , color: "white"}} subtitle="Udemy Certification"><i className="fa fa-bandcamp" aria-hidden="true"/>Web Development Essentials
   </ListItemContent>
    <ListItemAction>
      <a href="https://www.udemy.com/certificate/UC-FY0OLJAF/"><i className="fa fa-link" aria-hidden="true"/></a>
    </ListItemAction>
  </ListItem>
  <ListItem threeLine>
  <ListItemContent style={{fontSize: "20px" , fontFamily: "Oxygen" , color: "white"}} subtitle="Global Organisation for Divinity"><i className="fa fa-bandcamp" aria-hidden="true"/>Youth Leadership Awareness Programme
   </ListItemContent>
   <ListItemAction>
      
    </ListItemAction>
  </ListItem>

  <ListItem threeLine>
  <ListItemContent style={{fontSize: "20px" , fontFamily: "Oxygen" , color: "white"}} subtitle="Emurgo Academy"><i className="fa fa-bandcamp" aria-hidden="true"/>Block Chain Workshop 
   </ListItemContent>
   <ListItemAction>
      
    </ListItemAction>
  </ListItem>

  <ListItem threeLine>
  <ListItemContent style={{fontSize: "20px" , fontFamily: "Oxygen" , color: "white"}} subtitle="Altair Engineering Pvt.Ltd"><i className="fa fa-bandcamp" aria-hidden="true"/> Software Engineer Intern - SWAT  </ListItemContent>
   <ListItemAction>
      
    </ListItemAction>
  </ListItem>
</List>
</div>
                    </Cell>
                    <Cell col={6}>
                      <h2>Projects</h2>  
                      <Card className="card1" shadow={0} style={{width: '512px', margin: 'auto'}}>
    <CardTitle className="cardd" style={{color: '#000000', height: '176px', background: 'url(http://getwallpapers.com/wallpaper/full/1/f/d/491106.jpg) center / cover'}}>Project_1_Portfolio</CardTitle>
    <CardText>
            This webpage was made and deployed to github as a assignment task . 
            This webpage is built using HTML , CSS , Javascript . This was my first Project .
       </CardText>
    <CardActions border>
        <Button colored><a href="https://ani1208.github.io/">Visit</a></Button>
    </CardActions>
</Card>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default about;