'use strict';

// Users
const createUser = require('./functions/users/createUser').createUser;
const getUsers = require('./functions/users/getUsers').getUsers;
const getUserbyId = require('./functions/users/getUserbyId').getUserbyId;
const updateUser = require('./functions/users/updateUser').updateUser;
const deleteUser = require('./functions/users/deleteUser').deleteUser;

// Sellers
const createSeller = require('./functions/sellers/createSeller').createSeller;
const getSellers = require('./functions/sellers/getSellers').getSellers;
const getSellerbyId = require('./functions/sellers/getSellerbyId').getSellerbyId;
const updateSeller = require('./functions/sellers/updateSeller').updateSeller;
const deleteSeller = require('./functions/sellers/deleteSeller').deleteSeller;

// Products
const createProduct = require('./functions/products/createProduct').createProduct;
const getProducts = require('./functions/products/getProducts').getProducts;
const getProductbyId = require('./functions/products/getProductbyId').getProductbyId;
const updateProduct = require('./functions/products/updateProduct').updateProduct;
const deleteProduct = require('./functions/products/deleteProduct').deleteProduct;

// Categories
const createCategory = require('./functions/categories/createCategory').createCategory;
const getCategories = require('./functions/categories/getCategories').getCategories;
const getCategorybyId = require('./functions/categories/getCategorybyId').getCategorybyId;
const updateCategory = require('./functions/categories/updateCategory').updateCategory;
const deleteCategory = require('./functions/categories/deleteCategory').deleteCategory;

// Admin
const createAdmin = require('./functions/admin/createAdmin').createAdmin;
const getAdmin = require('./functions/admin/getAdmin').getAdmin;
const getAdminbyId = require('./functions/admin/getAdminbyId').getAdminbyId;
const updateAdmin = require('./functions/admin/updateAdmin').updateAdmin;
const deleteAdmin = require('./functions/admin/deleteAdmin').deleteAdmin;

module.exports.handler = async (event) => {
  const { httpMethod, path } = event;
  const pathParameters = event.pathParameters || {};

  try {
    // Users
    if (path.startsWith('/dev/users')) {
      if (httpMethod === 'POST') {
        return await createUser(event);
      } else if (httpMethod === 'GET') {
        if (pathParameters.id) {
          return await getUserbyId(event);
        } else {
          return await getUsers(event);
        }
      } else if (httpMethod === 'PUT' && pathParameters.id) {
        return await updateUser(event);
      } else if (httpMethod === 'DELETE' && pathParameters.id) {
        return await deleteUser(event);
      }
    }

    // Sellers
    if (path.startsWith('/dev/sellers')) {
      if (httpMethod === 'POST') {
        return await createSeller(event);
      } else if (httpMethod === 'GET') {
        if (pathParameters.id) {
          return await getSellerbyId(event);
        } else {
          return await getSellers(event);
        }
      } else if (httpMethod === 'PUT' && pathParameters.id) {
        return await updateSeller(event);
      } else if (httpMethod === 'DELETE' && pathParameters.id) {
        return await deleteSeller(event);
      }
    }

    // Products
    if (path.startsWith('/dev/products')) {
      if (httpMethod === 'POST') {
        return await createProduct(event);
      } else if (httpMethod === 'GET') {
        if (pathParameters.id) {
          return await getProductbyId(event);
        } else {
          return await getProducts(event);
        }
      } else if (httpMethod === 'PUT' && pathParameters.id) {
        return await updateProduct(event);
      } else if (httpMethod === 'DELETE' && pathParameters.id) {
        return await deleteProduct(event);
      }
    }

    // Categories
    if (path.startsWith('/dev/category')) {
      if (httpMethod === 'POST') {
        return await createCategory(event);
      } else if (httpMethod === 'GET') {
        if (pathParameters.id) {
          return await getCategorybyId(event);
        } else {
          return await getCategories(event);
        }
      } else if (httpMethod === 'PUT' && pathParameters.id) {
        return await updateCategory(event);
      } else if (httpMethod === 'DELETE' && pathParameters.id) {
        return await deleteCategory(event);
      }
    }

    // Admin
    if (path.startsWith('/dev/admin')) {
      if (httpMethod === 'POST') {
        return await createAdmin(event);
      } else if (httpMethod === 'GET') {
        if (pathParameters.id) {
          return await getAdminbyId(event);
        } else {
          return await getAdmin(event);
        }
      } else if (httpMethod === 'PUT' && pathParameters.id) {
        return await updateAdmin(event);
      } else if (httpMethod === 'DELETE' && pathParameters.id) {
        return await deleteAdmin(event);
      }
    }

    return {
      statusCode: 404,
      body: JSON.stringify({
        message: 'Not Found',
      }),
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Internal Server Error',
        error: error.message,
      }),
    };
  }
};
