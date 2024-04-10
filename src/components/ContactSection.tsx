import { MouseEvent, useEffect, useState } from 'react';

import axios from 'axios';


import GoodStaffHealth from '../assets/images/good_staff_health.png'



export function ContactSection() {
    const [data, setData] = useState({ name: "", email: "", mobile: "", comment: "" });
    const [response, setResponse] = useState("");
    const [errorMsg, setErrMsg] = useState("")

    const handleInputInForm = (event: React.ComponentProps<"input">["onChange"]) => {
        // console.log(event.target.name);
        // console.log(event.target.value);
        data[event.target.name] = event.target.value;
        setData({ ...data })
        setErrMsg("");
    }


    const handleSendFeedback = (event) => {

        event.preventDefault();

        axios.defaults.baseURL = 'http://localhost:8000'
        const urlPostFeedback = '/api/feedback/'
        axios
            .post(urlPostFeedback, data)
            .then((response) => {
                setResponse(response.data);
                setErrMsg("Сообщение успешно отправлено!");
                setData({ ...{ name: "", email: "", mobile: "", comment: "" } });
                event.target.reset();
            })
            .catch((error) => {
                console.log(error);
                setErrMsg("Ошибка при вводе данных");
            });
        event.preventDefault();
    }

    useEffect(() => {
        // console.log('test')
    }
        , [data,]);


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
                                    <input type="text" name="name" placeholder="Фаше имя " value={data.name} onChange={handleInputInForm} />
                                </div>
                                <div>
                                    <input type="email" name="email" placeholder="Email" onChange={handleInputInForm} />
                                </div>
                                <div>
                                    <input type="text" name="mobile" placeholder="Номер для связи" value={data.mobile} onChange={handleInputInForm} />
                                </div>
                                <div>
                                    <input type="text" name="comment" className="message-box" placeholder="Сообщение" onChange={handleInputInForm} />
                                </div>
                                <div>
                                    <p>
                                        <b>{errorMsg}</b>
                                    </p>
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