import { useEffect, useState } from "react";
import { getRecipes } from "../apis";

export function useFetchRecipes(page) {
    const [recipes, setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState([]);
    useEffect(() => {
        let cancel = false;
        async function fetchData() {
            try {
                setIsLoading(true);

                const queryParam = new URLSearchParams();
                if (page) {
                    queryParam.append('skip', (page - 1) * 18 );
                    queryParam.append('limit', 18 );
                    queryParam.append('sort', 'createdAt:-1')
                }
                const fetchRecipes = await getRecipes(queryParam);
                if (!cancel) {
                    setRecipes(x => [...x, ...fetchRecipes]);
                }
                setRecipes(fetchRecipes)
            } catch (e) {
                console.log('ERREUR');
                setError('Erreur');
            } finally {
                if (!cancel) {
                    setIsLoading(false);
                }

            }
        }
        fetchData();
        return () => cancel = true;
    }, [page]);
    return [[recipes, setRecipes], isLoading, error];

}
