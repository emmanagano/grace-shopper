const BASE_URL = `https://intense-crag-00374.herokuapp.com/api`;

export async function fetchLogin ({
    username,
    password
}) {
    try {
        const resp = await fetch(`${BASE_URL}/user/login`, {
            method: 'POST',
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