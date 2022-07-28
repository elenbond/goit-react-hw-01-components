import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export default function Statistics({ title = 'upload stats', stats }) { 
    return (
        <section className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2>}
            <ul className={css.list}>
                {stats.map(({id, label, percentage}) => (
                    <li key={id} className={css.item}>
                        <span>{label}</span>
                        <span>{percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })),
}