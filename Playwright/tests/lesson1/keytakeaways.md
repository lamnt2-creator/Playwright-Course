1. Automation test giúp quá trình regression test nhanh và ít tốn tài nguyên hơn khi deploy 1 feature mới trong quá trình phát triển sản phẩm
2. Playwright so với Selenium: Nhanh hơn, dễ sử dụng hơn. Có đội ngũ support từ Microsoft nên các update sẽ thường xuyên hơn
3. Biến giúp lưu trữ giá trị giúp sử dụng thuận tiện hơn và khi muốn chỉnh sửa thì chỉ cần chỉnh sửa 1 chỗ. Các yếu tố liên quan đến biến bao gồm: Khai báo biến, tên biến, kiểu dữ liệu
- Từ khóa khai báo biến: const, var, let. Hiện chỉ cần tập trung vào const và let
+ Const: Giá trị cố định. VD: 1 Url cố định
+ Let: Giá trị có thể thay đổi. VD: Giá trị tổng trong phép tính
- Các kiểu khai báo biến: CamelCase và UpperCase
+ CamelCase: thường dùng cho let. VD: myComputer
+ UpperCase: thường dùng cho const. VD: URL
- Các kiểu dữ liệu: number (số), string (chuỗi), boolean (đúng/sai), any (tất cả)
4. Toán tử
- Toán tử số học: Các phép tính cơ bản, chia lấy số nguyên và số dư
- Toán tử so sánh
+ '==': chỉ so sánh value, không so sánh kiểu dữ liệu
+ '===': có so sánh cả kiểu dữ liệu (khuyến cáo luôn sử dụng)
- Toán tử kết hợp
+ AND '&&': Tất cả các biến đều phải đúng
+ OR '||': Chỉ cần 1 biến đúng
+ Đảo ngược '!': Đảo ngược giá trị của biến