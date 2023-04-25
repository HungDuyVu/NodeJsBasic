import pool from '../configs/connectDB';

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

module.exports = {
    getHomepage, getDetailPage, createNewUser, deleteUser, getEditPage,
    postUpdateUser
}