import { Table, Head, HeadName, Row, Body, Cell } from './Transactions.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table className="transaction-history">
      <Head>
        <Row>
          <HeadName>Type</HeadName>
          <HeadName>Amount</HeadName>
          <HeadName>Currency</HeadName>
        </Row>
      </Head>
      {items.map(({ id, type, amount, currency }) => (
        <Body key={id}>
          <Row>
            <Cell>{type}</Cell>
            <Cell>{amount}</Cell>
            <Cell>{currency}</Cell>
          </Row>
        </Body>
      ))}
    </Table>
  );
};
