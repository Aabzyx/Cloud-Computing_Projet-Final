import axios from 'axios';

const base = axios.create({ baseURL: 'http://localhost:3000/'});

export const login = async (username, password) => {
    try {
        const response = await base.post('users/login', {username: username, password: password});
        localStorage.setItem('token', response.data.jwt);
        localStorage.setItem('username', username);
        return { success: true };
    } catch (error) {
        return { success: false, error: error.response }
    }
}

export const register = async (username, password) => {
    try {
        const response = await base.post('users/register', {username: username, password: password});
        await login(username, password);
        return { success: true };
    } catch (error) {
        return { success: false, error: error.response }
    }
}

export const userRole = async () => {
    try {
        const response = await base.get('users/me', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        },);
        return response.data.role;
    } catch (error) {
        return error.response;
    }
}

export const fetchFilmInfos = async (filmId) => {
    const {data} = await base.get(`locations/${filmId}`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")}`,
        }
    });
    return data
}

export const postFilm = async (filmName, filmType, filmDirectorName, filmProducerName, address, district, year, filmId) => {
    try {
        await base.patch(`locations/${filmId}`, {
            nom_tournage: filmName,
            type_tournage: filmType,
            nom_realisateur: filmDirectorName,
            nom_producteur: filmProducerName,
            adresse_lieu: address,
            ardt_lieu: district,
            annee_tournage: year,
        }, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        });
        return { success: true };
    } catch (error) {
        return { success: false, error: error.response }
    }
}

export const deleteFilm = async (filmId) => {
    try {
        await base.delete(`locations/${filmId}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        });
        return { success: true };
    } catch (error) {
        return { success: false, error: error.response }
    }
}