import PropTypes from 'prop-types';

function ProgressIndicator(props) {
  const { percent, loading } = props;  

  return (
    <div className="ProgressIndicator"> 
    </div>   
  );
};

ProgressIndicator.propTypes = {
  percent: PropTypes.number.isRequired
};

export default ProgressIndicator;