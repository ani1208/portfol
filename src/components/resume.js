import React , { Component } from 'react';
import { Grid , Cell } from 'react-mdl';
import logo from './61570.jpg';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class resume extends Component {
    render() {
        return (
            <div>
            <Grid className="rescol">
                <Cell className="resume-pic" col={4}>
                <div style={{textAlign: 'center'}}>
                        <img
                           src={logo}
                           alt="avatar"
                           className="avatar-img1"
                           style={{paddingTop: '1.5em' , height: '350px' , width: '70%'}}
                        />
                </div>
                <h2 className="ani" style={{paddingTop: '1em'}}>Anirudh Varadarajan</h2>
                <h4 className="ani">Graduate Engineer</h4>
                <hr style={{paddingTop: '1em' , borderTop: '2px solid #D3D3D3' , width: '50%'}}/>
                <p className="ani">Interactive learner with a strong niche on exploring new technologies with a skillset focused on programming , development and management . 
                   Interested in working on product development and management. Passionate about web designing and development. 
                   Skilled at C, C++ , Communication.
                   Intermediate at Python , Microsoft Excel , JavaScript , Scripting (Tcl/Tk)</p>
                <hr style={{paddingTop: '0.5em' , borderTop: '2px solid #D3D3D3' , width: '50%'}}/>
                <h6 className="ani1">Address</h6>
                <p className="ani">Udayam Apartments - B1 , Balaji Nagar, Anakaputhur , Ch-70</p>
                <h6 className="ani1">Phone</h6>
                <p className="ani1">+91-8754380922</p>
                <h6 className="ani1">Email ID</h6>
                <p className="ani1">ani1208dh@gmail.com</p>
                <hr style={{paddingTop: '1em' , borderTop: '2px solid #D3D3D3' , width: '50%'}}/>
                </Cell>
                <Cell className="resume-right-col" col={8}>
                <h2>Education</h2>
                
                <Education
                startYear={2014}
                endYear={2016}
                schoolName={"Srimathi Sundaravalli Memorial School"}
                schoolDescription={"Computer Science"}
                /> 
                <Education
                startYear={2016}
                endYear={2020}
                schoolName={"SASTRA Deemed to be University"}
                schoolDescription={"Aeronautics"}
                />     
                <hr style={{paddingTop: '1em' , borderTop: '3px solid #e22947' , width: '90%'}}/>

                <h2>Experience</h2>
                <Experience
                startYear={2020}
                endYear={"Present"}
                schoolName={"Student Intern"}
                schoolDescription={"Altair Engineering Pvt. Ltd"}
                
                />

                <hr style={{paddingTop: '1em' , borderTop: '3px solid #e22947' , width: '90%'}}/>

                <h2>Skills</h2>
                <Skills 
                 skill={"C Lang"}
                 progress={100}
                 />

                <Skills 
                 skill={"C++ Lang"}
                 progress={90}
                 />

                <Skills 
                 skill={"HTML , CSS"}
                 progress={100}
                 />

                <Skills 
                 skill={"Python"}
                 progress={75}
                 />

                <Skills 
                 skill={"Javascript"}
                 progress={70}
                 />

                <Skills 
                 skill={"React"}
                 progress={50}
                 />

                <Skills 
                 skill={"My SQL"}
                 progress={70}
                 />

                <Skills 
                 skill={"Tcl / Tk "}
                 progress={80}
                 />

                <Skills 
                 skill={"Scripting"}
                 progress={50}
                 />
                </Cell>
	        </Grid>

            </div>
        )    
    }
}

export default resume;