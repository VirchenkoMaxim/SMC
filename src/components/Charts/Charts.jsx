import React from 'react'
import { withRouter } from 'react-router'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Container } from '../../common/CssComponents';
import ClickChart from './ClickChart';
import ViewChart from './ViewChart';
import s from './Charts.module.scss'
import Breadcrumbs from '../../common/BreadCrumbs/Breadcrumb';

let data = [
    { year: 2010, quarter: 4, count: 112 },
    { year: 2016, quarter: 1, count: 767 },
    { year: 2018, quarter: 3, count: 343 },
    { year: 2017, quarter: 4, count: 354 },
    { year: 2019, quarter: 2, count: 834 }
]



function Charts({ crumbs, users, match }) {
    let id = match.params.id;
    let item = users.filter(item => item.first_name + item.last_name === id);
    return (
        <div className={s.charts}>
            <Header />

            <Container>
                <div className={s.charts__crumb}>
                    <Breadcrumbs crumbs={crumbs} name={`${item[0].first_name} ${item[0].last_name}`} />
                </div>
                <div className={s.charts__title}>{item[0].first_name} {item[0].last_name}</div>
                <div className={s.charts__subtitle}>Clicks</div>
                <ClickChart data={data} />
                <div className={s.charts__subtitle}>Views</div>
                <ViewChart data={data} />

            </Container>
            <div className={s.charts__footer}>
                <Footer />
            </div>
        </div>
    )
}

export default withRouter(Charts)
