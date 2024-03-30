import { MouseEvent } from 'react';
import GoodStaffHealth from '../assets/images/good_staff_health.png'



export function ContactSection() {

    return (
        <section className="contact_section layout_padding">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-5 col-lg-4 offset-md-1">
                        <div className="form_container">
                            <div className="heading_container">
                                <h2>
                                    Связаться с нами
                                </h2>
                            </div>
                            <form action="">
                                <div>
                                    <input type="text" placeholder="Фаше имя " />
                                </div>
                                <div>
                                    <input type="email" placeholder="Email" />
                                </div>
                                <div>
                                    <input type="text" placeholder="Номер для связи" />
                                </div>
                                <div>
                                    <input type="text" className="message-box" placeholder="Сообщение" />
                                </div>
                                <div className="d-flex ">
                                    <button>
                                        Отправить
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-7 px-0">

                        <div className="map_container">
                            <img src={GoodStaffHealth} alt="" />
                            <div className="map">
                                <div id="googleMap"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}