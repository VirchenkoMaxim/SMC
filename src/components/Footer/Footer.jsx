import React from 'react'
import s from './Footer.module.scss'
import { Container } from '../../common/CssComponents'
function Footer() {
    return (
        <div className={s.footer}>
            <Container className={s.footer__container}>
                <div className={s.footer__title}>AppCo</div>
                <div className={s.footer__served}>All rights reserved by ThemeTags</div>
                <div className={s.footer__copyright}>Copyrights © 2019. </div>
            </Container>
        </div>
    )
}

export default Footer
