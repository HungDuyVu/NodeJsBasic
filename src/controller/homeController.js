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
module.exports = {
     getHomepage, getDetailPage
}