import { useEffect, useState } from "react";
import { getRecipes } from "../apis";
import { useSetRecoilState } from "recoil";
import { recipesState } from "state";


export function useFetchRecipes(page) {
   // const [recipes, setRecipes] = useState([]);
    const setRecipes = useSetRecoilState(recipesState);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState([]);

    useEffect(() => {
        let cancel = false;
        async function fetchData() {
            try {
                setIsLoading(true);

                const queryParam = new URLSearchParams();
                if (page) {
                    
                    queryParam.append('limit', 18);
                    queryParam.append('skip', (page - 1) * 18);
                    queryParam.append('sort', 'createdAt:-1');
                }
                const fetchedRecipes = await getRecipes(queryParam);
                if (!cancel) {
                    if (page && page !== 1) {
                        setRecipes(x => [...x, ...fetchedRecipes]);
                    } else {
                        setRecipes(fetchedRecipes);
                    }
                }
               // setRecipes(fetchRecipes)
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
    }, [page, setRecipes]);
    return [isLoading, error];

}
