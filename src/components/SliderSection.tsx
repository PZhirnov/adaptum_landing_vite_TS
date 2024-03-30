import { MouseEvent } from 'react';


import SimpleOnboarding from '../assets/images/simple_onboarding.png'
import GoodStaffHealth from '../assets/images/good_staff_health.png'
import Economy from '../assets/images/economy.png'


export function SliderSection() {

    return (
        <section className="slider_section ">
            <div id="customCarousel1" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="container ">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="img-box">
                                        <img src={SimpleOnboarding} alt="" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="detail-box">
                                        <h1>
                                            Легкий онбординг и адаптация персонала
                                        </h1>
                                        <p>
                                            Дает возможность экономить ресурсы и вовлекать сотрудника в рабочие процессы максимально
                                            эффективно
                                        </p>
                                        <div className="btn-box">
                                            <a href="" className="btn1">
                                                Оставить заявку
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item ">
                        <div className="container ">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="img-box">
                                        <img src={GoodStaffHealth} alt="" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="detail-box">
                                        <h1>
                                            Сокращение уровня текучести кадров
                                        </h1>
                                        <p>
                                            Развивайте автоматизацию процесса наставничества. Мотивируют сотрудников на продуктивную работу.
                                        </p>
                                        <div className="btn-box">
                                            <a href="" className="btn1">
                                                Оставить заявку
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item ">
                        <div className="container ">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="img-box">
                                        <img src={Economy} alt="" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="detail-box">
                                        <h1>
                                            Экономия времени руководителей и наставников
                                        </h1>
                                        <p>
                                            Дает возможность оперативного контроля процессов развития персонала
                                        </p>
                                        <div className="btn-box">
                                            <a href="" className="btn1">
                                                Оставить заявку
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ol className="carousel-indicators">
                    <li data-target="#customCarousel1" data-slide-to="0" className="active"></li>
                    <li data-target="#customCarousel1" data-slide-to="1"></li>
                    <li data-target="#customCarousel1" data-slide-to="2"></li>
                </ol>
            </div>
        </section>
    )
}