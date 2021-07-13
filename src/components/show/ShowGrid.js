/* eslint-disable react-hooks/rules-of-hooks */
import React, { useCallback } from 'react';
import ShowCard from './ShowCard';
import { FlexGrid } from '../styled';

import IMAGE_NOT_FOUND from '../../images/not-found.png';
import { useShows } from '../../misc/Custom-hooks';

const ShowGrid = ({ data }) => {
  const [bookmarkedShows, dispatchBookmarked] = useShows(); // problem area       [bookmarkedShows, dispatchBookmarked]
  return (
    <FlexGrid>
      {data.map(({ show }) => {
        const isBookmarked = bookmarkedShows.includes(show.id);
        const onStarClick = useCallback(() => {
          if (isBookmarked) {
            dispatchBookmarked({ type: 'REMOVE', showId: show.id });
          } else {
            dispatchBookmarked({ type: 'ADD', showId: show.id });
          }
        }, [isBookmarked, show.id]);
        return (
          <ShowCard
            key={show.id}
            id={show.id}
            name={show.name}
            image={show.image ? show.image.medium : IMAGE_NOT_FOUND}
            summary={show.summary}
            onStarClick={onStarClick}
            isBookmarked={isBookmarked}
          />
        );
      })}
    </FlexGrid>
  );
};

export default ShowGrid;
