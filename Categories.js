import React, {useState,useEffect} from 'react';

function Categories({ categories, filterItems }){
	return (
		<div className='btn-container'>
		{categories.map((category,index)=>{
			return (<button className='filter-btn' key={index} onClick={()=>filterItems(category)}>{category}</button>)
		})}
		</div>
		
	); 
};

export default Categories;