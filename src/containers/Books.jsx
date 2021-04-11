import React, {Component as ReactComponent} from 'react'
import PostBook from '../components/postBook'

class Books extends ReactComponent{
    constructor(){
        super()

        this.state = {
            listBooks: []
        }
    }

    componentDidMount(){
        fetch("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=35UwT0aGHJb2ldHHErbsXPd5FoASsnWq")
            .then(response => response.json())      
            //.then(({results}) => console.log(results.books))
            .then(({results}) => this.setState({listBooks: [...results.books]}))
            
    }

    supp (id){
        console.log(id)
        const book = this.state.listBooks.find(e => e.primary_isbn10 === id)
        const newList = this.state.listBooks.filter(elt => elt !== book)
        this.setState({listBooks: newList})
    }

    render (){
        return(
            <div className = "display-books">
                {
                    this.state.listBooks.map(elt => <PostBook books = {elt} key = {elt.primary_isbn10} supp = {(id) => this.supp(id)} />)
                }
            </div>
        )
    }

}

export default Books

