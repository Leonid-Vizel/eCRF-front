import React, { useEffect, useState } from 'react';
import './navbar.scss';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from 'shared/assets/images/logo.png';
import { cookiesData } from '../../../utils/cookies/getCookies';
import { useAppDispatch, useAppSelector } from '../../../store/redux-hook';
import { getCenters } from '../../../store/centerSlice/centerSlice';
import { centerSelector } from '../../../store/centerSlice/centerSelector';

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(true);
  const { pathname } = useLocation();
  const { data } = useAppSelector(centerSelector);
  const dispatch = useAppDispatch();

    type UserRole = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

    const UserRoleMap: Record<UserRole, string> = {
      0: 'Администратор',
      1: 'Исследователь',
      2: 'Главный исследователь',
      3: 'Монитор',
      4: 'Дата менеджер',
      5: 'Аудитор контроля качества',
      6: 'Медицинский монитор',
      7: 'Специалист по фармаконадзору',
    };

    const userRole: UserRole = Number(cookiesData.cookieRole) as UserRole;
    const roleName: string = UserRoleMap[userRole];

    const navigate = useNavigate();

    useEffect(() => {
      const getCenter: any = async () => {
        await dispatch<any>(getCenters({ id: parseInt(cookiesData.cookieCenterId) }));
      };
      getCenter();
    }, []);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    const handleNavigate = () => {
      navigate('/main/filter=0');
      window.location.reload();
    };

    return (
      <div className="navbar">
        <div className="navbar-img">
          <img src={logo} alt="" onClick={() => handleNavigate()} />
        </div>
        <div className="navbar-text">
          <h1>electronic Case Report Form (eCRF)</h1>
          <span>Электронная индивидуальная регистрационная карта (эИРК)</span>
        </div>
        {(pathname !== '/') && (
        <div
          className={`navbar-info ${isHovered ? 'hovered' : ''}`}
          onMouseEnter={handleMouseEnter}
        >
          <span
            className="navbar-fio"
            onMouseEnter={handleMouseEnter}
          >
            ФИО:
            {' '}
            {cookiesData.cookieName}
          </span>
          {isHovered && (
          <div className="navbar-modal">
            <hr className="vertical-hr" />
            <div className="navbar-modal-text">
              <span>{data && data.message}</span>
              <hr />
              <Link className="link" to="admin/panel">
                <span>
                  Роль:
                  {roleName}
                </span>
              </Link>
            </div>
          </div>
          )}
        </div>
        )}
      </div>
    );
};

export default Navbar;
