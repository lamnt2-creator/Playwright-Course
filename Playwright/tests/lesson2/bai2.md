1. Thêm phần tử vào 1 mảng .push()

let arr = [1, 2, 3];

arr.push(4);

console.log(arr);
// [1, 2, 3, 4]

- Nếu muốn thêm nhiều phần tử

arr.push(4, 5, 6);

Kết quả: [1, 2, 3, 4, 5, 6]

- Ngoài ra tùy vị trí muốn thêm:

| Cách | Vị trí thêm | Ví dụ |
|---|---|---|
| `push()` | Cuối mảng | `arr.push(4)` |
| `unshift()` | Đầu mảng | `arr.unshift(0)` |
| `splice()` | Vị trí bất kỳ | `arr.splice(2, 0, 99)` |
| Spread `...` | Tạo mảng mới | `arr = [...arr, 4]` |

- Ví dụ với mảng object thường gặp khi viết Playwright:

let data = [
  { username: "Lam1", status: "Pass" }
];

data.push({
  username: "Lam2",
  status: "Pass"
});

console.log(data);

Kết quả

[
  { username: "Lam1", status: "Pass" },
  { username: "Lam2", status: "Pass" }
]

2. Xóa phần tử khỏi mảng
- Xóa phần tử cuối mảng — pop()
let arr = [1, 2, 3, 4];

arr.pop();

console.log(arr);
// [1, 2, 3]

- Xóa phần tử đầu tiên — shift()
let arr = [1, 2, 3, 4];

arr.shift();

console.log(arr);
// [2, 3, 4]

- Xóa theo vị trí — splice()

Ví dụ xóa phần tử ở index 2:

let arr = [10, 20, 30, 40];

arr.splice(2, 1);

console.log(arr);
// [10, 20, 40]

Trong đó

arr.splice(2, 1);
//         ↑  ↑
//       index số phần tử muốn xóa

- Xóa theo giá trị — filter()

Ví dụ muốn xóa số 30:

let arr = [10, 20, 30, 40];

arr = arr.filter(item => item !== 30);

console.log(arr);
// [10, 20, 40]

- Tổng hợp

arr.push(x);       // thêm cuối
arr.pop();         // xóa cuối
arr.unshift(x);    // thêm đầu
arr.shift();       // xóa đầu
arr.splice(i, 1);  // xóa tại index i
arr.length;        // số lượng phần tử
