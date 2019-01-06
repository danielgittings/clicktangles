import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Score from '../components/Score';

const StyledHighScore = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  > span {
    margin-top: -50px;
    background-color: #ede7f7;
    height: 75px;
    width: 75px;
    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    border: 5px solid white;
  }

  > div {
    margin-top: 20px;
  }
`;

const StyledScoreContainer = styled.div`
  max-width: 400px;

  margin: 0 auto;
`;

const StyledHeading = styled.h3`
  color: white;
  display: block;
  border-bottom: 2px solid white;
  padding: 10px 0;
`;

const HighScore = ({ scores }) => {
  const top = scores.sort((x, y) => x.score - y.score).reverse()[0];

  return (
    // <StyledHighScore>
    //   <div>
    //     <h4>High score</h4>
    //     <Score type={top.device} score={top.score} />
    //   </div>
    //   <p>
    //     {top.score} on {top.device}
    //   </p>
    // </StyledHighScore>

    <StyledScoreContainer>
      <StyledHeading>High Score</StyledHeading>
      <Score type={top.device} score={top.score} />
    </StyledScoreContainer>
  );
};

HighScore.propTypes = {
  scores: PropTypes.arrayOf(
    PropTypes.shape({
      device: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired,
      timestamp: PropTypes.number.isRequired
    })
  )
};

export default HighScore;
