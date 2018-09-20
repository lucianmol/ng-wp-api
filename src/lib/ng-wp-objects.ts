// tslint:disable-next-line:no-empty-interface
export interface NgWpObject {}

// https://developer.wordpress.org/rest-api/reference/posts/#schema
export interface NgWpPost extends NgWpObject {
	date: Date;
	date_gmt: Date;
	guid: object;
	id: number;
	link: string;
	modified: Date;
	modified_gmt: Date;
	slug: string;
	status: 'publish' | 'future' | 'draft' | 'pending' | 'private';
	type: string;
	password: string;
	title: object;
	content: object;
	author: number;
	excerpt: object;
	featured_media: number;
	comment_status: 'open' | 'closed';
	ping_status: 'open' | 'closed';
	format:
		| 'standard'
		| 'aside'
		| 'chat'
		| 'gallery'
		| 'link'
		| 'image'
		| 'quote'
		| 'status'
		| 'video'
		| 'audio';
	meta: object;
	sticky: boolean;
	template: string;
	categories: any[];
}

// https://developer.wordpress.org/rest-api/reference/pages/#schema
export interface NgWpPage extends NgWpObject {
	date: Date;
	date_gmt: Date;
	guid: object;
	id: number;
	link: string;
	modified: Date;
	modified_gmt: Date;
	slug: string;
	status: 'publish' | 'future' | 'draft' | 'pending' | 'private';
	type: string;
	password: string;
	parent: number;
	title: object;
	content: object;
	author: number;
	excerpt: object;
	featured_media: number;
	comment_status: 'open' | 'closed';
	ping_status: 'open' | 'closed';
	menu_order: number;
	meta: object;
	template: string;
}

// https://developer.wordpress.org/rest-api/reference/categories/#schema
export interface NgWpCategory extends NgWpObject {
	id: number;
	count: number;
	description: string;
	link: string;
	name: string;
	slug: string;
	taxonomy: string;
	parent: number;
	meta: object;
}

// https://developer.wordpress.org/rest-api/reference/comments/#schema
export interface NgWpComment extends NgWpObject {
	id: number;
	author: number;
	author_email: string;
	author_ip: string;
	author_name: string;
	author_url: string;
	author_user_agent: string;
	content: object;
	date: Date;
	date_gtm: Date;
	link: string;
	parent: number;
	post: number;
	status: string;
	type: string;
	author_avatar_urls: object;
	meta: object;
}

// https://developer.wordpress.org/rest-api/reference/media/#schema
export interface NgWpMedia extends NgWpObject {
	date: Date;
	date_gtm: Date;
	guid: object;
	id: number;
	link: string;
	modified: Date;
	modified_gmt: Date;
	slug: string;
	status: string;
	type: string;
	title: object;
	author: number;
	comment_status: string;
	ping_status: string;
	meta: object;
	template: string;
	alt_text: string;
	caption: object;
	description: object;
	media_type: string;
	mime_type: string;
	media_details: object;
	post: number;
	source_url: string;
}

// no official schema, created based on the error response
export interface NgWpError {
	code: string;
	message: string;
	data: string;
}
