import React, { Component } from 'react';

// const PortfolioImages = require('../images/portfolio');

import AreWeThereYetImg from '../images/portfolio/awty.png';
import BudgetImg from '../images/portfolio/budget.png';
import DashboardImg from '../images/portfolio/dashboard.png';
import EmployeeImg from '../images/portfolio/employee_directory4.png';
import WorkImg from '../images/portfolio/workDay.png';
import TreasureImg from '../images/portfolio/Treasure_Trove.jpg';
import weWatchImg from '../images/portfolio/weWatchHome1.png';
import sliceImg from '../images/portfolio/Slicecatering.jpg';

const PortfolioImages = {
  AreWeThereYetImg: AreWeThereYetImg,
  BudgetImg: BudgetImg,
  DashboardImg: DashboardImg,
  EmployeeImg: EmployeeImg,
  sliceImg: sliceImg,
  WorkImg: WorkImg,
  TreasureImg: TreasureImg,
  weWatchImg: weWatchImg
}

class Portfolio extends Component {
  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = './images/portfolio/'+projects.image;
        return <div key={projects.title} className="columns portfolio-item">
           <div className="columns portfolio-wrap">
            <a href={projects.url} title={projects.title}>
               <img alt={projects.title} src={PortfolioImages[projects.image]} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{projects.title}</h5>
                     <p>{projects.category}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })
    }
const watch = () => {
  window.location.href="https://github.com/nwreese/WeWatch"
}
const treasure = () => {
  window.location.href="https://github.com/nwreese/Treasure__Trove"
}
const awty = () => {
  window.location.href="https://github.com/nwreese/Are_We_There_Yet"
}
const work = () => {
  window.location.href="https://github.com/nwreese/Workout-Tracker"
}
const schedule = () => {
  window.location.href="https://github.com/nwreese/Work_Day_Scheduler"
}
const employee = () => {
  window.location.href="https://github.com/nwreese/Employee_Directory"
}
const budget = () => {
  window.location.href="https://github.com/nwreese/Workout-Tracker"
}
const slice = () => {
  window.location.href="https://github.com/nwreese/SLICE"
}
    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Check Out Some of My Works.</h1>
            <div className="twelve colums collapsed">
            <button className="we-btn"onClick={watch}>weWatch</button>
            <button className="treasure-btn"onClick={treasure}>Treasure Trove</button>
            <button className="awty-btn"onClick={awty}>Are We There Yet</button>
            <button className="work-btn"onClick={work}>Workout Dashboard</button>
            </div>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projects}
            </div>
            <div>
            <button className="slice-btn"onClick={slice}>SLICE Catering</button>
            <button className="schedule-btn"onClick={schedule}>Work Day Scheduler</button>
            <button className="employee-btn"onClick={employee}>Employee Directory</button>
            <button className="budget-btn"onClick={budget}>Budget Tracker</button>

            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
