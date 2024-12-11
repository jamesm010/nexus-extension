import React, { useState } from 'react';
import { SearchBarProps } from '../types';
import { SearchContainer, SearchInput, SendButton } from '../styles';
import { Send } from 'lucide-react';

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim()) {
      onSubmit(value);
      setValue('');
    }
  };

  return (
    <SearchContainer>
      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        <SearchInput
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="How can I help, today?"
        />
        <SendButton type="submit">
          <Send size={20} />
        </SendButton>
      </form>
    </SearchContainer>
  );
};

export default SearchBar; 