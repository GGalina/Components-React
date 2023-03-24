import styled from 'styled-components';

const randomColor = () => {
  return `#`+ Math.floor(Math.random() * 16777215).toString(16);
};

const StatisticsBlock = styled.ul`
    margin-top: 100px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    width: 900px;
`;

const Title = styled.h2`
    font-family: 'Roboto', sans-serif;
    background-color: #ffffff;
    color: #8a8a8f;
    text-transform: uppercase;
    padding: 50px;
`;

const List = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

const ListItem = styled.li`
    background-color: ${randomColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const Label = styled.span`
    font-family: 'Roboto', sans-serif;
    font-size: 22px;
    padding-top: 8px;
`;

const Percentage = styled.span`
    font-size: 24px;
    font-weight: bold;
`;

export {
    StatisticsBlock,
    Title,
    List,
    ListItem,
    Label,
    Percentage,
};
