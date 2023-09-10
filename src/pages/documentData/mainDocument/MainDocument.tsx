import { useEffect, useState } from 'react';
import './mainDocument.scss';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { message, Select } from 'antd';
import InputMask from 'react-input-mask';
import Autosuggest from 'react-autosuggest';
import { axiosCardRequest } from '../../../utils/request/NewAxiosRequest';
import { getCurrentDate } from '../../../utils/helpers/getCurrentDate';
import InputBlock from '../../../components/document/inputBlock/InputBlock';
import Sidebar from '../../../components/document/sidebar/Sidebar';
import { options } from '../../../utils/data/dataForDocs';
import { FormDataItem } from '../../../utils/types/documentType';
import { bloodGroup } from './blockInputs/BloodGroup';
import { changeWorkInfo } from './blockInputs/ChangeWorkInfo';
import { checkupInfo } from './blockInputs/CheckupInfo';
import { createDate } from './blockInputs/CreateDate';
import { desiasesInfo } from './blockInputs/DesiasesInfo';
import { disabilityInfo } from './blockInputs/DisabilityInfo';
import { documentInfo } from './blockInputs/DocumentInfo';
import { familyEducationWorkInfo } from './blockInputs/EducationWorkInfo';
import { insuranceMedicalOrganization } from './blockInputs/InsuranceMedicalOrganization';
import { OmsAndSnils } from './blockInputs/OmsAndSnils';
import { registrationPlaceInfo } from './blockInputs/RegistrationPlaceInfo';
import { residencePlaceInfo } from './blockInputs/ResidencePlaceInfo';
import { sexAndBirthDayInfo } from './blockInputs/SexAndBirthDayInfo';
import { volunteerData } from './blockInputs/VolunteerData';
import { workInfo } from './blockInputs/WorkInfo';
import { doctor } from './blockInputs/Doctor';
import SelectInput from '../../../components/document/inputs/selectInput/SelectInput';
import { FormDataFields } from '../../../utils/types/enums/documentEnums';
import { raceOptions } from './blockInputs/data';
import DefaultInput from '../../../components/document/inputs/defaultInput/DefaultInput';
import { NumberPattern } from '../../../utils/consts';
import { InputBlockItem } from '../../../utils/types/shared';
import { patientDate } from './blockInputs/PatientDate';
import { diagnosisInfo } from './blockInputs/DiagnosisInfo';
import { pathInfo } from './blockInputs/PathInfo';

function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value) {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === '') {
    return [];
  }

  const regex = new RegExp(`^${escapedValue}`, 'i');

  const dataJSON = localStorage.getItem('suggestions');

  const data = JSON.parse(dataJSON);

  if (!data) return [];

  return data.filter((item) => regex.test(item.name));
}

function getSuggestionValue(suggestion) {
  return suggestion.name;
}

function renderSuggestion(suggestion) {
  return <span>{suggestion.name}</span>;
}

