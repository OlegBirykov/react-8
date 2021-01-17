import PropTypes from 'prop-types';

function JsonFetch(props) {
  const { path } = props;  
  
  return (
    <div className="JsonFetch"> 
      {true && <p className="JsonFetch-data">{path}</p>}
      {true && (
        <div className="JsonFetch-loading">
          <p className="JsonFetch-loading-text">Loading...</p>
        </div>
      )}
      {false && <p className="JsonFetch-error">Ошибочка вышла</p>}
    </div>
  );
};

JsonFetch.propTypes = {
  path: PropTypes.string.isRequired
};

export default JsonFetch;