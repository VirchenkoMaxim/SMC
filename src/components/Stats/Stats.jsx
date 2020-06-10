import React, { useState } from 'react'
import s from './Stats.module.scss'
import { Container } from '../../common/CssComponents'

import { Link } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import ReactPaginate from 'react-paginate'
import Breadcrumbs from '../../common/BreadCrumbs/Breadcrumb'
function Stats({ crumbs, users, match, user_statistic, ...props }) {
    let user = '';
    return (
        <div className={s.statsPage} >
            <Header />
            <Container>
                <div className={s.statsPage__crumb}>
                    <Breadcrumbs crumbs={crumbs} />
                </div>
                <div className={s.statsPage__title}>Users statistics</div>
                <div className={s.statsPage__table}>
                    <div>
                        <div className={s.usersTh}>
                            <div className={s.usersTh__id}>Id</div>
                            <div className={s.usersTh__firstName}>First name</div>
                            <div className={s.usersTh__lastName}>Last name</div>
                            <div className={s.usersTh__email}>Email</div>
                            <div className={s.usersTh__gender}>Gender</div>
                            <div className={s.usersTh__ipAddress}>IP address</div>
                        </div>
                        {users.map((item, index) => {
                            user = `${item.first_name}${item.last_name}`
                            return <Link className={`${s.user} , ${item.id % 2 === 0 && s.usersBg}`} to={`stats/${user}`} key={index}>
                                <div className={s.user__id}>{item.id}</div>
                                <div className={s.user__firstName}>{item.first_name}</div>
                                <div className={s.user__lastName}>{item.last_name}</div>
                                <div className={s.user__email}>{item.email}</div>
                                <div className={s.user__gender}>{item.gender}</div>
                                <div className={s.user__ipAddress}>{item.ip_address}</div>
                            </Link>
                        })}
                    </div>
                    <div >
                        <div className={s.userSt}>
                            <div className={s.userSt__totalClicks}>Total clicks</div>
                            <div className={s.userSt__totalPageViews}>Total page views</div>
                        </div>
                        {user_statistic.map((item, index) => {
                            return <Link className={`${s.st} , ${item.user_id % 2 === 0 && s.usersBg}`} to={`stats/${user}`} key={index}>
                                <div className={s.st__totalClicks}>{item.clicks}</div>
                                <div className={s.st__totalPageViews}>{item.page_views}</div>
                            </Link>
                        })}
                    </div>
                </div>
                <ReactPaginate
                    previousLabel={""}
                    nextLabel={""}
                    breakLabel={<span className="gap">...</span>}
                    pageCount={100}
                    // onPageChange={this.handlePageClick}
                    forcePage={5}
                    containerClassName={s.pagination}
                    previousLinkClassName={s.previous_page}
                    nextLinkClassName={s.next_page}
                    // disabledClassName={s.disabled}
                    activeClassName={s.active}
                    pageLinkClassName={s.disabled}
                />
            </Container>
            <div className={s.statsPage__footer}>
                <Footer />
            </div>

        </div >
    )
}

export default Stats




