import React from 'react';
import {useContext} from 'react';
import {RoomContext} from '../Context';
import Title from '../Components/Title';

const getUnique = (items,value) => {
    return [...new Set(items.map(item => item[value]))];
}

export default function RoomsFilter({rooms}) {
    const context = useContext(RoomContext);
    const {
        handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets 
    } = context;
    // get unique types
    let types = getUnique(rooms,'type');
// add all
types = ['all', ...types];
types = types.map((item,index) => {
return (
<option value={item} key={index}>{item}</option> 
);
});

let people = getUnique(rooms, 'capacity');
people = people.map((item, index) => {
  return <option key={index} value={item}>
    {item}
  </option>
});
    return (
        <section className="filter-container">
            <Title title="Search rooms" />
            <form className="filter-form">
                {/* Selet type */}
                    <div className="form-group">
                        <label htmlFor="type">Room Type</label>
                        <select name="type" id="type" value={type} 
                        className="form-control" 
                        onChange={handleChange} >
                            {types}
                        </select>
                    </div>
                {/* End Select Type */}

                {/* Selet type */}
                <div className="form-group">
                        <label htmlFor="capacity">Guest</label>
                        <select name="capacity" id="capacity" value={capacity} 
                        className="form-control" 
                        onChange={handleChange} >
                            {people}
                        </select>
                    </div>
                {/* End Select Type */}
                <div className="form-group">
          <label htmlFor="price">room price ${price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {/* end of room price*/}
        {/* size */}
        <div className="form-group">
          <label htmlFor="price">room size </label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              value={minSize}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              value={maxSize}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>
        {/* end of select type */}
        {/* extras */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">pets</label>
          </div>
        </div>
            </form>
        </section>
    )
}
