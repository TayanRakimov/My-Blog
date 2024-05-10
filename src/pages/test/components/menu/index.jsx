import React from 'react';
import classes from "./styles.modul.css"

const Menu = () => {
    return (
        <div>
            <ul>
                <li>
                    <a href="#">Главная</a>
                </li>
                <li>
                    <a href="#">О нас</a>
                </li>
                <li>
                    <a href="#">Продукты</a>
                </li>
                <li>
                    <a href="#">Вакансии</a>
                </li>
                <li>
                    <a href="#">Контакты</a>
                </li>
            </ul>
        </div>
    );
}

export default Menu;
