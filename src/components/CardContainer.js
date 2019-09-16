import React from 'react'
import Card from './Card'
const CardContainer = (props) => {

    const CardList = props.triviaQuestions.map(trivia => {
        return <Card trivia={trivia} />
    })
    
    return (
        <div>
            {CardList}
        </div>
    )
}

export default CardContainer