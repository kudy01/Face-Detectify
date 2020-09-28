import React from 'react';


const Rank = ({name, entries}) => {
	return (
		<div>
			<div className='white f3 '>
				{`${name.charAt(0).toUpperCase() + name.slice(1)}, your current image detect count is`}
			</div>
			<div className='white f1 '>
				{entries}
			</div>
		</div>	

		)
}


export default Rank;