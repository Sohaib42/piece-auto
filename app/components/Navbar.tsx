import React from 'react';

export const Navbar = (): JSX.Element => {
return (
<div className="w-full overflow-hidden">
  {/* SVG pour les grands écrans */}
  <img 
    src='banner.svg'
alt="Navbar" 
    className="hidden sm:block w-full h-auto" 
  />

  {/* SVG pour les mobiles */}
  <img 
    src='mobile-banner.svg' 
    alt="Mobile Navbar" 
    className="block sm:hidden w-full h-auto" 
  />
</div>
);
};

