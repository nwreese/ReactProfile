import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  getResumeData(){
    // $.ajax({
    //   url:'./resumeData.json',
    //   dataType:'json',
    //   cache: false,
    //   success: function(data){
      const data = {
        "main": {
          "name": "Nick Reese",
          "occupation": "Full Stack Web Developer",
          "description": "I am a musician currently enrolled in the Full Stack Web Development boot camp at Case Western Reserve University, powered by Trilogy",
          "image": "profilePic.jpg",
          "bio": "I am comfortable using Node, Express, JavaScript, API's, AJAX, HTML, CSS, React, Mongo, MySQL, PWA's and Handlebars. In my free time I enjoy writing and performing music live, both solo and with a band. I like to go kayaking, hiking and also enjoy shooting photos with my Polaroid. I am also a dog dad to a cockapoo named Lamb.",
          "contactmessage": "Please contact me via email or phone.",
          "email": "nwreese@kent.edu",
          "phone": "330-388-4965",
          "address": {
            "street": "(378 E Cassell Ave)",
            "city": "(Barberton)",
            "state": "(Ohio)",
            "zip": "(44203)"
          },
          "website": "https://github.com/nwreese",
          "resumedownload": "https://docs.google.com/document/d/1wqsUhS8Y8reuFTAp2vfBLORTttH04u9yGSMa9J0HQaQ/edit?usp=sharing",
          "social": [
            {
              "name": "linkedin",
              "url": "https://www.linkedin.com/in/nick-reese-201127205/",
              "className": "fa fa-linkedin"
            },
            {
              "name": "github",
              "url": "http://github.com/nwreese",
              "className": "fa fa-github-square"
            },
            {
              "name": "instagram",
              "url": "http://instagram.com/walkinshred",
              "className": "fa fa-instagram"
            },
            {
              "name": "spotify",
              "url": "https://open.spotify.com/artist/4GGXD4wkhELLmPA3sTKHDD?si=CVk6_7aoRjqmgymXTp_oEQ",
              "className": "fa fa-volume-up"
            },
            {
              "name": "bandcamp",
              "url": "https://coupdegraceband.bandcamp.com/",
              "className": "fa fa-headphones"
            }
          ]
        },
        "resume": {
          "skillmessage": "Junior Full Stack Web Developer looking to grow and expand my coding skills",
          "education": [
            {
              "school": "Case Western Reserve University",
              "degree": "Full Stack Web Development",
              "graduated": "May 2021",
              "description": "Certificate, Full Stack Web Development"
            },
            {
              "school": "Kent State University",
              "degree": "Psychology",
              "graduated": "",
              "description": "Started in nursing and then switched to psychology. Still need 30 credit hours to finish."
            }
          ],
          "work": [
            {
              "company": "On Call Catering",
              "title": "Cold foods manager",
              "years": "March 2014 - March 2020",
              "description": "Was responsible for prep as well as cold food storage and ordering."
            }
                 ],
          "skills": [
            {
              "name": "Git",
              "level": "70%"
            },
          
            {
              "name": "ReactJs",
              "level": "75%"
            },
            {
              "name": "CSS",
              "level": "50%"
            },
            {
              "name": "HTML5",
              "level": "80%"
            },
            {
              "name": "MySQL",
              "level": "50%"
            },
            {
              "name": "MongoDB",
              "level": "80%"
            }
          ]
        },
        "portfolio": {
          "projects": [
            {
              "title": "Treasure Trove",
              "category": "App designed for treasure hunters to save the locations of their finds.",
              "image": "TreasureImg",
              "url": "https://github.com/nwreese/Treasure__Trove"
            },
            {
              "title": "Are We There Yet?",
              "category": "Travel planning app to help friends organize and plan ahead.",
              "image": "AreWeThereYetImg",
              "url": "https://github.com/nwreese/Are_We_There_Yet"
            },
            {
              "title": "Workout Tracker",
              "category": "Allows user to view and track threir daily workouts",
              "image": "DashboardImg",
              "url": "https://github.com/nwreese/Workout-Tracker"
            },
            {
              "title": "Work Day Scheduler",
              "category": "Allows user to save events in each hour with colors changing depending on past, present, future.",
              "image": "WorkImg",
              "url": "https://github.com/nwreese/Work_Day_Scheduler"
            },
            {
              "title": "Employee Directory",
              "category": "A React based employee directory allowing user to sort names and emails alphabetically.",
              "image": "EmployeeImg",
              "url": "https://nwreese.github.io/Employee_Directory/"
            },
            {
              "title": "Budget Tracker",
              "category": "An online/offline budget tracker app.",
              "image": "BudgetImg",
              "url": "https://github.com/nwreese/Budget_Tracker"
            }
          ]
        },
        "testimonials": {
          "testimonials": [
            {
              "text": "",
              "user": ""
            },
            {
              "text": "",
              "user": ""
            }
          ]
        }
      }
      
        this.setState({resumeData: data});
    //   }.bind(this),
    //   error: function(xhr, status, err){
    //     console.log(err);
    //     alert(err);
    //   }
    // });
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main}/>
        <Resume data={this.state.resumeData.resume}/>
        <Portfolio data={this.state.resumeData.portfolio}/>
        <Contact data={this.state.resumeData.main}/>
        <Footer data={this.state.resumeData.main}/>
      </div>
    );
  }
}

export default App;
