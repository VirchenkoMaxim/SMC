import React from 'react'
import { Link } from 'react-router-dom';
import s from './BreadCrumbs.module.scss'

const Breadcrumbs = ({ crumbs, ...props }) => {
    // Don't render a single breadcrumb.
    if (crumbs.length <= 1) {
        return null;
    }
    return (
        <div className={s.crumbs}>
            {/* Link back to any previous steps of the breadcrumb. */}
            {crumbs.map(({ name, path }, key) =>
                key + 1 === crumbs.length ? (
                    <span className={s.crumbs__last} key={key}>
                        {name || props.name}
                    </span>
                ) : (
                        <div className={s.crumbs__links} key={key} >
                            <Link className={s.crumbs__link} to={path}>
                                {name || props.name}
                            </Link>
                            <span className={s.crumbs__arrow}>></span>
                        </div>

                    )
            )}
        </div>
    );
};
export default Breadcrumbs
