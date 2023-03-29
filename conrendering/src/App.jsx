import React, { useState } from 'react';

const  App=()=> {
  const [showContent, setShowContent] = useState(false);

  const handleButtonClick = () => {
    setShowContent(!showContent);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Toggle Content</button>
      {showContent && <p>This content is now visible Sucessfully !! </p>}
    </div>
  );
}

export default App;