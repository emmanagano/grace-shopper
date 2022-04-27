const BASE_URL = 'https://intense-crag-00374.herokuapp.com/api';
// const BASE_URL = 'http://localhost:3001/api';


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
        // localStorage.setItem('token', info.user.token);
        return info.user;
    } catch (error) {
        throw error;
    }
};