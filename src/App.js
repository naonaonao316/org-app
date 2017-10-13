import React, { Component } from 'react';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import './App.css';
import $ from 'jquery';

class App extends Component {
  constructor() {
    super();
    // Data fetching here
/*    var name = "";
    //eslint-disable-next-line
    var api_url = location + "test_api.php";
    $.ajax({
      method: 'post',
      url:api_url,
      data: 'passing data if any',
      success: function(data){
         console.log(data);
         alert(data);
      },
      error: function(err){
         console.log(err);
      }
    });
*/
    this.state = {
      projects: []
    }
  }

  componentWillMount(){
    this.setState({projects: [
      {
        title: "Business Website",
        category: "Web Design"
      },
      {
        title: "Encryption Algorithm",
        category: "Research"
      },
      {
        title: "Gathering Data",
        category: "Data Analytics"
      }
    ]});
  }

  handleAddProject(project) {
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects: projects});
  }

  render() {
    return (
      <div>
        <AddProject addProject={this.handleAddProject.bind(this)}/>
        <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
