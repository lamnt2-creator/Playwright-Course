File ts: Chứa logic if else, tính toán
File spec.ts: Chứa logic test, step, expect

Chạy testcase node .\"Folder chứa testcase"\File testcase

1. Object: gom nhiều trường thông tin cần khai báo

- Ví dụ khai báo lẻ từng trường:

let name: string = "lamnt";
let age: number = 32;

Khi muốn gọi dữ liệu sẽ phải gọi từng lệnh

console.log("name", name)
console.log("age", age)

- Vì vậy có thể gom thông tin thành 1 Object để gọi ra 1 cách thuận tiện

VD:
let person1 = {
    name = "lamnt",
    age = 32,
}

console.log = ("Thông tin người 1:", person1);

- Cách lấy 1 phần thông tin trong Object: Sử dụng object.tên biến cần lấy

VD: console.log ("Tên người 1:", person1.name);

- Không thể định nghĩa lại cả Object được khai báo const nhưng có thể định nghĩa lại từng biến trong đó
VD:
const: person1 = {
    name = "lamnt",
    age = 32,
}

person1.name = "ducbt";
console.log(person1);

Kết quả khi này trả ra name = ducbt, age = 32

Còn nếu khai báo lại cả Object:

person1 = {
    name = "lamnt",
    age = 23,
}

Hệ thống sẽ báo lỗi person1 là const

2. Type: do không thể định nghĩa kiểu dữ liệu cho Object nên chúng ta cần sử dụng tới Type. Tên type viết theo Uppercase, còn biến viết theo Camelcase

type Person = {
     firstName: string;
     lastName: string;
}

- Có 2 cách định nghĩa type: Type và Interface
+ Type: Định nghĩa trực tiếp kiểu dữ liệu được chấp nhận
VD:
type Gender = "Male" | "Female";
let gender: string = "LGBT" -> Lỗi

+ Interface có khả năng merge các biến được khai báo sau (dùng type trong những trường hợp này sẽ báo lỗi)

VD
interface Person = {
     firstName: string;
     lastName: string;
}

interface Person = {
     age: number;
}

- Sử dụng ? khi định nghĩa biến trong Type để coi biến đó là optional khi khai báo Object

VD:
type Person = {
     firstName: string;
     lastName: string;
     age?: number;
}

let person1 = {
    firstName: Lam;
    lastName: Nguyen;
}

Hệ thống sẽ không báo lỗi khi thiếu biến "age" tại Object person1 vì "age" đã được định nghĩa là optional

3. Array: có thể chứa nhiều giá trị

VD
type Transaction = {
    transactionId: string;
    createdDate: string;
    amount: number;
}

let transaction1 = {
    transactionId: 001
    createdDate: 20/10
    amount: 10000
}

let transaction2 = {
    transactionId: 002
    createdDate: 21/10
    amount: 20000
}

let multiTransaction: Transaction[] = [transaction1. transaction2]

- Cách lấy giá trị trong mảng: Index trong mảng đánh số theo thứ tự 0,1,2 ...

VD: Lấy transactionID của transaction1

console.log(multiTransaction[0].transactionId)

- Hàm filter dùng để lọc thông tin từ 1 mảng thành 1 mảng mới

VD
const meeting: string[] = ["lamnt", "ducbt", "sonnt", "ducbt"];

let ducbtArray = meeting.filter(name => name === "ducbt");

console.log(ducbtArray)

Kết quả trả ra ["ducbt", "ducbt"]

- Hàm map để thay đổi thông tin trong mảng

VD
const meeting: string[] = ["lamnt", "ducbt", "sonnt", "ducbt"];

let newArray = meeting.map(name => {
    if (name === "ducbt") {
        return "nguyetdt"
    }
    return name
})
console.log(newArray)

Kết quả trả ra ["lamnt", "nguyetdt", "sonnt", "nguyetdt"]

4. Không nên khai báo biến bằng any

const a: number = 5;
let b: string = "5";
let sum: any = 0;

sum = a + b
console.log(sum)

Lúc này kết quả sẽ trả ra 55. Không chính xác. Nếu sử dụng number để khai báo cho sum thì hệ thống sẽ báo lỗi giúp dễ trace hơn