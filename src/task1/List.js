import PropTypes from 'prop-types';

function List(props) {
  const { list, onClick } = props;  

  return (
    <ul className="List">
      {list.map(({ id, name }) => 
        <li className="List-item" onClick={() => onClick(id)} key={id}>{name}</li>
      )}
    </ul>   
  );
};

List.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string 
    })
  ).isRequired,
  onClick: PropTypes.func.isRequired
};

export default List;