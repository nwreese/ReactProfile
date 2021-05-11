import React, { Component } from 'react';

// const PortfolioImages = require('../images/portfolio');

import AreWeThereYetImg from '../images/portfolio/awty.png';
import BudgetImg from '../images/portfolio/budget.png';
import DashboardImg from '../images/portfolio/dashboard.png';
import EmployeeImg from '../images/portfolio/employee_directory4.png';
import WorkImg from '../images/portfolio/workDay.png';
import TreasureImg from '../images/portfolio/Treasure_Trove.jpg';
import weWatchImg from '../images/portfolio/weWatchHome1.png';

const PortfolioImages = {
  AreWeThereYetImg: AreWeThereYetImg,
  BudgetImg: BudgetImg,
  DashboardImg: DashboardImg,
  EmployeeImg: EmployeeImg,
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
           <div className="portfolio-wrap">
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

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Check Out Some of My Works.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projects}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
