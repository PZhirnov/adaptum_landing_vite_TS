import { MouseEvent } from 'react';


export function NavBar() {

    return (
        <header className="header_section">
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg custom_nav-container ">
                    <a className="navbar-brand" href="#">
                        <span>
                            ADAPTUM
                        </span>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className=""> </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav  ">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Главная <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#goals">Цели проекта</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#case-section">Примеры</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Контакты</a>
                            </li>
                        </ul>
                        <div className="quote_btn-container">
                            <a href="" className="quote_btn">
                                Войти в личный кабинет
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}