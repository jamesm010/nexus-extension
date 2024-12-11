import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { StyleSheetManager } from 'styled-components';
import Toolbar from './components/Toolbar';
import { GlobalStyles } from './globalStyles';
import { ActionIcon } from './types';
import { Search, Share2, Settings, HelpCircle } from 'lucide-react';

// Action icons using Lucide components
const actionIcons: ActionIcon[] = [
  {
    id: 'search',
    icon: Search,
    label: 'Search',
    onClick: () => console.log('Search clicked'),
  },
  {
    id: 'share',
    icon: Share2,
    label: 'Share',
    onClick: () => console.log('Share clicked'),
  },
  {
    id: 'settings',
    icon: Settings,
    label: 'Settings',
    onClick: () => console.log('Settings clicked'),
  },
  {
    id: 'help',
    icon: HelpCircle,
    label: 'Help',
    onClick: () => console.log('Help clicked'),
  },
];

const App: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleLogoClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleSubmit = (value: string) => {
    console.log('Submitted:', value);
    chrome.runtime.sendMessage({ type: 'SUBMIT', value });
  };

  return (
    <>
      <GlobalStyles />
      <Toolbar
        isExpanded={isExpanded}
        onLogoClick={handleLogoClick}
        onSubmit={handleSubmit}
        actionIcons={actionIcons}
      />
    </>
  );
};

// Create and append the container div with shadow DOM
const container = document.createElement('div');
container.id = 'nexus-toolbar-root';
const shadowRoot = container.attachShadow({ mode: 'open' });
document.body.appendChild(container);

// Create a container for React inside shadow DOM
const reactContainer = document.createElement('div');
shadowRoot.appendChild(reactContainer);

// Create the root and render the app with styled-components
const root = createRoot(reactContainer);
root.render(
  <StyleSheetManager target={shadowRoot as unknown as HTMLElement}>
    <App />
  </StyleSheetManager>
); 