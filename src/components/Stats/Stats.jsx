import React, { useState, useEffect } from 'react'
import s from './Stats.module.scss'
import { Container } from '../../common/CssComponents'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Breadcrumbs from '../../common/BreadCrumbs/Breadcrumb'
import { connect } from 'react-redux';
import { setUsers, setStatistic } from '../../Redux/chartsReduser'
import Paginator from '../../common/Pagination'
import cn from 'classnames';
const Stats = ({ usersPageNumber, usersCountPerPage, totalUsers,
    crumbs, match, statistic, setStatistic, setUsers, users, ...props }) => {
    let [portionNumber, setPortionNumber] = useState(1);
    useEffect(() => {
        setUsers()
        setStatistic()
    }, [])
    let onPageChanged = (item) => {
        setUsers(item);
    }
    let onPortionPrev = () => {
        setPortionNumber(portionNumber - 1)
    }
    let onPortionNext = () => {
        setPortionNumber(portionNumber + 1)
    }
    if ((!users) || (!statistic)) {
        return <div>Loading...</div>
    }

    let resultClicks = statistic.reduce((prev, item) => {
        if (item.user_id in prev) {
            prev[item.user_id] += item.clicks;
        } else {
            prev[item.user_id] = item.clicks;
        }
        return prev;
    }, [])

    let resultViews = statistic.reduce((prev, item) => {
        if (item.user_id in prev) {
            prev[item.user_id] += item.page_views;

        } else {
            prev[item.user_id] = item.page_views;
        }
        return prev;
    }, [])
    return (
        <div className={s.statsPage} >
            <Header />
            <Container>
                <div className={s.statsPage__crumb}>
                    <Breadcrumbs crumbs={crumbs} />
                </div>
                <div className={s.statsPage__title}>Users statistics</div>
                <div className={s.table}>
                    <div className={s.id}>
                        <div className={cn(s.id__head, s.tHead)}>Id</div>
                        {users.map((item, index) => {
                            return <div key={index} className={`${s.id__content} , ${item.id % 2 === 0 && s.usersBg}`}><div>{item.id}</div></div>
                        })}
                    </div>
                    <div className={s.firstName}>
                        <div className={cn(s.firstName__head, s.tHead)}>First Name</div>
                        {users.map((item, index) => <div key={index} className={`${s.firstName__content} , ${item.id % 2 === 0 && s.usersBg}`}><div><Link to={`stats/${item.first_name}${item.last_name}`}>
                            {item.first_name}
                        </Link></div></div>)}
                    </div>
                    <div className={s.lastName}>
                        <div className={cn(s.lastName__head, s.tHead)}>Last name</div>
                        {users.map((item, index) => <div key={index} className={`${s.lastName__content} , ${item.id % 2 === 0 && s.usersBg}`}><div><Link to={`stats/${item.first_name}${item.last_name}`} >
                            {item.last_name}
                        </Link></div></div>)}
                    </div>
                    <div className={s.email}>
                        <div className={cn(s.email__head, s.tHead)}>Email</div>
                        {users.map((item, index) => <div key={index} className={`${s.email__content} , ${item.id % 2 === 0 && s.usersBg}`}><div><a href="https://google.com" >{item.email}</a></div></div>)}
                    </div>
                    <div className={s.gender}>
                        <div className={cn(s.gender__head, s.tHead)}>Gender</div>
                        {users.map((item, index) => <div key={index} className={`${s.gender__content} , ${item.id % 2 === 0 && s.usersBg}`}><div>{item.gender}</div></div>)}
                    </div>
                    <div className={s.ipAddress}>
                        <div className={cn(s.ipAddress__head, s.tHead)}>IP address</div>
                        {users.map((item, index) => <div key={index} className={`${s.ipAddress__content} , ${item.id % 2 === 0 && s.usersBg}`}><div>{item.ip_address}</div></div>)}
                    </div>
                    <div className={s.totalClicks}>
                        <div className={cn(s.totalClicks__head, s.tHead)}>Total clicks</div>
                        {resultClicks.map((item, index) => <div key={index} className={`${s.totalClicks__content}  ${index % 2 === 0 && s.usersBg}`}><div className={s.center}><Link to={`/`} >
                            {item}
                        </Link></div></div>)}
                    </div>
                    <div className={s.view}>
                        <div className={cn(s.view__head, s.tHead)}>Total page views</div>
                        {resultViews.map((item, index) => <div key={index} className={`${s.view__content}  ${index % 2 === 0 && s.usersBg}`}><div className={s.center}><Link to={`/`} >
                            {item}
                        </Link></div></div>)}
                    </div>
                </div>
                <Paginator
                    totalUsers={totalUsers}
                    usersCountPerPage={usersCountPerPage}
                    onPortionNext={onPortionNext}
                    onPortionPrev={onPortionPrev}
                    usersPageNumber={usersPageNumber}
                    portionNumber={portionNumber}
                    onPageChanged={onPageChanged}

                />
            </Container >
            <div className={s.statsPage__footer}>
                <Footer />
            </div>

        </div >
    )
}

let mapStateToProps = (state) => {
    return {
        users: state.charts.users,
        statistic: state.charts.statistic,
        totalUsers: state.charts.totalUsers,
        usersCountPerPage: state.charts.usersCountPerPage,
        usersPageNumber: state.charts.usersPageNumber

    }
}
export default connect(mapStateToProps, { setUsers, setStatistic })(Stats)



// export default Stats




