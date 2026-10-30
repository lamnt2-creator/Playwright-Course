type Transaction = {
    transactionID: string;
    amount: number;
    currency: string;
    status: 'SUCCESS' | 'FAILED' | 'PENDING';
}

let transaction1: Transaction = {
    transactionID: 'TXN001',
    amount: 500000,
    currency: 'VND',
    status: 'SUCCESS'
};

let transaction2: Transaction = {
    transactionID: 'TXN002',
    amount: 1500000,
    currency: 'VND',
    status: 'PENDING'
};

let transaction3: Transaction = {
    transactionID: 'TXN003',
    amount: 50000,
    currency: 'VND',
    status: 'FAILED'
};

let transaction4: Transaction = {
    transactionID: 'TXN004',
    amount: 2500000,
    currency: 'VND',
    status: 'SUCCESS'
};

let transaction5: Transaction = {
    transactionID: 'TXN005',
    amount: 0,
    currency: 'USD',
    status: 'SUCCESS'
};

let multitransactions: Transaction[] = [transaction1, transaction2, transaction3, transaction4, transaction5];

console.log(multitransactions.length);

console.log(multitransactions[0]);

console.log(multitransactions[2].transactionID);

console.log(multitransactions[multitransactions.length - 1].status);

console.log(multitransactions[0].amount + multitransactions[1].amount);

let transactionIDs = multitransactions.map(transaction => transaction.transactionID);

console.log(transactionIDs);

let statusSuccess = multitransactions.filter(transaction => transaction.status === 'SUCCESS');

console.log(statusSuccess);

let currencyVND = statusSuccess.filter(transaction => transaction.currency === 'VND');

console.log(currencyVND);

let vndtransactionIDs = currencyVND.map(transaction => transaction.transactionID);

console.log(vndtransactionIDs);

let failedTransaction = multitransactions.filter(transaction => transaction.status === 'FAILED');

console.log(failedTransaction[0].transactionID);