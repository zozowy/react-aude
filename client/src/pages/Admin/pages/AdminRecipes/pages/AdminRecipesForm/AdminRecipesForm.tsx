
import styles from './AdminRecipeForm.module.scss';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { createRecipe, updateRecipe } from 'apis';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { selectActiveRecipe } from 'state';
import { RecipeI } from 'interfaces';



function AdminRecipesForm () {
	//const recipe = useLoaderData();
    const { recipeId } = useParams();
    const recipe = useRecoilValue(selectActiveRecipe(recipeId));
	const navigate = useNavigate();
    const defaultValues = {
        title: recipe ?  recipe.title : '',
        image: recipe ?  recipe.image : '',
        generic: ""
    }

    const recipeSchema = yup.object({
            title: yup.string().required('le titre de la recette doit être renseigné').min(10, 'Le titre doit faire 10 caractères min et 30 max').max(30, 'Le titre doit faire 10 caractères min et 30 max'),
            image: yup.string().required('il faut renseigner une url d\'image').url('L\'image doit être un lien valide')
        })
    const {
        formState: { errors, isSubmitting},
        register,
        handleSubmit,
        reset,
        setError,
        clearErrors,
    } = useForm( {
        defaultValues,
        resolver: yupResolver(recipeSchema),
    });

    async function submit(values: Partial<RecipeI>) {
        try {
            clearErrors();
			if (recipe) {
				await updateRecipe({...values, _id: recipe._id });
				navigate('/admin/recipes/list');
			} else {
				await createRecipe(values);
				reset(defaultValues);
			}
            } catch (error) {
				setError('generic', { type: 'generic', message: 'un erreur est survenue'})
            }
    }
    return (
        <form onSubmit={handleSubmit(submit)}
            className={`d-flex flex-column card p-20 ${ styles.RecipeForm}`} >
            <h2 className='mb-20' > Ajouter une recette</h2>
            <div className='d-flex flex-column mb-20'>
                <label >Titre de la recette</label>
                <input {...register('title')} type='text'/>
                { errors.title && <p className='form-error'>{ errors.title.message }</p>}
            </div>
            <div className='d-flex flex-column mb-20'>
                <label>Image de la recette</label>
                <input {...register('image')} type='text'/>
                { errors.image && <p className='form-error'>{ errors.image.message }</p>}
            </div>
            { errors.generic && <p className='form-error'>{ errors.generic.message }</p>}
            <div>
                <button disabled={isSubmitting} className='btn btn-primary'> Sauvegarder</button>
            </div>
        </form>
    )
}
export default AdminRecipesForm;