import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import { Container } from './styles/Form'

interface Props {
    children: any;
    route:any;
    routing__title:string;
    title:string;
    account__text:string

}

const Form: FC<Props> = ({route,title, routing__title, account__text,children}) => {



    return (
        <Container>

        <div className = 'container'>
            <div className="left__container">
                <div className="logo__container">
                E.
                </div>
                <div className="qoute__container">
                    <p className = 'qoute'>
                        "Great, kid. Don't <br /> get cocky."
                    </p>
                    <div className="divider__line"></div>

                    <p className="qoute__name">
                        Han Solo
                    </p>
                </div>
            </div>
            <div className="right__container">
                <div className="top__container__title desktop__version">
                    <p>
                        <span className="no__account">{account__text}</span>
                        <span className = 'top__container__routing'>
                            <Link to = {route}>{routing__title}</Link>
                        </span>
                    </p>
                </div>
                
                {children}
            </div>
        </div>
        </Container>
    )
}

export default Form