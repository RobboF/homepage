import React, { Component } from 'react'
import './index.css'
import Header from '../../components/header/header'
import ArticleList from '../../components/articleList/articleList'


export default class index extends Component {
    render() {
        return (
            <div className="page-container">
                <Header/>
                <section className="mw7 center">
                    <h2 className="athelas ph3 ph0-l">Recent Blog Posts</h2>
                        <ArticleList/>   
                </section>            
            </div>
        )
    }
}


