'use strict'
import { Blogpost } from './blog-post'

const blogPost1= new Blogpost('John Doe','Lorem Ipsum','Lorem ipsum dolor sit amet.','2000.05.04.');
const blogPost2= new Blogpost('Tim Urban','Wait but why',
'A popular long-form, stick-figure-illustrated blog about almost everything.','2010.10.10.');
const blogPost3= new Blogpost('William Turton','One Engineer Is Trying to Get IBM to Reckon With Trump',
"Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I askedto take his picture outside one of IBM’s New York City offices,he told me that he wasn’t really into the whole organizer profile thing.",
'2017.03.28..');

//  Reuse your BlogPost class
//  Create a Blog class which can
//  store a list of BlogPosts
//  add BlogPosts to the list
//  delete(int) one item at given index
//  update(int, BlogPost) one item at the given index and update it with another BlogPost

class Blog {
    blogs: Blogpost[] = [];
    add(blog: Blogpost) {
        this.blogs.push(blog);
    }
    delete(int: number) {
        this.blogs.splice(int, 1);
    }
    update(int: number, blogs:Blogpost ) {
        this.blogs.splice(int, 1, blogs);
    }
};

let myBlogs:Blog = new Blog
myBlogs.add(blogPost1)
myBlogs.add(blogPost2)
console.log(myBlogs)
//myBlogs.update(1,blogPost3)
myBlogs.delete(0)
//console.log(myBlogs)