- Khác nhau ở thứ tự làm việc
- useLayoutEffect : ít dùng

### useEffect

1. Cập nhật lại state
2. Cập nhật DOM (mutated)
3. Render lại UI
4. Gọi cleanup nếu deps thay đổi
5. Gọi useEffect callback

### useLayoutEffect 

1. Cập nhật lại state
2. Cập nhật DOM (mutated)
3. Gọi cleanup nếu deps thay đổi (sync)
4. Gọi useLayoutEffect callback (sync)
5. Render lại UI