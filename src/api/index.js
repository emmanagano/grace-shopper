// const BASE_URL = 'https://intense-crag-00374.herokuapp.com/api';
const BASE_URL = 'http://localhost:3001/api';
const lstoken = localStorage.getItem("token");

export async function fetchRegister (email, username, password) {
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
            })
        });
        const info = await response.json();
        return info;
    } catch (error) {
        throw error;
    }
};

export async function fetchLogin (username, password) {
    try {
        const response = await fetch(`${BASE_URL}/user/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                password,
            })
        });
        const info = await response.json();
        console.log(info)
        localStorage.setItem('token', info.user.token);
        return info.user;
    } catch (error) {
        throw error;
    }
};

export async function fetchUserMe () {
    try {
        const response = await fetch(`${BASE_URL}/user/me`,{
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${lstoken}`
            }
        });
        const info = await response.json();
        console.log(info)
        return info;
    } catch (error) {
        throw error;
    }
};

export async function fetchProducts () {
    try {
        const response = await fetch(`${BASE_URL}/products`);
        const info = await response.json();
        console.log(info);
        return info.products;
    } catch (error) {
        throw error;
    }
};

export async function fetchProductById (id) {
    try {
        const response = await fetch(`${BASE_URL}/products/${id}`);
        const info = await response.json();
        return info.product;
    } catch (error) {
        throw error;
    }
};

export async function fetchReviews (id) {
    try {
        const resp = await fetch(`${BASE_URL}/reviews/${id}`);
        const info = await resp.json();
        return info.productReviews;
    } catch (error) {
        throw error;
    }
};

export const addToCart = async (
    price,
    productId,
    count,
    imgURL,
    title,
    description
) => {
    console.log(price,
        productId,
        count,
        imgURL,
        title,
        description)
    try {
    if (!lstoken) {
        const productArr = localStorage.getItem('products');
        if (!productArr) {
        localStorage.setItem(
            'products',
            JSON.stringify([
            { price, productId, count, imgURL, title, description },
            ])
        );
        }
        productArr.push({ price, productId, count, imgURL, title, description });
        localStorage.setItem('products', JSON.stringify(productArr));
        return;
    }
    const response = await fetch(`${BASE_URL}/cart`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${lstoken}`,
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

export const createCart = async () => {
    try {
        const response = await fetch(`${BASE_URL}/cart/create`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${lstoken}`,
            },
        });
        const info = response.json();
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
                'Authorization': `Bearer ${lstoken}`,
            },
        });
        const info = await response.json();
        return info.cart;
    } catch (error) {
        throw error;
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