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
                {/*<option></option>*/}
				{categoriesMap.map((cat) => (
					<option key={cat} value={cat}>{cat}</option>
				))}
			</select>
        </div>
    );
}

export default Categories;