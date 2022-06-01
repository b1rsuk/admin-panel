/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
}

module.exports = {
  env: {
    postAuth: 'http://localhost:5000/authorization',
    menu: 'http://localhost:5000/menu',
    createCategory: 'http://localhost:5000/create/category',
    categoryEdit: 'http://localhost:5000/edit/category',
    delete: 'http://localhost:5000/delete',
    note: 'http://localhost:5000/save/note',
    deleteImageProduct: `http://localhost:5000/delete/image`,
    createProduct: 'http://localhost:5000/create/product',
    saveImage: 'http://localhost:5000/save/image',
    editProduct: 'http://localhost:5000/edit/product',
    saveUser: 'http://localhost:5000/save/user',
    limitServices: `http://localhost:5000/limit/services`,
    product: 'http://localhost:5000/product/',
    columns: 'http://localhost:5000/',
    limitTable: 'http://localhost:5000/limit/',
    demensions: 'http://localhost:5000/demensions',
    material: 'http://localhost:5000/material',
    delMaterial: 'http://localhost:5000/delete/material/',
    categoryTable: 'http://localhost:5000/table/category/',
    dellCategory: 'http://localhost:5000/delete/category',
    saveScheme: 'http://localhost:5000/save/scheme',
    deleteScheme: 'http://localhost:5000/delete/scheme',
    saveImageCreate: 'http://localhost:5000/save/image/category'
  },
}