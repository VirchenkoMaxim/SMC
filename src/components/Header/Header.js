import React from 'react'
import s from './Header.module.scss'
import { Container } from '../../common/CssComponents'
function Header() {
    return (
        <div className={s.header}>
            <Container>
                <div className={s.header__title}>AppCo</div>
            </Container>
        </div>
    )
}

export default Header

