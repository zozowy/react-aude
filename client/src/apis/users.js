const USERS_API = '/api/users';
export async function getUsers(queryParam) {
}
export async function getUser(_id) {
   
}
export async function deleteUser(_id) {
    const response = await fetch(`${USERS_API}/${_id}`, {
        method: 'DELETE',
    });
    if (response.ok) {
        return _id;
    } else {
        throw new Error('Error delete user');
    }

}
export async function updateRecipe(updatedUser) {

    const { _id, ...restUser } = updatedUser
    const response = await fetch(`${USERS_API}/${_id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(restUser)
    });
    if (response.ok) {
        return response.json();
    } else {
        throw new Error('Error update usr')
    }
}

export async function createUser(newUser) {
    console.log(USERS_API);
    const response = await fetch(`${USERS_API}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
    });
    const body = await response.json();
    if (response.ok) {
        return body;
    } else {
        if (body) {
            throw body;
        } else {
            throw new Error('Error api creatUser');
        }
    }
}