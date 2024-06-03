import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

function handleClick(careType,rangeElem,event){
	var type;
	switch(careType){
		case 'light':
			type = ' de lumière';
			break;
		case 'water':
			type = ' d\'eau';
			break;
	}
	var qt;
	switch(rangeElem){
		case 1:
			qt = 'peu';
			break;
		case 2:
			qt = 'modérement';
			break;
		case 3:
			qt = 'beaucoup de lumière';
			break;
	}
	alert('Cette plante requiert '+qt+ type)
	event.stopPropagation();
	
}

function CareScale({ scaleValue, careType }) {
	const range = [1, 2, 3]
	const scaleType =
		careType === 'light' ? (
			<img src={Sun} alt='sun-icon' />
		) : (
			<img src={Water} alt='water-icon' />
		)

	return (
		<div>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()} onClick={(event) => handleClick(careType,rangeElem,event)}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}

export default CareScale
