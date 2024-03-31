import { MouseEvent } from 'react';


import AboutImg from '../assets/images/about-img.png';
import RocketSvg from '../assets/images/rocket.svg';
import ConstructorIcon from '../assets/images/constructor_icon.svg';
import Positive from '../assets/images/positive.svg';
import Money from '../assets/images/money.svg';


export function AboutSection() {

    return (
        <section className="about_section layout_padding">
            <div className="container  ">
                <div className="row">
                    <div className="col-md-6">
                        <div className="detail-box">
                            <div className="heading_container">
                                <h2 id='goals'>
                                    Цели проекта
                                </h2>
                            </div>
                            <p>
                                Обеспечение процесса развития сотрудников в организации. Это означает не только знакомство с рабочими
                                процедурами и корпоративной культурой, но и формирование комфортной психологической атмосферы,
                                способствующей личностному и профессиональному развитию.
                            </p>
                            <a href="">
                                Задать вопрос
                            </a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="img-box">
                            <img src={AboutImg} alt="" />
                        </div>
                    </div>

                </div>
                {/* <!-- Card actual --> */}
                <div className="row row_goal">
                    <div className="col-md-12 goal-card">
                        <div className="col-md-2">
                            <div className="img-box icon_invert">
                                <img src={RocketSvg} alt="" />
                            </div>
                        </div>
                        <div className="goal-info-block">
                            <h2>Легкий онбординг и переход на новую должность сотрудников</h2>
                            <p>Дает возможность экономить ресурсы и вовлекать сотрудника в рабочие процессы максимально эффективно</p>
                        </div>
                    </div>
                    <div className="col-md-12  goal-card">
                        <div className="col-md-2">
                            <div className="img-box icon_invert">
                                <img src={ConstructorIcon} alt="" />
                            </div>
                        </div>
                        <div className="goal-info-block">
                            <h2>Сокращение уровня текучести кадров</h2>
                            <p>Мотивируют на продуктивную работу</p>
                        </div>
                    </div>
                    <div className="col-md-12  goal-card">
                        <div className="col-md-2">
                            <div className="img-box icon_invert">
                                <img src={Positive} alt="" />
                            </div>
                        </div>
                        <div className="goal-info-block">
                            <h2>Экономия времени руководителей и наставников</h2>
                            <p>Дает возможность оперативного контроля процессов развития персонала</p>
                        </div>
                    </div>
                    <div className="col-md-12  goal-card">
                        <div className="col-md-2">
                            <div className="img-box icon_invert">
                                <img src={Money} alt="" />
                            </div>
                        </div>
                        <div className="goal-info-block">
                            <h2>Развитие позитивного отношения к работе</h2>
                            <p>Забота о комфортном процессе развитии персонала, участие в процессе роста сотрудника, открытость к
                                решению
                                проблем</p>
                        </div>
                    </div>
                </div>

            </div>
        </section >
    )
}