import "./Cage.css";
import {useSelector} from "react-redux";
import CageItem from "./CageItem";
import EmptyCart from "../common/EmptyCart";
import {Link} from "react-router-dom";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../common/Validators";
import {Input} from "../common/Form-Validator";

const Cage = () => {
    const itemCage = useSelector(({cage}) => cage.item);

    const onSubmit = (formData) => {
        alert("Спасибо за заказ в течении 10 минут мы вам перезвоним !");
        console.log(formData);
    }

    return (
        <>
            {itemCage.length != 0 ? <div>
                <h2>Корзина</h2>
                <div className="flex-cage-block">

                    <div className="left-cage">
                        <LoginReduxForm onSubmit={onSubmit}/>
                    </div>

                    <div className="right-cage">
                        {
                            itemCage.map(obj => <CageItem key={obj.id} id={obj.id}
                                                          img={obj.imageUrl} name={obj.name}
                                                          manufacturer={obj.manufacturer} price={obj.price}
                                                          availableNames={obj.availableNames}
                                                          availableColors={obj.availableColors} object={obj}/>)
                        }
                    </div>

                </div>
            </div> : <EmptyCart/>}
        </>
    );
};

const maxLength100 = maxLength(100);

const Login = (props) => {
    const totalPrice = useSelector(({cage}) => cage.totalPrice);
    const totalCount = useSelector(({cage}) => cage.totalCount);

    return (
        <>
            <form onSubmit={props.handleSubmit}>
                <label><span>Имя и Фамилия</span><Field validate={[required, maxLength100]} component={Input}
                                                        name={"name"} placeholder="Имя и Фамилия"/></label>
                <br/>
                <label><span>Телефон</span><Field validate={[required, maxLength100]} component={Input} name={"phone"}
                                                  placeholder="Телефон"/></label>
                <br/>
                <label><span>Email</span><Field validate={[required, maxLength100]} component={Input} name={"email"}
                                                placeholder="Email"/></label>
                <br/>
                <label><span>Адрес доставки</span><Field validate={[required, maxLength100]} component={Input}
                                                         name={"address"} placeholder="Адрес доставки"/></label>
                <br/>
                <label><span>Комментарий</span><Field validate={[required, maxLength100]} component={Input}
                                                      name={"coment"} placeholder="Комментарий"/></label>
                <p>Сума заказа: {totalPrice} $</p>
                <p>Всего заказано товара: {totalCount} шт.</p>
                <button>Заказ подтверждаю</button>
                <Link to="/bed">
                    <button>Вернуться в каталог</button>
                </Link>
            </form>
        </>
    );
};

const LoginReduxForm = reduxForm({
    form: "client"
})(Login);

export default Cage;