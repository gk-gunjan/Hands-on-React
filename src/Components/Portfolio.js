import React from "react";
import Grid from "../GridItem";

import cabin from "../assets/img/portfolio/cabin.png"; 
import cake from "../assets/img/portfolio/cake.png";
import circus from "../assets/img/portfolio/circus.png";
import game from "../assets/img/portfolio/game.png";
import safe from "../assets/img/portfolio/safe.png";
import submarine from "../assets/img/portfolio/submarine.png"; 

import Icon from "./Icons";

const Portfolio =()=>{
    return(
        <section className="page-section portfolio" id="portfolio">
            <div className="container">
             
                <Icon />
              
                <div className="row">
                  
                    <div className="col-md-6 col-lg-4 mb-5">
                        <Grid reactImg={cabin} />
                        <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-labelledby="portfolioModal1Label" aria-hidden="true">
                            <div class="modal-dialog modal-xl" role="document">
                                <div class="modal-content">
                                    <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">
                                            <i class="fas fa-times"></i>
                                        </span>
                                    </button>
                                    <div class="modal-body text-center">
                                        <div class="container">
                                            <div class="row justify-content-center">
                                                <div class="col-lg-8">
                               
                                                    <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0" id="portfolioModal1Label">Log Cabin</h2>
                          
                                                    <div class="divider-custom">
                                                        <div class="divider-custom-line"></div>
                                                        <div class="divider-custom-icon">
                                                            <i class="fas fa-star"></i>
                                                        </div>
                                                        <div class="divider-custom-line"></div>
                                                    </div>
                             
                                                    <img class="img-fluid rounded mb-5" src={cabin} alt="" />
                           
                                                    <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                                    <button class="btn btn-primary" data-dismiss="modal">
                                                        <i class="fas fa-times fa-fw"></i>
                                                            Close Window
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
              
                    <div className="col-md-6 col-lg-4 mb-5">
                        <Grid reactimg={cake} />
                        <div class="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" role="dialog" aria-labelledby="portfolioModal2Label" aria-hidden="true">
            <div class="modal-dialog modal-xl" role="document">
                <div class="modal-content">
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">
                            <i class="fas fa-times"></i>
                        </span>
                    </button>
                    <div class="modal-body text-center">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-8">
                               
                                    <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0" id="portfolioModal2Labe">Tasty Cake</h2>
                          
                                    <div class="divider-custom">
                                        <div class="divider-custom-line"></div>
                                        <div class="divider-custom-icon">
                                            <i class="fas fa-star"></i>
                                        </div>
                                        <div class="divider-custom-line"></div>
                                    </div>
                             
                                    <img class="img-fluid rounded mb-5" src={cake} alt="" />
                           
                                    <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                    <button class="btn btn-primary" data-dismiss="modal">
                                        <i class="fas fa-times fa-fw"></i>
                                        Close Window
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                    </div>
                
                    <div className="col-md-6 col-lg-4 mb-5">
                        <Grid reactImg={circus} />
                        <div class="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" role="dialog" aria-labelledby="portfolioModal3Label" aria-hidden="true">
            <div class="modal-dialog modal-xl" role="document">
                <div class="modal-content">
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">
                            <i class="fas fa-times"></i>
                        </span>
                    </button>
                    <div class="modal-body text-center">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-8">
                               
                                    <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0" id="portfolioModal3Label"> Round Circus</h2>
                          
                                    <div class="divider-custom">
                                        <div class="divider-custom-line"></div>
                                        <div class="divider-custom-icon">
                                            <i class="fas fa-star"></i>
                                        </div>
                                        <div class="divider-custom-line"></div>
                                    </div>
                             
                                    <img class="img-fluid rounded mb-5" src={circus} alt="" />
                           
                                    <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                    <button class="btn btn-primary" data-dismiss="modal">
                                        <i class="fas fa-times fa-fw"></i>
                                        Close Window
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                    </div>
                  
                    <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                        <Grid reactImg={safe}/>
                        <div class="portfolio-modal modal fade" id="portfolioModal4" tabindex="-1" role="dialog" aria-labelledby="portfolioModal4Label" aria-hidden="true">
            <div class="modal-dialog modal-xl" role="document">
                <div class="modal-content">
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">
                            <i class="fas fa-times"></i>
                        </span>
                    </button>
                    <div class="modal-body text-center">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-8">
                               
                                    <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0" id="portfolioModal4Label">Fantastic Game</h2>
                          
                                    <div class="divider-custom">
                                        <div class="divider-custom-line"></div>
                                        <div class="divider-custom-icon">
                                            <i class="fas fa-star"></i>
                                        </div>
                                        <div class="divider-custom-line"></div>
                                    </div>
                             
                                    <img class="img-fluid rounded mb-5" src={safe} alt="" />
                           
                                    <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                    <button class="btn btn-primary" data-dismiss="modal">
                                        <i class="fas fa-times fa-fw"></i>
                                        Close Window
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                    </div>
                  
                    <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
                        <Grid reactImg={submarine} />
                        <div class="portfolio-modal modal fade" id="portfolioModal5" tabindex="-1" role="dialog" aria-labelledby="portfolioModal5Label" aria-hidden="true">
            <div class="modal-dialog modal-xl" role="document">
                <div class="modal-content">
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">
                            <i class="fas fa-times"></i>
                        </span>
                    </button>
                    <div class="modal-body text-center">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-8">
                               
                                    <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0" id="portfolioModal5Label">Swim With Submarine</h2>
                          
                                    <div class="divider-custom">
                                        <div class="divider-custom-line"></div>
                                        <div class="divider-custom-icon">
                                            <i class="fas fa-star"></i>
                                        </div>
                                        <div class="divider-custom-line"></div>
                                    </div>
                             
                                    <img class="img-fluid rounded mb-5" src={submarine} alt="" />
                           
                                    <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                    <button class="btn btn-primary" data-dismiss="modal">
                                        <i class="fas fa-times fa-fw"></i>
                                        Close Window
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                    </div>
                  
                    <div className="col-md-6 col-lg-4">
                        <Grid reactImg={game} />
                        <div class="portfolio-modal modal fade" id="portfolioModal6" tabindex="-1" role="dialog" aria-labelledby="portfolioModal6Label" aria-hidden="true">
            <div class="modal-dialog modal-xl" role="document">
                <div class="modal-content">
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">
                            <i class="fas fa-times"></i>
                        </span>
                    </button>
                    <div class="modal-body text-center">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-8">
                               
                                    <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0" id="portfolioModal6Label">Let's Play Game!</h2>
                          
                                    <div class="divider-custom">
                                        <div class="divider-custom-line"></div>
                                        <div class="divider-custom-icon">
                                            <i class="fas fa-star"></i>
                                        </div>
                                        <div class="divider-custom-line"></div>
                                    </div>
                             
                                    <img class="img-fluid rounded mb-5" src={game} alt="" />
                           
                                    <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                    <button class="btn btn-primary" data-dismiss="modal">
                                        <i class="fas fa-times fa-fw"></i>
                                        Close Window
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                    </div>

                </div>
            </div>
        </section>

    );
};

export default Portfolio;