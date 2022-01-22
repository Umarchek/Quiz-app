import React, { Component } from "react";
import classes from './Drawer.module.css'
import { Link } from "react-router-dom";
import BackDrop from "../../UI/BackDrop/BackDrop";

const links = [
    { to: '/', label: 'Список', exact: true },
    { to: '/auth', label: 'Авторизация', exact: false },
    { to: '/quiz-creator', label: 'Создать тест', exact: false }
]

class Drawer extends Component {
    clickHandler = () => { this.props.onClose() }
    renderLinks() {
        return links.map((link, index) => {
            return (
                <li key={index}>
                    <Link to={link.to} exact={link.exact} onClick={this.clickHandler}>
                        {link.label}
                    </Link>
                </li>
            )
        })
    }

    render() {
        const cls = [classes.Drawer]

        if (!this.props.isOpen) {
            cls.push(classes.close)
        }
        return (
            <React.Fragment>
                <nav className={cls.join(' ')}>
                    <ul>
                        {this.renderLinks()}
                    </ul>
                </nav>
                {this.props.isOpen ? <BackDrop onClick={this.props.onClose} /> : null}
            </React.Fragment>
        )
    }
}

export default Drawer