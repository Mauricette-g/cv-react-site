import React, {Component} from "react";
import { projectdata } from "./projectdata";
import Project from "./Project";

export default class ProjectList extends Component {
    state = {
        projects:projectdata
    };

    render() {
        let {projects} = this.state;


        return(
            <div className="container">
                <div className="text-center m-5">
                    <h2> PORTFOLIO </h2>
                    <p>Voici quelques-unes de mes réalisations</p>
                    <span className="divider"></span>
                </div> 
                <div className="row mt-5">
                    
                        {
                            projects.map(item => {
                                return(
                                    <div className="col-md-4"> 
                                    <Project
                                       key={item.id}
                                       item={item}
                                />
                                </div>
                            )
                        })
                    }

 

                </div>
            </div>

        );
    }
}