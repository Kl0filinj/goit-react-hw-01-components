export const TransactionHistory = transactions => {
  //   console.log(transactions.transactions);
  //   let correctTrans = transactions.transactions;
  //   console.log(correctTrans);
  return (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.transactions.map(({ id, type, amount, currency }) => {
          <tr key={id}>
            <td>1</td>
            <td>2</td>
            <td>3</td>
          </tr>;
        })}
      </tbody>
    </table>
  );
};
