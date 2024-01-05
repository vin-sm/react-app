// import React, { useState } from 'react';

// const Description = ({ text }) => {
//   const [showMore, setShowMore] = useState(false);

//   const toggleShowMore = () => {
//     setShowMore(!showMore);
//   };

//   const wordArray = text.split(' ');
//   const displayText = showMore ? text : wordArray.slice(0, maxWords).join(' ');

//   return (
//     <div>
//       <p>{showMore ? text : `${text.slice(0, 00)}...`}</p>
//       <button onClick={toggleShowMore}>
//         {showMore ? 'Show Less' : 'Show More'}
//       </button>
//     </div>
//   );
// };

// export default Description;

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
        {/* {wordArray.length > maxWords && ( */}
          <>
            {' '}
            <button onClick={toggleShowMore}>{showMore ? 'Show Less' : 'Show More'}</button>
          </>
        {/* )} */}
      </p>
    </div>
  );
};

export default Description;
