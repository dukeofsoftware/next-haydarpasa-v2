import { memo } from 'react';
import './loading.css';
const CircleLoader = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="lds-ring ">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default memo(CircleLoader);
