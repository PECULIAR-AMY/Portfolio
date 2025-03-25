import React from 'react';

const NavBar: React.FC= () => {
  return (
    <div>
     <div className='flex gap-50' >
     <p>Peculiar.</p>
      <div className='flex gap-40'>
        <p>Project</p>
        <p>Resume</p>
        <p>About Me</p>
      </div>
     </div>
    </div>
  );
};

export default NavBar;