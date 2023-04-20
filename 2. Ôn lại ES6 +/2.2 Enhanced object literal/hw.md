### Cho trước mảng infoArr, hãy viết hàm arrToObj để chuyển array thành object.
#### Gợi ý: Sử dụng phương thức reduce

<pre>
```
// Expected results:
/**
const obj1 = arrToObj([
   ['name', 'Son Dang'], 
   ['age', 21], 
   ['address', 'Ha Noi']
])
console.log(obj1)
Output: { name: 'Son Dang', age: 21, address: 'Ha Noi' }

const obj2 = arrToObj([
   ['name', 'Duc Long'], 
   ['age', 18], 
   ['address', 'Ha Noi']
])
console.log(obj2)
Output: { name: 'Duc Long', age: 18, address: 'Ha Noi' }
*/

```
</pre>


### ĐA 
<pre>
```
function arrToObj(arr) {
  return arr.reduce((acc, curr) => {
    acc[curr[0]] = curr[1];
    return acc;
  }, {});
}
```
</pre>

#### Explain
- Hàm arrToObj nhận vào một mảng arr và trả về một object.
- Phương thức reduce được sử dụng để lặp qua từng phần tử của mảng arr và thực hiện các thao tác để chuyển đổi mảng thành object.
- Tham số đầu tiên của phương thức reduce là một callback function được sử dụng để thực hiện các thao tác trên từng phần tử của mảng. Callback function này nhận vào hai tham số:
- Biến accumulator (viết tắt là acc) để lưu trữ giá trị tích lũy của từng bước lặp.
- Biến current (viết tắt là curr) để lưu trữ giá trị hiện tại của phần tử trong mảng.
- Ban đầu, giá trị của biến accumulator được khởi tạo là một object rỗng {} bằng cách truyền vào tham số thứ hai cho phương thức reduce.
- Trong mỗi bước lặp, chúng ta tạo ra một thuộc tính mới cho object accumulator với tên là giá trị đầu tiên của phần tử trong mảng curr (curr[0]), và giá trị là giá trị thứ hai của phần tử trong mảng curr (curr[1]). Lưu ý rằng chúng ta sử dụng cú pháp acc[curr[0]] để tạo một thuộc tính với tên là giá trị đầu tiên của phần tử trong mảng curr.
- Cuối cùng, hàm trả về object accumulator đã được tích lũy giá trị trong từng bước lặp.