import { IoMoon, IoSunny } from 'react-icons/io5';
import styled from 'styled-components';
import { useSwitcher } from '../store/themeSlice/useSwitcher';

const ModeSwitcher = styled.div`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  // font-weight: var(--fw-bold);
  text-transform: capitalize;
`;

export const Switcher = () => {
    const [theme, toggleTheme] = useSwitcher();

    return (
        <ModeSwitcher onClick={toggleTheme}>
            {theme === 'light' ? (
                <IoSunny size="14px" />
            ) : (
                <IoMoon size="14px" />
            )}{' '}
            <span style={{ marginLeft: '0.75rem' }}>{theme} Theme</span>
        </ModeSwitcher>
    )

}