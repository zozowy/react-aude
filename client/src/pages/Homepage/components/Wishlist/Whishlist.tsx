import { useRecoilValue, useSetRecoilState } from "recoil";
import styles from "./Wishlist.module.scss";
import { recipesState, selectWishedRecipes, wishtlistDisplayState } from "state";
import { updateRecipe } from "apis";
import { useState } from "react";
import { RecipeI } from "interfaces";

export function Wishlist() {
    const setWishlistDisplay = useSetRecoilState(wishtlistDisplayState);
    const whishedRecipes = useRecoilValue(selectWishedRecipes);
    const setRecipes = useSetRecoilState(recipesState);
    const [remove, setRemove] = useState(false);
    async function handleClick(recipe: RecipeI) {
        const updatedRecipe = await updateRecipe({ ...recipe, liked: false });
        setRecipes((oldRecipes) => oldRecipes.map(or => or._id === updatedRecipe._id ? updatedRecipe : or));
    }
    function handleRemoveWishlist() {
        if (!remove) {
            setTimeout(() => { setWishlistDisplay(false) }, 200);
            setRemove(true);
        }
    }


    return (
        <div onClick={handleRemoveWishlist} className={styles.container}>
            <div onClick={(e) => e.stopPropagation()} className={`${styles.whishlist} ${remove ? styles.remove : ''}`}>
                <h4>Whishlist</h4>
                <ul>
                    {whishedRecipes.length ? whishedRecipes.map(r => (
                        <li key={r._id} className="d-flex align-items-center mb-10">
                            <span className="flex-fill mr-15">
                                {r.title}
                            </span>
                            <button onClick={() => handleClick(r)} className="btn btn-danger"><i className="fa-solid fa-trash"></i></button>
                        </li>
                    )) : null}
                </ul>

            </div>
        </div>
    );
}