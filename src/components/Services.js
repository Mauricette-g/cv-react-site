import React, {Component} from "react";


export default class Services extends Component {
    render() {
        let {title,info,icone} = this.props.item;

        return(
                    <div className="col m-1">
                        <section className="card text-center">
                            <div className="mt-3 bg-primary">
                               {icone.map(
                                icone => <i className={icone} key={icone}></i>
                               )}
                            </div>
                            
                            <div class="card-body">
                                <h5 class="card-title">{title}</h5>
                                <p class="card-text">{info}</p>

                            </div>
                        </section>
                    </div>

        );
    }
}