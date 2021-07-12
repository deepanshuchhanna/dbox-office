import React, { useState } from 'react';
import ActorGrid from '../components/actor/ActorGrid';
import CustomRadio from '../components/CustomRadio';
import MainPageLayout from '../components/MainPageLayout';
import ShowGrid from '../components/show/ShowGrid';
import { apiGet } from '../misc/config';
import { useLastQuery } from '../misc/Custom-hooks';
import {
  SearchInput,
  RadioInputsWrapper,
  SearchButtonWrapper,
} from './Home.styled';

const Home = () => {
  const [input, setInput] = useLastQuery();
  const [results, setResults] = useState(null);
  const [searchOption, setSearchOption] = useState('shows');
  const isShowsSearch = searchOption === 'shows';

  const onSearch = () => {
    // https://api.tvmaze.com/search/shows?q=mens

    // querystring is --->  `search/shows?q=${input}`      that we have used in apiGet

    apiGet(`/search/${searchOption}?q=${input}`).then(result => {
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
  // for enter keyword
  const onKeyDown = ev => {
    if (ev.keyCode === 13) {
      onSearch();
    }
  };

  const onRadioChange = ev => {
    setSearchOption(ev.target.value);
  };
  // console.log(searchOption);

  // conditions to display results on the screen

  const renderResults = () => {
    if (results && results.length === 0) {
      return <div> NO RESULTS</div>;
    }
    if (results && results.length > 0) {
      return results[0].show ? (
        <ShowGrid data={results} />
      ) : (
        // here  :  means ---> otherwise
        <ActorGrid data={results} />
      );
    }

    return null;
  };

  return (
    <MainPageLayout>
      <SearchInput
        type="text"
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        value={input}
        placeholder="Type To Search"
      />{' '}
      <RadioInputsWrapper>
        <div div>
          <CustomRadio
            label="Shows"
            id="shows-search"
            value="shows"
            checked={isShowsSearch}
            onChange={onRadioChange}
          />
        </div>

        <div>
          <CustomRadio
            label=" Actors"
            id="actors-search"
            value="people"
            checked={!isShowsSearch}
            onChange={onRadioChange}
          />

          {/* <label htmlFor="actors-search">
            <input type="radio" />
          </label> */}
        </div>
      </RadioInputsWrapper>
      <SearchButtonWrapper>
        <button type="button" onClick={onSearch}>
          SEARCH
        </button>
      </SearchButtonWrapper>
      {renderResults()}
    </MainPageLayout>
  );
};

export default Home;
