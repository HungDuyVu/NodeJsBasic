import pool from '../configs/connectDB';
import multer from 'multer';
import path from 'path';

let getHomepage = async (req, res) => {
     const [rows, fields] = await pool.execute('SELECT * FROM user');
 
     return res.render('index.ejs', { dataUser: rows, test: 'abc string test' })
}

let getDetailPage = async (req, res) => {
     let userId = req.params.id;
     let [user] = await pool.execute(`select * from user where id = ?`, [userId]);
     return res.send(JSON.stringify(user))
 }

let createNewUser = async (req, res) => {
    let { firstName, lastName, email, address } = req.body;
 
    await pool.execute('insert into user(firstName, lastName, email, address) values (?, ?, ?, ?)',
         [firstName, lastName, email, address]);
     
    // load ve trang chinh
    return res.redirect('/')
}

let deleteUser = async (req, res) => {
    let userId = req.body.userId;
    await pool.execute('delete from user where id = ?', [userId]);
    return res.redirect('/');
}

let getEditPage = async (req, res) => {
    let id = req.params.id;
    let [user] = await pool.execute('select * from user where id = ?', [id]);
    return res.render('update.ejs', { dataUser: user[0] });
}

let postUpdateUser = async (req, res) => {
    let { firstName, lastName, email, address, id } = req.body;

    await pool.execute('update user set firstName= ?, lastName = ? , email = ? , address= ? where id = ?',
        [firstName, lastName, email, address, id]);

    return res.redirect('/');
}

let getUploadFilePage = async (req, res) => {
    return res.render('uploadFile.ejs')
}

const imageFilter = function(req, file, cb) {
    // Accept images only
    if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
        req.fileValidationError = 'Only image files are allowed!';
        return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
};

const upload = multer().single('profile_pic');

let handleUploadFile = async (req, res) => {

    if (req.fileValidationError) {

        return res.send(req.fileValidationError);
    }
    else if (!req.file) {
        return res.send('Please select an image to upload');
    }

    // Display uploaded image for user validation
    res.send(`You have uploaded this image: <hr/><img src="/image/${req.file.filename}" width="500"><hr /><a href="/upload">Upload another image</a>`);
    // });
}

module.exports = {
    getHomepage, getDetailPage, createNewUser, deleteUser, getEditPage,
    postUpdateUser, getUploadFilePage, handleUploadFile
}