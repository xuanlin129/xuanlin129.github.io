import React from 'react';
import styled from 'styled-components';
import * as Ant from 'antd';
import * as AppActions from '../utils';
import { useTranslation } from 'react-i18next';
import { EarthAmericas, ChevronDown } from '@styled-icons/fa-solid';

const { useBreakpoint } = Ant.Grid;

const navItems = [
  { path: '/', label: 'home' },
  { path: '/about', label: 'about' },
  { path: '/portfolio', label: 'portfolio' },
  { path: '/contact', label: 'contact' },
];

const langOptions = [
  { value: 'zh-TW', label: '繁體中文' },
  { value: 'en', label: 'English' },
];

function Header() {
  const { t, i18n } = useTranslation();
  const screens = useBreakpoint();
  const [drawer, setDrawer] = React.useState(false);
  const [isSelectOpen, setIsSelectOpen] = React.useState(false);
  const selectRef = React.useRef();

  const changeLanguage = React.useCallback(
    async (lang) => {
      if (lang === i18n.language) return;
      setDrawer(false);
      setIsSelectOpen(false);
      AppActions.setLoading(true);
      await AppActions.delay(500);
      i18n.changeLanguage(lang);
      AppActions.setLoading(false);
    },
    [i18n],
  );

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      // 如果 ref 存在，且點擊的目標不在 ref 範圍內，則關閉
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsSelectOpen(false);
      }
    };

    if (isSelectOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSelectOpen]);

  React.useEffect(() => {
    if (drawer) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [drawer]);

  return (
    <React.Fragment>
      <Logo
        src={new URL('@/assets/logo.png', import.meta.url).href}
        alt="Logo"
        onClick={() => {
          AppActions.navigate('/');
        }}
      />
      <Wrapper>
        <div className="container">
          <nav>
            {!screens.xs && (
              <Ant.Space>
                <ul>
                  {navItems.map((it) => {
                    if (it.label === 'home') return;

                    return (
                      <li key={it.label}>
                        <ActionButton
                          type="link"
                          onClick={() => {
                            AppActions.navigate(it.path);
                          }}
                        >
                          {t(`nav.${it.label}`)}
                        </ActionButton>
                      </li>
                    );
                  })}
                </ul>
                <Ant.Divider vertical style={{ borderColor: 'var(--dark-gray-color)', height: 25 }} />
                <Ant.Dropdown
                  menu={{
                    items: [
                      { key: 'zh-TW', label: '繁體中文' },
                      { key: 'en', label: 'English' },
                    ],
                    selectable: true,
                    defaultSelectedKeys: [i18n.language],
                    onClick: ({ key }) => {
                      changeLanguage(key);
                    },
                    style: { minWidth: 80, borderRadius: 8, textAlign: 'center' },
                  }}
                >
                  <div className="lang-dropdown">
                    <EarthAmericas size={20} color="#333" />
                    {i18n.language === 'en' ? 'EN' : '繁中'}
                  </div>
                </Ant.Dropdown>
              </Ant.Space>
            )}
          </nav>
        </div>
      </Wrapper>

      {screens.xs && <Menu className={drawer && 'active'} onClick={() => setDrawer(!drawer)} />}
      <Drawer className={drawer && 'active'}>
        <ul>
          {navItems.map((it) => (
            <li key={it.label}>
              <span
                onClick={() => {
                  AppActions.navigate(it.path);
                  setDrawer(false);
                }}
              >
                {t(`nav.${it.label}`)}
              </span>
            </li>
          ))}
        </ul>
        <SelectContainer ref={selectRef}>
          <SelectHeader onClick={() => setIsSelectOpen(!isSelectOpen)}>
            <div className="prefix">
              <EarthAmericas size={14} />
            </div>
            <div className="value">{langOptions.find((opt) => opt.value === i18n.language)?.label}</div>
            <ChevronDown size={12} className={`arrow ${isSelectOpen ? 'up' : ''}`} />
          </SelectHeader>

          <SelectOptions className={isSelectOpen ? 'open' : ''}>
            {langOptions.map((opt) => (
              <div
                key={opt.value}
                className={`option ${i18n.language === opt.value ? 'selected' : ''}`}
                onClick={() => {
                  changeLanguage(opt.value);
                }}
              >
                {opt.label}
              </div>
            ))}
          </SelectOptions>
        </SelectContainer>
      </Drawer>
    </React.Fragment>
  );
}

