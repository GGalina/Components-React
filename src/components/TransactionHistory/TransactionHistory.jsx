import PropTypes from 'prop-types';
import {
    TransactionTable,
    HeadTitle,
    BodyItem,
} from './TransactionHistory.styled'

function TransactionHistory({ items }) {
    return (
        <TransactionTable>
            <thead>
                <tr>
                    <HeadTitle>Type</HeadTitle>
                    <HeadTitle>Amount</HeadTitle>
                    <HeadTitle>Currency</HeadTitle>
                </tr>
            </thead>

            <tbody>
                {items.map(({ id, type, amount, currency }, index) => (
                    <tr key={id} >
                        <BodyItem style={{ backgroundColor: (index % 2 ? '#ecf1f4' : '#ffffff') }}>{type}</BodyItem>
                        <BodyItem style={{ backgroundColor: (index % 2 ? '#ecf1f4' : '#ffffff') }}>{amount}</BodyItem>
                        <BodyItem style={{ backgroundColor: (index % 2 ? '#ecf1f4' : '#ffffff') }}>{currency}</BodyItem>
                    </tr>
                ))}
            </tbody>
        </TransactionTable>
  );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
    PropTypes.shape({
            id: PropTypes.string,
            type: PropTypes.string,
            amount: PropTypes.string,
            currency: PropTypes.string
  }))
};

export default TransactionHistory;