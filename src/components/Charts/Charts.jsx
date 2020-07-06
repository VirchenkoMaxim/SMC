import React, { useEffect, useCallback } from 'react'
import { withRouter } from 'react-router'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Container } from '../../common/CssComponents';
import ClickChart from './ClickChart';
import ViewChart from './ViewChart';
import s from './Charts.module.scss'
import Breadcrumbs from '../../common/BreadCrumbs/Breadcrumb';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { setUsers } from '../../Redux/chartsReduser';


function Charts({ crumbs, users, match, setUsers, statistic, usersPageNumber }) {

    useEffect(() => {
        setUsers(usersPageNumber)
    }, [])
    if (!users || !statistic) {
        return <div>Loading...</div>
    }

    let id = match.params.id;
    let user = users.filter(item => item.first_name + item.last_name === id);
    let statisticData = statistic.filter((elem => elem.userId === user[0].id))
    return (
        <div className={s.charts}>
            <Header />
            <Container>
                <div className={s.charts__crumb}>
                    <Breadcrumbs crumbs={crumbs} name={`${user[0].first_name} ${user[0].last_name}`} />
                </div>
                <div className={s.charts__title}>{user[0].first_name} {user[0].last_name}</div>
                <div className={s.charts__subtitle}>Clicks</div>
                <ClickChart data={statisticData} />
                <div className={s.charts__subtitle}>Views</div>
                <ViewChart data={statisticData} />

            </Container>
            <div className={s.charts__footer}>
                <Footer />
            </div>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        users: state.charts.users,
        statistic: state.charts.statistic,
        usersPageNumber: state.charts.usersPageNumber
    }
}
const mapDispatchToProps = dispatch => {
    return {
        setUsers: (payload) => dispatch(setUsers(payload)),
    }
}
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(Charts)