const Wrapper = styled.header`
  width: 100%;
  height: var(--navbar-height);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 997;

  & > .container {
    height: 100%;
    display: flex;
    align-items: center;

    & > nav {
      margin-left: auto;

      & ul {
        display: flex;
      }

      & .lang-dropdown {
        font-family: 'TW_Bd', sans-serif;
        padding: 0 var(--base-padding);
        display: flex;
        align-items: center;
        gap: 8px;
        cursor: pointer;
      }
    }
  }
`;

const Logo = styled.img`
  max-width: 150px;
  object-fit: contain;
  mix-blend-mode: difference;
  cursor: pointer;
  position: fixed;
  top: calc(var(--navbar-height) / 2);
  left: var(--base-padding);
  transform: translateY(-50%);
  z-index: 998;

  &:hover {
    opacity: 0.8;
  }

  @media (min-width: 1200px) {
    left: calc((100vw - 1200px) / 2 + var(--base-padding));
  }
`;

const ActionButton = styled(Ant.Button)`
  &&& {
    color: inherit;
    font-family: 'TW_Bd', sans-serif;
    position; relative;

    &::before {
      content: '';
      width: 0;
      height: 2px;
      background: var(--secondary-color);
      border-radius: 1rem;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 100%);
      transition: width 0.3s;
    }

    &:hover {
      color: inherit;

      &::before {
        width: 80%;
      }
    }
  }
`;

const Menu = styled.div`
  --height: 36px;
  width: 42px;
  height: var(--height);
  position: fixed;
  top: calc(var(--navbar-height) / 2);
  right: var(--base-padding);
  transform: translateY(-50%);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  &::before,
  &::after {
    content: '';
    width: 100%;
    height: 45%;
    border-radius: 100rem;
    transition: all 0.5s;
  }

  &::before {
    background: var(--primary-color);
  }

  &::after {
    background: var(--dark-gray-color);
  }

  &.active {
    &::before {
      background: #fff;
      transform: translateY(calc(var(--height) / 2 - 50%)) rotate(20deg);
    }

    &::after {
      background: var(--primary-color);
      transform: translateY(calc(var(--height) / 2 * (-1) + 50%)) rotate(-20deg);
    }
  }

  @media (min-width: 1200px) {
    right: calc((100vw - 1200px) / 2 + var(--base-padding));
  }
`;

const Drawer = styled.section`
  width: 100vw;
  height: 100vh;
  background: var(--dark-gray-color);
  padding: var(--navbar-height) calc(var(--base-padding) * 3);
  opacity: 0;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  transform: translateX(50%);
  z-index: 999;
  transition: all 0.5s ease-out;
  pointer-events: none;

  &.active {
    transform: translateX(0);
    opacity: 1;
    pointer-events: auto;
  }

  & > ul {
    color: #fff;
    font-size: 2rem;
    font-weight: 500;
    font-family: 'TW_Bd', sans-serif;
    padding: 30px 0;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const SelectContainer = styled.div`
  position: relative;
  width: 160px; /* 稍微放寬以容納文字 */
  margin: auto auto 10vh auto;
  font-family: 'TW_Bd', sans-serif;
`;

const SelectHeader = styled.div`
  background: #fff;
  height: 40px;
  border-radius: 100rem;
  display: flex;
  align-items: center;
  padding: 0 16px;
  cursor: pointer;
  border: 1px solid #d9d9d9;

  .prefix {
    display: flex;
    color: #666;
  }

  .value {
    flex: 1;
    text-align: center;
    font-size: 14px;
    color: #333;
  }

  .arrow {
    transition: transform 0.3s;
    color: #bfbfbf;
    &.up {
      transform: rotate(180deg);
    }
  }
`;

const SelectOptions = styled.div`
  position: absolute;
  bottom: calc(100% + 8px); /* 向上彈出，符合原 UI 邏輯 */
  left: 0;
  width: 100%;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.08);
  opacity: 0;
  transform: translateY(10px);
  pointer-events: none;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  z-index: 1001;
  padding: 4px;

  &.open {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
  }

  .option {
    border-radius: 8px;
    padding: 10px 16px;
    font-size: 14px;
    cursor: pointer;
    transition: background 0.3s;
    text-align: center;
    color: #333;

    &:hover {
      background: #f5f5f5;
    }

    &.selected {
      color: var(--primary-color);
      background: color-mix(in srgb, var(--primary-color), transparent 92%);
      font-weight: 600;
    }
  }
`;

export default Header;
