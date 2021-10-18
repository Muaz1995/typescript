import React, { FC } from 'react'
import { Container } from './styles/Form'

const Input: FC = () => {
    return (
        <Container>

        <div className="input__container">

        <input type="email" placeholder = 'Email' name="email" id="" />
        </div>
        </Container>
    )
}

export default Input;