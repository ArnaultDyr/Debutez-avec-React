import { plantList } from '../datas/plantList'

function Categories({categories, updateCategories}){

    const categoriesMap = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

    return (
		<div className='lmj-shopping-list'>
            <label >Choisissez une catégorie : </label>
			<select onChange={e => updateCategories(e.target.value)}>
				{categoriesMap.map((cat) => (
					<option key={cat} value={cat}>{cat}</option>
				))}
			</select>
            <input 
                type="button" 
                value="Réinitialiser"
                onClick={() => updateCategories('none')} />
        </div>
    );
}

export default Categories;