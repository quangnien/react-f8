
<!-- Tóm lại: Dùng memo & useCallback để "performance optimization" aka "tối ưu hiệu năng"

- Memo: Khi cần ngăn chặn thằng component con re-render
- Usecallback: Khi cần ngăn chặn thằng component con re-render, trong trường hợp
component con có tham số là hàm hoặc object. 

Lý do: Việc sử dụng memo là chưa đủ khi tham số của component con là dữ liệu tham chiếu (function hoặc object). Dữ liệu tham chiếu sẽ tạo ra vùng nhớ mới, trong khi memo chỉ sử dụng toán tử '===' để so sánh với tham số của lần render trước đó  <span style="font-family: var(--font-family);">=> Lúc này ta cần xài hook useCallback để giữ lại vùng nhớ đó mỗi khi component được render </span>

Phải sử dụng memo cùng với useCallback vì useCallback là hook bổ trợ cho memo trong
trường hợp tham số của component là kiểu tham chiếu.  -->