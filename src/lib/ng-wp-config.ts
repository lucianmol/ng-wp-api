export interface NgWpConfig {
  wpApiUrl: string;
}

export enum NgWpRoute {
  POSTS = "/posts",
  PAGES = "/pages",
  CATEGORIES = "/categories",
  COMMENTS = "/comments",
  MEDIA = "/media",
  USERS = "/users"
}
