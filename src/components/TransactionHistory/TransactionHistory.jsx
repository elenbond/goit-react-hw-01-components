import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
    return (
        <table className={css.transaction_history}>
            <thead>
                <tr>
                <th className={css.title}>Type</th>
                <th className={css.title}>Amount</th>
                <th className={css.title}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(({id, type, amount, currency}) => (
                    <tr key={id} className={css.element}>
                        <td className={css.item}>{type}</td>
                        <td className={css.item}>{amount}</td>
                        <td className={css.item}>{currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    })),
}