/// Bai 1

// type SystemStatus = "SUCCESS" | "FAILED" | "PENDING";

// interface GatewayResponse {
//   txnId: string;
//   responseCode: string; // "00": Thành công, "07": Nghi vấn, "09": Thẻ chưa kích hoạt, "51": Không đủ số dư
//   amount: number;
// }

// const rawResponses: GatewayResponse[] = [
//   { txnId: "TXN_01", responseCode: "00", amount: 150000 },
//   { txnId: "TXN_02", responseCode: "51", amount: 500000 },
//   { txnId: "TXN_03", responseCode: "07", amount: 2000000 },
//   { txnId: "TXN_04", responseCode: "09", amount: 120000 },
//   { txnId: "TXN_05", responseCode: "99", amount: 350000 }, // Mã lạ
// ];

// let responseCode: string = "01";

// switch (responseCode) {
//   case "00":
//     console.log("Thành công");
//     break;
//   case "07":
//     console.log("Nghi vấn");
//     break;
//   case "09":
//     console.log("Thẻ chưa kích hoạt");
//     break;
//   case "51":
//     console.log("Không đủ số dư");
//     break;
//   default:
//     console.log("Lỗi không xác định");
// }

// type Transaction = {
//   txnId: string;
//   responseCode: string;
//   amount: number;
//   status: SystemStatus;
//   message: string;
// }

// let transaction: Transaction[] = [];

// for (let i = 0; i < rawResponses.length; i++) {
//     if (rawResponses[i].responseCode === "00") {
//         console.log(`Trạng thái là "SUCCESS"`);
//         transaction.push({ txnId: rawResponses[i].txnId, responseCode: rawResponses[i].responseCode, amount: rawResponses[i].amount, status: "SUCCESS", message: "Thành công" });
//     } else if (rawResponses[i].responseCode === "07") {
//         console.log(`Trạng thái là "PENDING"`);
//         transaction.push({ txnId: rawResponses[i].txnId, responseCode: rawResponses[i].responseCode, amount: rawResponses[i].amount, status: "PENDING", message: "Nghi vấn" });
//     } else {
//         console.log(`Trạng thái là "FAILED"`);
//         transaction.push({ txnId: rawResponses[i].txnId, responseCode: rawResponses[i].responseCode, amount: rawResponses[i].amount, status: "FAILED", message: "Lỗi không xác định" });
//     }
// }

// console.log(transaction);

/// Bai 2

// type PaymentMethod = "VIETQR" | "DOMESTIC_CARD" | "INTERNATIONAL_CARD" | "E_WALLET";

// interface IpnPayload {
//   orderId: string;
//   method: PaymentMethod;
//   amount: number;
//   isChecksumValid: boolean; // Kết quả xác thực chữ ký số
//   processed: boolean;
// }

// const ipnQueue: IpnPayload[] = [
//   { orderId: "ORD_101", method: "VIETQR", amount: 350000, isChecksumValid: true, processed: false },
//   { orderId: "ORD_102", method: "DOMESTIC_CARD", amount: 1200000, isChecksumValid: false, processed: false },
//   { orderId: "ORD_103", method: "VIETQR", amount: 800000, isChecksumValid: true, processed: false },
//   { orderId: "ORD_104", method: "INTERNATIONAL_CARD", amount: 4500000, isChecksumValid: true, processed: false },
//   { orderId: "ORD_105", method: "VIETQR", amount: 150000, isChecksumValid: false, processed: false },
// ];

// let validVietQrOrders: string[] = [];

// let totalVietQrAmount: number = 0;

// for (let i = 0; i < ipnQueue.length; i++) {
//     if (ipnQueue[i].isChecksumValid && ipnQueue[i].method === "VIETQR") {
//         validVietQrOrders.push(ipnQueue[i].orderId);
//         ipnQueue[i].processed = true;
//         totalVietQrAmount = totalVietQrAmount + ipnQueue[i].amount;
//     }
// }

// console.log(`Danh sách mã đơn QR hợp lệ: ${validVietQrOrders}`);

// console.log(`Tổng số tiền thu được từ kênh QR: ${totalVietQrAmount}`);

// console.log(ipnQueue);

/// Bai 3

// interface TransactionRecord {
//   id: string;
//   merchantId: string;
//   method: PaymentMethod;
//   grossAmount: number; // Tiền khách thanh toán
// }

