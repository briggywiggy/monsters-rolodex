import React from 'react';

export const CardListFilters = (props) => {
    const { placeholder, handleOnChange } = props;
    return (
    <div>
        <input type="search"
        placeholder={placeholder}
        onChange={handleOnChange}
        className="search"
        />
    </div>
    )
}