- NPM 
    Có 2 cách cài: 
        - Project scope: cài lib vào 1 dự án cụ thể
            - npm install react react-dom --save => dependencies
            - npm i react react-dom              => dependencies

            - npm install --save-dev react react-dom --save => devDependencies
            - npm i -D react react-dom                      => devDependencies

            - npm uninstall react react-dom

        - Global scope : không cài vào 1 dự án cụ thể nào, mà cài vào cái user
                        (account that login to laptop) - tức là cài vào laptop
            - npm i --global create-react-app
            - npm i -g create-react-app

            - npm uninstall -g create-react-app

            - Nếu 'npx create-react-app --help' -> project ko có, global không có 
                -> đi import từ install ở ... về -> lâu
                -> install về thực thi thôi, xong r thì xóa bỏ luôn

- NPX: Khi cài NodeJS -> cài luôn NPM, NPX

        - Cung cấp các lib như file bean
        - Khi cmd 'npx create-react-app' 
            => đi kiểm tra cái folder đang đứng 
            => kiểm tra xem có folder 'node_modules' hay không
            => nếu có -> folder 'bin' -> tìm file 'create-react-app' trong đó
        - npx uninstall create-react-app

    - Tại sao dùng NPX?
        - Không phải cài các lib như của phần NPM vào máy cá nhân
        - Nếu cài lib về máy -> fix cứng lib
            -> không được lastest version in the future
            -> muốn update, phải tự update
        - Chỉ tốn vài s, không quá lâu khi tải về so với cài cứng vài laptop

    - Gặp lỗi khi: npx create-react-app tiktok
        - Không upper case, unikey   

- YARN & NPM
    - file 'package-lock.json' => chứa all lib (giống file pom.xml)
        - Giải quyết được vấn đề lỡ xóa file -> chỉ cần 'npm i' -> dò trong file đó, auto tạo lại
        - Nó như bean lib, lib nào cài rồi thì ko cần cài lại, vì 1 lib có thể chứa nhiều lib khác.
    - phân biệt: 
        - NPM: cài tuần tự
        - YARN: 
            - Cài các lib song song -> cơ chế download đồng bộ (ƯU ĐIỂM)
            - Khi lần đầu install lib, nó sẽ tạo folder để save vào nó (backup).
              Nên lần tới install -> check trong folder backup có chưa, có thì lấy, ko phải install lại.
              -> Tốn dung lượng lưu trữ hơn (NHƯỢC ĐIỂM)
- YARN install

- Lưu ý: 
    - Luôn bật development server (npm start || yarn start)
    - Muốn dùng lệnh khác thì tạo terminal mới

_______________________________________________________________________________________________________

Tóm tắt video (welcome các bạn góp ý thêm): NPM: Bộ Quản lý package của node JS, là 1 kho lưu trữ thư viện code JS trực tuyến để tiện sử dụng, tránh việc phải lặp lại code khi bắt đầu một dự án mới. để sử dụng các thư viện trên NPM, bạn chạy một dòng lệnh để tải 1 tệp về. tuỳ thuộc vào câu lệnh mà thư viện tải về thông qua NPM sẽ là thư viện local hoặc global

local:
Thao thác install dependencies và install dev dependences, uninstall
global: thao tác: install và uninstall
NPX: là trình để thực thi bất cứ tài nguyên nào từ NPM mà không phải cài đặt tài nguyên đó vào máy.
tóm lại là:

NPM là để install, còn NPX là để chạy.

Nếu muốn chạy package bằng NPM thì phải install packge đó trước vào file package.JSON rồi mới chạy được, còn chạy package bằng NPX thì nó sẽ tự động cài và chạy luôn.

YARN thì là NPM mà nhanh hơn 1 tí.