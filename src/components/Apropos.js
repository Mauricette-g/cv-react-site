import React from "react";



const Apropos = () => {
    return (
            <section className="card d-block m-5" id="apropos"> 
                <div className="card-body">
                <div className="row">
                    <article className="col-md-6"> 
                        <h2 className="text-start"> A propos </h2>
                        <hr className="bg-primary"/>
                        <p className="text-start"> Passionné par l'informatique et les nouvelles technologies, j'ai suis une formation d'<strong>intégrateur-développeur web </strong> au CEF.
                            au cours de cette formation j'ai pu acquérir des bases solides pour travailler dans le domaine du <strong>développement web</strong>.
                        </p>

                        <p className="text-start"> Basé à Lyon, je suis en recherche d'une alternance au sein d'une agence digitale pour consolider ma formation de 
                            <strong>développeur web full stack</strong> .
                        </p>
                        <p className="text-start"> J'accorde une attention particulière à la qualité du code que j'écris et je respecte les bonnes pratiques du web.</p>
                    </article>
                    <aside className="col-md-6">
                        <div className="col">
                            <img className="img-fluid rounded" src="./img/web-skills.jpg" alt="John Doe" />
                        </div>
                        <div className="col mt-2"> <h2> Mes compétences </h2> 
                        <div className="row">
                            <h6>HTML 90%</h6>
                            <div className="progress">
                                <div className="progress-bar bg-danger" style={{width:"90%"}} role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <h6>CSS 80%</h6>
                            <div className="progress">
                                <div className="progress-bar bg-info"  style={{width:"80%"}} role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <h6>JAVSCRIPT 70%</h6>
                            <div className="progress">
                                <div className="progress-bar bg-warning" style={{width:"70%"}} role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <h6>PHP 60%</h6>
                            <div className="progress">
                                <div className="progress-bar bg-success " style={{width:"60%"}} role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <h6>REACT 50%</h6>
                            <div className="progress">
                                <div className="progress-bar bg-primary" style={{width:"50%"}} role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                </div>
                            </div>
                        </div>

                        </div>      
                    </aside>
                </div>
                </div>

            </section>


    );
}
export default Apropos;