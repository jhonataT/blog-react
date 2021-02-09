import React from 'react';
import './style.css';
import Card from '../../components/UI/Card';
import BlogPost from '../../components/BlogPost';

const Post = props => {
    return (
        <section className="container">
            <BlogPost />

            <Card className="sidebar">
                sideBar
            </Card>
        </section>
    );
};

export default Post;