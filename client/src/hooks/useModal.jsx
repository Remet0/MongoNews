import React, { useState } from 'react';

const UseModal = ({ children }) => {
  const [isShowing, setIsShowing] = useState(false);

  return <>{children({ isShowing, setIsShowing })}</>;
};

export default UseModal;
