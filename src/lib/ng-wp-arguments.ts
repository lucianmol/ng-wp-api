// tslint:disable-next-line:no-empty-interface
export interface NgWpArguments {}

/* ******************** POSTS ******************** */
// https://developer.wordpress.org/rest-api/reference/posts/#arguments
export interface PostsListArguments extends NgWpArguments {
  context?: 'view' | 'embed' | 'edit';
  page?: number;
  per_page?: number;
  search?: string;
  after?: Date;
  author?: number;
  author_exclude?: any;
  before?: Date;
  exclude?: any;
  include?: any;
  offset?: number;
  order?: 'asc' | 'desc';
  orderby?:
    | 'author'
    | 'date'
    | 'id'
    | 'include'
    | 'modified'
    | 'parent'
    | 'relevance'
    | 'slug'
    | 'title';
  slug?: string;
  status?: string;
  categories?: number;
  categories_exclude?: number;
  tags?: string;
  tags_exclude?: string;
  sticky?: boolean;
}

// https://developer.wordpress.org/rest-api/reference/posts/#arguments
export interface PostGetArguments extends NgWpArguments {
  context?: 'view' | 'embed' | 'edit';
  password?: string;
}

/* ******************** PAGES ******************** */
// https://developer.wordpress.org/rest-api/reference/pages/#arguments
export interface PagesListArguments extends NgWpArguments {
  context?: 'view' | 'embed' | 'edit';
  page?: number;
  per_page?: number;
  search?: string;
  after?: Date;
  author?: number;
  author_exclude?: any;
  before?: Date;
  exclude?: any;
  include?: any;
  menu_order?: any;
  offset?: number;
  order?: 'asc' | 'desc';
  orderby?:
    | 'author'
    | 'date'
    | 'id'
    | 'include'
    | 'modified'
    | 'parent'
    | 'relevance'
    | 'slug'
    | 'title'
    | 'menu_order';
  parent?: any;
  parent_exclude?: any;
  slug?: string;
  status?: string;
}

// https://developer.wordpress.org/rest-api/reference/pages/#retrieve-a-page
export interface PageGetArguments extends NgWpArguments {
  context?: 'view' | 'embed' | 'edit';
  password?: string;
}

/* ******************** CATEGORIES ******************** */
// https:// developer.wordpress.org/rest-api/reference/categories/#arguments
export interface CategoriesListArguments extends NgWpArguments {
  context?: 'view' | 'embed' | 'edit';
  page?: number;
  per_page?: number;
  search?: string;
  before?: Date;
  exclude?: any;
  include?: any;
  order?: 'asc' | 'desc';
  orderby?:
    | 'id'
    | 'include'
    | 'name'
    | 'slug'
    | 'term_group'
    | 'description'
    | 'count';
  hide_empty?: boolean;
  parent?: any;
  post?: any;
  slug?: any;
}

/* ******************** COMMENTS ******************** */
// https://developer.wordpress.org/rest-api/reference/comments/#list-comments
export interface CommentsListArguments extends NgWpArguments {
  context?: 'view' | 'embed' | 'edit';
  page?: number;
  per_page?: number;
  search?: string;
  after?: Date;
  author?: number;
  author_exclude?: any;
  author_email?: string;
  before?: Date;
  exclude?: any;
  include?: any;
  offset?: number;
  order?: 'asc' | 'desc';
  orderby?: 'date' | 'date_gmt' | 'id' | 'include' | 'post' | 'parent' | 'type';
  parent?: any;
  parent_exclude?: any;
  post?: any;
  status?: string;
  type?: string;
  password?: string;
}
// https://developer.wordpress.org/rest-api/reference/comments/#arguments
export interface CommentsCreateArguments extends NgWpArguments {
  author_name?: number;
  author_email?: string;
  author_ip?: string;
  author_url?: string;
  author_user_agent?: string;
  content?: string;
  date?: Date;
  date_gmt?: Date;
  parent?: number;
  post?: number;
  status?: string;
  meta?: any;
}

// https://developer.wordpress.org/rest-api/reference/categories/#retrieve-a-category
export interface CategoryGetArguments extends NgWpArguments {
  context?: 'view' | 'embed' | 'edit';
}

/* ******************** MEDIA ******************** */
// https://developer.wordpress.org/rest-api/reference/media/#arguments
export interface MediaGetArguments extends NgWpArguments {
  context?: 'view' | 'embed' | 'edit';
}

/* ******************** USERS ******************** */
// https://developer.wordpress.org/rest-api/reference/users/#arguments
export interface UsersGetArguments extends NgWpArguments {
  context?: 'view' | 'embed' | 'edit';
}
