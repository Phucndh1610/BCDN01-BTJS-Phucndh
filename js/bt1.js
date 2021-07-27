console.log("Bài 1 : Tính Lương nhân viên")
/**
 * Tính lương nhân viên 
 * 
 * Khối 1: input
 * Tiền lương 1 ngày
 * tienluong
 * 
 * 
 * Khối 2: các bước xử lý 
 * B1: tạo biến và gán giá trị cho tiền lương
 * tienluong
 * B2: tạo biến chưa số ngày làm , lương
 * date, luong
 * B3: tính tiền lương
 * luong = tienluong * date
 * 
 * 
 * khối 3: Output
 * luong : tiền lương nhân viên
 * 
 */

//tạo và gán giá trị
var tienLuong = 100000;
var date = 30;
var luong = 0;

console.log("tiền lương trong 1 ngày:" +tienLuong);
console.log("số ngày làm :" + date);
// tính lương nhân viên
luong = date * tienLuong;
console.log("tiền lương của nv là:" + luong)