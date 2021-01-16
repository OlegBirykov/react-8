import { useEffect } from 'react';
import PropTypes from 'prop-types';

function Details(props) {
  const { info } = props;  

  useEffect(() => {
    console.log(info.name);
  });

  return (
    <div className="Details"> 
    </div>   
  );
};

Details.propTypes = {
  info: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string 
  }).isRequired
};

export default Details;