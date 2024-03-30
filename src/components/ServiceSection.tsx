import { MouseEvent } from 'react';

import ConstructorIcon from "../assets/images/constructor_icon.svg";
import RepoPlansIcon from "../assets/images/repo_plans_icon.svg";
import PlaningIcon from "../assets/images/planing_icon.svg";
import TrackerIcon from "../assets/images/tracker_icon.svg";
import MentoringIcon from "../assets/images/mentoring_icon.svg";
import EventIcon from "../assets/images/event_icon.png";
import BiIcon from "../assets/images/bi_icon.svg";
import ChatIcon from "../assets/images/chat_icon.svg";


export function ServiceSection() {

    return (
        <section className="service_section layout_padding">
            <div className="container">
                <div className="heading_container">
                    <h2>
                        Функционал сервиса
                    </h2>
                    <p>
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <div className="row">
                    <div className="col-md-6 col-lg-3">
                        <div className="box">
                            <div className="img-box">
                                <img src={ConstructorIcon} alt="" />
                            </div>
                            <div className="detail-box">
                                <h5>
                                    Конструктор планов
                                </h5>
                                <p>
                                    Создание дорожной карты процесса онбординга и адаптации
                                </p>
                                <a href="">
                                    <span>
                                        Узнать больше
                                    </span>
                                    <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="box">
                            <div className="img-box">
                                <img src={RepoPlansIcon} alt="" />
                            </div>
                            <div className="detail-box">
                                <h5>
                                    Репозиторий планов
                                </h5>
                                <p>
                                    Публикуйте созданные планы в общем доступе и переиспользуйте наработки
                                </p>
                                <a href="">
                                    <span>
                                        Узнать больше
                                    </span>
                                    <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="box">
                            <div className="img-box">
                                <img src={PlaningIcon} alt="" />
                            </div>
                            <div className="detail-box">
                                <h5>
                                    Планирование
                                </h5>
                                <p>
                                    Создавайте и управляйте группами адаптации на базе созданных планов
                                </p>
                                <a href="">
                                    <span>
                                        Узнать больше
                                    </span>
                                    <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="box">
                            <div className="img-box">
                                <img src={TrackerIcon} alt="triangle with all three sides equal" />
                            </div>
                            <div className="detail-box">
                                <h5>
                                    Трекер сотрудника
                                </h5>
                                <p>
                                    Прохождение этапов онбординга и адаптации сотрудником
                                </p>
                                <a href="">
                                    <span>
                                        Узнать больше
                                    </span>
                                    <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="box">
                            <div className="img-box">
                                <img src={MentoringIcon} alt="" />
                            </div>
                            <div className="detail-box">
                                <h5>
                                    Наставничество
                                </h5>
                                <p>
                                    Управляйте группами сотрудников и получайте оценку их работы
                                </p>
                                <a href="">
                                    <span>
                                        Узнать больше
                                    </span>
                                    <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="box">
                            <div className="img-box">
                                <img src={EventIcon} alt="" />
                            </div>
                            <div className="detail-box">
                                <h5>
                                    Event-менеджмент
                                </h5>
                                <p>
                                    Планируйте события команды, учитывая интересы сотрудников и вовлеченность
                                </p>
                                <a href="">
                                    <span>
                                        Узнать больше
                                    </span>
                                    <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="box">
                            <div className="img-box">
                                <img src={BiIcon} alt="" />
                            </div>
                            <div className="detail-box">
                                <h5>
                                    BI-аналитика
                                </h5>
                                <p>
                                    Отслеживание ключевых метрики процессов адаптации и онбординга
                                </p>
                                <a href="">
                                    <span>
                                        Узнать больше
                                    </span>
                                    <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="box">
                            <div className="img-box">
                                <img src={ChatIcon} alt="triangle with all three sides equal" />
                            </div>
                            <div className="detail-box">
                                <h5>
                                    Чат с наставниками
                                </h5>
                                <p>
                                    Быстрая связь с наставником или руководителем на всех этапах адаптации
                                </p>
                                <a href="">
                                    <span>
                                        Узнать больше
                                    </span>
                                    <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="btn-box">
                    <a href="">
                        Оставить заявку
                    </a>
                </div>
            </div>
        </section>
    )
}
