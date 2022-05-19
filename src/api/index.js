const BASE_URL = `https://intense-crag-00374.herokuapp.com/api`;
// const BASE_URL = `http://localhost:4000/api`;
export async function fetchLogin (
    username,
    password
) {
    try {
        const resp = await fetch(`${BASE_URL}/user/login`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                password
            })
        });
        const info = await resp.json();
        console.log(info);
        return info;
    } catch (error) {
        throw error;
    }
}