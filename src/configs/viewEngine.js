import express from "express";

const configViewEngine = (app) => {
    // xet quyen truy cap vao thu muc public
    app.use(express.static('./src/public'))

    app.set("view engine", "ejs");
    app.set("views", "./src/views")
}

export default configViewEngine;