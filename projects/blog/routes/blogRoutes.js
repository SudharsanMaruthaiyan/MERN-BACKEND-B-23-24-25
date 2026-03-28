const express = require("express");
const { PrismaClient } = require("@prisma/client");
const { getAllBlog, getBlogById } = require("../controller/blogController");

const blogRoute = express.Router();

const prisma = new PrismaClient();

// GET  =>   /blogs   => Fetch all blog data
blogRoute.get("/blogs", getAllBlog);

// GET  =>  /blogs/:blog_id   => Fetch the blog data by id
blogRoute.get("/blogs/:blog_id", getBlogById);

module.exports = blogRoute;
