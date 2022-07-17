import PropTypes from 'prop-types';

export default function Statistics({ title, stats }) { 
    return (
        <section>
            <h2 class="title">{title}</h2>
            <ul class="stat-list">
                {stats.map(item => (
                    <li key={item.id} class="item">
                        <span>{item.label}</span>
                        <span>{item.percentage}%</span>
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