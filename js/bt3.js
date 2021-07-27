console.log("bài 3: Quy đổi tiền");
/**
 * Khối 1: input
 * giá USD hiện tại
 * usd
 * 
 * Khối 2: 
 * B1: tạo và gán giá trị usd cần đổi ra tiền VND
 * USD
 * B2: tạo biến và gán giá trị với mệnh giá VND
 * VND
 * B3: tính số tiền quy đổi
 * soTienDoi = USD * VND
 * 
 * Khối 3: output
 * số tiền được đổi ra
 */
// tạo biến và gán giá trị cho nó
var USD = 100;
var VND = 23500;
var soTienDoi = 0;

console.log("số USD cần đổi:" + USD);
console.log("mệnh giá tiền VND:" + VND);
// tính số tiền quy đổi
soTienDoi = USD * VND;
console.log("Số tiền sau quy đổi:" +soTienDoi);