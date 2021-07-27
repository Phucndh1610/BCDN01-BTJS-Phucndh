console.log("Bài 4: Tính diện tích, chu vi hình chữ nhật");
/**
 * Khối 1: input
 * 2 cạnh hình chữ nhật
 * chieudai
 * chieurong
 * 
 * khối 2: 
 * B1: tạo biến và gán giá trị cho chiều dài và chiều rộng
 * chieudai , chieurong
 * B2: tạo 2 biến chứa dienTich và chuVi
 * B3 : xây dựng công thức tính 
 * dienTich = chieuDai * chieuRong;
 * chuVi = (chieuDai + chieuRong) * 2;
 * B4: hiện kết quả dienTich, chuVi
 * 
 * Khối 3: output
 * dientich, chuVi hình chử nhật
 */

// khai báo biến chiều dài chiều rộng
var chieuDai = 15;
var chieuRong = 10;
console.log("chiều dài là " + chieuDai);
console.log("chiều rộng là " + chieuRong);
// khai báo biến dienTich, chuVi
var dienTich = 0;
var chuVi = 0;
// tính chu vi và diện tích
dienTich = chieuDai * chieuRong;
chuVi = (chieuDai + chieuRong) * 2;
// kết quả 
console.log("diện tích HCN là " + dienTich);
console.log("chu vi HCN là " + chuVi);


