import './SearchBar.css';

const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count',
};

export default function SearchBar(props) {
  const renderBySortOptions = () => {
    return Object.keys(sortByOptions).map((option) => (
      <li key={option}>{sortByOptions[option]}</li>
    ));
  };

  return (
    <div className="SearchBar">
      <div className="SearchBar-sort-options">
        <ul>{renderBySortOptions()}</ul>
      </div>
      <div className="SearchBar-fields">
        <input placeholder="Search Businesses" />
        <input placeholder="Where?" />
      </div>
      <div className="SearchBar-submit">
        <button>Let's Go</button>
      </div>
    </div>
  );
}
