import React, { useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';
import { apiGet } from '../misc/config';

const Home = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState(null);

  const onSearch = () => {
    // https://api.tvmaze.com/search/shows?q=mens

    // querystring is --->  `search/shows?q=${input}`      that we have used in apiGet

    apiGet(`/search/shows?q=${input}`).then(result => {
      setResults(result);
      // console.log(result);
    });

    // fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
    //   .then(r => r.json())
    //   .then(result => {
    //     setResults(result);
    //     // console.log(result);
    //   });
  };

  const onInputChange = ev => {
    setInput(ev.target.value);
    // console.log(ev.target.value);
  };

  const onKeyDown = ev => {
    if (ev.keyCode === 13) {
      onSearch();
    }
  };

  // conditions to display results on the screen

  const renderResults = () => {
    if (results && results.length === 0) {
      return <div> NO RESULTS</div>;
    }
    if (results && results.length > 0) {
      return (
        <div>
          {results.map(item => (
            <div key={item.show.id}>{item.show.name}</div>
          ))}
        </div>
      );
    }

    return null;
  };

  return (
    <MainPageLayout>
      <input
        type="text"
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        value={input}
      />{' '}
      <button type="button" onClick={onSearch}>
        SEARCH
      </button>
      {renderResults()}
    </MainPageLayout>
  );
};

export default Home;
