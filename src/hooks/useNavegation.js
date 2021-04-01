import { useState } from 'react';

export const useNavegation = () => {
  const [navigation, setNavigation] = useState(false);

  const toggleOpenNavigation = () => {
    setNavigation(!navigation);
  };

  const closeNavigation = (e) => {
    e.preventDefault();
    const isLink = e.target.classList.contains('menu__link');
    isLink && toggleOpenNavigation();
  };

  return {
    navigation,
    toggleOpenNavigation,
    closeNavigation,
  };
};
