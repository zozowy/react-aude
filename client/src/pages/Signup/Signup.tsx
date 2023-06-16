import { useForm } from 'react-hook-form';
import styles from './Signup.module.scss';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { createUser } from '../../apis/users';
import { useNavigate } from 'react-router-dom';
import { LoginForm } from 'interfaces';
interface SignupProps {};
export default function Signup(props: SignupProps) {
    const navigate = useNavigate();
    const validationSchema = yup.object({
        name: yup.string().required('Précisez votre nom svp').min(2, 'au moins 2 caractères !!'),
        email: yup.string().required('il faut renseigner email').email('l\'email n\'est pas valide'),
        password: yup.string().required('Renseignez un mdp svp').min(6, 'au moins 6 caractères')
    });

    const initialValues: Partial<LoginForm> = {
        name: '',
        email: '',
        password: ''
    }
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting},
        setError,
        clearErrors,
    } = useForm({
        defaultValues: initialValues,
        resolver: yupResolver(validationSchema)
    });
    const submit = handleSubmit(async( user) => {
            try {
                clearErrors();
                await createUser (user);
                navigate('/signin');
            } catch (error) {
                const message = (error as Error).message; 
                setError('generic', { type: 'generic', message })
            }
        }
    );
    return (
        <div className="flex-fill d-flex align-items-center justify-content-center">
            <form onSubmit={ submit }className={ `${ styles.form } d-flex flex-column card p-20`} >
                <h2 className='mb-10'>Inscription</h2>
                <div className='mb-10 d-flex flex-column'>
                    <label htmlFor='name'>Nom</label>
                    <input type="text" id="name" { ...register('name')}/>
                    { errors.name && <p className='form-error'>{ errors.name.message }</p>}
                </div>
                <div className='mb-10 d-flex flex-column'>
                    <label htmlFor='email'>Email</label>
                    <input type="text" id="email"   { ...register('email')}/>
                    { errors.email && <p className='form-error'>{ errors.email.message}</p>}
                </div>
                <div className='mb-10 d-flex flex-column'>
                    <label htmlFor='name'>Password</label>
                    <input type="text" id="password" { ...register('password')} />
                    { errors?.password && <p className='form-error'>{ errors.password.message}</p>}
                </div>
                { errors?.generic && (
                    <div className='mb-10'>
                        <p className='form-error'>{ errors.generic.message }</p>
                   </div>
                )}
                <div>
                    <button disabled={isSubmitting} className='btn btn-primary'> Inscription</button>
                </div>
            </form>
        </div>
    )
}
