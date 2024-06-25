import React from 'react';

const EnvChecker = () => {
  return (
    <div>
      <pre>{JSON.stringify(process.env, null, 2)}</pre>
    </div>
  );
};

export default EnvChecker;
