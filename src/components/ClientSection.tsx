import { MouseEvent } from 'react';
import ClientImg from '../assets/images/client.jpg';


export function ClientSection() {

    return (
        <section className="client_section ">
            <div className="container">
                <div className="heading_container heading_center">
                    <h2>
                        Отзывы о нашем сервисе
                    </h2>
                </div>
            </div>
            <div id="customCarousel2" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-10 mx-auto">
                                    <div className="box">
                                        <div className="img-box">
                                            <img src={ClientImg} alt="" />
                                        </div>
                                        <div className="detail-box">
                                            <div className="client_info">
                                                <div className="client_name">
                                                    <h5>
                                                        ООО "Достижение"
                                                    </h5>
                                                    <h6>
                                                        Клиент
                                                    </h6>
                                                </div>
                                                <i className="fa fa-quote-left" aria-hidden="true"></i>
                                            </div>
                                            <p>
                                                Отличный сервис, который приняли сотрудники на ура.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-10 mx-auto">
                                    <div className="box">
                                        <div className="img-box">
                                            <img src={ClientImg} alt="" />
                                        </div>
                                        <div className="detail-box">
                                            <div className="client_info">
                                                <div className="client_name">
                                                    <h5>
                                                        ООО "Новое время"
                                                    </h5>
                                                    <h6>
                                                        Клиент2
                                                    </h6>
                                                </div>
                                                <i className="fa fa-quote-left" aria-hidden="true"></i>
                                            </div>
                                            <p>
                                                Мы будем работать с ними постоянно!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ol className="carousel-indicators">
                    <li data-target="#customCarousel2" data-slide-to="0" className="active"></li>
                    <li data-target="#customCarousel2" data-slide-to="1"></li>
                    <li data-target="#customCarousel2" data-slide-to="2"></li>
                </ol>
            </div>
        </section>

    )
}