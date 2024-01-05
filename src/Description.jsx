import React, { useState } from 'react';

const Description = ({ text, maxCharacter }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  
  const displayText = showMore ? text : `${text.slice(0, maxCharacter)}...`;

  return (
    <div>
      <p>
        {displayText}
          <>
            {' '}
            <button onClick={toggleShowMore}>{showMore ? 'Show Less' : 'Show More'}</button>
          </>
      </p>
    </div>
  );
};

export default Description;
