import { useState, useEffect } from 'react';
import List from './List';
import Details from './Details';
import ProgressIndicator from './ProgressIndicator';

function ListApp() {
  const [list, setList] = useState([]);
  const [selected, setSelected] = useState(-1);
  const [loading, setLoading] = useState(-1);

  useEffect(() => {
    const fetchData = async url => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        setList(data);
        setSelected(-1);
      } catch (e) {
        console.error(e);
      }
    } 

    fetchData(process.env.REACT_APP_USERS_DATA + 'users.json');
  },[]);

  const onClick = id => {
    setSelected(list.findIndex(item => item.id === id));
  }

  return (
    <div className="ListApp">
      <List list={list} onClick={onClick} />
      {selected >= 0 && <Details info={list[selected]} />}
      {loading >= 0 && <ProgressIndicator percent={loading} />}
    </div>
  );
}

export default ListApp;