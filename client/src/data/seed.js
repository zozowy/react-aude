import {data} from './recipes';

export async function seedRecipes() {
    await fetch(`https://restapi.fr/api/recipes`, {
            method:'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
}