import { useState } from 'react';
import styles from './Homepage.module.scss';
import Recipe from './components/Recipe';
import Loading from 'components/Loading/Loading';
import Search from './components/Search/Search';
import { useFetchRecipes } from '../../hooks';
import { updateRecipe as updateR, deleteRecipe as deleteR } from '../../apis';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { recipesState, selectFilteredRecipes, wishtlistDisplayState } from 'state';
import { seedRecipes } from '../../data/seed';
import { Wishlist } from './components/Wishlist/Whishlist';
import { RecipeI } from 'interfaces';
import { ObjectId } from 'types';
//import { data } from '../../data/recipes';

function Homepage() {
    const [filter, setFilter] = useState('');
    const [page, setPage] = useState(1);
    //const [[recipes, setRecipes], isLoading] = useFetchRecipes(page)
    const [isLoading] = useFetchRecipes(page)
    const recipes = useRecoilValue(selectFilteredRecipes(filter));
    const setRecipes = useSetRecoilState(recipesState);
    const showWishlist = useRecoilValue(wishtlistDisplayState);
    async function updateRecipe(updatedRecipe: RecipeI) {
        const savedRecipe = await updateR(updatedRecipe);

        setRecipes(recipes.map((r) => (r._id === savedRecipe._id ? savedRecipe : r)));
    }
    async function deleteRecipe(_id: ObjectId) {
        await deleteR(_id);
        setRecipes(recipes.filter((r) => r._id !== _id));
    }
    return (
        <>
            <div className="flex-fill container d-flex flex-column p-20">
                <h1 className={ `my-30 ${styles.title}`}>Découvrez nos nouvelles recettes<small className={styles.small}>( {recipes.length} )</small></h1>
                <div className={`card flex-fill flex-column p-20 mb-20${styles.contentCard}`}>
                    <div className="d-flex flex-row align-items-center justify-content-center p-20">
                        <button onClick={() => seedRecipes()} className="btn btn-primary"> importer des recettes (2 ou 3 fois si pas de recette... puis actualiser)

                        </button>
                    </div>
                    <Search setFilter={setFilter} />
                    {isLoading && !recipes.length ? (
                        <Loading />
                    ) : (
                        <div className={styles.grid}>
                            {Object.values(recipes)
                                .filter((r) => r.title.toLowerCase().startsWith(filter))
                                .map(r => (
                                    <Recipe
                                        key={r._id}
                                        recipe={r}
                                        updateRecipe={updateRecipe}
                                        deleteRecipe={deleteRecipe}
                                    />
                                ))}
                        </div>
                    )}
                    <div className="d-flex flex-row align-items-center justify-content-center p-20">
                        <button onClick={() => setPage(page + 1)} className="btn btn-primary"> Charger plus de recettes page n° {page}

                        </button>
                    </div>
                </div>
            </div>
            { showWishlist && <Wishlist/>}
        </>

    );
}

export default Homepage;
