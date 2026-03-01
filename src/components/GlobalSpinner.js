import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useOutlet } from 'reconnect.js';

export default function GlobalSpinner() {
  const [mounted, setMounted] = React.useState(false);
  const [info = {}] = useOutlet('loading');
  const { loading, message } = info;
  const [visible, setVisible] = React.useState(loading);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    if (loading) {
      setVisible(true);
    } else {
      const timer = setTimeout(() => {
        setVisible(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  React.useEffect(() => {
    const preventDefault = (e) => e.preventDefault();

    // 鍵盤按鍵控制 (上、下、空白鍵等)
    const preventDefaultForScrollKeys = (e) => {
      const keys = ['ArrowUp', 'ArrowDown', 'Space', 'PageUp', 'PageDown', 'Home', 'End'];
      if (keys.includes(e.code)) {
        e.preventDefault();
        return false;
      }
    };

    if (visible) {
      // 針對不同裝置與操作類型進行鎖定
      window.addEventListener('wheel', preventDefault, { passive: false }); // 電腦滑鼠滾輪
      window.addEventListener('touchmove', preventDefault, { passive: false }); // 手機觸控滑動
      window.addEventListener('keydown', preventDefaultForScrollKeys, { passive: false }); // 鍵盤操作
    } else {
      window.removeEventListener('wheel', preventDefault);
      window.removeEventListener('touchmove', preventDefault);
      window.removeEventListener('keydown', preventDefaultForScrollKeys);
    }

    return () => {
      window.removeEventListener('wheel', preventDefault);
      window.removeEventListener('touchmove', preventDefault);
      window.removeEventListener('keydown', preventDefaultForScrollKeys);
    };
  }, [visible]);

  // 防止未掛載時的閃爍
  if (!mounted) return null;

  return (
    <Wrapper $visible={visible}>
      <Loading>
        <div className="message">
          {(message || 'Loading').split('').map((char, index) => (
            <span key={index} data-text={char} style={{ '--delay': `${index * 0.2}s` }}>
              {char}
            </span>
          ))}
        </div>
      </Loading>
    </Wrapper>
  );
}

const messageAnim = keyframes`
  0%,75%,100% {
    transform: rotateY(-90deg);
  }
  25%,50% {
    transform: rotateY(0);
  }
`;

const Loading = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .message {
    font-size: 3rem;
    text-align: center;
    display: flex;
    gap: 8px;

    span {
      display: inline-block;
      margin: 0 -0.05em;
      font-family: 'EN_He';
    }

    span {
      position: relative;
      color: rgba(0, 0, 0, 0.2);
      z-index: 1;
    }

    span::after {
      position: absolute;
      top: 0;
      left: 0;
      content: attr(data-text);
      color: #fff;
      backface-visibility: hidden;
      transform-style: preserve-3d;
      transform: rotateY(-90deg);
      animation: ${messageAnim} 4s infinite;
      animation-delay: var(--delay);
      animation-fill-mode: both;
      z-index: 2;
    }
  }
`;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100dvh;
  background: var(--dark-gray-color);
  z-index: 1001;

  /* 初始狀態 */
  clip-path: circle(100% at 50% 50%);
  transition: clip-path 0.5s ease-in-out;

  ${(props) =>
    !props.$visible &&
    `
    clip-path: circle(0% at 50% 50%);
  `}
`;
