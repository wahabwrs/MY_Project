
import PropTypes from 'prop-types'; // Import PropTypes for type-checking

const StatsCard = ({ title, value, icon }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-white flex items-center flex-col sm:flex-row"> 
      <div className="mr-0 sm:mr-4 mb-2 sm:mb-0"> 
        {icon}
      </div>
      <div className="text-center sm:text-left"> 
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-xl font-semibold text-blue-500">{value}</p>
      </div>
    </div>
  );
};

// Add PropTypes for better type-checking
StatsCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  icon: PropTypes.element, // Icon can be a React element
};

export default StatsCard;
