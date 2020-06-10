import React from 'react'
import s from './Main.module.scss'
import headBg from '../../img/Rectangle8.png'
import footerBg from '../../img/Rectangle54.png'
import cleanDesign from '../../img/Group13.png'
import secureData from '../../img/Group14.png'
import retinaReady from '../../img/Group15.png'
import mobilePhone from '../../img/mobile.png'
import { Container } from '../../common/CssComponents'
import { Link } from 'react-router-dom'

export default function Main() {

    return (
        <div className={s.fPage}>
            <Container>
                <div className={s.header}>
                    <div>
                        <div className={s.header__logo}>AppCo</div>
                        <div className={s.header__title}><span>Brainstorming</span> for desired perfect Usability</div>
                        <div className={s.header__subtitle}>Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</div>
                        <button className={s.header__btn} ><Link to='/stats'>Views Stats</Link></button>
                    </div>
                    <div className={s.header__img}><img src={mobilePhone} alt="" /></div>
                </div>
                <div className={s.main}>
                    <div className={s.main__title}>Why <span>small business owners love</span> AppCo?</div>
                    <div className={s.main__subtitle}>Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</div>
                    <div className={s.slider}>
                        <div className={s.slider__item}>
                            <div className={s.slider__item_img}><img src={cleanDesign} alt="" /></div>
                            <div className={s.slider__item_title}>Clean Design</div>
                            <div className={s.slider__item_content}>Increase sales by showing true dynamics of your website.</div>
                        </div>
                        <div className={s.slider__item}>
                            <div className={s.slider__item_img}><img src={secureData} alt="" /></div>
                            <div className={s.slider__item_title}>Secure Data</div>
                            <div className={s.slider__item_content}>Build your online store’s trust using Social Proof & Urgency.</div>
                        </div>
                        <div className={s.slider__item}>
                            <div className={s.slider__item_img}><img src={retinaReady} alt="" /></div>
                            <div className={s.slider__item_title}>Retina Ready</div>
                            <div className={s.slider__item_content}>Realize importance of social proof in customer’s purchase decision.</div>
                        </div>
                    </div>
                </div>
                <div className={s.footer}>
                    <div className={s.form}>
                        <input className={s.form__area}
                            placeholder="Enter your email" type="text" />
                        <input className={s.form__btn} type="submit" value="Subscribe" />
                    </div>
                    <div className={s.footer__title}>AppCo</div>
                    <div className={s.footer__served}>All rights reserved by ThemeTags</div>
                    <div className={s.footer__copyright}>Copyrights © 2019. </div>
                </div >
            </Container>
        </div>
    )
}
