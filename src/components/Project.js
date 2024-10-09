import React, {Component} from "react";


export default class Project extends Component {
    render() {
        let {title,info,bouton,copi,picture} = this.props.item;

        return(
                    <div className="col m-1">
                        <section className="card text-center">
                            <img src={picture} alt="fresh food" />
                            <div class="card-body">
                                <h5 class="card-title">{title}</h5>
                                <p class="card-text">{info}</p>
                                <button className="btn text-primary border-primary">{bouton}</button>
                            </div>
                            <div className="card-footer text-muted">{copi}</div>
                        </section>
                    </div>

        );
    }
}