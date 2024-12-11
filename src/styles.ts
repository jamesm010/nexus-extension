import styled, { keyframes } from 'styled-components';

const slideUp = keyframes`
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const ToolbarContainer = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999999;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  width: 600px;
  max-width: 90vw;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

export const BaseToolbar = styled.div`
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 12px 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  width: 100%;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin-bottom: 0;

  &:hover {
    background: rgba(255, 255, 255, 0.98);
    box-shadow: 0 12px 48px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }
`;

export const Logo = styled.div`
  width: 36px;
  height: 36px;
  cursor: pointer;
  margin-right: 20px;
  transition: transform 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: rgba(230, 23, 92, 0.1);
  padding: 6px;

  &:hover {
    transform: scale(1.1);
    background: rgba(230, 23, 92, 0.15);
  }

  svg {
    width: 24px;
    height: 22px;
    color: #E6175C;
  }
`;

export const SearchContainer = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 12px 44px 12px 16px;
  border: 2px solid rgba(0, 0, 0, 0.06);
  border-radius: 12px;
  font-size: 14px;
  outline: none;
  transition: all 0.2s ease;
  background: rgba(0, 0, 0, 0.02);
  color: #333;

  &::placeholder {
    color: #999;
  }

  &:focus {
    border-color: #007AFF;
    background: white;
    box-shadow: 0 0 0 4px rgba(0, 122, 255, 0.1);
  }
`;

export const SendButton = styled.button`
  position: absolute;
  right: 8px;
  background: none;
  border: none;
  cursor: pointer;
  color: #007AFF;
  padding: 8px;
  border-radius: 8px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(0, 122, 255, 0.1);
    transform: scale(1.05);
  }

  svg {
    width: 20px;
    height: 20px;
    stroke: currentColor;
    stroke-width: 2;
  }
`;

export const ExpandablePanel = styled.div<{ $isExpanded: boolean }>`
  position: absolute;
  bottom: 100%;
  left: 0;
  right: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.98);
  border-radius: 16px;
  margin-bottom: 16px;
  padding: 20px;
  display: ${props => props.$isExpanded ? 'grid' : 'none'};
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  animation: ${slideUp} 0.3s ease;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transform-origin: bottom center;
`;

export const ActionIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  padding: 12px;
  border-radius: 12px;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.03);
    transform: translateY(-2px);
  }
`;

export const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.03);
  transition: all 0.2s ease;

  svg {
    width: 24px;
    height: 24px;
    color: #333;
    stroke-width: 2;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
`;

export const IconLabel = styled.span`
  font-size: 12px;
  color: #666;
  font-weight: 500;
`; 