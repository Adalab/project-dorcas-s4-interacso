import React from "react";

class ProjectDetailBar extends React.Component {
  constructor(props){
    super(props);
  }
  
  
  componentDidMount() {
    this.props.retrieveFromApi("projects/650687808730806").then(apiResponse => {
      this.props.updateState({projectHours: apiResponse [0]})
    });
  }

  render() {
    const hours = this.props.projectHours
    return (
      <div className= "detailed-projects__statistics--container">
        <div className= "statistics__data project__progress">
          <div className= "project-progress__percentage">
            <div className= "data__number"><p>55%</p></div>
            <div className= "data__tags"><p>progreso</p></div>
          </div>
          <div className= "project-progress__integer">
            <p className= "progress__integer--completed">550/1000</p>
          </div>
        </div>
        <div className= "statistics__data project__hours">
          <div className= "data__number"><p>{hours.total}</p></div>
          <div className= "data__tags"><p>horas</p></div>
        </div>
        <div className= "statistics__data project__hours--week">
          <div className= "data__number"><p>50</p></div>
          <div className= "data__tags"><p>horas semana</p></div>
        </div>
        <div className= "statistics__data project__commits">
          <div className= "data__number"><p>1800</p></div>
          <div className= "data__tags"><p>commits</p></div>
        </div>
      </div>
    );
  }
}

export default ProjectDetailBar;