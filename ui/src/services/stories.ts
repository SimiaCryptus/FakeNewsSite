/**
 * Stories API Service
 * Handles all story-related API calls
 */

import { apiClient } from './api';
import { ENDPOINTS } from '../config/api.config';
import type {
  Story,
  PaginatedStoryIds,
  PaginatedCommentIds,
  PaginationParams,
  StorySearchRequest,
} from '../types/api';

/**
 * Stories Service
 */
export const storiesService = {
  /**
   * Get top stories
   */
  async getTopStories(params?: PaginationParams): Promise<PaginatedStoryIds> {
    console.log('Fetching top stories', params);
    return apiClient.get<PaginatedStoryIds>(ENDPOINTS.STORIES_TOP, params);
  },

  /**
   * Get new stories
   */
  async getNewStories(params?: PaginationParams): Promise<PaginatedStoryIds> {
    console.log('Fetching new stories', params);
    return apiClient.get<PaginatedStoryIds>(ENDPOINTS.STORIES_NEW, params);
  },

  /**
   * Get story details by ID
   */
  async getStoryById(id: number | string): Promise<Story> {
    console.log(`Fetching story details for ID: ${id}`);
    return apiClient.get<Story>(ENDPOINTS.STORY_DETAIL(id));
  },
  /**
   * Get story details by ID (alias for getStoryById)
   */
  async getStory(id: number | string): Promise<Story> {
    console.log(`Fetching story (alias) for ID: ${id}`);
    return this.getStoryById(id);
  },


  /**
   * Get multiple stories by IDs
   */
  async getStoriesByIds(ids: number[]): Promise<Story[]> {
    console.log(`Fetching multiple stories: ${ids.length} IDs`);
    const promises = ids.map(id => this.getStoryById(id));
    return Promise.all(promises);
  },

  /**
   * Get story comments
   */
  async getStoryComments(
    id: number | string,
    params?: PaginationParams
  ): Promise<PaginatedCommentIds> {
    console.log(`Fetching comments for story ID: ${id}`, params);
    return apiClient.get<PaginatedCommentIds>(
      ENDPOINTS.STORY_COMMENTS(id),
      params
    );
  },

  /**
   * Search stories
   */
  async searchStories(request: StorySearchRequest): Promise<PaginatedStoryIds> {
    console.log('Searching stories', request);
    return apiClient.post<PaginatedStoryIds>(
      ENDPOINTS.STORIES_SEARCH,
      request
    );
  },

  /**
   * Get stories with full details (helper method)
   */
  async getStoriesWithDetails(
    ids: number[],
    signal?: AbortSignal
  ): Promise<Story[]> {
    console.log(`Fetching details for ${ids.length} stories`);
    const promises = ids.map(id =>
      apiClient.get<Story>(ENDPOINTS.STORY_DETAIL(id), undefined, { signal })
    );
    
    // Use Promise.allSettled to handle partial failures
    const results = await Promise.allSettled(promises);
    
    return results
      .filter((result): result is PromiseFulfilledResult<Story> => 
        result.status === 'fulfilled'
      )
      .map(result => result.value);
  },
};

export default storiesService;