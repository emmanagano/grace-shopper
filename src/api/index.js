const BASE_URL = 'http://localhost:3001/api';
const lstoken = localStorage.getItem('token');

export const fetchAdmin = async () => {
  try {
    const response = await fetch(`${BASE_URL}/user/admin`);
    const info = await response.json();
    // console.log("fetchAdmin", info.users);
    return info.users;
  } catch (error) {
    console.error(`Error retrieving admins ${error}`);
  }
};

export const registerAdmin = async (email, username, password, isAdmin) => {
  try {
    const response = await fetch(`${BASE_URL}/user/register/admin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        username,
        password,
        isAdmin,
      }),
    });
    const info = await response.json();

    return info;
  } catch (error) {
    console.error(`Error registering a user ${error}`);
  }
};

export const addProducts = async (
  localSourcedToken,
  title,
  price,
  category,
  description,
  imgURL,
  inventory
) => {
  try {
    const response = await fetch(`${BASE_URL}/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${lstoken}`,
      },

      body: JSON.stringify({
        title,
        price,
        category,
        description,
        imgURL,
        inventory,
      }),
    });
    const info = await response.json();
    return info;
  } catch (error) {
    console.error(`Error adding products ${error}`);
  }
};

export const fetchAllUsers = async () => {
  const response = await fetch(`${BASE_URL}/user/view`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${lstoken}`,
    },
  });
  const info = response.json();
  console.log(info);
  return info;
};
//
export const updateProducts = async (
  localSourcedToken,
  id,
  title,
  price,
  category,
  description,
  imgURL,
  inventory
) => {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localSourcedToken}`,
      },
      body: JSON.stringify({
        title,
        price,
        category,
        description,
        imgURL,
        inventory,
      }),
    });
    const info = await response.json();
    return info;
  } catch (error) {
    console.error(`Error updating products ${error}`);
  }
};

export const deleteProducts = async (id, token) => {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const info = await response.json();

    return info;
  } catch (error) {
    console.error(`Error deleting a product ${error}`);
  }
  try {
    const response = await fetch(`${BASE_URL}/products`);
    const info = await response.json();
    return info.products;
  } catch (error) {
    throw error;
  }
};

export const fetchUser = async () => {
  try {
    const response = await fetch(`${BASE_URL}/user/me`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${lstoken}`,
      },
    });
    console.log(response);
    const info = await response.json();
    console.log(info);
    return info;
  } catch (error) {
    throw error;
  }
};

export const fetchProducts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/products`);
    const info = await response.json();
    return info.products;
  } catch (error) {
    throw error;
  }
};

export const fetchProductById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`);
    const info = await response.json();
    return info.product;
  } catch (error) {
    throw error;
  }
};

export const fetchProductByCategory = async (category) => {
  try {
    const response = await fetch(`${BASE_URL}/products/categories/${category}`);
    const info = await response.json();
    return info.products;
  } catch (error) {
    throw error;
  }
};

export const register = async (email, username, password) => {
  try {
    const response = await fetch(`${BASE_URL}/user/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        username,
        password,
      }),
    });
    const info = await response.json();

    return info;
  } catch (error) {
    console.error(`Error registering a user ${error}`);
  }
};

export const login = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}/user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const info = await response.json();
    console.log('login_response', info);
    return info;
  } catch (error) {
    console.error(`Error loging in a user ${error}`);
  }
};

export const RemoveProductFromCart = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/cart/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${lstoken}`,
      },
    });
    const info = await response.json();
    return info;
  } catch (error) {
    throw error;
  }
};

export const userInfo = async () => {
  try {
    const response = await fetch(`${BASE_URL}/user/me`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${lstoken}`,
      },
    });
    const info = await response.json();
    console.log('userInfo', info);
    return info;
  } catch (error) {
    console.error(`Error retrieving user information ${error}`);
  }
};

export const createCart = async () => {
  try {
    const response = await fetch(`${BASE_URL}/cart/create`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${lstoken}`,
      },
    });
    const info = response.json();
    return info;
  } catch (error) {
    throw error;
  }
};
export const editProductCount = async (count, id) => {
  try {
    const response = await fetch(`${BASE_URL}/cart/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${lstoken}`,
      },
      body: JSON.stringify({
        count,
      }),
    });
    const info = response.json();
    return info;
  } catch (error) {
    throw error;
  }
};

export const purchaseCart = async () => {
  try {
    const response = await fetch(`${BASE_URL}/cart/purchase`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${lstoken}`,
      },
    });
    const info = await response.text();
    return info;
  } catch (error) {
    throw error;
  }
};

export const addToCart = async (
  lstoken,
  price,
  productId,
  count,
  imgURL,
  title,
  description,
  inventory
) => {
  try {
    console.log(lstoken);
    if (!lstoken) {
      let edit = false;
      const productArr = JSON.parse(localStorage.getItem('products'));
      console.log(productArr);
      if (!productArr) {
        localStorage.setItem(
          'products',
          JSON.stringify([
            { price, productId, count, imgURL, title, description, inventory },
          ])
        );
        return;
      }
      for (const product of productArr) {
        if (product.productId === productId) {
          count = Number(count);
          product.count = Number(product.count);
          edit = true;
          product.count += count;
          localStorage.setItem('products', JSON.stringify(productArr));
        }
      }
      if (edit) {
        return;
      }

      productArr.push({
        price,
        productId,
        count,
        imgURL,
        title,
        description,
        inventory,
      });
      localStorage.setItem('products', JSON.stringify(productArr));
      return;
    }
    const response = await fetch(`${BASE_URL}/cart`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${lstoken}`,
      },
      body: JSON.stringify({
        price,
        productId,
        count,
      }),
    });
    const info = await response.json();
    console.log(info);
    return info;
  } catch (error) {
    throw error;
  }
};

export const getProductsFromCart = async () => {
  try {
    const response = await fetch(`${BASE_URL}/cart/`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${lstoken}`,
      },
    });
    const info = await response.json();
    return info.cart;
  } catch (error) {
    throw error;
  }
};

export const fetchReviews = async (id) => {
  try {
    const resp = await fetch(`${BASE_URL}/reviews/${id}`);
    const info = await resp.json();
    return info.productReviews;
  } catch (error) {
    throw error;
  }
};
