import React from 'react';
import { ExpandablePanelProps } from '../types';
import { ExpandablePanel as StyledPanel, ActionIconContainer, IconWrapper, IconLabel } from '../styles';

const ExpandablePanel: React.FC<ExpandablePanelProps> = ({ isExpanded, actionIcons }) => {
  return (
    <StyledPanel $isExpanded={isExpanded}>
      {actionIcons.map((icon) => {
        const IconComponent = icon.icon;
        return (
          <ActionIconContainer key={icon.id} onClick={icon.onClick}>
            <IconWrapper>
              <IconComponent strokeWidth={2} />
            </IconWrapper>
            <IconLabel>{icon.label}</IconLabel>
          </ActionIconContainer>
        );
      })}
    </StyledPanel>
  );
};

export default ExpandablePanel; 