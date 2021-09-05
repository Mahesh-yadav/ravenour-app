import { useState } from 'react';
import './SearchBar.css';

const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count',
};

export default function SearchBar({ onSearchYelp }) {
  const [term, setTerm] = useState('');
  const [location, setLocation] = useState('');
  const [sortBy, setSortBy] = useState('best_match');

  const renderBySortOptions = () => {
    return Object.keys(sortByOptions).map((option) => (
      <li
        key={option}
        className={getSortByClass(sortByOptions[option])}
        onClick={() => {
          handleSortByChange(sortByOptions[option]);
        }}
      >
        {sortByOptions[option]}
      </li>
    ));
  };

  const getSortByClass = (sortByOption) => {
    return sortByOption === sortBy ? 'active' : '';
  };

  const handleSortByChange = (sortByOption) => {
    setSortBy(sortByOption);
  };

  const handleTermChange = (e) => {
    setTerm(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSearch = () => {
    onSearchYelp(term, location, sortBy);
  };

  return (
    <div className="SearchBar">
      <div className="SearchBar-sort-options">
        <ul>{renderBySortOptions()}</ul>
      </div>
      <div className="SearchBar-fields">
        <input
          placeholder="Search Businesses"
          value={term}
          onChange={handleTermChange}
        />
        <input
          placeholder="Where?"
          value={location}
          onChange={handleLocationChange}
        />
      </div>
      <div className="SearchBar-submit">
        <button onClick={handleSearch}>Let's Go</button>
      </div>
    </div>
  );
}
