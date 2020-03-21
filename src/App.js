import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/main';
import {Layout , Header , Navigation , Drawer , Content} from 'react-mdl';
import { Link } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: "none" , color: "white"}}
        to="/">My Portfolio</Link>} scroll>
            <Navigation className="n1">
                <Link  to="/resume">Resume</Link>
                <Link  to="/aboutme">About</Link>
                <Link  to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer className="header-color" title="My Portfolio">
            <Navigation className="n1">
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
    </div>
  );
}

export default App;
