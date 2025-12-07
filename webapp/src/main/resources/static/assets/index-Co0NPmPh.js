var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { r as reactExports, a as reactDomExports, u as useNavigate, L as Link, N as NavLink, O as Outlet, R as React, b as useParams, c as useSearchParams, d as createBrowserRouter, e as Navigate, f as RouterProvider } from "./react-vendor-CBiOAklH.js";
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f = reactExports, k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m$1 = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: true, ref: true, __self: true, __source: true };
function q(c, a, g) {
  var b, d = {}, e = null, h = null;
  void 0 !== g && (e = "" + g);
  void 0 !== a.key && (e = "" + a.key);
  void 0 !== a.ref && (h = a.ref);
  for (b in a) m$1.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
  if (c && c.defaultProps) for (b in a = c.defaultProps, a) void 0 === d[b] && (d[b] = a[b]);
  return { $$typeof: k, type: c, key: e, ref: h, props: d, _owner: n.current };
}
reactJsxRuntime_production_min.Fragment = l;
reactJsxRuntime_production_min.jsx = q;
reactJsxRuntime_production_min.jsxs = q;
{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}
var jsxRuntimeExports = jsxRuntime.exports;
var client = {};
var m = reactDomExports;
{
  client.createRoot = m.createRoot;
  client.hydrateRoot = m.hydrateRoot;
}
const Header = () => {
  const navigate = useNavigate();
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get("q");
    if (query.trim()) {
      navigate(`${ROUTES.SEARCH}?q=${encodeURIComponent(query.trim())}`);
      e.currentTarget.reset();
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "header", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "header__container", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "header__brand", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: ROUTES.HOME, className: "header__logo", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "header__logo-icon", children: "📰" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "header__logo-text", children: "News" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "header__nav", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        NavLink,
        {
          to: ROUTES.HOME,
          className: ({ isActive }) => `header__nav-link ${isActive ? "header__nav-link--active" : ""}`,
          end: true,
          children: "Top"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        NavLink,
        {
          to: ROUTES.NEW,
          className: ({ isActive }) => `header__nav-link ${isActive ? "header__nav-link--active" : ""}`,
          children: "New"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        NavLink,
        {
          to: ROUTES.SEARCH,
          className: ({ isActive }) => `header__nav-link ${isActive ? "header__nav-link--active" : ""}`,
          children: "Search"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "header__search", onSubmit: handleSearchSubmit, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "search",
          name: "q",
          placeholder: "Search stories...",
          className: "header__search-input",
          "aria-label": "Search stories"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "header__search-button", "aria-label": "Submit search", children: "🔍" })
    ] })
  ] }) });
};
const Footer = () => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "footer", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "footer__container", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "footer__content", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "footer__text", children: [
      "© ",
      currentYear,
      " News App. Built with React & TypeScript."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "footer__links", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "https://github.com",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "footer__link",
          children: "GitHub"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "footer__separator", children: "•" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/api",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "footer__link",
          children: "API Docs"
        }
      )
    ] })
  ] }) }) });
};
const Layout = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "layout", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "layout__main", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "layout__container", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
};
const API_CONFIG = {
  // Base URL - can be overridden by environment variable
  BASE_URL: "http://localhost:8080/"
};
const ENDPOINTS = {
  // Stories
  STORIES_TOP: "/api/stories/top",
  STORIES_NEW: "/api/stories/new",
  STORY_DETAIL: (id) => `/api/stories/${id}`,
  STORY_COMMENTS: (id) => `/api/stories/${id}/comments`,
  STORIES_SEARCH: "/api/stories/search",
  // Comments
  COMMENT_DETAIL: (id) => `/api/comments/${id}`,
  // Users
  USER_DETAIL: (username) => `/api/users/${username}`,
  USER_STORIES: (username) => `/api/users/${username}/stories`,
  USER_COMMENTS: (username) => `/api/users/${username}/comments`
};
class ApiError extends Error {
  constructor(message, status, statusText, data) {
    super(message);
    this.status = status;
    this.statusText = statusText;
    this.data = data;
    this.name = "ApiError";
  }
}
function buildUrl(endpoint, params) {
  const baseUrl = API_CONFIG.BASE_URL.startsWith("http") ? API_CONFIG.BASE_URL : window.location.origin + API_CONFIG.BASE_URL;
  const fullPath = endpoint.startsWith("/") ? endpoint : `/${endpoint}`;
  const url = new URL(fullPath, baseUrl);
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== void 0 && value !== null) {
        url.searchParams.append(key, String(value));
      }
    });
  }
  return url.toString();
}
async function handleResponse(response) {
  if (!response.ok) {
    let errorData;
    try {
      errorData = await response.json();
    } catch {
      errorData = await response.text();
    }
    throw new ApiError(
      `API request failed: ${response.statusText}`,
      response.status,
      response.statusText,
      errorData
    );
  }
  const contentType = response.headers.get("content-type");
  if (contentType && contentType.includes("application/json")) {
    return response.json();
  }
  return response.text();
}
async function request(endpoint, options = {}) {
  const { params, ...fetchOptions } = options;
  const url = buildUrl(endpoint, params);
  const config = {
    ...fetchOptions,
    headers: {
      "Content-Type": "application/json",
      ...fetchOptions.headers
    }
  };
  try {
    const response = await fetch(url, config);
    return handleResponse(response);
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    throw new ApiError(
      error instanceof Error ? error.message : "Network request failed",
      0,
      "Network Error"
    );
  }
}
const apiClient = {
  /**
   * GET request
   */
  get(endpoint, params, options) {
    return request(endpoint, {
      ...options,
      method: "GET",
      params
    });
  },
  /**
   * POST request
   */
  post(endpoint, data, options) {
    return request(endpoint, {
      ...options,
      method: "POST",
      body: data ? JSON.stringify(data) : void 0
    });
  },
  /**
   * PUT request
   */
  put(endpoint, data, options) {
    return request(endpoint, {
      ...options,
      method: "PUT",
      body: data ? JSON.stringify(data) : void 0
    });
  },
  /**
   * PATCH request
   */
  patch(endpoint, data, options) {
    return request(endpoint, {
      ...options,
      method: "PATCH",
      body: data ? JSON.stringify(data) : void 0
    });
  },
  /**
   * DELETE request
   */
  delete(endpoint, options) {
    return request(endpoint, {
      ...options,
      method: "DELETE"
    });
  }
};
const storiesService = {
  /**
   * Get top stories
   */
  async getTopStories(params) {
    console.log("Fetching top stories", params);
    return apiClient.get(ENDPOINTS.STORIES_TOP, params);
  },
  /**
   * Get new stories
   */
  async getNewStories(params) {
    console.log("Fetching new stories", params);
    return apiClient.get(ENDPOINTS.STORIES_NEW, params);
  },
  /**
   * Get story details by ID
   */
  async getStoryById(id) {
    console.log(`Fetching story details for ID: ${id}`);
    return apiClient.get(ENDPOINTS.STORY_DETAIL(id));
  },
  /**
   * Get story details by ID (alias for getStoryById)
   */
  async getStory(id) {
    console.log(`Fetching story (alias) for ID: ${id}`);
    return this.getStoryById(id);
  },
  /**
   * Get multiple stories by IDs
   */
  async getStoriesByIds(ids) {
    console.log(`Fetching multiple stories: ${ids.length} IDs`);
    const promises = ids.map((id) => this.getStoryById(id));
    return Promise.all(promises);
  },
  /**
   * Get story comments
   */
  async getStoryComments(id, params) {
    console.log(`Fetching comments for story ID: ${id}`, params);
    return apiClient.get(
      ENDPOINTS.STORY_COMMENTS(id),
      params
    );
  },
  /**
   * Search stories
   */
  async searchStories(request2) {
    console.log("Searching stories", request2);
    return apiClient.post(
      ENDPOINTS.STORIES_SEARCH,
      request2
    );
  },
  /**
   * Get stories with full details (helper method)
   */
  async getStoriesWithDetails(ids, signal) {
    console.log(`Fetching details for ${ids.length} stories`);
    const promises = ids.map(
      (id) => apiClient.get(ENDPOINTS.STORY_DETAIL(id), void 0, { signal })
    );
    const results = await Promise.allSettled(promises);
    return results.filter(
      (result) => result.status === "fulfilled"
    ).map((result) => result.value);
  }
};
const useTopStories = (page = 1, pageSize = 5) => {
  const [data, setData] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  const [error, setError] = reactExports.useState(null);
  const fetchData = reactExports.useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await storiesService.getTopStories({ page, pageSize });
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Failed to fetch top stories"));
    } finally {
      setLoading(false);
    }
  }, [page, pageSize]);
  reactExports.useEffect(() => {
    fetchData();
  }, [fetchData]);
  return { data, loading, error, refetch: fetchData };
};
const useNewStories = (page = 1, pageSize = 5) => {
  const [data, setData] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  const [error, setError] = reactExports.useState(null);
  const fetchData = reactExports.useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await storiesService.getNewStories({ page, pageSize });
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Failed to fetch new stories"));
    } finally {
      setLoading(false);
    }
  }, [page, pageSize]);
  reactExports.useEffect(() => {
    fetchData();
  }, [fetchData]);
  return { data, loading, error, refetch: fetchData };
};
const useStory = (id) => {
  const [data, setData] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  const [error, setError] = reactExports.useState(null);
  const fetchData = reactExports.useCallback(async () => {
    if (!id) {
      setLoading(false);
      return;
    }
    try {
      setLoading(true);
      setError(null);
      const result = await storiesService.getStory(id);
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Failed to fetch story"));
    } finally {
      setLoading(false);
    }
  }, [id]);
  reactExports.useEffect(() => {
    fetchData();
  }, [fetchData]);
  return { data, loading, error, refetch: fetchData };
};
const useStoryComments = (storyId, page = 1, pageSize = 5) => {
  const [data, setData] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  const [error, setError] = reactExports.useState(null);
  const fetchData = reactExports.useCallback(async () => {
    if (!storyId) {
      setLoading(false);
      return;
    }
    try {
      setLoading(true);
      setError(null);
      const result = await storiesService.getStoryComments(storyId, { page, pageSize });
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Failed to fetch story comments"));
    } finally {
      setLoading(false);
    }
  }, [storyId, page, pageSize]);
  reactExports.useEffect(() => {
    fetchData();
  }, [fetchData]);
  return { data, loading, error, refetch: fetchData };
};
const useBatchStories = () => {
  const [stories, setStories] = reactExports.useState(/* @__PURE__ */ new Map());
  const [loading, setLoading] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  const fetchStories = reactExports.useCallback(async (ids) => {
    try {
      setLoading(true);
      setError(null);
      const results = await Promise.allSettled(
        ids.map((id) => storiesService.getStory(id))
      );
      const newStories = new Map(stories);
      results.forEach((result, index) => {
        if (result.status === "fulfilled") {
          newStories.set(ids[index], result.value);
        }
      });
      setStories(newStories);
    } catch (err) {
      if (err instanceof Error && err.name === "AbortError") {
        return;
      }
      setError(err instanceof Error ? err : new Error("Failed to fetch stories"));
    } finally {
      setLoading(false);
    }
  }, [stories]);
  return { stories, loading, error, fetchStories };
};
const usePagination = ({
  initialPage = 1,
  initialPageSize = 5,
  totalCount = 0
} = {}) => {
  const [page, setPage] = reactExports.useState(initialPage);
  const [pageSize, setPageSize] = reactExports.useState(initialPageSize);
  const totalPages = reactExports.useMemo(() => {
    return Math.ceil(totalCount / pageSize) || 1;
  }, [totalCount, pageSize]);
  const hasNextPage = reactExports.useMemo(() => {
    return page < totalPages;
  }, [page, totalPages]);
  const hasPreviousPage = reactExports.useMemo(() => {
    return page > 1;
  }, [page]);
  const goToPage = reactExports.useCallback((newPage) => {
    setPage(Math.max(1, Math.min(newPage, totalPages)));
  }, [totalPages]);
  const nextPage = reactExports.useCallback(() => {
    if (hasNextPage) {
      setPage((prev) => prev + 1);
    }
  }, [hasNextPage]);
  const previousPage = reactExports.useCallback(() => {
    if (hasPreviousPage) {
      setPage((prev) => prev - 1);
    }
  }, [hasPreviousPage]);
  const handleSetPageSize = reactExports.useCallback((size) => {
    setPageSize(size);
    setPage(1);
  }, []);
  const reset = reactExports.useCallback(() => {
    setPage(initialPage);
    setPageSize(initialPageSize);
  }, [initialPage, initialPageSize]);
  return {
    page,
    pageSize,
    totalPages,
    hasNextPage,
    hasPreviousPage,
    goToPage,
    nextPage,
    previousPage,
    setPageSize: handleSetPageSize,
    reset
  };
};
function formatRelativeTime(date) {
  const now = /* @__PURE__ */ new Date();
  const then = typeof date === "string" ? new Date(date) : date;
  const diffInSeconds = Math.floor((now.getTime() - then.getTime()) / 1e3);
  if (diffInSeconds < 60) {
    return "just now";
  }
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes} minute${diffInMinutes !== 1 ? "s" : ""} ago`;
  }
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours} hour${diffInHours !== 1 ? "s" : ""} ago`;
  }
  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 30) {
    return `${diffInDays} day${diffInDays !== 1 ? "s" : ""} ago`;
  }
  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12) {
    return `${diffInMonths} month${diffInMonths !== 1 ? "s" : ""} ago`;
  }
  const diffInYears = Math.floor(diffInMonths / 12);
  return `${diffInYears} year${diffInYears !== 1 ? "s" : ""} ago`;
}
const formatTimeAgo = formatRelativeTime;
function formatDate(date) {
  const dateObj = typeof date === "string" ? new Date(date) : date;
  return dateObj.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}
