# HOOK - GẮN VÀO (GẮN VÀO COMPONENT)
 
-  Được thêm vào React từ phiên bản 16.8.0

-  Bản chất trong JS là hàm được viết sẵn

-  Mỗi hàm này có 1 tính năng cụ thể ứng với trường hợp cụ thể để sử dụng

### 
1. Chỉ dùng cho function component 
    -> Học thẳng luôn, khóa này không có học class component làm gì cả.

2. Giúp component đơn giản và trở nên dễ hiểu
    - Không bị chia logic ra như trên methods trong lifecyle của Class Component
    - Không cần sử dụng "this"

3. Sử dụng Hooks khi nào?
    - Dự án mới => Hooks
    - Dự án cũ
        - Component mới => Function component + Hooks
        - Component cũ  => Giữ nguyên, có thời gian tối ưu sau
    - Logic nghiệp vụ cần sử dụng các tính chất OOP => Class component 

4. Người mới nên bắt đầu với Function hay Class component?
    -> function component (vì dễ tiếp cận hơn)
    
5. Có thể kết hợp sử dụng Function component & Class component được không?
    - Được