import {
  TransTable,
  TableCell,
  TableHeadline,
} from './TransactionHistory.styled';

export const TransactionHistory = transactions => {
  // console.log(transactions.transactions);
  return (
    <TransTable>
      <thead>
        <tr>
          <TableHeadline>Type</TableHeadline>
          <TableHeadline>Amount</TableHeadline>
          <TableHeadline>Currency</TableHeadline>
        </tr>
      </thead>
      <tbody>
        {transactions.transactions.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <TableCell>{type}</TableCell>
            <TableCell>{amount}</TableCell>
            <TableCell>{currency}</TableCell>
          </tr>
        ))}
      </tbody>
    </TransTable>
  );
};
