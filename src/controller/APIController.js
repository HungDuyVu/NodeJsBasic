import pool from '../configs/connectDB';

let getAllUsers = async (req, res) => {
    //http
    // 404 501
    // json/xml => object
    const [rows, fields] = await pool.execute('SELECT * FROM DICHVU');

    return res.status(200).json({
        message: 'ok',
        data: rows
    })
}

let createNewUser = async (req, res) => {
    let { maDV, tenDV, giaDV } = req.body;

    if (!maDV || !tenDV || !giaDV) {
        return res.status(200).json({
            message: 'missing required params'
        })
    }

    await pool.execute('insert into DICHVU(maDV, tenDV, giaDC) values (?, ?, ?)',
        [maDV, tenDV, giaDC]);

    return res.status(200).json({
        message: 'ok'
    })
}

let updateUser = async (req, res) => {
    let { tenDV, giaDV, maDV } = req.body;
    if (!tenDV || !giaDV || !maDV) {
        return res.status(200).json({
            message: 'missing required params'
        })
    }

    await pool.execute('update DICHVU set tenDV = ? , giaDV = ?  where maDV = ?',
        [tenDV, giaDV, maDV]);

    return res.status(200).json({
        message: 'ok'
    })
}
 
let deleteUser = async (req, res) => {
    let userId = req.params.maDV;
    if (!userId) {
        return res.status(200).json({
            message: 'missing required params'
        })
    }
    await pool.execute('delete from DICHVU where id = maDV', [userId])
    return res.status(200).json({
        message: 'ok'
    })
}
 
module.exports = {
    getAllUsers, createNewUser, updateUser, deleteUser 
}