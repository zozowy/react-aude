import styles from './Search.module.scss';
function Search({ setFilter}) {

    function handleInput(e) {
        const filter = e.target.value;
        if (filter !== 'undefined' && filter.length > 0) {
            setFilter(filter.trim().toLowerCase());
        }
        
    }

    return (
        <div className={`d-flex flex-row justify-content-center align-items-center my-30 ${styles.searchBar}`}>
            <i className='fa-solid fa-magnifying-glass mr-15'></i>
            <input onInput={handleInput} className="flex-fill " type="text" placeholder='Rechercher' />
        </div>
    );
}
    export default Search;