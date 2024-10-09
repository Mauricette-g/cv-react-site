import React, {Component} from "react";
import { blogData } from "./blogData";
import Blogger from "./blogger";

export default class BlogList extends Component {
    state = {
        blogs:blogData
    };

    render() {
        let {blogs} = this.state;


        return(
            <div className="container">
                <div className="text-center m-5">
                    <h2 className="text-uppercase"> Blog </h2>
                    <p>Retrouvez ici quelques articles sur le développement web.</p>
                    <span className="divider"></span>
                </div>
 
                <div className="row mt-5">
                    
                        {
                            blogs.map(item => {
                                return(
                                    <div className="col-md-4"> 
                                    <Blogger
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