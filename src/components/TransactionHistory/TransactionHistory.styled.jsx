import styled from 'styled-components';

const TransactionTable = styled.table`
    margin-top: 100px;
    margin-bottom: 100px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    width: 900px;
    border-radius: 5px;
`;

const HeadTitle = styled.th`
    font-family: 'Roboto', sans-serif;
    background-color: #00bcd5;
    color: #ffffff;
    text-transform: uppercase;
    width: 300px;
    padding: 25px;
`;

const BodyItem = styled.td`
    font-family: 'Roboto', sans-serif;
    background-color: inherit;
    color: #84878b;
    text-transform: capitalize;
    padding: 25px;
`;

export {
    TransactionTable,
    HeadTitle,
    BodyItem,
};
