import { MouseEvent } from 'react';

import CaseOne from '../assets/images/case-1.jpg';
import CaseTwo from '../assets/images/case-2.jpg';


export function CaseSection() {

    return (
        <section className="case_section layout_padding">
            <div id="case-section" className="container">
                <div className="heading_container">
                    <h2>
                        Примеры использования
                    </h2>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="box">
                            <div className="img-box">
                                <img src={CaseOne} alt="" />
                            </div>
                            <div className="detail-box">
                                <h5>
                                    Выгоды для компании от адаптации персонала
                                </h5>
                                <p>
                                    Alteration in some form, by injected humour, or randomised words which don't look even slightly
                                    believable.
                                </p>
                                <a href="">
                                    <span>
                                        Read More
                                    </span>
                                    <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="box">
                            <div className="img-box">
                                <img src={CaseTwo} alt="" />
                            </div>
                            <div className="detail-box">
                                <h5>
                                    Влияние качества подготовки персонала на прибыль
                                </h5>
                                <p>
                                    Alteration in some form, by injected humour, or randomised words which don't look even slightly
                                    believable.
                                </p>
                                <a href="">
                                    <span>
                                        Read More
                                    </span>
                                    <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
