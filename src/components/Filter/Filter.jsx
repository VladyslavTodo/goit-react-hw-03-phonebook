import { Label } from "./Filter.styled";
import PropTypes from 'prop-types';

const Filter = ({ handleFilterChange, filter }) => {
  return (
    <Label>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilterChange}
      />
    </Label>
  );
};

Filter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default Filter;
