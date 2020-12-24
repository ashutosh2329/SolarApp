import React from 'react';
import '../css/App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

function App() {
  const sections = [
    { title: 'Technology', url: '#' },
    { title: 'Comparison', url: '#' },
    { title: 'Solar Energy', url: '#' },
    { title: 'Inverter', url: '#' },
    { title: 'Battery', url: '#' },
    { title: 'Graphs', url: '#' },
    { title: 'Science', url: '#' },
    { title: 'Health', url: '#' },
    { title: 'Style', url: '#' },
    { title: 'Travel', url: '#' },
  ];
  const sidebar = {
    title: 'About',
    description:
      'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
    archives: [
      { title: 'March 2020', url: '#' },
      { title: 'February 2020', url: '#' },
      { title: 'January 2020', url: '#' },
      { title: 'November 1999', url: '#' },
      { title: 'October 1999', url: '#' },
      { title: 'September 1999', url: '#' },
      { title: 'August 1999', url: '#' },
      { title: 'July 1999', url: '#' },
      { title: 'June 1999', url: '#' },
      { title: 'May 1999', url: '#' },
      { title: 'April 1999', url: '#' },
    ],
    social: [
      { name: 'GitHub', icon: GitHubIcon },
      { name: 'Twitter', icon: TwitterIcon },
      { name: 'Facebook', icon: FacebookIcon },
    ],
  };
  return (
    <div>
       <Header title="Solar App" sections={sections} />
       <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
       />
    </div>
      

  );
}

export default App;
