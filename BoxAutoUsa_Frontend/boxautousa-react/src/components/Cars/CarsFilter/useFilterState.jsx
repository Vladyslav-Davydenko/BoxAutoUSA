import { useState } from 'react';

export function useFilterState(initialState) {
  const [selectedFilters, setSelectedFilters] = useState(initialState);

  return [selectedFilters, setSelectedFilters];
}