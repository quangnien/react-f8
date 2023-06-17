## Dùng khi nào? (so sánh giữa useState vs useReducer)
- useReducer và useState gần tương đương nhau, những gì state làm được thì reducer cũng làm được tương tự. 
- Trong hầu hết mọi trường hợp sẽ sử dụng useState để tạo ra trạng thái cho component, useState phù hợp cho những component có state đơn giản (state có kiểu dữ liệu là số, chuỗi, boolean, các array, object đơn giản có 1 cấp) hoặc số lượng state ít.
- useReducer phù hợp những tình huống có state phức tạp, kiểu dữ liệu là array, object có nhiều tầng, nhiều lớp, hoặc cần sử dụng nhiều state. Khi đó, useReducer được sử dụng để code trông gọn gàng, logic hơn.

## Các bước thực hiện (so sánh giữa useState vs useReducer)

#### Các bước sử dụng useState
InitState: 0
Actions: Thực hiện logic

#### Các bước sử dụng useReducer
InitState: 0
Actions: Thực hiện logic
Reducer: Tạo ra reducer
Dispatch: Kích hoạt actions

## Sử dụng
reducer ở đây là một hàm, hàm reducer nhận đối số là state và action reducer(state, action)
useReducer ở đây vẫn là hàm và nhận vào 3 đối số, thông thường chỉ sử dụng 2
... - const [value,dispatch] [useReducer(Reducer,InitState)] ...

## Nguyên lý hoạt động
- const [value,dispatch] [useReducer(Reducer,InitState)]

Khi lần đâu component được mounted, useReducer sẽ được chạy, useReducer nhận tham số đầu tiên là reducer, hàm reducer này sẽ được tạm để đây (chưa vội gọi hàm trong lần đâu tiên chạy) và useReducer tiếp tục nhận về tham số thứ 2 là giá trị khởi tạo sau đó return về một array và gán cho [value]. dispatch ở đây chính là một hàm và hàm này dùng để kích hoạt action

Khi sự onClick button Down, dispatch mang theo DOWN_ACTION đi gọi tới hàm reducer, khi này hàm reducer với đối số đầu tiên là initState được truyền vào tham số state, còn tham số thứ 2 là action thì nhận DOWN_ACTION làm đối số. Logic bên trong reducer được thực thi, trong trường hợp này thì hàm return state - 1 tức là initState - 1 = 0 - 1 = -1. Và state mới của component được update lại. tức là cái biến count á, cập nhật lại thì component re-render lại thui

## Cách dùng
-----jsx-----

// Init State

// Actions

// Reducer

// Dispatch

// useReducer lần đầu chạy không gọi reducer mà gán giá trị initState cho count

-----*-----