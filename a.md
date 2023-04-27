Buoc 1: khoi tao npm tao file package.json 
Buoc 2: Khoi tao thu vien npm install --save-exact express@4.17.1
Buoc 3: Cai dat view engine: vua viet html, vua viet dieu kien logic (ejs): npm install --save-exact ejs@3.1.6
     Thu muc 'configs': cau hinh tham so cua he thong
Buoc 4: fix loi de code chay tren moi phien ban npm install --save-exact body-parser@1.19.0 nodemon@2.0.12 @babel/core@7.15.5 @babel/node@7.15.4 @babel/preset-env@7.15.6
     export default function: share cac function giua cac file

static file: nhung file cho phep nguoi dung tu phia trinh duyet co the truy cap duoc

Buoc 5: cai dat dotenv npm install --save-exact dotenv@10.0.0

Buoc 6 to chuc code theo mo hinh mvc
     - controller: nhan req - yeu cau tu nguoi dung gui len va xu ly du lieu
     - Model: ket noi truc tiep den database roi chuyen du lieu len
     - view: hien thi nguoi dung

Cac requests:
     Lay thong tin ve: GET
     Them moi data vao database: POST
     CRUD: create/read/update/delete
          POST/GET/PUT/DELLETE

Buoc 6: cai day mysql2 npm install --save-exact mysql2@2.3.0

Tham so tren router:
     Route path: /users/:userId/books/:bookId
     Request URL: http://localhost:3000/users/34/books/8989
     req.params: { "userId": "34", "bookId": "8989" }


Buoc 7: RESTfull APT     
     cài đặt postman API

Buoc 8: cai dat upload file - multer
     npm install --save-exact multer@1.4.3
     upload file: single / multiple phu thuoc HTML
     path: lay duong dan cua file
     npm install --save-exact app-root-path@3.0.0

Buoc 9: Middleware: function viet tren server o giua request va response
     logging middleware: ghi lai thong tin nguoi dung gui len
     authentication check middleware: check quyen cua nguoi dung
     middleware to parse JSON data from Request:
     npm install --save-exact morgan@1.10.0
