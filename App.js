import React, {useState,useEffect} from 'react';
import Menu from './Menu';
import items from './data';
import Categories from './Categories';

const allCategories= ['all',...new Set(items.map((item)=>item.category))];
console.log(allCategories);
function App(){
	const [menuItems,setMenuItems]=useState(items);
	const [categories,setCategories]=useState([]);
	const filterItems =(category)=>{
		if(category==='all'){
			setMenuItems(items);
			return;
		}
		let newItems=items.filter((item)=> item.category===category);
		console.log(newItems);
		setMenuItems(newItems);
	};
	return (
		<main>
			<section className='menu section'>
				<div className='title'>
					<h2>Our menu</h2>
					<div className='underline'></div>
				</div>
				<Categories filterItems={filterItems} categories={allCategories}/>
				<Menu items={menuItems}/>
			</section>
		</main>
	)
}
export default App;