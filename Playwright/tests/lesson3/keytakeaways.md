1. Câu lệnh If ... else: Nếu điều kiện thỏa mãn thì sẽ thực thi câu lệnh của "if", nếu không sẽ thực thi câu lệnh của "else"

let gender: string = "Male";

if (gender === "Male") {
    console.log("Là con trai");
} else {
    console.log("Khác");
}

- Khi có nhiều điều kiện sử dụng else if. Lưu ý: Khai báo kiểu type cho biến để đảm bảo else cho ra kết quả như mong muốn

type Weekday = "Monday" | "Tuesday" | "Wednesday" | "Thursday";

let day: string = "Monday";

if (day === "Monday") {
    console.log("Thứ 2");
} else if (day === "Tuesday") {
    console.log("Thứ 3");
} else if (day === "Wednesday") {
    console.log("Thứ 4");
} else {
    console.log("Thứ 5");
}

- Nên sử dụng switch trong trường hợp có quá nhiều điều kiện

switch (day) {
    case "Monday":
        console.log("Thứ 2");
        break;
    case "Tuesday":
        console.log("Thứ 3");
        break;
    case "Wednesday":
        console.log("Thứ 4");
        break; 
    default:
        console.log("Thứ 5");
}

- Cách viết khác cho điều kiện 2 ngôi

gender === "Male" ? console.log("Là con trai") : console.log("Khác");

2. Vòng lặp "for"

let paymentmethod: string[] = ["QT", "NĐ", "QR", "VietQR"];

for (let i = 0; i < paymentmethod.length; i++) {
    console.log(paymentmethod[i]);
}

Trong đó: 
- Điều kiện bắt đầu: biến chạy từ vị trí nào trong mảng. VD trên i = 0 là vị trí đầu tiên trong mảng
- Điều kiện dừng: vòng lặp kết thúc ở vị trí nào trong mảng. VD trên i < paymentmethod.length là chạy hết mảng
- Điều kiện tăng: thay biến cũ bằng biến khác trong mảng. VD trên i++ là thay biến cũ bằng biến ở vị trí tiếp theo trong mảng (i++ = i + 1)

3. Các ví dụ

- Kết hợp vòng lặp "for" và điều kiện "if ... else"

let arrNumbers: number[] = [2, 5, 6, 8, 9, 11];

for (let i = 0; i < arrNumbers.length; i++) {
    if (arrNumbers[i] % 2 === 0) {
        console.log(arrNumbers[i] + " là số chẵn");
    } else {
        console.log(arrNumbers[i] + " là số lẻ");
    }
}

- Lọc giá trị 1 mảng để đưa sang mảng khác

let arrNumbers: number[] = [2, 5, 6, 8, 9, 11];

let soChan: number[] = [];

for (let i = 0; i < arrNumbers.length; i++) {
    if (arrNumbers[i] % 2 === 0) {
        soChan.push(arrNumbers[i]);
    }
}
console.log(soChan);