import pool from '../configs/connectDB';
import multer from 'multer';
import path from 'path';

let getHomepage = async (req, res) => {
     const [rows, fields] = await pool.execute('SELECT * FROM DICHVU');
 
     return res.render('index.ejs', { dataUser: rows, test: 'abc string test' })
}

let getDetailPage = async (req, res) => {
     let userId = req.params.maDV;
     let [user] = await pool.execute(`select * from DICHVU where maDV = ?`, [userId]);
     return res.send(JSON.stringify(user))
 }

let createNewUser = async (req, res) => {
    let {maDV, tenDV, giaDV} = req.body;
 
    await pool.execute('insert into DICHVU(maDV, tenDV, giaDV) values (?, ?, ?)',
         [maDV, tenDV, giaDV]);
     
    // load ve trang chinh
    return res.redirect('/')
}

let deleteUser = async (req, res) => {
    let userId = req.body.userId;
    await pool.execute('delete from DICHVU where maDV = ?', [userId]);
    return res.redirect('/');
}

let getEditPage = async (req, res) => {
    let userId = req.params.maDV;
    let [user] = await pool.execute('select * from DICHVU where maDV = ?', [userId]);
    return res.render('update.ejs', { dataUser: user[0] });
}

let postUpdateUser = async (req, res) => {
    let { maDV, tenDV, giaDV } = req.body;

    await pool.execute('update DICHVU set maDV= ?, tenDV = ?  where giaDV = ?',
        [maDV, tenDV, giaDV]);

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

// const upload = multer().single('profile_pic');

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

let handleUploadMultipleFiles = async (req, res) => {

    if (req.fileValidationError) {
        return res.send(req.fileValidationError);
    }
    else if (!req.files) {
        return res.send('Please select an image to upload');
    }

    let result = "You have uploaded these images: <hr />";
    const files = req.files;
    let index, len;

    // Loop through all the uploaded images and display them on frontend
    for (index = 0, len = files.length; index < len; ++index) {
        result += `<img src="/image/${files[index].filename}" width="300" style="margin-right: 20px;">`;
    }
    result += '<hr/><a href="/upload">Upload more images</a>';
    res.send(result);

}

module.exports = {
    getHomepage, getDetailPage, createNewUser, deleteUser, getEditPage,
    postUpdateUser, getUploadFilePage, handleUploadFile, handleUploadMultipleFiles
}