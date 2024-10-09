import React, {Component} from "react";
import { ServiceData } from "./ServiceData";
import Services from "./Services";

export default class ServiceList extends Component {
    state = {
        services:ServiceData
    };

    render() {
        let {services} = this.state;


        return(
            <div className="container">
                <div className="text-center m-5">
                    <h2>SERVICES</h2>
                    <p>Voici quelques-unes de mes réalisations</p>
                    <span className="divider"></span>
                </div> 
                <div className="row mt-5">
                    
                        {
                            services.map(item => {
                                return(
                                    <div className="col-md-4"> 
                                    <Services
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