const StoryMeta = ({
  story,
  showCommentCount = true,
  className = ""
}) => {
  const timeAgo = formatTimeAgo(story.timestamp);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `story-meta ${className}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "story-meta__item story-meta__score", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "svg",
        {
          width: "16",
          height: "16",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          "aria-hidden": "true",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        story.score,
        " points"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "story-meta__separator", children: "•" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: `/user/${story.author}`, className: "story-meta__item story-meta__author", children: [
      "by ",
      story.author
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "story-meta__separator", children: "•" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("time", { className: "story-meta__item story-meta__time", dateTime: story.timestamp, children: timeAgo }),
    showCommentCount && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "story-meta__separator", children: "•" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: `/story/${story.id}`, className: "story-meta__item story-meta__comments", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "svg",
          {
            width: "16",
            height: "16",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            "aria-hidden": "true",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          story.commentCount,
          " ",
          story.commentCount === 1 ? "comment" : "comments"
        ] })
      ] })
    ] }),
    story.location && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "story-meta__separator", children: "•" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "story-meta__item story-meta__location", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "svg",
          {
            width: "16",
            height: "16",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            "aria-hidden": "true",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "10", r: "3" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: story.location })
      ] })
    ] }),
    story.topics.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "story-meta__separator", children: "•" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "story-meta__item story-meta__topics", children: story.topics.slice(0, 2).join(", ") })
    ] })
  ] });
};
const Badge = ({
  children,
  variant = "default",
  size = "medium",
  className = ""
}) => {
  const classes = ["badge", `badge--${variant}`, `badge--${size}`, className].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: classes, children });
};
function extractDomain(url) {
  try {
    const urlObj = new URL(url);
    return urlObj.hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}
const formatUrl = extractDomain;
const StoryItem = ({
  story,
  rank,
  showFullContent = false,
  className = ""
}) => {
  const isExternalLink = story.url !== null;
  const domain = story.url ? formatUrl(story.url) : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("article", { className: `story-item ${className}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "story-item__content", children: [
    rank && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "story-item__rank", children: [
      rank,
      "."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "story-item__main", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "story-item__header", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "story-item__title", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: `/story/${story.id}`, className: "story-item__link", children: story.title }),
          isExternalLink && domain && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "story-item__domain", children: [
            "(",
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: story.url,
                target: "_blank",
                rel: "noopener noreferrer",
                children: domain
              }
            ),
            ")"
          ] })
        ] }),
        story.tags.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "story-item__tags", children: story.tags.slice(0, 3).map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", size: "small", children: tag }, tag)) })
      ] }),
      showFullContent && story.text && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "story-item__text",
          dangerouslySetInnerHTML: { __html: story.text }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StoryMeta, { story })
    ] })
  ] }) });
};
const Button = ({
  children,
  variant = "primary",
  size = "medium",
  fullWidth = false,
  loading = false,
  disabled = false,
  icon,
  iconPosition = "left",
  className = "",
  ...props
}) => {
  const classes = [
    "button",
    `button--${variant}`,
    `button--${size}`,
    fullWidth && "button--full-width",
    loading && "button--loading",
    className
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      className: classes,
      disabled: disabled || loading,
      ...props,
      children: [
        loading && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "button__spinner", "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "spinner" }) }),
        !loading && icon && iconPosition === "left" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "button__icon button__icon--left", children: icon }),
        children && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "button__text", children }),
        !loading && icon && iconPosition === "right" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "button__icon button__icon--right", children: icon })
      ]
    }
  );
};
const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  hasMore = false,
  className = ""
}) => {
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 7;
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 4) {
        for (let i = 1; i <= 5; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      }
    }
    return pages;
  };
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage < totalPages || hasMore) {
      onPageChange(currentPage + 1);
    }
  };
  if (totalPages <= 1 && !hasMore) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: `pagination ${className}`, "aria-label": "Pagination", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        variant: "ghost",
        size: "small",
        onClick: handlePrevious,
        disabled: currentPage === 1,
        "aria-label": "Previous page",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "svg",
            {
              width: "20",
              height: "20",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("polyline", { points: "15 18 9 12 15 6" })
            }
          ),
          "Previous"
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pagination__pages", children: getPageNumbers().map((page, index) => {
      if (page === "...") {
        return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pagination__ellipsis", children: "..." }, `ellipsis-${index}`);
      }
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          variant: currentPage === page ? "primary" : "ghost",
          size: "small",
          onClick: () => onPageChange(page),
          "aria-label": `Page ${page}`,
          "aria-current": currentPage === page ? "page" : void 0,
          children: page
        },
        page
      );
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        variant: "ghost",
        size: "small",
        onClick: handleNext,
        disabled: !hasMore && currentPage === totalPages,
        "aria-label": "Next page",
        children: [
          "Next",
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "svg",
            {
              width: "20",
              height: "20",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("polyline", { points: "9 18 15 12 9 6" })
            }
          )
        ]
      }
    )
  ] });
};
const Loading = ({
  size = "medium",
  text,
  fullScreen = false,
  className = ""
}) => {
  const classes = [
    "loading",
    `loading--${size}`,
    fullScreen && "loading--fullscreen",
    className
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: classes, role: "status", "aria-live": "polite", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "spinner", "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "spinner__circle" }) }),
    text && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "loading__text", children: text }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Loading..." })
  ] });
};
const Error$1 = ({
  title = "Something went wrong",
  message,
  onRetry,
  retryText = "Try Again",
  className = "",
  variant = "inline"
}) => {
  const classes = ["error", `error--${variant}`, className].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: classes, role: "alert", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "error__icon", "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "svg",
      {
        width: "48",
        height: "48",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "12", r: "10" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "12", y1: "8", x2: "12", y2: "12" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "12", y1: "16", x2: "12.01", y2: "16" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "error__content", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "error__title", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "error__message", children: message }),
      onRetry && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "error__actions", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: onRetry, variant: "primary", children: retryText }) })
    ] })
  ] });
};
const EmptyState = ({
  icon,
  title,
  description,
  message,
  action,
  className = ""
}) => {
  const displayTitle = title || message || "No items found";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `empty-state ${className}`, children: [
    icon && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "empty-state__icon", children: icon }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "empty-state__title", children: displayTitle }),
    description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "empty-state__description", children: description }),
    action && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "empty-state__action", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: action.onClick, variant: "primary", children: action.label }) })
  ] });
};
const StoryList = ({
  storyIds,
  currentPage,
  totalPages,
  hasMore,
  onPageChange,
  loading = false,
  error = null,
  emptyMessage = "No stories found",
  className = ""
}) => {
  const { stories, loading: storiesLoading, error: storiesError, fetchStories } = useBatchStories();
  reactExports.useEffect(() => {
    if (storyIds.length > 0) {
      fetchStories(storyIds);
    }
  }, [storyIds.join(",")]);
  if (loading || storiesLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Loading, { size: "large", text: "Loading stories..." });
  }
  if (error || storiesError) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Error$1,
      {
        message: (error == null ? void 0 : error.message) || (storiesError == null ? void 0 : storiesError.message) || "Failed to load stories",
        onRetry: () => fetchStories(storyIds)
      }
    );
  }
  if (storyIds.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { message: emptyMessage });
  }
  const storyList = storyIds.map((id) => stories.get(id)).filter((story) => story !== void 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `story-list ${className}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "story-list__items", children: storyList.map((story, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      StoryItem,
      {
        story,
        rank: currentPage > 1 ? (currentPage - 1) * storyIds.length + index + 1 : index + 1
      },
      story.id
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Pagination,
      {
        currentPage,
        totalPages,
        hasMore,
        onPageChange,
        className: "story-list__pagination"
      }
    )
  ] });
};
const Home = () => {
  console.log("Home: rendering");
  const { page, pageSize, goToPage, totalPages: calculatedTotalPages } = usePagination();
  const { data, loading, error } = useTopStories(page, pageSize);
  console.log("Home: state", { page, pageSize, data, loading, error });
  const totalPages = data ? Math.ceil(data.totalCount / data.pageSize) : calculatedTotalPages;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "home", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "home__header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "home__title", children: "Top Stories" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "home__subtitle", children: "The best stories from around the web, ranked by score" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      StoryList,
      {
        storyIds: (data == null ? void 0 : data.ids) || [],
        currentPage: Number(page),
        totalPages,
        hasMore: (data == null ? void 0 : data.hasMore) || false,
        onPageChange: goToPage,
        loading,
        error,
        emptyMessage: "No top stories available at the moment",
        className: "home__story-list"
      }
    )
  ] });
};
const NewStories = () => {
  console.log("NewStories: rendering");
  const { page, pageSize, goToPage, totalPages: calculatedTotalPages } = usePagination();
  const { data, loading, error } = useNewStories(page, pageSize);
  console.log("NewStories: state", { page, pageSize, loading, error, data });
  const totalPages = data ? Math.ceil(data.totalCount / data.pageSize) : calculatedTotalPages;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "new-stories", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "new-stories__header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "new-stories__title", children: "New Stories" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "new-stories__subtitle", children: "The latest stories submitted to the platform" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      StoryList,
      {
        storyIds: (data == null ? void 0 : data.ids) || [],
        currentPage: page,
        totalPages,
        hasMore: (data == null ? void 0 : data.hasMore) || false,
        onPageChange: goToPage,
        loading,
        error,
        emptyMessage: "No new stories available at the moment",
        className: "new-stories__story-list"
      }
    )
  ] });
};
const StoryContent = ({ story }) => {
  const isExternalLink = story.url !== null;
  const domain = story.url ? formatUrl(story.url) : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "story-content", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "story-content__header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "story-content__title", children: isExternalLink ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: story.url,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "story-content__link",
            children: story.title
          }
        ),
        domain && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "story-content__domain", children: [
          "(",
          domain,
          ")"
        ] })
      ] }) : story.title }),
      (story.tags.length > 0 || story.topics.length > 0) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "story-content__badges", children: [
        story.tags.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "primary", size: "medium", children: tag }, tag)),
        story.topics.map((topic) => /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", size: "medium", children: topic }, topic))
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StoryMeta, { story, showCommentCount: false })
    ] }),
    story.text && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "story-content__text",
        dangerouslySetInnerHTML: { __html: story.text }
      }
    ),
    story.location && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "story-content__location", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "svg",
        {
          className: "story-content__location-icon",
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M8 0C5.24 0 3 2.24 3 5C3 8.5 8 14 8 14C8 14 13 8.5 13 5C13 2.24 10.76 0 8 0ZM8 6.5C7.17 6.5 6.5 5.83 6.5 5C6.5 4.17 7.17 3.5 8 3.5C8.83 3.5 9.5 4.17 9.5 5C9.5 5.83 8.83 6.5 8 6.5Z",
              fill: "currentColor"
            }
          )
        }
      ),
      story.location
    ] })
  ] });
};
const CommentItem = ({
  comment,
  level,
  onToggleCollapse,
  isCollapsed = false
}) => {
  const [isExpanded, setIsExpanded] = reactExports.useState(true);
  const hasChildren = comment.childCommentIds.length > 0;
  const handleToggle = () => {
    if (onToggleCollapse) {
      onToggleCollapse();
    } else {
      setIsExpanded(!isExpanded);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `comment-item comment-item--level-${Math.min(level, 5)}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "comment-item__header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "comment-item__collapse-btn",
          onClick: handleToggle,
          "aria-label": isCollapsed ? "Expand comment" : "Collapse comment",
          children: isCollapsed ? "+" : "−"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "comment-item__meta", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: `/user/${comment.author}`,
            className: "comment-item__author",
            children: comment.author
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "comment-item__separator", children: "•" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "time",
          {
            className: "comment-item__time",
            dateTime: comment.timestamp,
            title: new Date(comment.timestamp).toLocaleString(),
            children: formatTimeAgo(comment.timestamp)
          }
        ),
        comment.location && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "comment-item__separator", children: "•" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "comment-item__location", children: comment.location })
        ] })
      ] }),
      comment.tags.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "comment-item__tags", children: comment.tags.slice(0, 2).map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", size: "small", children: tag }, tag)) })
    ] }),
    !isCollapsed && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "comment-item__text",
          dangerouslySetInnerHTML: { __html: comment.text }
        }
      ),
      hasChildren && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "comment-item__footer", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "comment-item__reply-count", children: [
        comment.childCommentIds.length,
        " ",
        comment.childCommentIds.length === 1 ? "reply" : "replies"
      ] }) })
    ] }),
    isCollapsed && hasChildren && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "comment-item__collapsed-info", children: [
      comment.childCommentIds.length,
      " hidden",
      " ",
      comment.childCommentIds.length === 1 ? "reply" : "replies"
    ] })
  ] });
};
const CommentThread = ({
  comment,
  allComments,
  level,
  maxLevel = 10
}) => {
  const [isCollapsed, setIsCollapsed] = reactExports.useState(false);
  const hasChildren = comment.childCommentIds.length > 0;
  const shouldNest = level < maxLevel;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "comment-thread", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CommentItem,
      {
        comment,
        level,
        onToggleCollapse: () => setIsCollapsed(!isCollapsed),
        isCollapsed
      }
    ),
    !isCollapsed && hasChildren && shouldNest && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "comment-thread__children", children: comment.childCommentIds.map((childId) => {
      const childComment = allComments.get(childId);
      if (!childComment) return null;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        CommentThread,
        {
          comment: childComment,
          allComments,
          level: level + 1,
          maxLevel
        },
        childId
      );
    }) })
  ] });
};
const LoadingInline = ({
  text,
  message,
  size = "medium",
  className = ""
}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `loading-inline ${className}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Loading, { size, text: message || text }) });
};
const commentsService = {
  /**
   * Get comment details by ID
   */
  async getCommentById(id) {
    return apiClient.get(ENDPOINTS.COMMENT_DETAIL(id));
  },
  /**
   * Get comment details by ID (alias for getCommentById)
   */
  async getComment(id) {
    return this.getCommentById(id);
  },
  /**
   * Get multiple comments by IDs
   */
  async getCommentsByIds(ids) {
    const promises = ids.map((id) => this.getCommentById(id));
    return Promise.all(promises);
  },
  /**
   * Get comment with all nested children (recursive)
   */
  async getCommentThread(id) {
    const comment = await this.getCommentById(id);
    if (comment.childCommentIds.length > 0) {
      const childComments = await this.getCommentsByIds(comment.childCommentIds);
      return {
        ...comment,
        children: childComments
      };
    }
    return comment;
  },
  /**
   * Get comments with details (helper method)
   */
  async getCommentsWithDetails(ids, signal) {
    const promises = ids.map(
      (id) => apiClient.get(ENDPOINTS.COMMENT_DETAIL(id), void 0, { signal })
    );
    const results = await Promise.allSettled(promises);
    return results.filter(
      (result) => result.status === "fulfilled"
    ).map((result) => result.value);
  },
  /**
   * Build comment tree structure
   */
  buildCommentTree(comments) {
    const commentMap = /* @__PURE__ */ new Map();
    const rootComments = [];
    comments.forEach((comment) => {
      commentMap.set(comment.id, { ...comment, children: [] });
    });
    comments.forEach((comment) => {
      const commentWithChildren = commentMap.get(comment.id);
      if (!commentWithChildren) return;
      const parent = commentMap.get(comment.parentId);
      if (parent && parent.children) {
        parent.children.push(commentWithChildren);
      } else {
        rootComments.push(commentWithChildren);
      }
    });
    return rootComments;
  }
};
const useBatchComments = () => {
  const [comments, setComments] = reactExports.useState(/* @__PURE__ */ new Map());
  const [loading, setLoading] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  const fetchComments = reactExports.useCallback(async (ids) => {
    if (ids.length === 0) return;
    try {
      setLoading(true);
      setError(null);
      const results = await Promise.allSettled(
        ids.map((id) => commentsService.getComment(id))
      );
      setComments((prevComments) => {
        const newComments = new Map(prevComments);
        results.forEach((result, index) => {
          if (result.status === "fulfilled") {
            newComments.set(ids[index], result.value);
          }
        });
        return newComments;
      });
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Failed to fetch comments"));
    } finally {
      setLoading(false);
    }
  }, []);
  const clearComments = reactExports.useCallback(() => {
    setComments(/* @__PURE__ */ new Map());
  }, []);
  return { comments, loading, error, fetchComments, clearComments };
};
const CommentList = ({
  commentIds,
  className = ""
}) => {
  const { comments, loading, error, fetchComments } = useBatchComments();
  React.useEffect(() => {
    if (commentIds.length > 0) {
      fetchComments(commentIds);
    }
  }, [commentIds, fetchComments]);
  if (loading && comments.size === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingInline, { message: "Loading comments..." });
  }
  if (error && comments.size === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "comment-list__error", children: "Failed to load comments. Please try again." });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `comment-list ${className}`, children: commentIds.map((commentId) => {
    const comment = comments.get(commentId);
    if (!comment) return null;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      CommentThread,
      {
        comment,
        allComments: comments,
        level: 0
      },
      commentId
    );
  }) });
};
const LoadingPage = ({ text = "Loading...", message }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "loading-page", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Loading, { size: "large", text: message || text, fullScreen: true }) });
};
const StoryDetail = () => {
  const { id } = useParams();
  console.log("StoryDetail: id param:", id);
  const storyId = id || null;
  console.log("StoryDetail: parsed storyId:", storyId);
  const {
    data: story,
    loading: storyLoading,
    error: storyError,
    refetch: refetchStory
  } = useStory(storyId);
  const {
    data: commentsData,
    loading: commentsLoading,
    error: commentsError,
    refetch: refetchComments
  } = useStoryComments(storyId, 1, 100);
  console.log("StoryDetail: story state:", { story, storyLoading, storyError });
  console.log("StoryDetail: comments state:", { commentsData, commentsLoading, commentsError });
  reactExports.useEffect(() => {
    console.log("StoryDetail: scrolling to top for id:", id);
    window.scrollTo(0, 0);
  }, [id]);
  if (storyLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingPage, { message: "Loading story..." });
  }
  if (storyError || !story) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "story-detail__error-container", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Error$1,
        {
          message: (storyError == null ? void 0 : storyError.message) || "Story not found",
          onRetry: refetchStory
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "story-detail__back-link", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", children: "← Back to Home" }) })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "story-detail", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "story-detail__header", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "story-detail__back-link", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "small", children: "← Back" }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StoryContent, { story }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "story-detail__comments-section", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "story-detail__comments-header", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "story-detail__comments-title", children: [
          story.commentCount,
          " ",
          story.commentCount === 1 ? "Comment" : "Comments"
        ] }),
        commentsError && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "secondary",
            size: "small",
            onClick: refetchComments,
            children: "Retry Loading Comments"
          }
        )
      ] }),
      commentsError ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        Error$1,
        {
          message: "Failed to load comments",
          onRetry: refetchComments
        }
      ) : commentsLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "story-detail__comments-loading", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingPage, { message: "Loading comments..." }) }) : commentsData && commentsData.ids.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(CommentList, { commentIds: commentsData.ids }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "story-detail__no-comments", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "No comments yet. Be the first to comment!" }) })
    ] })
  ] });
};
var StorySortOrder = /* @__PURE__ */ ((StorySortOrder2) => {
  StorySortOrder2["SCORE"] = "SCORE";
  StorySortOrder2["RECENT"] = "RECENT";
  StorySortOrder2["COMMENTS"] = "COMMENTS";
  return StorySortOrder2;
})(StorySortOrder || {});
const SearchForm = ({
  formState,
  updateField,
  onSearch,
  onReset,
  loading
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "search-form", onSubmit: handleSubmit, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "search-form__header", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Search" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "search-form__field", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "search-query", className: "search-form__label", children: "Search Query" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          id: "search-query",
          type: "text",
          className: "search-form__input",
          placeholder: "Enter keywords...",
          value: formState.query,
          onChange: (e) => updateField("query", e.target.value),
          disabled: loading
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "search-form__hint", children: "Search in titles and content" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "search-form__field", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "search-author", className: "search-form__label", children: "Author" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          id: "search-author",
          type: "text",
          className: "search-form__input",
          placeholder: "Username...",
          value: formState.author,
          onChange: (e) => updateField("author", e.target.value),
          disabled: loading
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "search-form__field", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "search-min-score", className: "search-form__label", children: "Minimum Score" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          id: "search-min-score",
          type: "number",
          className: "search-form__input",
          placeholder: "0",
          min: "0",
          value: formState.minScore ?? "",
          onChange: (e) => updateField("minScore", e.target.value ? parseInt(e.target.value, 10) : void 0),
          disabled: loading
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "search-form__field", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "search-sort", className: "search-form__label", children: "Sort By" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "select",
        {
          id: "search-sort",
          className: "search-form__select",
          value: formState.sortOrder,
          onChange: (e) => updateField("sortOrder", e.target.value),
          disabled: loading,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: StorySortOrder.SCORE, children: "Highest Score" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: StorySortOrder.RECENT, children: "Most Recent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: StorySortOrder.COMMENTS, children: "Most Comments" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "search-form__actions", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          type: "submit",
          variant: "primary",
          fullWidth: true,
          loading,
          disabled: loading,
          className: "search-form__submit-btn",
          children: "Search"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          type: "button",
          variant: "secondary",
          fullWidth: true,
          onClick: onReset,
          disabled: loading,
          children: "Reset"
        }
      )
    ] })
  ] });
};
const SearchFilters = ({
  formState,
  updateField,
  onApply
}) => {
  const [tagInput, setTagInput] = reactExports.useState("");
  const [topicInput, setTopicInput] = reactExports.useState("");
  const handleAddTag = () => {
    if (tagInput.trim() && !formState.tags.includes(tagInput.trim())) {
      updateField("tags", [...formState.tags, tagInput.trim()]);
      setTagInput("");
    }
  };
  const handleRemoveTag = (tag) => {
    updateField("tags", formState.tags.filter((t) => t !== tag));
  };
  const handleAddTopic = () => {
    if (topicInput.trim() && !formState.topics.includes(topicInput.trim())) {
      updateField("topics", [...formState.topics, topicInput.trim()]);
      setTopicInput("");
    }
  };
  const handleRemoveTopic = (topic) => {
    updateField("topics", formState.topics.filter((t) => t !== topic));
  };
  const handleKeyPress = (e, handler) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handler();
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "search-filters", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "search-filters__header", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Advanced Filters" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "search-filters__section", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "search-filters__label", children: "Tags" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "search-filters__input-group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            className: "search-filters__input",
            placeholder: "Add tag...",
            value: tagInput,
            onChange: (e) => setTagInput(e.target.value),
            onKeyPress: (e) => handleKeyPress(e, handleAddTag)
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "secondary",
            size: "small",
            onClick: handleAddTag,
            disabled: !tagInput.trim(),
            children: "Add"
          }
        )
      ] }),
      formState.tags.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "search-filters__chips", children: formState.tags.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "search-filters__chip", children: [
        tag,
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            className: "search-filters__chip-remove",
            onClick: () => handleRemoveTag(tag),
            "aria-label": `Remove ${tag}`,
            children: "×"
          }
        )
      ] }, tag)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "search-filters__section", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "search-filters__label", children: "Topics" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "search-filters__input-group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            className: "search-filters__input",
            placeholder: "Add topic...",
            value: topicInput,
            onChange: (e) => setTopicInput(e.target.value),
            onKeyPress: (e) => handleKeyPress(e, handleAddTopic)
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "secondary",
            size: "small",
            onClick: handleAddTopic,
            disabled: !topicInput.trim(),
            children: "Add"
          }
        )
      ] }),
      formState.topics.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "search-filters__chips", children: formState.topics.map((topic) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "search-filters__chip", children: [
        topic,
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            className: "search-filters__chip-remove",
            onClick: () => handleRemoveTopic(topic),
            "aria-label": `Remove ${topic}`,
            children: "×"
          }
        )
      ] }, topic)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "search-filters__section", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "filter-location", className: "search-filters__label", children: "Location" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          id: "filter-location",
          type: "text",
          className: "search-filters__input",
          placeholder: "City, State or Country...",
          value: formState.location,
          onChange: (e) => updateField("location", e.target.value)
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "search-filters__section", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "filter-after", className: "search-filters__label", children: "After Date" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          id: "filter-after",
          type: "date",
          className: "search-filters__input",
          value: formState.after,
          onChange: (e) => updateField("after", e.target.value)
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "search-filters__section", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "filter-before", className: "search-filters__label", children: "Before Date" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          id: "filter-before",
          type: "date",
          className: "search-filters__input",
          value: formState.before,
          onChange: (e) => updateField("before", e.target.value)
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "search-filters__actions", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        variant: "primary",
        fullWidth: true,
        onClick: onApply,
        children: "Apply Filters"
      }
    ) })
  ] });
};
const SearchResults = ({
  results,
  loading,
  error,
  sortOrder,
  onSortChange,
  onPageChange,
  onRetry
}) => {
  if (loading && !results) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "search-results", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Loading, { size: "large", text: "Searching..." }) });
  }
  if (error) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "search-results", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Error$1,
      {
        message: error.message || "Search failed",
        onRetry
      }
    ) });
  }
  if (!results) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "search-results", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      EmptyState,
      {
        message: "Enter search criteria to find stories",
        icon: "🔍"
      }
    ) });
  }
  const totalPages = Math.ceil(results.totalCount / results.pageSize);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "search-results", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "search-results__header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "search-results__info", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "search-results__title", children: [
          results.totalCount,
          " ",
          results.totalCount === 1 ? "result" : "results",
          " found"
        ] }),
        results.totalCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "search-results__subtitle", children: [
          "Showing ",
          (results.page - 1) * results.pageSize + 1,
          " - ",
          Math.min(results.page * results.pageSize, results.totalCount),
          " of ",
          results.totalCount
        ] })
      ] }),
      results.totalCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "search-results__sort", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "results-sort", className: "search-results__sort-label", children: "Sort by:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "select",
          {
            id: "results-sort",
            className: "search-results__sort-select",
            value: sortOrder,
            onChange: (e) => onSortChange(e.target.value),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: StorySortOrder.SCORE, children: "Highest Score" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: StorySortOrder.RECENT, children: "Most Recent" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: StorySortOrder.COMMENTS, children: "Most Comments" })
            ]
          }
        )
      ] })
    ] }),
    results.ids.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      EmptyState,
      {
        message: "No stories match your search criteria",
        icon: "📭"
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
      StoryList,
      {
        storyIds: results.ids,
        currentPage: results.page,
        totalPages,
        hasMore: results.hasMore,
        onPageChange,
        loading,
        emptyMessage: "No stories found"
      }
    )
  ] });
};
const useSearch = (debounceMs = 300) => {
  const [results, setResults] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  const debounceTimerRef = reactExports.useRef(null);
  const search = reactExports.useCallback(async (params) => {
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }
    debounceTimerRef.current = setTimeout(async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await storiesService.searchStories(params);
        setResults(result);
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Search failed"));
      } finally {
        setLoading(false);
      }
    }, debounceMs);
  }, [debounceMs]);
  const clearResults = reactExports.useCallback(() => {
    setResults(null);
    setError(null);
  }, []);
  reactExports.useEffect(() => {
    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, []);
  return { results, loading, error, search, clearResults };
};
const initialFormState = {
  query: "",
  tags: [],
  topics: [],
  location: "",
  author: "",
  minScore: void 0,
  after: "",
  before: "",
  sortOrder: StorySortOrder.SCORE,
  page: 1,
  pageSize: 5
};
const useSearchForm = () => {
  const [formState, setFormState] = reactExports.useState(initialFormState);
  const updateField = reactExports.useCallback((field, value) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
  }, []);
  const resetForm = reactExports.useCallback(() => {
    setFormState(initialFormState);
  }, []);
  const toSearchRequest = reactExports.useCallback(() => {
    return {
      query: formState.query || void 0,
      tags: formState.tags.length > 0 ? formState.tags : void 0,
      topics: formState.topics.length > 0 ? formState.topics : void 0,
      location: formState.location || void 0,
      author: formState.author || void 0,
      minScore: formState.minScore,
      after: formState.after || void 0,
      before: formState.before || void 0,
      sortOrder: formState.sortOrder,
      page: formState.page,
      pageSize: formState.pageSize
    };
  }, [formState]);
  return { formState, updateField, resetForm, toSearchRequest };
};
const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { results, loading, error, search, clearResults } = useSearch();
  const { formState, updateField, resetForm, toSearchRequest } = useSearchForm();
  reactExports.useEffect(() => {
    const query = searchParams.get("q");
    const tags = searchParams.get("tags");
    const topics = searchParams.get("topics");
    const author = searchParams.get("author");
    const location = searchParams.get("location");
    const minScore = searchParams.get("minScore");
    const sortOrder = searchParams.get("sort");
    const page = searchParams.get("page");
    console.log("Initializing search from URL params:", { query, tags, topics, author, location, minScore, sortOrder, page });
    if (query) updateField("query", query);
    if (tags) updateField("tags", tags.split(","));
    if (topics) updateField("topics", topics.split(","));
    if (author) updateField("author", author);
    if (location) updateField("location", location);
    if (minScore) updateField("minScore", parseInt(minScore, 10));
    if (sortOrder) updateField("sortOrder", sortOrder);
    if (page) updateField("page", parseInt(page, 10));
    if (query || tags || topics || author || location || minScore) {
      console.log("Triggering initial search based on URL params");
      handleSearch();
    }
  }, []);
  const handleSearch = async () => {
    const searchRequest = toSearchRequest();
    console.log("Executing search with request:", searchRequest);
    await search(searchRequest);
    const params = new URLSearchParams();
    if (formState.query) params.set("q", formState.query);
    if (formState.tags.length > 0) params.set("tags", formState.tags.join(","));
    if (formState.topics.length > 0) params.set("topics", formState.topics.join(","));
    if (formState.author) params.set("author", formState.author);
    if (formState.location) params.set("location", formState.location);
    if (formState.minScore) params.set("minScore", formState.minScore.toString());
    if (formState.sortOrder !== StorySortOrder.SCORE) params.set("sort", formState.sortOrder);
    if (formState.page > 1) params.set("page", formState.page.toString());
    console.log("Updating URL params:", params.toString());
    setSearchParams(params);
  };
  const handleReset = () => {
    console.log("Resetting search form");
    resetForm();
    clearResults();
    setSearchParams({});
  };
  const handlePageChange = (page) => {
    console.log("Changing page to:", page);
    updateField("page", page);
    setTimeout(() => handleSearch(), 0);
  };
  const handleSortChange = (sortOrder) => {
    console.log("Changing sort order to:", sortOrder);
    updateField("sortOrder", sortOrder);
    updateField("page", 1);
    setTimeout(() => handleSearch(), 0);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "search-page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "search-page__header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Search Stories" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "search-page__subtitle", children: "Find stories using advanced filters and search criteria" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "search-page__content", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "search-page__sidebar", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SearchForm,
          {
            formState,
            updateField: (field, value) => updateField(field, value),
            onSearch: handleSearch,
            onReset: handleReset,
            loading
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SearchFilters,
          {
            formState,
            updateField: (field, value) => updateField(field, value),
            onApply: handleSearch
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "search-page__main", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        SearchResults,
        {
          results,
          loading,
          error,
          sortOrder: formState.sortOrder,
          onSortChange: handleSortChange,
          onPageChange: handlePageChange,
          onRetry: handleSearch
        }
      ) })
    ] })
  ] });
};
const usersService = {
  /**
   * Get user details by username
   */
  async getUserByUsername(username) {
    return apiClient.get(ENDPOINTS.USER_DETAIL(username));
  },
  /**
   * Get user details by username (alias for getUserByUsername)
   */
  async getUser(username) {
    return this.getUserByUsername(username);
  },
  /**
   * Get user's submitted stories
   */
  async getUserStories(username, params) {
    return apiClient.get(
      ENDPOINTS.USER_STORIES(username),
      params
    );
  },
  /**
   * Get user's comments
   */
  async getUserComments(username, params) {
    return apiClient.get(
      ENDPOINTS.USER_COMMENTS(username),
      params
    );
  },
  /**
   * Get multiple users by usernames
   */
  async getUsersByUsernames(usernames) {
    const promises = usernames.map((username) => this.getUserByUsername(username));
    const results = await Promise.allSettled(promises);
    return results.filter(
      (result) => result.status === "fulfilled"
    ).map((result) => result.value);
  },
  /**
   * Check if user exists
   */
  async userExists(username) {
    try {
      await this.getUserByUsername(username);
      return true;
    } catch (error) {
      return false;
    }
  }
};
const useUser = (username) => {
  const [data, setData] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  const [error, setError] = reactExports.useState(null);
  const fetchData = reactExports.useCallback(async () => {
    if (!username) {
      setLoading(false);
      return;
    }
    try {
      setLoading(true);
      setError(null);
      const result = await usersService.getUserByUsername(username);
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Failed to fetch user"));
    } finally {
      setLoading(false);
    }
  }, [username]);
  reactExports.useEffect(() => {
    fetchData();
  }, [fetchData]);
  return { data, loading, error, refetch: fetchData };
};
const useUserStories = (username, page = 1, pageSize = 5) => {
  const [data, setData] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  const [error, setError] = reactExports.useState(null);
  const fetchData = reactExports.useCallback(async () => {
    if (!username) {
      setLoading(false);
      return;
    }
    try {
      setLoading(true);
      setError(null);
      const result = await usersService.getUserStories(username, { page, pageSize });
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Failed to fetch user stories"));
    } finally {
      setLoading(false);
    }
  }, [username, page, pageSize]);
  reactExports.useEffect(() => {
    fetchData();
  }, [fetchData]);
  return { data, loading, error, refetch: fetchData };
};
const useUserComments = (username, page = 1, pageSize = 5) => {
  const [data, setData] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  const [error, setError] = reactExports.useState(null);
  const fetchData = reactExports.useCallback(async () => {
    if (!username) {
      setLoading(false);
      return;
    }
    try {
      setLoading(true);
      setError(null);
      const result = await usersService.getUserComments(username, { page, pageSize });
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Failed to fetch user comments"));
    } finally {
      setLoading(false);
    }
  }, [username, page, pageSize]);
  reactExports.useEffect(() => {
    fetchData();
  }, [fetchData]);
  return { data, loading, error, refetch: fetchData };
};
const UserInfo = ({ user }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "user-info", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "user-info__header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "user-info__username", children: user.id }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "user-info__meta", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "user-info__joined", children: [
        "Joined ",
        formatDate(user.created)
      ] }) })
    ] }),
    user.about && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "user-info__about", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: user.about }) }),
    user.location && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "user-info__location", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "svg",
        {
          className: "user-info__location-icon",
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M8 0C5.24 0 3 2.24 3 5C3 8.5 8 14 8 14C8 14 13 8.5 13 5C13 2.24 10.76 0 8 0ZM8 6.5C7.17 6.5 6.5 5.83 6.5 5C6.5 4.17 7.17 3.5 8 3.5C8.83 3.5 9.5 4.17 9.5 5C9.5 5.83 8.83 6.5 8 6.5Z",
              fill: "currentColor"
            }
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: user.location })
    ] }),
    user.topics.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "user-info__topics", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "user-info__section-title", children: "Interests" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "user-info__badges", children: user.topics.map((topic) => /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", size: "small", children: topic }, topic)) })
    ] }),
    user.tags.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "user-info__tags", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "user-info__section-title", children: "Tags" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "user-info__badges", children: user.tags.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", size: "small", children: tag }, tag)) })
    ] })
  ] });
};
const Card = ({
  children,
  className = "",
  variant = "default",
  padding = "medium",
  hoverable = false,
  onClick
}) => {
  const classes = [
    "card",
    `card--${variant}`,
    `card--padding-${padding}`,
    hoverable && "card--hoverable",
    onClick && "card--clickable",
    className
  ].filter(Boolean).join(" ");
  const Component = onClick ? "button" : "div";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Component, { className: classes, onClick, type: onClick ? "button" : void 0, children });
};
const UserStats = ({ user }) => {
  const stats = [
    {
      label: "Karma",
      value: user.karma.toLocaleString(),
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "path",
        {
          d: "M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z",
          fill: "currentColor"
        }
      ) })
    },
    {
      label: "Submissions",
      value: user.submittedIds.length.toLocaleString(),
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "path",
        {
          d: "M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM14 17H7V15H14V17ZM17 13H7V11H17V13ZM17 9H7V7H17V9Z",
          fill: "currentColor"
        }
      ) })
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "user-stats", children: stats.map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "user-stats__card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "user-stats__icon", children: stat.icon }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "user-stats__content", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "user-stats__value", children: stat.value }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "user-stats__label", children: stat.label })
    ] })
  ] }, stat.label)) });
};
const UserActivity = ({
  type,
  data,
  loading,
  error,
  currentPage,
  onPageChange,
  onRetry
}) => {
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Loading, { size: "medium", text: `Loading ${type}...` });
  }
  if (error) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Error$1,
      {
        message: error.message || `Failed to load ${type}`,
        onRetry
      }
    );
  }
  if (!data || data.ids.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      EmptyState,
      {
        message: type === "stories" ? "No stories submitted yet" : "No comments posted yet"
      }
    );
  }
  const totalPages = Math.ceil(data.totalCount / data.pageSize);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "user-activity", children: type === "stories" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
    StoryList,
    {
      storyIds: data.ids,
      currentPage,
      totalPages,
      hasMore: data.hasMore,
      onPageChange,
      emptyMessage: "No stories found"
    }
  ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
    CommentList,
    {
      commentIds: data.ids,
      currentPage,
      totalPages,
      hasMore: data.hasMore,
      onPageChange,
      showParentContext: true
    }
  ) });
};
const UserProfile = () => {
  const { username } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = reactExports.useState("stories");
  const { data: user, loading: userLoading, error: userError, refetch: refetchUser } = useUser(username || null);
  const {
    page: storiesPage,
    pageSize: storiesPageSize,
    goToPage: setStoriesPage
  } = usePagination();
  const {
    page: commentsPage,
    pageSize: commentsPageSize,
    goToPage: setCommentsPage
  } = usePagination();
  const {
    data: storiesData,
    loading: storiesLoading,
    error: storiesError,
    refetch: refetchStories
  } = useUserStories(username || null, storiesPage, storiesPageSize);
  const {
    data: commentsData,
    loading: commentsLoading,
    error: commentsError,
    refetch: refetchComments
  } = useUserComments(username || null, commentsPage, commentsPageSize);
  if (userLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Loading, { size: "large", text: "Loading user profile..." });
  }
  if (userError) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "user-profile-error", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Error$1,
      {
        message: userError.message || "Failed to load user profile",
        onRetry: refetchUser
      }
    ) });
  }
  if (!user) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "user-profile-error", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Error$1,
      {
        message: "User not found",
        onRetry: () => navigate("/"),
        retryText: "Go Home"
      }
    ) });
  }
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (tab === "stories") {
      setStoriesPage(1);
    } else {
      setCommentsPage(1);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "user-profile", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "user-profile__header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(UserInfo, { user }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(UserStats, { user })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "user-profile__activity", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "user-profile__tabs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            className: `user-profile__tab ${activeTab === "stories" ? "user-profile__tab--active" : ""}`,
            onClick: () => handleTabChange("stories"),
            children: [
              "Stories (",
              user.submittedIds.length,
              ")"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: `user-profile__tab ${activeTab === "comments" ? "user-profile__tab--active" : ""}`,
            onClick: () => handleTabChange("comments"),
            children: "Comments"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "user-profile__content", children: [
        activeTab === "stories" && /* @__PURE__ */ jsxRuntimeExports.jsx(
          UserActivity,
          {
            type: "stories",
            data: storiesData,
            loading: storiesLoading,
            error: storiesError,
            currentPage: storiesPage,
            onPageChange: setStoriesPage,
            onRetry: refetchStories
          }
        ),
        activeTab === "comments" && /* @__PURE__ */ jsxRuntimeExports.jsx(
          UserActivity,
          {
            type: "comments",
            data: commentsData,
            loading: commentsLoading,
            error: commentsError,
            currentPage: commentsPage,
            onPageChange: setCommentsPage,
            onRetry: refetchComments
          }
        )
      ] })
    ] })
  ] });
};
const NotFound = () => {
  console.log(`NotFound page rendered for: ${window.location.pathname}`);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "not-found", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "not-found__content", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "not-found__icon", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "svg",
      {
        width: "120",
        height: "120",
        viewBox: "0 0 120 120",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "circle",
            {
              cx: "60",
              cy: "60",
              r: "50",
              stroke: "currentColor",
              strokeWidth: "4",
              fill: "none"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M40 50C40 47.7909 41.7909 46 44 46H46C48.2091 46 50 47.7909 50 50V52C50 54.2091 48.2091 56 46 56H44C41.7909 56 40 54.2091 40 52V50Z",
              fill: "currentColor"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M70 50C70 47.7909 71.7909 46 74 46H76C78.2091 46 80 47.7909 80 50V52C80 54.2091 78.2091 56 76 56H74C71.7909 56 70 54.2091 70 52V50Z",
              fill: "currentColor"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M40 75C40 75 45 70 60 70C75 70 80 75 80 75",
              stroke: "currentColor",
              strokeWidth: "4",
              strokeLinecap: "round"
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "not-found__title", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "not-found__subtitle", children: "Page Not Found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "not-found__message", children: "Sorry, the page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "not-found__actions", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", size: "large", children: "Go to Home" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          variant: "secondary",
          size: "large",
          onClick: () => window.history.back(),
          children: "Go Back"
        }
      )
    ] })
  ] }) });
};
console.log("Initializing router configuration");
const router = createBrowserRouter([
  {
    path: "/",
    element: /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, {}),
    errorElement: /* @__PURE__ */ jsxRuntimeExports.jsx(NotFound, {}),
    children: [
      {
        index: true,
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(Home, {})
      },
      {
        path: "new",
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(NewStories, {})
      },
      {
        path: "story/:id",
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(StoryDetail, {})
      },
      {
        path: "search",
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(Search, {})
      },
      {
        path: "user/:username",
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(UserProfile, {})
      },
      {
        path: "404",
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(NotFound, {})
      },
      {
        path: "*",
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, { to: "/404", replace: true })
      }
    ]
  }
]);
const ROUTES = {
  HOME: "/",
  NEW: "/new",
  SEARCH: "/search"
};
class ErrorBoundary extends reactExports.Component {
  constructor(props) {
    super(props);
    __publicField(this, "handleReset", () => {
      this.setState({
        hasError: false,
        error: null
      });
    });
    this.state = {
      hasError: false,
      error: null
    };
  }
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error
    };
  }
  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }
  render() {
    var _a;
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        Error$1,
        {
          title: "Application Error",
          message: ((_a = this.state.error) == null ? void 0 : _a.message) || "An unexpected error occurred. Please try refreshing the page.",
          onRetry: this.handleReset,
          variant: "page"
        }
      );
    }
    return this.props.children;
  }
}
function App() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorBoundary, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(RouterProvider, { router }) });
}
const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Failed to find the root element");
}
client.createRoot(rootElement).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(React.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) })
);
//# sourceMappingURL=index-Co0NPmPh.js.map
