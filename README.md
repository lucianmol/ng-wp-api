# ng-wp-api

This library consists of Angular services wrapped around Wordpress endpoints, built with simplicity, ease of use and extensibility in mind.

**Last updated:** 06.11.2018

## About

The project was created due to my need of creating a wordpress powered website with an Angular 6 frontend and not finding any simple to use or up to date library to satisfy my needs. The library does not offer **yet** services for all the endpoints exposed by Wordpress, but it is under _active development_ and my top priorities are adding new services and tests for existing ones.
If you appreciate this project please contribute with code, documentation or simply share it with others!

## Prerequisites

Angular 6^

Wordpress 4.7^

## Installation

Simply install the npm package:

`npm install ng-wp-api --save`

## Usage

Import the module in app.module

```typescript
...
import { NgWpApiModule } from 'ng-wp-api';

@NgModule({
  imports: [
    ...
    NgWpApiModule.forRoot({
      wpApiUrl: 'http://your-wordpress-url/wp-json/wp/v2' // without trailing slash
    }),
  ]
})
export class AppModule { }
```

Inject it in the component and start using it.

```typescript
...
import { NgWpPostsService, NgWpPost } from 'ng-wp-api';

export class Posts implements OnInit {
  posts: NgWpPost[];

  constructor(private ngWpPosts: NgWpPostsService) {}

  ngOnInit() {
    // get all the posts from a specific category
    this.ngWpPosts.getList({ categories: 1 }).subscribe((posts: NgWpPost[]) => {
      this.posts = posts;
    })
  }
}
```

The following services and operations are now curentlly available:

**NgWpPostsService**

```typescript
public getList(args?: PostsListArguments, requestOptions?: object): Observable<any>
public get(id: number, args?: PostGetArguments, requestOptions?: object): Observable<any> {
```

**NgWpPagesService**

```typescript
public getList(args?: PagesListArguments, requestOptions?: object): Observable<any>
public get(id: number, args?: PageGetArguments, requestOptions?: object): Observable<any>
```

**NgWpCategoriesService**

```typescript
public getList(args?: CategoriesListArguments, requestOptions?: object): Observable<any>
public get(id: number, args?: CategoryGetArguments, requestOptions?: object): Observable<any>
```

**NgWpCommentsService**

```typescript
public getList(args?: CommentsListArguments, requestOptions?: object): Observable<any>
public create(args?: CommentsCreateArguments, requestOptions?: object): Observable<any>
```

**NgWpMediaService**

```typescript
public get(id: number, args?: MediaGetArguments, requestOptions?: object): Observable<any>
```

> **The services are under active development!**
> Make sure to come back for updates.
> If you would like to have a new operation or service please [raise an issue](https://github.com/lucianmol/ng-wp-api/issues) or better yet contribute with a pull request.

## Contributing

Contributing it's highly appreciated and encouraged!
