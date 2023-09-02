import React from 'react';
import Screening from './screening/Screening';
import Demography from './demography/Demography';
import Anthropometry from './anthropometry/Anthropometry';
import CriteriaForInclusion from './сriteriaForInclusion/CriteriaForInclusion';
import CriteriaForNonInclusion from './CriteriaForNon-inclusion/CriteriaForNonInclusion';
import Ending from './ending/Ending';
import ScreeningStarting from './startOfScreening/ScreeningStarting';
import AdverseEvent from '../adverseEvents/AdverseEvent';

const ScreeningOverall = ({
  section, props, index, anchorClassname, setIsColorRed, isOptionsColorRed, setIsOptionsColorRed,
}) => {
  switch (section) {
    /* Скрининг */
    case 'Начало скрининга':
      return (
        <div className="exact-section-info">
          <ScreeningStarting
            data={props}
            index={index}
            anchorClassname={anchorClassname}
            setIsColorRed={setIsColorRed}
            setIsOptionsColorRed={setIsOptionsColorRed}
            isOptionsColorRed={isOptionsColorRed}
          />
        </div>
      );
    case 'Информированное согласие':
      return (
        <div className="exact-section-info">
          <Screening
            data={props}
            index={index}
            anchorClassname={anchorClassname}
            setIsColorRed={setIsColorRed}
            setIsOptionsColorRed={setIsOptionsColorRed}
            isOptionsColorRed={isOptionsColorRed}
          />
        </div>
      );
    case 'Демография':
      return (
        <div className="exact-section-info">
          <Demography
            data={props}
            index={index}
            anchorClassname={anchorClassname}
            setIsColorRed={setIsColorRed}
            setIsOptionsColorRed={setIsOptionsColorRed}
            isOptionsColorRed={isOptionsColorRed}
          />
        </div>
      );
    case 'Антропометрия':
      return (
        <div className="exact-section-info">
          <Anthropometry
            data={props}
            index={index}
            anchorClassname={anchorClassname}
            setIsColorRed={setIsColorRed}
            setIsOptionsColorRed={setIsOptionsColorRed}
            isOptionsColorRed={isOptionsColorRed}
          />
        </div>
      );
    case 'Критерии включения в исследование':
      return (
        <div className="exact-section-info">
          <CriteriaForInclusion
            data={props}
            index={index}
            anchorClassname={anchorClassname}
            setIsColorRed={setIsColorRed}
            setIsOptionsColorRed={setIsOptionsColorRed}
            isOptionsColorRed={isOptionsColorRed}
          />
        </div>
      );
    case 'Критерии невключения в исследование':
      return (
        <div className="exact-section-info">
          <CriteriaForNonInclusion
            data={props}
            index={index}
            anchorClassname={anchorClassname}
            setIsColorRed={setIsColorRed}
            setIsOptionsColorRed={setIsOptionsColorRed}
            isOptionsColorRed={isOptionsColorRed}
          />
        </div>
      );
    case 'Завершение скрининга':
      return (
        <div className="exact-section-info">
          <Ending
            data={props}
            index={index}
            anchorClassname={anchorClassname}
            setIsColorRed={setIsColorRed}
            setIsOptionsColorRed={setIsOptionsColorRed}
            isOptionsColorRed={isOptionsColorRed}
          />
        </div>
      );

      /* Нежелательные явления */
    case 'Пункт 1':
      return (
        <div className="exact-section-info">
          <AdverseEvent
            data={props}
            index={index}
            anchorClassname={anchorClassname}
            setIsColorRed={setIsColorRed}
            setIsOptionsColorRed={setIsOptionsColorRed}
            isOptionsColorRed={isOptionsColorRed}
          />
        </div>
      );
    default:
      return null;
  }
};

export default ScreeningOverall;

/*
* {section === 'Информ. согласие' &&
                                        (<div className="exact-section-info">
                                            <Screening />
                                        </div>)
                                    }
                                    {section === 'Демография' &&
                                        (<div className="exact-section-info">
                                            <Demography />
                                        </div>)
                                    }
                                    {section === 'Антропометрия' &&
                                        (<div className="exact-section-info">
                                            <Anthropometry />
                                        </div>)
                                    }
                                    {section === 'Критерии включения в исследование' &&
                                        (<div className="exact-section-info">
                                            <CriteriaForInclusion />
                                        </div>)
                                    }
                                    {section === 'Критерии невключения в исследование' &&
                                        (<div className="exact-section-info">
                                            <CriteriaForNonInclusion />
                                        </div>)
                                    }
                                    {section === 'Завершение скрининга' &&
                                        (<div className="exact-section-info">
                                            <Ending />
                                        </div>)
                                    }
* */
