import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Loadspinner from './loadspinner';
import './news.css';

export class News extends Component {

    constructor() {
        super();
        console.log("this is constructor");
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }
    async componentDidMount() {
        console.log('cdm');
        let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=0134b3122f0a4e13a6c6cfe2f6905c73&page=1&pageSize-20";
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ 
            articles: parsedData.articles, 
            totalArticles: parsedData.totalResults,
            loading: false
        })
    }
    handleNext = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=0134b3122f0a4e13a6c6cfe2f6905c73&page=${this.state.page + 1}&pageSize-20`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles,
            loading: false
        })
    }
    handlePrev = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=0134b3122f0a4e13a6c6cfe2f6905c73&page=${this.state.page - 1}&pageSize-20`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
        })
    }
    render() {
        console.log("render");
        return (
            <>
                <div className="container my-3">
                    <h1 className='text-center' id='heading'>Top Headlines</h1>
                    {this.state.loading && <Loadspinner/>}
                    <div className="row">
                        {!this.state.loading && this.state.articles.map((element) => {
                            return <div className="col-md-3 mx-3 my-3" key={element.url}>
                                <Newsitem title={element.title ? element.title.slice(0, 45) : " "} description={element.description ? element.description.slice(0, 85) : " "} imageUrl={element.urlToImage} newsUrl={element.url} />
                            </div>
                        })}
                    </div>
                </div>
                <div className='container d-flex justify-content-evenly my-3'>
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrev}> &larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalArticles / 20)} type="button" className="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>
                </div>
            </>
        )
    }
}

export default News
