import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchForm } from '../components/search/SearchForm';
import { SearchFilters } from '../components/search/SearchFilters';
import { SearchResults } from '../components/search/SearchResults';
import { useSearch, useSearchForm } from '../hooks/useSearch';
import { StorySortOrder } from '../types/api';
import './Search.css';

export const Search: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { results, loading, error, search, clearResults } = useSearch();
  const { formState, updateField, resetForm, toSearchRequest } = useSearchForm();

  // Initialize form from URL params on mount
  useEffect(() => {
    const query = searchParams.get('q');
    const tags = searchParams.get('tags');
    const topics = searchParams.get('topics');
    const author = searchParams.get('author');
    const location = searchParams.get('location');
    const minScore = searchParams.get('minScore');
    const sortOrder = searchParams.get('sort');
    const page = searchParams.get('page');
    console.log('Initializing search from URL params:', { query, tags, topics, author, location, minScore, sortOrder, page });


    if (query) updateField('query', query);
    if (tags) updateField('tags', tags.split(','));
    if (topics) updateField('topics', topics.split(','));
    if (author) updateField('author', author);
    if (location) updateField('location', location);
    if (minScore) updateField('minScore', parseInt(minScore, 10));
    if (sortOrder) updateField('sortOrder', sortOrder as StorySortOrder);
    if (page) updateField('page', parseInt(page, 10));

    // Trigger search if there are params
    if (query || tags || topics || author || location || minScore) {
      console.log('Triggering initial search based on URL params');
      handleSearch();
    }
  }, []); // Only run on mount

  const handleSearch = async () => {
    const searchRequest = toSearchRequest();
    console.log('Executing search with request:', searchRequest);
    await search(searchRequest);

    // Update URL params
    const params = new URLSearchParams();
    if (formState.query) params.set('q', formState.query);
    if (formState.tags.length > 0) params.set('tags', formState.tags.join(','));
    if (formState.topics.length > 0) params.set('topics', formState.topics.join(','));
    if (formState.author) params.set('author', formState.author);
    if (formState.location) params.set('location', formState.location);
    if (formState.minScore) params.set('minScore', formState.minScore.toString());
    if (formState.sortOrder !== StorySortOrder.SCORE) params.set('sort', formState.sortOrder);
    if (formState.page > 1) params.set('page', formState.page.toString());
    console.log('Updating URL params:', params.toString());

    setSearchParams(params);
  };

  const handleReset = () => {
    console.log('Resetting search form');
    resetForm();
    clearResults();
    setSearchParams({});
  };

  const handlePageChange = (page: number) => {
    console.log('Changing page to:', page);
    updateField('page', page);
    // Trigger search with new page
    setTimeout(() => handleSearch(), 0);
  };

  const handleSortChange = (sortOrder: StorySortOrder) => {
    console.log('Changing sort order to:', sortOrder);
    updateField('sortOrder', sortOrder);
    updateField('page', 1); // Reset to first page
    setTimeout(() => handleSearch(), 0);
  };

return (
    <div className="search-page">
      <div className="search-page__header">
        <h1>Search Stories</h1>
        <p className="search-page__subtitle">
          Find stories using advanced filters and search criteria
        </p>
      </div>

      <div className="search-page__content">
        <aside className="search-page__sidebar">
          <SearchForm
            formState={formState}
            updateField={(field, value) => updateField(field as any, value)}
            onSearch={handleSearch}
            onReset={handleReset}
            loading={loading}
          />
          <SearchFilters
            formState={formState}
            updateField={(field, value) => updateField(field as any, value)}
            onApply={handleSearch}
          />
        </aside>

        <main className="search-page__main">
          <SearchResults
            results={results}
            loading={loading}
            error={error}
            sortOrder={formState.sortOrder}
            onSortChange={handleSortChange}
            onPageChange={handlePageChange}
            onRetry={handleSearch}
          />
        </main>
      </div>
    </div>
  );
};