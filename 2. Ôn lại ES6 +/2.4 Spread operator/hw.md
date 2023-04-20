### Cho trước mảng infoArr, hãy viết hàm arrToObj để chuyển array thành object.
#### Gợi ý: Sử dụng phương thức reduce

<pre>
```
const { 
    a = 'default', 
    b, 
    ...rest 
} = {
    b: 'val1',
    c: 'val2',
    d: 'val3'
};

console.log(a, b, rest); // Output: ?
```
</pre>


### ĐA 
<pre>
```
Do object không chứa key a nên a sẽ nhận giá trị mặc định là 'default'.

Giá trị b bằng 'val1' do object có 1 key b có giá trị là 'val1'.

Toán tử rest lấy ra tất cả các key còn lại chưa được lấy ra bằng destructuring. Lúc này, rest bằng object, chứa 2 key còn lại là c và d.
```
</pre>
