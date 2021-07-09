import React, { useEffect, useReducer } from 'react';
import { useParams } from 'react-router';
import { apiGet } from '../misc/config';

const reducer = (prevState, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS': {
      return { isLoading: false, error: null, show: action.show };
    }

    case 'FETCH_FAILED': {
      return { ...prevState, isLoading: false, error: action.error };
    }
    default:
      return prevState;
  }
};

const initialState = {
  show: null,
  isLoading: true,
  error: null,
};

const Show = () => {
  const { id } = useParams();
  //   here {show,isLoading,error}    ---> is the state

  const [{ show, isLoading, error }, dispatch] = useReducer(
    reducer,
    initialState
  );
  //   const [show, setShow] = useState(null);
  //   const [isLoading, setIsLoading] = useState(true);
  //   const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`)
      .then(results => {
        if (isMounted) {
          dispatch({ type: 'FETCH_SUCCESS', show: results });
          //   setShow(results);
          //   setIsLoading(false);
        }
        //    here setTimeout is used to avoid the fleckering when refreshing the page and 2000 means 2 seconds time
      })
      .catch(err => {
        if (isMounted) {
          dispatch({ type: 'FETCH_FAILED', error: err.message });

          //   setError(err.message);
          //   setIsLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [id]);
  console.log('show', show);

  if (isLoading) {
    return <div>Data is being loaded</div>;
  }

  if (error) {
    return <div>Error Occured :{error}</div>;
  }
  return <div>SHOW PAGE</div>;
};

export default Show;
