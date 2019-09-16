import React from 'react'

class Card extends React.Component {
    state = {
        showAnswer: false
    }
    showAnswer = () => {
        this.setState({ showAnswer: !this.state.showAnswer })
    }
    render() {

        return (
            <div className="card" key={this.props.trivia.id}>
                <p>#{this.props.trivia.id - 1}</p>
                <img className="card-img-top" alt="trivia-pic" src="http://www.sporcle.com/blog/wp-content/uploads/2018/10/1-48.jpg" />
                <h1>Question: {this.props.trivia.question}</h1>
                {this.state.showAnswer === true ? <p>{this.props.trivia.answer}</p> : null}
                <button onClick={this.showAnswer}>See Answer</button>
            </div>
        )
    }
}
export default Card