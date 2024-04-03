import { MouseEvent, useState } from 'react';

import axios from 'axios';


import GoodStaffHealth from '../assets/images/good_staff_health.png'



export function ContactSection() {

    const [data, setData] = useState({ name: "", email: "", mobile: "", comment: "" });
    const [response, setResponse] = useState("");
    const [errorMsg, setErrMsg] = useState("")


    const handleSendFeedback = (event) => {
        setData({
            "name": event.target[0].value,
            "email": event.target[1].value,
            "mobile": event.target[2].value,
            "comment": event.target[3].value,
        })

        console.log(data)
        event.preventDefault();
        axios.defaults.baseURL = 'http://79.174.80.178:8000'
        const urlPostFeedback = '/api/main/feedback/push/'
        axios
            .post(urlPostFeedback, data)
            .then((response) => {
                setResponse(response.data);
                setErrMsg("");
            })
            .catch((error) => {
                console.log(error);
                setErrMsg("Ошибка при вводе данных");

            });
    }




    return (
        <section className="contact_section layout_padding">
            <div id="contact" className="container-fluid">
                <div className="row">
                    <div className="col-md-5 col-lg-4 offset-md-1">
                        <div className="form_container">
                            <div className="heading_container">
                                <h2>
                                    Связаться с нами
                                </h2>
                            </div>
                            <form action="" onSubmit={handleSendFeedback}>
                                <div>
                                    <input type="text" name="name" placeholder="Фаше имя " />
                                </div>
                                <div>
                                    <input type="email" name="email" placeholder="Email" />
                                </div>
                                <div>
                                    <input type="text" name="mobile" placeholder="Номер для связи" />
                                </div>
                                <div>
                                    <input type="text" name="comment" className="message-box" placeholder="Сообщение" />
                                </div>
                                <div className="d-flex ">
                                    <button type="submit">
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