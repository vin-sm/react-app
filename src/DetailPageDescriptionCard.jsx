import React from "react";
import './css/DetailDescriptionCard.css';
import Description from "./Description";
import tickIcon from "./images/tickIcon.svg";

const DetailPageDescriptionCard = ({ card }) => {
    const maxWords = 20;
    return (
        <div className="detail-description-view">
            <div className="descriptionView">
                <h3>Description</h3>
                <Description text={card.description} maxWords={maxWords} />
            </div>
            <div className="learnView">
                <div className="title">What you’ll learn</div>
                <div className="sepertaor"></div>
                <div>
                    {card.topics.map((topic) => (
                        <div className="topics">
                            <img src={tickIcon} alt="tickIcon" />
                            <div>{topic}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DetailPageDescriptionCard;