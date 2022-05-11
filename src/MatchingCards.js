import React from "react";
import { cardBackgroundImage, cardsArr } from "./CardDataSet";

const MatchingCards = () => {



    const defaultImageUrl = cardBackgroundImage;

    const [selectedCards, setSelectedCards] = React.useState([])

    const tempArr = [];

    const handleClick = (index) => {
        console.log("SelectedCards:  ", selectedCards)
        if (selectedCards.length === 1) {
            const firstSelection = cardsArr[selectedCards[0]].rank;
            const secondSelection = cardsArr[index].rank;
            if (firstSelection === secondSelection) {
                console.log("Matched")
            } else {
                console.log("Not Matched")
            }
        }
        setSelectedCards(
            [...selectedCards, index]
        )

    }

    return (
        <div>
            {cardsArr.map((element, index) => {
                return (
                    <img src={selectedCards.includes(index) ? element.cardImage : defaultImageUrl} alt={element.rank}
                        onClick={() => handleClick(index)} />
                );
            })}
        </div>
    );
}

export default MatchingCards;