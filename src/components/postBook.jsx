import React from 'react'

const PostBook = ({books, supp}) => {
    return(
        <div>
            <p className="title">{books.title}</p>
            <p className="author">{books.author}</p>
            <p className="description">{books.description}</p>
            <button onClick={ () => {supp(books.primary_isbn10)
            console.log('id: ', books.primary_isbn10)} }>Delete</button>           
        </div>
    )
}

export default PostBook