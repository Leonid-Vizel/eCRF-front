import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Anchor } from 'antd';
import {
  keyProtocols,
  protocols,
  sections,
  adverseEventsItems,
} from '../../utils/data/dataForProtocols';
import ScreeningOverall from '../../components/protocols/screeningAll/ScreeningOverall';
import RightSidebar from '../../components/rightSideBar/RightSideBar';
import { axiosRequest } from '../../utils/request/NewAxiosRequest';
import { cookiesData } from '../../utils/cookies/getCookies';
import './exactProtocolPage.scss';
import { useAppDispatch } from '../../store/redux-hook';
import { isValidatedColor } from '../../store/protocolSlice/protocolSlice';
import LeftSidebarOption from '../../components/leftSidebarOption/LeftSidebarOption';

interface IsValidated {
  startOfScreening: boolean
  consent: boolean,
  demography: boolean,
  anthropometry: boolean,
  inclusionCriteria: boolean,
  exclusionСriteria: boolean,
  completionOfScreening: boolean,
}

const ExactProtocolPage = () => {
  const [data, setData] = useState<any>([]);
  const [selectedProtocol, setSelectedProtocol] = useState<string>('');
  const [selectedSection, setSelectedSection] = useState<string>('');
  const [scrollToTop, setScrollToTop] = useState<boolean>(false);
  const [scrollToTopProtocol, setScrollToTopProtocol] = useState<boolean>(false);

  const scrollToTopRef = useRef<HTMLDivElement>(null);
  const mainContentRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const params = useParams();

  // модалка для комментариев
  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const [screeningNumberValue, setScreeningNumberValue] = useState<string>('');
  const [initialsValue, setInitialsValue] = useState<string>('');

  const [currentIndex, setCurrentIndex] = useState<any>(0);
  const [currentSubject, setCurrentSubject] = useState<any>(0);
  const [subjectsOfProtocol, setSubjectsOfProtocol] = useState<any>('');
  const [currentProtocolEng, setCurrentProtocolEng] = useState('');
  const [isColorRed, setIsColorRed] = useState<boolean>(false);
  const [isOptionsColorRed, setIsOptionsColorRed] = useState<IsValidated>({
    startOfScreening: false,
    consent: false,
    demography: false,
    anthropometry: false,
    inclusionCriteria: false,
    exclusionСriteria: false,
    completionOfScreening: false,
  });

  console.log(isOptionsColorRed);
  const navigate = useNavigate();

  // useEffect(() => {
  //     const isAuth = cookiesData.cookieId
  //     if(!isAuth) {
  //         navigate('/')
  //     }
  // }, [])

  const screeningItems = [
    /* Скрининг */
    {
      key: 'StartOfScreening',
      href: '#StartOfScreening',
      title: LeftSidebarOption('Начало скрининга', isOptionsColorRed && isOptionsColorRed.startOfScreening),
    },
    {
      key: 'InformaionConsent',
      href: '#InformaionConsent',
      title: LeftSidebarOption('Информированное согласие', isOptionsColorRed && isOptionsColorRed.consent),
    },
    {
      key: 'Demography',
      href: '#Demography',
      title: LeftSidebarOption('Демография', isOptionsColorRed && isOptionsColorRed.demography),
    },
    {
      key: 'Anthropometry',
      href: '#Anthropometry',
      title: LeftSidebarOption('Антропометрия', isOptionsColorRed && isOptionsColorRed.anthropometry),
    },
    {
      key: 'InclusionCriteria',
      href: '#InclusionCriteria',
      title: LeftSidebarOption('Критерии включения в исследование', isOptionsColorRed && isOptionsColorRed.inclusionCriteria),
    },
    {
      key: 'ExclusionСriteria',
      href: '#ExclusionСriteria',
      title: LeftSidebarOption('Критерии невключения в исследование', isOptionsColorRed && isOptionsColorRed.exclusionСriteria),
    },
    {
      key: 'CompletionOfScreening',
      href: '#CompletionOfScreening',
      title: LeftSidebarOption('Завершение скрининга', isOptionsColorRed && isOptionsColorRed.completionOfScreening),
    },
  ];

  const handleAddProtocol = () => {
    setShowAddModal(true);
  };

  const handleModalClose = () => {
    setShowAddModal(false);
    setScreeningNumberValue('');
    setInitialsValue('');
  };

  const handleSaveReasons = async () => {
    await axiosRequest.post('/subject/add', {
      center_id: parseInt(cookiesData.cookieCenterId),
      initials: initialsValue,
      number: screeningNumberValue,
      protocol_id: +params.protocolId,
    });

    const { data } = await axiosRequest.get(`/subject/${params.protocolId}`);
    setData(data);
    setShowAddModal(false);
  };

  // конец модалок
  const handleProtocolHeaderClick = () => {
    setScrollToTopProtocol(true);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  const handleProtocolClick = (protocol: string, keyProtocol: string) => {
    setSelectedProtocol(protocol);
    setCurrentProtocolEng(keyProtocol);
    setSelectedSection('');
    setScrollToTop(true);
    setIsColorRed(false);
  };

  const handleSectionScroll = () => {
    if (!mainContentRef.current || !sidebarRef.current) return;
    const sectionElements = Array.from(mainContentRef.current.querySelectorAll('.section'));
    const visibleSection = sectionElements.find((sectionElement) => {
      const { top, bottom } = sectionElement.getBoundingClientRect();
      return top <= 0 && bottom > 0;
    });
    if (visibleSection) {
      const sectionId = visibleSection.getAttribute('id');
      if (sectionId) {
        const sidebarSectionElement = sidebarRef.current.querySelector(`[data-section="${sectionId}"]`);
        if (sidebarSectionElement) {
          sidebarSectionElement.classList.add('highlighted');
        }
      }
    }
  };

  useEffect(() => {
    axiosRequest.get(`/subject/${params.protocolId}`)
      .then(({ data }) => {
        setData(data);
      });
  }, []);

  useEffect(() => {
    if (scrollToTop) {
      const scrollToTopElement = scrollToTopRef.current;
      if (scrollToTopElement) {
        scrollToTopElement.scrollIntoView({ behavior: 'smooth' });
        setScrollToTop(false);
      }
    }

    if (scrollToTopProtocol) {
      const mainContentElement = mainContentRef.current;
      if (mainContentElement) {
        mainContentElement.scrollTo({ top: 0, behavior: 'smooth' });
        setScrollToTopProtocol(false);
      }
    }

    const handleScroll = () => {
      handleSectionScroll();
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollToTop, scrollToTopProtocol]);

  useEffect(() => {
    const getSubjectsByProtocolId: any = async () => {
      await axiosRequest.get(`/subject/${params.protocolId}`)
        .then((res) => {
          setSubjectsOfProtocol(res.data);
        });
    };

    getSubjectsByProtocolId();
  }, []);

  return (
    <div className="exact-protocols-container">
      <div className="exact-top-block">
        {protocols && protocols.length !== 0 && currentSubject !== (0 && NaN) && protocols.map((protocol, index) => (
          <button
            disabled={data && data.length === 0}
            key={index}
            className={`exact-protocol-button
                        ${protocol === selectedProtocol && isColorRed && 'exact-selected-red'}`}
            onClick={() => handleProtocolClick(protocol, keyProtocols[index])}
          >
            {protocol}
          </button>
        ))}
      </div>

      <div className="exact-content-container">
        <div className="exact-left-sidebar" ref={sidebarRef}>
          <div className="exact-left-sidebar-subjects">
            <span>Субъекты</span>
            <select
              name="gender"
              onChange={(e) => {
                const [subject, index] = e.target.value.split(' ');
                setCurrentSubject(+subject);
                setCurrentIndex(+index);
              }}
              className="exact-protocol-select"
            >
              {
                                currentSubject === 0 && <option>Выберите субъект</option>
                            }
              {/* <option>Выберите субъект</option> */}
              {
                                data && data.map((item, index) => (
                                  <option key={index} value={`${item.Number} ${index}`}>{`Субъект №${item.Number}`}</option>
                                ))
                            }
            </select>
            <div className="exact-left-sidebar-subjects-buttons">
              <button className="exact-left-sidebar-button1" />
              <button className="exact-left-sidebar-button2" onClick={() => handleAddProtocol()} />
              <button className="exact-left-sidebar-button3" />
            </div>
          </div>
          {selectedProtocol && (
          <div className="exact-protocol-info">
            <h2 onClick={handleProtocolHeaderClick}>{selectedProtocol}</h2>
            {selectedProtocol === 'Скрининг' && <Anchor items={screeningItems} getContainer={() => mainContentRef.current} />}
            {selectedProtocol === 'Нежелательные явления' && <Anchor items={adverseEventsItems} getContainer={() => mainContentRef.current} />}
          </div>
          )}
        </div>
        <div className="exact-main-content" ref={mainContentRef}>
          {/* Главная информация страницы для выбранного протокола */}
          {selectedProtocol ? (
            <div>
              {scrollToTop && <div ref={scrollToTopRef} />}
              <div className="exact-protocol-info">
                <span>Name</span>
                <span>
                  Номер субъекта :
                  {currentSubject}
                </span>
                <span>
                  Инициалы субъекта :
                  {subjectsOfProtocol && subjectsOfProtocol[currentIndex]?.Initials}
                </span>
              </div>
              <div className="exact-protocol-name-block">
                <h1>{selectedProtocol}</h1>
              </div>

              {/* Разделы протокола */}
              {sections[selectedProtocol] && sections[selectedProtocol].map((section) => {
                let sectionProps = {};
                let anchorClassname = '';
                switch (section) {
                  case 'Начало скрининга':
                    anchorClassname = 'StartOfScreening';
                    sectionProps = data && data[currentIndex]?.Screening && data[currentIndex]?.Screening?.StartOfScreening;
                    break;
                  case 'Информированное согласие':
                    anchorClassname = 'InformaionConsent';
                    sectionProps = data && data[currentIndex]?.Screening && data[currentIndex]?.Screening?.InformaionConsent;
                    break;
                  case 'Демография':
                    anchorClassname = 'Demography';
                    sectionProps = data && data[currentIndex]?.Screening && data[currentIndex]?.Screening?.Demography;
                    break;
                  case 'Антропометрия':
                    anchorClassname = 'Anthropometry';
                    sectionProps = data && data[currentIndex]?.Screening && data[currentIndex]?.Screening?.Anthropometry;
                    break;
                  case 'Критерии включения в исследование':
                    anchorClassname = 'InclusionCriteria';
                    sectionProps = data && data[currentIndex]?.Screening && data[currentIndex]?.Screening?.InclusionCriteria;
                    break;
                  case 'Критерии невключения в исследование':
                    anchorClassname = 'ExclusionСriteria';
                    sectionProps = data && data[currentIndex]?.Screening && data[currentIndex]?.Screening?.ExclusionСriteria;
                    break;
                  case 'Завершение скрининга':
                    anchorClassname = 'CompletionOfScreening';
                    sectionProps = data && data[currentIndex]?.Screening && data[currentIndex]?.Screening?.CompletionOfScreening;
                    break;
                  case 'Пункт 1':
                    anchorClassname = 'AdverseEvent';
                    sectionProps = data && data[currentIndex]?.OffSiteBlock && data[currentIndex]?.OffSiteBlock?.AdverseEvents;
                    break;
                  default:
                    return null;
                }
                return (
                  <div
                    key={section}
                    className={`exact-section ${section === selectedSection ? 'exact-selected' : ''}`}
                    id={anchorClassname}
                  >
                    <ScreeningOverall
                      section={section}
                      props={sectionProps}
                      index={currentSubject}
                      anchorClassname={anchorClassname}
                      setIsColorRed={setIsColorRed}
                      isOptionsColorRed={isOptionsColorRed}
                      setIsOptionsColorRed={setIsOptionsColorRed}
                    />
                  </div>
                );
              })}
            </div>
          ) : (!data) && (
          <div className="exact-no-protocol-selected">
            <div className="exact-no-protocol-selected-block">
              <span>Для того чтобы начать работать с протоколом создайте первый субъект</span>
              <button onClick={() => handleAddProtocol()}>Добавить субъект исследования</button>
            </div>
          </div>
          )}
          {
                        data && data.length !== 0 && selectedProtocol === '' && (
                        <div className="exact-no-protocol-selected">
                          <div className="exact-no-protocol-selected-block">
                            <span>Выберите субъект, а затем протокол из списка выше</span>
                          </div>
                        </div>
                        )
                    }
        </div>
        <div className="exact-right-sidebar">
          <div className="exact-right-sidebar-test">
            <RightSidebar data={data && data[currentIndex]?.[currentProtocolEng]} />
          </div>
        </div>
      </div>

      {/* модалка */}
      {showAddModal && (
        <div className="modal-overlay" onClick={handleModalClose}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleModalClose}>
              ×
            </button>
            <span>Добавление нового субьекта</span>
            <div className="modal-content">
              Скрининговый номер
              <input
                type="text"
                placeholder="Введите название"
                value={screeningNumberValue}
                onChange={(e) => setScreeningNumberValue(e.target.value)}
              />
              Инициалы добровольца
              <input
                type="text"
                placeholder="Введите название"
                value={initialsValue}
                onChange={(e) => setInitialsValue(e.target.value)}
              />
            </div>
            <div className="modal-actions">
              <button className="modal-button" onClick={handleSaveReasons}>
                Сохранить
              </button>
              <button className="modal-button" onClick={handleModalClose}>
                Отменить
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExactProtocolPage;
