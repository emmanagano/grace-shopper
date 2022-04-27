const BASE_URL = 'https://intense-crag-00374.herokuapp.com/api';

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
}