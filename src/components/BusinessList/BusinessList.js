import './BusinessList.css';
import Business from '../Business/Business';

export default function BusinessList(props) {
  return (
    <div className="BusinessList">
      {props.businesses.map((business, index) => (
        <Business key={business.name + index} business={business} />
      ))}
    </div>
  );
}