// const transactions: TransactionRecord[] = [
//   { id: "T01", merchantId: "MCH_A", method: "VIETQR", grossAmount: 500000 },
//   { id: "T02", merchantId: "MCH_B", method: "DOMESTIC_CARD", grossAmount: 100000 }, // Test phí tối thiểu
//   { id: "T03", merchantId: "MCH_A", method: "DOMESTIC_CARD", grossAmount: 2000000 },
//   { id: "T04", merchantId: "MCH_B", method: "INTERNATIONAL_CARD", grossAmount: 1500000 },
// ];

// interface SettlementRecord {
//   id: string;
//   merchantId: string;
//   grossAmount: number;
//   feeAmount: number;
//   netAmount: number; // Tiền thực nhận của merchant = grossAmount - feeAmount
// }

// let settlements: SettlementRecord[] = [];

// for (let i = 0; i < transactions.length; i++) {
//     switch (transactions[i].method) {
//         case "VIETQR":
//             settlements.push({
//                 id: transactions[i].id,
//                 merchantId: transactions[i].merchantId,
//                 grossAmount: transactions[i].grossAmount,
//                 feeAmount: 1000,
//                 netAmount: transactions[i].grossAmount - 1000
//             });
//             break;  
//         case "DOMESTIC_CARD": {
//             let feeAmount: number = transactions[i].grossAmount * 1.1 / 100;
//             if (feeAmount < 2000) {
//                 feeAmount = 2000;
//             }
//             settlements.push({
//                 id: transactions[i].id,
//                 merchantId: transactions[i].merchantId,
//                 grossAmount: transactions[i].grossAmount,
//                 feeAmount: feeAmount,
//                 netAmount: transactions[i].grossAmount - feeAmount
//             });  
//             break;
//         }
//         case "INTERNATIONAL_CARD": {
//             let feeAmount: number = transactions[i].grossAmount * 2.8 / 100 + 3000;
//             settlements.push({
//                 id: transactions[i].id,
//                 merchantId: transactions[i].merchantId,
//                 grossAmount: transactions[i].grossAmount,
//                 feeAmount: feeAmount,
//                 netAmount: transactions[i].grossAmount - feeAmount
//             });
//             break;
//         }
//     }
// }
// console.log(settlements);

// let highestfeeAmount: number = 0;

// for (let i = 0; i < settlements.length; i++) {
//     if (settlements[i].feeAmount > highestfeeAmount) {
//         highestfeeAmount = settlements[i].feeAmount;
//     }
// }

// let merchantIdWithHighestFee: string = "MCH_A";

// for (let i = 0; i < settlements.length; i++) {
//     if (settlements[i].feeAmount === highestfeeAmount) {
//         merchantIdWithHighestFee = settlements[i].merchantId;
//     }
// }

// console.log(`Merchant phải trả phí cao nhất là: ${merchantIdWithHighestFee}`);

/// Bai 4

// interface Transaction {
//   merchantId: string;
//   amount: number;
//   status: "SUCCESS" | "FAILED";
// }

// const transactions: Transaction[] = [
//   { merchantId: "MCH_01", amount: 100000, status: "SUCCESS" },
//   { merchantId: "MCH_02", amount: 200000, status: "SUCCESS" },
//   { merchantId: "MCH_01", amount: 50000,  status: "SUCCESS" },
//   { merchantId: "MCH_01", amount: 70000,  status: "FAILED" },
//   { merchantId: "MCH_03", amount: 300000, status: "SUCCESS" },
//   { merchantId: "MCH_02", amount: 150000, status: "SUCCESS" },
// ];

// let merchantIds: string[] = [];

// for (let i = 0; i < transactions.length; i++) {
//     let existedMerchantId: boolean = false;
//     for (let j = 0; j < merchantIds.length; j++) {
//         if (transactions[i].merchantId === merchantIds[j]) {
//             existedMerchantId = true;
//         }
//     }
//     if (existedMerchantId === false) {
//         merchantIds.push(transactions[i].merchantId);
//     }
// }
// console.log(`Danh sách merchantId: ${merchantIds}`);

// interface MerchantTotal {
//   merchantId: string;
//   totalAmount: number;
// }

// const result: MerchantTotal[] = [];

// for (let i = 0; i < merchantIds.length; i++) {
//     let totalAmount: number = 0;
//     for (let j = 0; j < transactions.length; j++) {
//         if (transactions[j].merchantId === merchantIds[i] && transactions[j].status === "SUCCESS") {
//             totalAmount = totalAmount + transactions[j].amount;
//         }
//     }
//     result.push({ merchantId: merchantIds[i], totalAmount: totalAmount });
// }

// console.log(result);