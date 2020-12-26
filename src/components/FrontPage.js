import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import post1 from './blog-post.1.md';
import main1 from '../images/main1.jpg';
// import post2 from './blog-post.2.md';
// import post3 from './blog-post.3.md';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  { title: 'History', url: '/Hpage' },
  { title: 'Design', url: '/Dpage' },
  { title: 'Principle', url: '/Ppage' },
  { title: 'Images', url: '/Ipage' },
  { title: 'Coversion', url: '/Cpage' },
  { title: 'Feedback', url: '/Fpage' },
  { title: 'Comparison', url: '/Copage' },
  { title: 'Graph', url: '/Gpage' },
];

const mainFeaturedPost = {
  title: 'SolarApp',
  description:
    "It is Virtual interaction of User and community for better growth of solar system and Solar Energy. Basically this app helps in the conversion of Relative KWh energy to corresponding Pv area. ",
  image: 'https://source.unsplash.com/random',
  imgText: 'main image description',
  linkText: 'Continue reading…',
};


const featuredPosts = [
  {
    title: 'Solar Energy in "2020"',
    date: 'Dec 12',
    description:'We estimate that total global use of renewable energy will rise by about 1% in 2020. Despite supply chain disruptions that have paused or delayed activity in several key regions, the expansion of solar, wind and hydro power is expected to help renewable electricity generation to rise by nearly 5% in 2020.'.substring(0,200) + '....',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
  {
    title: 'Solar Radiation',
    date: 'Nov 11',
    description:
      'Solar radiation is radiant energy emitted by the sun from a nuclear fusion reaction that creates electromagnetic energy. The spectrum of solar radiation is close to that of a black body with a temperature of about 5800 K.'.substring(0,200) + '....',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
];

const posts = [post1];

const sidebar = {
  title: 'Solar Energy',
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

export default function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="SolarApp" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="From the firehose" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer title="Footer" description="Something here to give the footer a purpose!" />
    </React.Fragment>
  );
}