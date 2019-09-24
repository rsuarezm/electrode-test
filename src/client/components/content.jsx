import React from "react";

import {withRouter} from 'react-router-dom';
import {news_api_info} from './constants'
import axios from 'axios';
import styles from '../styles/content.css';

class Content extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            category: '',
            news_items: []
        }

        this.fetchNews = this.fetchNews.bind(this)
    }

    fetchNews () {
        axios.get(
            news_api_info.headlines_url, {
                    params: {
                        category: this.state.category,
                        apiKey: news_api_info.api_key,
                        country: 'US'
                    }
                }
            // `https://newsapi.org/v2/top-headlines?country=mx&apiKey=e8bad05b7cc54f9696f10a2033bf5e16&category=${this.state.category}`
        )
        .then(response => {
            this.setState({
                news_items: response.data.articles
            })
        })
        .catch(error => console.log(error))
    }

    componentDidMount() { 
        if (this.props.match.params[0] === '') {
            this.setState({
                category: 'technology'
            })
        } else {
            this.setState({
                category: this.props.match.params[0]
            })
        }

        this.fetchNews();
    }

    render() {
        console.log("news items", this.state.news_items)
        console.log(this.state.category);
        return (
            <div styleName={'styles.content'}>
                Hey {this.state.category} has been clicked!
            </div>
        );
    }
}

export default withRouter(Content);