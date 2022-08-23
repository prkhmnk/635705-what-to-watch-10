import { Fragment } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';

function User(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { authorizationStatus } = useAppSelector((state) => state);
  const logoutHandler = () => {
    dispatch(logoutAction());
  };
  return (
    <ul className="user-block">
      {authorizationStatus === AuthorizationStatus.Auth ? (
        <Fragment>
          <li className="user-block__item" onClick={() => navigate('/mylist')}>
            <div className="user-block__avatar">
              <img src='img/avatar.jpg' alt="User avatar" width="63" height="63" />
            </div>
          </li>
          <li className="user-block__item">
            <Link className="user-block__link" to={AppRoute.Main} onClick={logoutHandler}>Sign out</Link>
          </li>
        </Fragment>
      ) : <Link className="user-block__link" to={AppRoute.SignIn}>Sign in</Link>}
    </ul>
  );
}

export default User;
