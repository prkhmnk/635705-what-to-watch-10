import { useState } from 'react';
import { Link } from 'react-router-dom';
import Overview from '../overview/overview';
import Details from '../details/details';
import Reviews from '../reviews/reviews';
import { Tab } from '../../const';
import { Film } from '../../types/film';
import { Review } from '../../types/review';

type TabsProps = {
  film: Film,
  review: Review
}

function Tabs({ film, review }: TabsProps): JSX.Element {
  const [active, setActive] = useState<string>(Tab.Overview);

  const { comments } = review;

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {
            Object.values(Tab).map((item) => (
              <li key={item} className={`film-nav__item ${active === item && 'film-nav__item--active'}`}>
                <Link to="#" className="film-nav__link" onClick={() => setActive(item)}>{item}</Link>
              </li>
            ))
          }
        </ul>
      </nav>

      {active === Tab.Overview && <Overview film={film} />}
      {active === Tab.Details && <Details film={film} />}
      {active === Tab.Reviews && <Reviews comments={comments} />}
    </div>

  );
}

export default Tabs;
