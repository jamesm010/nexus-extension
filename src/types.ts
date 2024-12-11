import { ComponentType } from 'react';
import { LucideIcon } from 'lucide-react';

export interface ActionIcon {
  id: string;
  icon: LucideIcon;
  label: string;
  onClick: () => void;
}

export interface ToolbarProps {
  isExpanded: boolean;
  onLogoClick: () => void;
  onSubmit: (value: string) => void;
  actionIcons: ActionIcon[];
}

export interface ExpandablePanelProps {
  isExpanded: boolean;
  actionIcons: ActionIcon[];
}

export interface SearchBarProps {
  onSubmit: (value: string) => void;
} 