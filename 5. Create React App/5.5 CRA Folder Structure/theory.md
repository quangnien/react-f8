- node_modules
    - Chứa all những lib được cài đặt trong dự án 

- public
    - Tất cả các file nằm trong public đều có thể được truy cập 
      trực tiếp thông qua cái đường link web đang chạy
    - file 'index' luôn được trỏ tới khi đường dẫn ko tồn tại / bị sai
      để cho trang web luôn được hiển thị

- source -> chứa source code

- .gitignore : chứa config những file sẽ ko đưa lên git (vd: node_modules : rất nặng)

- package.json : ~ file pom, khai báo các lib
                -> khi user another checkout -> cần run lại cmd 'npm i' / 'yarn' to install các lib

- src
    - index.js : 
    -  reportWebVitals.js : sau này sẽ gửi cái file này lên ... 
                            để phân tích nhằm mục đích tối ưu trải nghiệm user
    - setupTests.js : viết test các component thôi