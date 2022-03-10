import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css"
import "swiper/css/pagination";

import { Pagination, Navigation } from "swiper";

import StarRatingComponent from 'react-star-rating-component';

import Avaliacao1 from './images/avaliacao1.png'
import Avaliacao2 from './images/avaliacao2.png'
import Avaliacao3 from './images/avaliacao3.png'

import User1 from './images/user1.png'
import User2 from './images/user2.png'
import User3 from './images/user3.png'

const CarrouselAvaliacao = props => {

    return (
        <>
            <Swiper slidesPerView={4} spaceBetween={30} pagination={{clickable: true}} navigation={true} modules={[Pagination, Navigation]} className="MySwiper">
                <SwiperSlide>
                    <div className="card">
                        <img className="imgCard" src={Avaliacao1} alt="Barber" />
                        <div className="textCard">
                            <div className="user">
                                <img className="imgUser" src={User1} alt="User" />    
                            </div>
                            <span className="nameUser poppins">Leandro Oliveira</span>
                            <span className="service poppins">Corte de cabelo</span>
                            <span className="description poppins">"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique debitis quibusdam iste commodi odio!"</span>
                            <StarRatingComponent 
                                name="avaliacaoBarber" 
                                starCount={5}
                                value={5}
                                // onStarClick={this.onStarClick.bind(this)}
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card">
                        <img className="imgCard" src={Avaliacao2} alt="Barber" />
                        <div className="textCard">
                            <div className="user">
                                <img className="imgUser" src={User2} alt="User" />    
                            </div>
                            <span className="nameUser poppins">Roberta Silva</span>
                            <span className="service poppins">Relaxamento muscular</span>
                            <span className="description poppins">"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique debitis quibusdam iste commodi odio!"</span>
                            <StarRatingComponent 
                                name="avaliacaoBarber" 
                                starCount={5}
                                value={5}
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card">
                        <img className="imgCard" src={Avaliacao3} alt="Barber" />
                        <div className="textCard">
                            <div className="user">
                                <img className="imgUser" src={User3} alt="User" />    
                            </div>
                            <span className="nameUser poppins">Ana Clara</span>
                            <span className="service poppins">Pintura capilar</span>
                            <span className="description poppins">"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique debitis quibusdam iste commodi odio!"</span>
                            <StarRatingComponent 
                                name="avaliacaoBarber" 
                                starCount={5}
                                value={4}
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card">
                        <img className="imgCard" src={Avaliacao1} alt="Barber" />
                        <div className="textCard">
                            <div className="user">
                                <img className="imgUser" src={User1} alt="User" />    
                            </div>
                            <span className="nameUser poppins">Leandro Oliveira</span>
                            <span className="service poppins">Corte de cabelo</span>
                            <span className="description poppins">"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique debitis quibusdam iste commodi odio!"</span>
                            <StarRatingComponent 
                                name="avaliacaoBarber" 
                                starCount={5}
                                value={4}
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card">
                        <img className="imgCard" src={Avaliacao1} alt="Barber" />
                        <div className="textCard">
                            <div className="user">
                                <img className="imgUser" src={User1} alt="User" />    
                            </div>
                            <span className="nameUser poppins">Leandro Oliveira</span>
                            <span className="service poppins">Corte de cabelo</span>
                            <span className="description poppins">"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique debitis quibusdam iste commodi odio!"</span>
                            <StarRatingComponent 
                                name="avaliacaoBarber" 
                                starCount={5}
                                value={4}
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card">
                        <img className="imgCard" src={Avaliacao1} alt="Barber" />
                        <div className="textCard">
                            <div className="user">
                                <img className="imgUser" src={User1} alt="User" />    
                            </div>
                            <span className="nameUser poppins">Leandro Oliveira</span>
                            <span className="service poppins">Corte de cabelo</span>
                            <span className="description poppins">"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique debitis quibusdam iste commodi odio!"</span>
                            <StarRatingComponent 
                                name="avaliacaoBarber" 
                                starCount={5}
                                value={4}
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card">
                        <img className="imgCard" src={Avaliacao1} alt="Barber" />
                        <div className="textCard">
                            <div className="user">
                                <img className="imgUser" src={User1} alt="User" />    
                            </div>
                            <span className="nameUser poppins">Leandro Oliveira</span>
                            <span className="service poppins">Corte de cabelo</span>
                            <span className="description poppins">"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique debitis quibusdam iste commodi odio!"</span>
                            <StarRatingComponent 
                                name="avaliacaoBarber" 
                                starCount={5}
                                value={4}
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card">
                        <img className="imgCard" src={Avaliacao1} alt="Barber" />
                        <div className="textCard">
                            <div className="user">
                                <img className="imgUser" src={User1} alt="User" />    
                            </div>
                            <span className="nameUser poppins">Leandro Oliveira</span>
                            <span className="service poppins">Corte de cabelo</span>
                            <span className="description poppins">"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique debitis quibusdam iste commodi odio!"</span>
                            <StarRatingComponent 
                                name="avaliacaoBarber" 
                                starCount={5}
                                value={4}
                            />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )

}

export default CarrouselAvaliacao