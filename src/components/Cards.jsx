import { cardsData } from '../data/data';
import Card from './Card';

const Cards = () => {
  return (
    <div>
      <ul className="flex items-center ml-[0.2rem] justify-center mt-4 h-[5rem]">
        {cardsData.map((card, i) => {
          return (
            <li key={i}>
              <Card
                title={card.title}
                amount={card.amount}
                img={card.img}
                index={i}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cards;