const MainDocument = () => {
  const { id, protocolId } = useParams();
  const { pathname } = useLocation();
  const pathParts = pathname.split('/')[3];
  const navigate = useNavigate();

  const [suggestions, setSuggestions] = useState({ suggestions: [] });

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions({
      suggestions: getSuggestions(value),
    });
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions({
      suggestions: [],
    });
  };

  const [formData, setFormData] = useState<FormDataItem>({
    ProtocolId: id ? parseInt(id) : null,
    FirstName: null,
    SecondName: null,
    ThirdName: null,

    RandomState: null,
    RandomNumber: null,

    Pediculosis: null,
    Scabies: null,
    TBS: null,
    Hepatitis: null,
    VenerealDisease: null,

    CreateDate: pathParts === 'edit' ? null : getCurrentDate(),

    Sex: null,
    BirthDate: null,

    Subject: null,
    District: null,
    City: null,
    Community: null,
    Street: null,
    House: null,
    Flat: null,
    Phone: null,
    Locality: null,

    CHIseries: null,
    CHInumber: null,
    SNILS: null,

    InsuranceMedicalOrganization: null,

    BenefitCategoryCode: null,
    DocumentName: null,
    DocumentSeries: null,
    DocumentNumber: null,

    Family: null,
    Education: null,
    Work: null,

    DisabilityType: null,
    DisabilityGroup: null,
    DisabilityDate: null,

    WorkPlace: null,
    WorkPosition: null,
    WorkPlaceChange: null,
    RegistrationPlaceChange: null,

    BloodGroup: null,
    RhFactor: null,
    AllergicReactions: null,
    CheckupDate: null,
    CheckupLocation: null,

    Phones: null,
    Deseases: null,
    Diagnosis: null,
    Doctor: null,
    OtherRace: null,
    PatientDate: null,
    PatientDiagnosis: null,
    PatientPath: null,
    Race: null,
    Insurance: null,
    InternalId: null,
    Screening: null,
    Syphilis: null,
  });

  useEffect(() => {
    if (pathParts === 'edit') {
      const getCreatedData = async () => {
        const { data } = await axiosCardRequest.get<FormDataItem>(
          `/Card/Index/${id}`,
        );

        setFormData(data);
      };

      getCreatedData();
    }
  }, []);

  const raceItems: InputBlockItem[] = formData.Race != 3
    ? [
      {
        inputTitle: 'Раса',
        input: (
          <SelectInput
            fieldName={FormDataFields.Race}
            selectValue={formData.Race}
            options={raceOptions}
            setFormData={setFormData}
          />
        ),
      },
    ]
    : [
      {
        inputTitle: 'Раса',
        input: (
          <SelectInput
            fieldName={FormDataFields.Race}
            selectValue={formData.Race}
            options={raceOptions}
            setFormData={setFormData}
          />
        ),
      },
      {
        inputTitle: 'Напишите расу',
        input: (
          <DefaultInput
            exclusionPattern={NumberPattern}
            fieldName={FormDataFields.OtherRace}
            inputValue={formData.OtherRace}
            setFormData={setFormData}
          />
        ),
      },
    ];

  const handleEditDoc = async () => {
    const dataJSON = localStorage.getItem('suggestions');

    let suggestions = [];

    if (dataJSON) {
      suggestions = JSON.parse(dataJSON);
    }

    formData.Deseases.map((item) => {
      let flag = false;

      suggestions.forEach((suggestion) => {
        if (suggestion.name == item.Code) {
          flag = true;
        }
      });

      if (!flag) {
        suggestions.push({ name: item.Code });
      }
    });

    localStorage.setItem('suggestions', JSON.stringify(suggestions));

    try {
      await axiosCardRequest.post('/Card/Edit', {
        ...formData,
        InsuranceMedicalOrganization:
                    +formData.InsuranceMedicalOrganization
                      ? +formData.InsuranceMedicalOrganization
                      : null,
        Pediculosis: +formData.Pediculosis
          ? +formData.Pediculosis
          : null,
        Scabies: +formData.Scabies ? +formData.Scabies : null,
        TBS: +formData.TBS ? +formData.TBS : null,
        Hepatitis: +formData.Hepatitis ? +formData.Hepatitis : null,
        VenerealDisease: +formData.VenerealDisease
          ? +formData.VenerealDisease
          : null,
        Sex: +formData.Sex ? +formData.Sex : null,
        Locality: +formData.Locality ? +formData.Locality : null,
        Family: +formData.Family ? +formData.Family : null,
        Education: +formData.Education ? +formData.Education : null,
        Work: +formData.Work ? +formData.Work : null,
        DisabilityType: +formData.DisabilityType
          ? +formData.DisabilityType
          : null,
        DisabilityGroup: +formData.DisabilityGroup
          ? +formData.DisabilityGroup
          : null,
        CheckupLocation: +formData.CheckupLocation
          ? +formData.CheckupLocation
          : null,
        RhFactor: +formData.RhFactor ? +formData.RhFactor : null,
        BloodGroup: +formData.BloodGroup ? +formData.BloodGroup : null,
        Race: +formData.Race ? +formData.Race : null,
        Phone: formData.Phone
          ? formData.Phone.replace(/\D/g, '')
          : null,
        SNILS: formData.SNILS
          ? formData.SNILS.replace(/\D/g, '')
          : null,
      });
      navigate(`/documents/${protocolId}`);
    } catch (error) {
      const errorMessage = (
        <div className="error-message-container">
          <span className="font-span">
            Ошибка при редактировании документа. Пожалуйста, удалите
            пустые строки в таблицах:
          </span>
          <span>
            1) Лист записи заключительных (уточненных) диагнозов
          </span>
          <span>
            2) Заболевания, по поводу которых осуществляется
            диспансерное наблюдение
          </span>
        </div>
      );
      message.error(errorMessage, 4);
    }
  };

  const handleCreateDoc = async () => {
    const dataJSON = localStorage.getItem('suggestions');

    let suggestions = [];

    if (dataJSON) {
      suggestions = JSON.parse(dataJSON);
    }

    formData.Deseases.forEach((item) => {
      let flag = false;

      suggestions.forEach((suggestion) => {
        if (suggestion.name == item.Code) {
          flag = true;
        }
      });

      if (!flag) {
        suggestions.push({ name: item.Code });
      }
    });

    localStorage.setItem('suggestions', JSON.stringify(suggestions));

    try {
      await axiosCardRequest.post('/Card/Create', {
        ...formData,
        InsuranceMedicalOrganization:
                    +formData.InsuranceMedicalOrganization
                      ? +formData.InsuranceMedicalOrganization
                      : null,
        Pediculosis: +formData.Pediculosis
          ? +formData.Pediculosis
          : null,
        Scabies: +formData.Scabies ? +formData.Scabies : null,
        TBS: +formData.TBS ? +formData.TBS : null,
        Hepatitis: +formData.Hepatitis ? +formData.Hepatitis : null,
        VenerealDisease: +formData.VenerealDisease
          ? +formData.VenerealDisease
          : null,
        Sex: +formData.Sex ? +formData.Sex : null,
        Locality: +formData.Locality ? +formData.Locality : null,
        Family: +formData.Family ? +formData.Family : null,
        Education: +formData.Education ? +formData.Education : null,
        Work: +formData.Work ? +formData.Work : null,
        DisabilityType: +formData.DisabilityType
          ? +formData.DisabilityType
          : null,
        DisabilityGroup: +formData.DisabilityGroup
          ? +formData.DisabilityGroup
          : null,
        CheckupLocation: +formData.CheckupLocation
          ? +formData.CheckupLocation
          : null,
        RhFactor: +formData.RhFactor ? +formData.RhFactor : null,
        BloodGroup: +formData.BloodGroup ? +formData.BloodGroup : null,
        Race: +formData.Race ? +formData.Race : null,
        Phone: formData.Phone
          ? formData.Phone.replace(/\D/g, '')
          : null,
        SNILS: formData.SNILS
          ? formData.SNILS.replace(/\D/g, '')
          : null,
        CardDays: null,
      });
      navigate(`/documents/${id}`);
    } catch (error) {
      console.log(error);
      const errorMessage = (
        <div className="error-message-container">
          <span className="font-span">
            Ошибка при создании документа. Пожалуйста, удалите
            пустые строки в таблицах:
          </span>
          <span>
            1) Лист записи заключительных (уточненных) диагнозов
          </span>
          <span>
            2) Заболевания, по поводу которых осуществляется
            диспансерное наблюдение
          </span>
        </div>
      );
      message.error(errorMessage, 4);
    }
  };

  const handleInputChange = (event, additionalParam = null) => {
    const { value } = event.target;
    const name = additionalParam !== null ? additionalParam : event.target.name;

    setFormData((prevFormData) => {
      let newFormData = { ...prevFormData };

      if (
        name === 'pediculosis'
                || name === 'scabies'
                || name === 'tbs'
                || name === 'hepatitis'
                || name === 'venerealDisease'
                || name === 'sex'
                || name === 'locality'
                || name === 'family'
                || name === 'education'
                || name === 'work'
                || name === 'disabilityType'
                || name === 'disabilityGroup'
                || name === 'checkupLocation'
                || name === 'rhFactor'
                || name === 'bloodGroup'
      ) {
        newFormData = {
          ...newFormData,
          [name]: value === null ? null : Number(value),
        };
      } else {
        newFormData = {
          ...newFormData,
          [name]: value,
        };
      }
      return newFormData;
    });
  };

  const handleInputTwelveChange = (index, field, value) => {
    setFormData((prevFormData) => {
      let newFormData = { ...prevFormData };
      newFormData = {
        ...newFormData,
        Deseases: newFormData.Deseases.map((item, i) => (i === index
          ? {
            ...item,
            [field]: value,
          }
          : item)),
      };

      if (field === 'Date') {
        const currentEndDate = newFormData.Deseases[index].EndDate;
        if (currentEndDate && value > currentEndDate) {
          newFormData.Deseases[index] = {
            ...newFormData.Deseases[index],
            EndDate: value,
          };
        }
      } else if (field === 'EndDate') {
        const currentStartDate = newFormData.Deseases[index].Date;
        if (currentStartDate && value < currentStartDate) {
          newFormData.Deseases[index] = {
            ...newFormData.Deseases[index],
            Date: value,
          };
        }
      }

      return newFormData;
    });
  };

  const handleInputTwentyChange = (index, field, value) => {
    setFormData((prevFormData) => {
      let newFormData = { ...prevFormData };
      if (field === 'type') {
        value = value === null ? null : Number(value);
      }
      newFormData = {
        ...newFormData,
        Diagnosis: newFormData.Diagnosis.map((item, i) => (i === index ? { ...item, [field]: value } : item)),
      };
      return newFormData;
    });
  };

  const handleInputPhonesChange = (index, field, value) => {
    setFormData((prevFormData) => {
      let newFormData = { ...prevFormData };
      newFormData = {
        ...newFormData,
        Phones: newFormData.Phones.map((item, i) => (i === index ? { ...item, [field]: value } : item)),
      };
      return newFormData;
    });
  };

  const handleAddPhonesInput = () => {
    setFormData((prevFormData) => {
      const newFormData = { ...prevFormData };
      const formDataItem = newFormData;

      if (typeof formDataItem === 'object') {
        if (!formDataItem.Phones) {
          formDataItem.Phones = [
            {
              Phone: null,
              Comment: null,
            },
          ];
        } else {
          formDataItem.Phones.push({
            Phone: null,
            Comment: null,
          });
        }
      }
      return newFormData;
    });
  };

  const handleAddInput = () => {
    setFormData((prevFormData) => {
      const newFormData = { ...prevFormData };
      const formDataItem = newFormData;

      if (typeof formDataItem === 'object') {
        if (!formDataItem.Deseases) {
          formDataItem.Deseases = [
            {
              Date: null,
              EndDate: null,
              Diagnosis: null,
              Code: null,
              Doctor: null,
            },
          ];
        } else {
          formDataItem.Deseases.push({
            Date: null,
            EndDate: null,
            Diagnosis: null,
            Code: null,
            Doctor: null,
          });
        }
      }

      return newFormData;
    });
  };

  const handleRemovePhonesInput = (index) => {
    setFormData((prevFormData) => {
      let newFormData = { ...prevFormData };
      newFormData = {
        ...newFormData,
        Phones: newFormData.Phones.filter((item, i) => i !== index),
      };
      return newFormData;
    });
  };

  const handleRemoveInput = (index) => {
    setFormData((prevFormData) => {
      let newFormData = { ...prevFormData };
      newFormData = {
        ...newFormData,
        Deseases: newFormData.Deseases.filter((item, i) => i !== index),
      };
      return newFormData;
    });
  };

  const handleAddTwentyInput = () => {
    setFormData((prevFormData) => {
      const newFormData = { ...prevFormData };
      if (!newFormData.Diagnosis) {
        newFormData.Diagnosis = [
          {
            Date: null,
            Text: null,
            Type: null,
            Doctor: null,
          },
        ];
      } else {
        newFormData.Diagnosis.push({
          Date: null,
          Text: null,
          Type: null,
          Doctor: null,
        });
      }
      return newFormData;
    });
  };

  const handleRemoveTwentyInput = (index) => {
    setFormData((prevFormData) => {
      let newFormData = { ...prevFormData };
      newFormData = {
        ...newFormData,
        Diagnosis: newFormData.Diagnosis.filter(
          (item, i) => i !== index,
        ),
      };
      return newFormData;
    });
  };

  const renderPhonesInputs = () => {
    if (!formData?.Phones || formData?.Phones.length === 0) {
      return (
        <div className="document-data-block-info-block-bottom-info-inputs">
          <button onClick={() => handleAddPhonesInput()}>
            Добавить телефон
          </button>
        </div>
      );
    }

    return (
      formData?.Phones
            && formData?.Phones.map((item, index) => (
              <div
                className="document-data-block-info-block-bottom-info-inputs"
                key={index}
              >
                <div className="document-input-block Phones">
                  <label
                    htmlFor={`dateTwenty-${index}`}
                    className="Phones-label"
                  >
                    <span
                      className="document-input-block-label-Date-span"
                    >
                      Номер телефона
                    </span>
                    <InputMask
                      className="document-input Phones"
                      value={item.Phone ? item.Phone : null}
                      onChange={(event) => handleInputPhonesChange(
                        index,
                        'Phone',
                        event.target.value,
                      )}
                      placeholder="Номер телефона"
                      mask={'+7 \\999 999 99 99'}
                      name="Phone"
                    />
                  </label>
                  <label
                    className="document-input-block-label-sm Phones-label"
                    htmlFor={`doctorTwenty-${index}`}
                  >
                    <span
                      className="document-input-block-label-Date-span"
                    >
                      Комментарии
                    </span>
                    <textarea
                      style={{ resize: 'none' }}
                      className="document-input-doc-sm Phones"
                      value={item.Comment}
                      onChange={(event) => handleInputPhonesChange(
                        index,
                        'Comment',
                        event.target.value,
                      )}
                      placeholder="Комментарий к номеру телефона"
                    />
                  </label>
                  <div className="document-button-block Phones">
                    <button
                      className="document-button"
                      onClick={() => handleAddPhonesInput()}
                    >
                      Добавить пункт
                    </button>
                    <button
                      className="document-button"
                      onClick={() => handleRemovePhonesInput(index)}
                    >
                      Удалить
                    </button>
                  </div>
                </div>
              </div>
            ))
    );
  };

  const renderTwentyInputs = () => {
    if (!formData?.Diagnosis || formData?.Diagnosis.length === 0) {
      return (
        <div className="document-data-block-info-block-bottom-info-inputs">
          <button onClick={() => handleAddTwentyInput()}>
            Добавить строку
          </button>
        </div>
      );
    }

    return (
      formData?.Diagnosis
            && formData?.Diagnosis.map((item, index) => (
              <div
                className="document-data-block-info-block-bottom-info-inputs"
                key={index}
              >
                <div className="document-input-block">
                  <label htmlFor={`dateTwenty-${index}`}>
                    <span
                      className="document-input-block-label-Date-span"
                    >
                      Дата начала диспансерного наблюдения
                    </span>
                    <input
                      className="document-input"
                      type="Date"
                      value={item.Date ? item.Date : null}
                      onChange={(event) => handleInputTwentyChange(
                        index,
                        'Date',
                        event.target.value,
                      )}
                      placeholder="Дата начала"
                      id={`dateTwenty-${index}`}
                    />
                  </label>
                  <label htmlFor={`isFirstTwenty-${index}`}>
                    <span
                      className="document-input-block-label-Date-span"
                    >
                      Установленные впервые или повторно (+/-)
                    </span>
                    <select
                      className="veneral-info"
                      name="type"
                      onChange={(event) => handleInputTwentyChange(
                        index,
                        'type',
                        event.target.value,
                      )}
                      value={item.Type}
                    >
                      <option value="">Выберите</option>
                      <option value={0}>Нет</option>
                      <option value={1}>Да</option>
                    </select>
                  </label>
                  <label
                    className="document-input-block-label-sm"
                    htmlFor={`doctorTwenty-${index}`}
                  >
                    <span
                      className="document-input-block-label-Date-span"
                    >
                      Заключительные (уточненные) диагнозы
                    </span>
                    <textarea
                      style={{ resize: 'none' }}
                      className="document-input-doc-sm"
                      value={item.Text}
                      onChange={(event) => handleInputTwentyChange(
                        index,
                        'Text',
                        event.target.value,
                      )}
                      placeholder="Диагноз"
                      id={`diagnosisTwenty-${index}`}
                    />
                  </label>
                  <label
                    className="document-input-block-label"
                    htmlFor={`doctorTwenty-${index}`}
                  >
                    <span
                      className="document-input-block-label-Date-span"
                    >
                      Врач
                    </span>
                    <textarea
                      style={{ resize: 'none' }}
                      className="document-input-doc"
                      value={item.Doctor}
                      onChange={(event) => handleInputTwentyChange(
                        index,
                        'Doctor',
                        event.target.value,
                      )}
                      placeholder="Врач"
                      id={`doctorTwenty-${index}`}
                    />
                  </label>
                  <div className="document-button-block">
                    <button
                      className="document-button"
                      onClick={() => handleAddTwentyInput()}
                    >
                      Добавить пункт
                    </button>
                    <button
                      className="document-button"
                      onClick={() => handleRemoveTwentyInput(index)}
                    >
                      Удалить
                    </button>
                  </div>
                </div>
              </div>
            ))
    );
  };

  const renderTwelveInputs = () => {
    if (!formData?.Deseases || formData?.Deseases.length === 0) {
      return (
        <div className="document-data-block-info-block-bottom-info-inputs">
          <button onClick={() => handleAddInput()}>
            Добавить строку
          </button>
        </div>
      );
    }

    console.log(formData.Deseases);

    return (
      formData?.Deseases
            && formData?.Deseases.map((item, index) => (
              <div
                className="document-data-block-info-block-bottom-info-inputs"
                key={index}
              >
                <div className="document-input-block">
                  <label
                    className="document-input-block-label-Date"
                    htmlFor={`startDateTwelve-${index}`}
                  >
                    <span
                      className="document-input-block-label-Date-span"
                    >
                      Дата начала диспансерного наблюдения
                    </span>
                    <input
                      className="document-input"
                      type="Date"
                      max="9999-12-31"
                      value={item.Date ? item.Date : null}
                      onChange={(event) => handleInputTwelveChange(
                        index,
                        'Date',
                        event.target.value,
                      )}
                      placeholder="Дата начала"
                      id={`startDateTwelve-${index}`}
                    />
                  </label>
                  <label
                    className="document-input-block-label-Date"
                    htmlFor={`endDateTwelve-${index}`}
                  >
                    <span
                      className="document-input-block-label-Date-span"
                    >
                      Дата прекращения диспансерного наблюдения
                    </span>
                    <input
                      className="document-input"
                      type="Date"
                      max="9999-12-31"
                      value={item.EndDate ? item.EndDate : null}
                      onChange={(event) => handleInputTwelveChange(
                        index,
                        'EndDate',
                        event.target.value,
                      )}
                      placeholder="Дата прекращения"
                      id={`endDateTwelve-${index}`}
                    />
                  </label>
                  <label htmlFor={`mkbCodeTwelve-${index}`}>
                    <span
                      className="document-input-block-label-Date-span"
                    >
                      Код по МКБ-10
                    </span>
                    <Autosuggest
                      suggestions={suggestions.suggestions}
                      inputProps={{
                        onChange: (event, { newValue }) => handleInputTwelveChange(
                          index,
                          'Code',
                          newValue,
                        ),
                        value: item.Code === null ? '' : item.Code,
                        className: 'document-input local-storage',
                      }}
                      getSuggestionValue={getSuggestionValue}
                      onSuggestionsFetchRequested={
                                    onSuggestionsFetchRequested
                                }
                      onSuggestionsClearRequested={
                                    onSuggestionsClearRequested
                                }
                      renderSuggestion={renderSuggestion}
                    />
                    {/* <input
                                className='document-input local-storage'
                                type='Text'
                                value={item.Code}
                                onChange={(event) =>
                                    handleInputTwelveChange(
                                        index,
                                        'Code',
                                        event.target.value
                                    )
                                }
                                placeholder='Код по МКБ-10'
                                id={`mkbCodeTwelve-${index}`}
                            /> */}
                  </label>
                  <label className="document-input-block-label-sm">
                    <span
                      className="document-input-block-label-Date-span"
                    >
                      Диагноз
                    </span>
                    <textarea
                      style={{ resize: 'none' }}
                      className="document-input-doc-sm"
                      value={item.Diagnosis}
                      onChange={(event) => handleInputTwelveChange(
                        index,
                        'Diagnosis',
                        event.target.value,
                      )}
                      placeholder="Диагноз"
                      id={`diagnosisTwelve-${index}`}
                    />
                  </label>
                  <label
                    className="document-input-block-label"
                    htmlFor={`doctorTwelve-${index}`}
                  >
                    <span
                      className="document-input-block-label-Date-span"
                    >
                      Врач
                    </span>
                    <textarea
                      style={{ resize: 'none' }}
                      className="document-input-doc"
                      value={item.Doctor}
                      onChange={(event) => handleInputTwelveChange(
                        index,
                        'Doctor',
                        event.target.value,
                      )}
                      placeholder="Врач"
                      id={`doctorTwelve-${index}`}
                    />
                  </label>
                  <div className="document-button-block">
                    <button
                      className="document-button"
                      onClick={() => handleAddInput()}
                    >
                      Добавить пункт
                    </button>
                    <button
                      className="document-button"
                      onClick={() => handleRemoveInput(index)}
                    >
                      Удалить
                    </button>
                  </div>
                </div>
              </div>
            ))
    );
  };

  const onSearch = (value: string) => {
    console.log('search:', value);
  };

  return (
    <div className="layout">
      <Sidebar />
      <div className="document-data">
        <div className="document-data-block">
          <div className="document-data-block-info">
            <InputBlock
              title="Данные добровольца (Обязательные поля)"
              items={volunteerData(setFormData, formData)}
            />

            <InputBlock
              title="Дата заполнения медицинской карты (Обязательное поле)"
              items={createDate(setFormData, formData)}
            />

            <InputBlock
              title="Информация о заболеваниях"
              items={desiasesInfo(setFormData, formData)}
            />

            <InputBlock
              title="Информация о дате рождения и поле"
              items={sexAndBirthDayInfo(setFormData, formData)}
            />

            <div className="document-data-block-info-block">
              <div className="document-data-block-info-block-top">
                Контактная информация
              </div>
              <div className="document-data-block-info-block-bottom">
                <div className="document-data-block-info-block-bottom-info">
                  <div className="document-data-block-info-block-bottom-info-inputs">
                    {renderPhonesInputs()}
                  </div>
                </div>
              </div>
            </div>

            <InputBlock
              title="Информация о месте регистрации"
              items={registrationPlaceInfo(setFormData, formData)}
            />

            <InputBlock
              title="Информация о месте жительства"
              items={residencePlaceInfo(setFormData, formData)}
            />

            <InputBlock
              title="Информация про ОМС и СНИЛС"
              items={OmsAndSnils(setFormData, formData)}
            />

            <InputBlock
              title="Информация о страховой медицинской организации"
              items={insuranceMedicalOrganization(
                setFormData,
                formData,
              )}
            />

            <div className="document-data-block-info-block">
              <div className="document-data-block-info-block-top">
                Информация о льготе
              </div>
              <div className="document-data-block-info-block-bottom">
                <div className="document-data-block-info-block-bottom-info">
                  <span>Код категории льготы</span>
                  <Select
                                        // name={'benefitCategoryCode'}
                    className="benefit"
                    showSearch
                    placeholder="Выберите"
                    optionFilterProp="BenefitCategoryCode"
                    onChange={(value) => handleInputChange(
                      {
                        target: {
                          value,
                          name: 'BenefitCategoryCode',
                        },
                      },
                      null,
                    )}
                    onSearch={onSearch}
                    value={
                                            formData
                                            && formData.BenefitCategoryCode
                                        }
                    filterOption={(input, option) => (option?.label ?? '')
                      .toLowerCase()
                      .includes(input.toLowerCase())}
                    options={options}
                  />
                </div>
              </div>
            </div>

            <InputBlock
              title="Информация о Документе"
              items={documentInfo(setFormData, formData)}
            />

            <div className="document-data-block-info-block">
              <div className="document-data-block-info-block-top">
                Заболевания, по поводу которых осуществляется
                диспансерное наблюдение
              </div>
              <div className="document-data-block-info-block-bottom">
                <div className="document-data-block-info-block-bottom-info">
                  <div className="document-data-block-info-block-bottom-info-inputs">
                    {renderTwelveInputs()}
                  </div>
                </div>
              </div>
            </div>

            <InputBlock
              title="Информация о семейном положении, образовании и
                                занятости"
              items={familyEducationWorkInfo(
                setFormData,
                formData,
              )}
            />

            <InputBlock
              title="Информация о инвалидности"
              items={disabilityInfo(setFormData, formData)}
            />

            <InputBlock
              title="Информация о месте работы"
              items={workInfo(setFormData, formData)}
            />

            <InputBlock
              title="Информация о изменении места работы и изменении
                                места регистрации"
              items={changeWorkInfo(setFormData, formData)}
            />

            <div className="document-data-block-info-block">
              <div className="document-data-block-info-block-top">
                Лист записи заключительных (уточненных)
                диагнозов
              </div>
              <div className="document-data-block-info-block-bottom">
                <div className="document-data-block-info-block-bottom-info">
                  <div className="document-data-block-info-block-bottom-info-inputs">
                    {renderTwentyInputs()}
                  </div>
                </div>
              </div>
            </div>

            <InputBlock
              title="Информация о группе крови и аллергических
                                реакциях"
              items={bloodGroup(setFormData, formData)}
            />

            <InputBlock
              title="Информация об осмотрах у врачей-специалистов"
              items={checkupInfo(setFormData, formData)}
            />

            <InputBlock
              title="Врач"
              items={doctor(setFormData, formData)}
            />

            <InputBlock
              title="Информация о расе"
              items={raceItems}
            />

            <InputBlock
              title="Дата осмотра"
              items={patientDate(setFormData, formData)}
            />

            <InputBlock
              title="Информация о диагнозе"
              items={diagnosisInfo(setFormData, formData)}
            />

            <InputBlock
              title="Информация о маршруте пациента"
              items={pathInfo(setFormData, formData)}
            />

            {pathParts === 'edit' ? (
              <button
                onClick={handleEditDoc}
                style={{
                  alignSelf: 'center',
                  justifySelf: 'center',
                }}
              >
                Изменить
              </button>
            ) : (
              <button
                onClick={handleCreateDoc}
                style={{
                  alignSelf: 'center',
                  justifySelf: 'center',
                }}
              >
                Сохранить
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDocument;
