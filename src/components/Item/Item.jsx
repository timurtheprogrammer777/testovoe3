import { useState } from "react";
import likeActiveIcon from "../../images/like-icon.svg";
import likeUnactiveIcon from "../../images/like-icon_unactive.svg";

function Item({ data }) {
    const { imgUrl, name, date, text, author, voteStatus = true } = data;

    const [activeButton, setActiveButton] = useState(voteStatus);

    function toggleButton() {
      setActiveButton(!activeButton);
    }
  
    return (
      <li className="item">
        <img className="item__image" src={imgUrl} alt="фото карточки" />
        <h2 className="item__title item__title--clamp">{name}</h2>
        <p className="item__date">{date ? date : 'Неустановленная дата'}</p>
        <p className="item__text item__text--clamp">{text}</p>
        <div className="item__bottom-content">
          <p className="item__author">{author}</p>
          <button className="item__button" onClick={toggleButton}>
                <img src={activeButton ? likeActiveIcon : likeUnactiveIcon } alt="иконка лайка" />
          </button>
        </div>
      </li>
    );
  }
  
  export default Item;
  