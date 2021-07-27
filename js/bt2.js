console.log("Bài 2 : tính giá trị trung bình");
/**
 * Khối 1 : input
 * 5 số thực 
 * num1, num2, num3, num4, num5
 * 
 * Khối 2: 
 * B1: tạo và gán giá trị cho 5 số thực
 * B2: tạo biến chứa giá trị trung bình của 5 số thực
 * B3: tính giá trị trung bình của 5 số thực
 * trungBinhTong = (num1 + num2 + num3 + num4 + num5) / 5
 * 
 * Khối 3:
 * trungBinhTong : giá trị trung bình của 5 số thực 
 */

// khai báo và gán giá trị cho 5 số thực
var num1 = 5;
var num2 = 10;
var num3 = 15;
var num4 = 320;
var num5 = 125;

console.log("số thực 1:" + num1);
console.log("số thực 2:" + num2);
console.log("số thực 3:" + num3);
console.log("số thực 4:" + num4);
console.log("số thực 5:" + num5);
// khai báo biến chứa giá trị trung bình
var trungBinhTong = 0;
// tính giá trị trung bình 
trungBinhTong = (num1 + num2 + num3 + num4 + num5) / 5;
console.log("giá trị trung bình :" + trungBinhTong);