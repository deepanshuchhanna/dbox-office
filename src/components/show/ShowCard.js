import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Star } from '../styled';
// import { SearchCard } from '../styled';
import { StyledShowCard } from './ShowCard.styled';

const ShowCard = ({ id, image, name, summary, onStarClick, isBookmarked }) => {
  const summaryAsText = summary
    ? `${summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '')}...`
    : 'No description';
  // regular expression is used for path run
  return (
    <StyledShowCard>
      <div className="img-wrapper">
        <img src={image} alt="show" />
      </div>

      <h1
        style={{ color: '#900603', fontWeight: 'bolder', fontSize: 'x-large' }}
      >
        {name}
      </h1>

      <p style={{ color: 'whitesmoke' }}>{summaryAsText}</p>

      <div className="btns">
        <Link to={`/show/${id}`}>
          <span style={{ color: 'grey' }}>Read more</span>
        </Link>
        <button type="button" onClick={onStarClick}>
          <Star active={isBookmarked} />
        </button>
      </div>
    </StyledShowCard>
  );
};

export default memo(ShowCard);
