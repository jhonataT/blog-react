import React from 'react';
import './style.css';
import Card from '../../components/UI/Card';

const Post = props => {
    return (
        <section className="container">
            <Card className="blogPost">
                blogPost
            </Card>

            <Card className="sidebar">
                sideBar
            </Card>
        </section>
    );
};

export default Post;