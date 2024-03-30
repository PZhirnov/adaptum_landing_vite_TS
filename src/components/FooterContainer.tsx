import { MouseEvent } from 'react';


export function FooterContainer() {

    return (
        <div className="footer_container">
            {/* <!-- info section --> */}

            <section className="info_section ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-3 ">
                            <div className="info_detail">
                                <h4>
                                    ADAPTUM
                                </h4>
                                <p>
                                    Сервис онбординга и адаптации персонала
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-2 mx-auto">
                            <div className="info_link_box">
                                <h4>
                                    Ссылки
                                </h4>
                                <div className="info_links">
                                    <a className="" href="index.html">
                                        Home
                                    </a>
                                    <a className="" href="about.html">
                                        About
                                    </a>
                                    <a className="" href="service.html">
                                        Services
                                    </a>
                                    <a className="" href="contact.html">
                                        Contact Us
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 ">
                            <h4>
                                Подписка на новости
                            </h4>
                            <form action="#">
                                <input type="text" placeholder="Enter email" />
                                <button type="submit">
                                    Подписаться
                                </button>
                            </form>
                        </div>
                        <div className="col-md-6 col-lg-3 mb-0 ml-auto">
                            <div className="info_contact">
                                <h4>
                                    Контакты
                                </h4>
                                <div className="contact_link_box">
                                    <a href="">
                                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                                        <span>
                                            Location
                                        </span>
                                    </a>
                                    <a href="">
                                        <i className="fa fa-quote-left" aria-hidden="true"></i>
                                        <span>
                                            @pzhirnov
                                        </span>
                                    </a>
                                    <a href="">
                                        <i className="fa fa-envelope" aria-hidden="true"></i>
                                        <span>
                                            info@adaptum.ru
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div className="info_social">
                                <a href="">
                                    <i className="fa fa-facebook" aria-hidden="true"></i>
                                </a>
                                <a href="">
                                    <i className="fa fa-twitter" aria-hidden="true"></i>
                                </a>
                                <a href="">
                                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                                </a>
                                <a href="">
                                    <i className="fa fa-instagram" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- end info section --> */}

            {/* <!-- footer section --> */}
            <footer className="footer_section">
                <div className="container">
                    <p>
                        &copy; <span id="displayYear"></span> Все права защищены
                        <a href="#"></a>
                    </p>
                </div>
            </footer>
            {/* <!-- footer section --> */}
        </div>
    )
}
