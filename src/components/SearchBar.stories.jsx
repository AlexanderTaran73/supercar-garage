import { SearchBar } from './SearchBar';

export default {
  title: 'Components/SearchBar',
  component: SearchBar,
};

export const Default = {
  args: {
    onSearch: (value) => console.log('Searching for:', value),
    placeholder: 'Search by brand...',
  },
};

export const CustomPlaceholder = {
  args: {
    onSearch: (value) => console.log('Searching for:', value),
    placeholder: 'Enter supercar brand (e.g., Ferrari)...',
  },
};
