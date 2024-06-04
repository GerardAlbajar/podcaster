import React, { useState } from 'react';
import { StyledInput, SearchBarContainer } from './SearchBar.styles';

interface SearchBarProps {
  onSearch: (query: string) => void;
  podcastListResultsNumber: number;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, podcastListResultsNumber }) => {
  const [query, setQuery] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <SearchBarContainer>
        <div className='search-bar-number__wrapper'>
            {podcastListResultsNumber}
        </div>
        <StyledInput
            type="text"
            placeholder="Filter podcasts..."
            value={query}
            onChange={handleChange}
        />
    </SearchBarContainer>
  );
};

export default SearchBar;
