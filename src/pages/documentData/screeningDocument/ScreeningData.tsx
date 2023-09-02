import React, { useEffect, useState } from 'react';
import '../mainDocument/mainDocument.scss';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { message } from 'antd';
import { CardScreening } from '../../../utils/types/documentType';
import { CardScreeningData } from '../../../utils/types/enums/documentEnums';
import Sidebar from '../../../components/document/sidebar/Sidebar';
import SelectBlock from '../../../components/document/selectBlock/SelectBlock';
import {
  acquaintanceScreeningSelect,
  agreedScreeningSelect,
  AgreementOperatorScreening,
  complyWithTheRequirementsScreeningSelect,
  contraceptionScreeningSelect,
  exampleInDocumentationScreeningSelect,
  formEnoughTimeScreeningSelect,
  formScreeningSelect,
  fullAgreedScreeningSelect,
  fullInfoScreeningSelect,
  HandedPolisScreeningSelect,
  IndividualScreening,
  PolisCopyScreeningSelect,
  questionsScreeningSelect,
  requirementsScreeningSelect,
  screeningData,
  signed2ExamplesScreeningSelect,
  signedFormScreeningSelect,
  stacionarScreeningSelect,
  understandingScreeningSelect,
} from './blockInputs';
import { axiosCardRequest } from '../../../utils/request/NewAxiosRequest';

const ScreeningData = () => {
  const [time, setTime] = useState<any>('');
  const [timeForm, setTimeForm] = useState<any>('');
  const [timeSecond, setTimeSecond] = useState<any>('');

  const { pathname } = useLocation();
  const pathParts = pathname.split('/')[3];
  const { id, protocolId } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState<CardScreening>({
    [CardScreeningData.DateTime]: '',
    [CardScreeningData.Agreed]: null,
    [CardScreeningData.FormTime]: '',
    [CardScreeningData.Form]: null,
    [CardScreeningData.FormEnoughTime]: null,
    [CardScreeningData.Acquaintance]: null,
    [CardScreeningData.Understanding]: null,
    [CardScreeningData.Requirements]: null,
    [CardScreeningData.Questions]: null,
    [CardScreeningData.FullInfo]: null,
    [CardScreeningData.FullAgreed]: null,
    [CardScreeningData.ComplyWithTheRequirements]: null,
    [CardScreeningData.Contraception]: null,
    [CardScreeningData.Signed2ExamplesDateTime]: '',
    [CardScreeningData.Signed2Examples]: null,
    [CardScreeningData.ExampleInDocumentation]: null,
    [CardScreeningData.Stacionar]: null,
    [CardScreeningData.SignedForm]: null,
    [CardScreeningData.AgreementOperator]: '',
    [CardScreeningData.IndividualString]: '',
    [CardScreeningData.HandedPolis]: null,
    [CardScreeningData.PolisCopy]: null,
    [CardScreeningData.CardId]: +id,
    [CardScreeningData.FirstTime]: null,
    [CardScreeningData.SecondTime]: null,
    [CardScreeningData.ThirdTime]: null,
    [CardScreeningData.Insurance]: null,
  });

  console.log(formData[CardScreeningData.Insurance]);

  // console.log(formData[CardScreeningData.DateTime] + " " + time.DateTime);

  useEffect(() => {
    if (pathParts === 'edit') {
      const getCreatedData = async () => {
        const { data } = await axiosCardRequest.get<CardScreening>(
          `/Screening/Index/${id}`,
        );

        setFormData({
          ...data,
          [CardScreeningData.DateTime]: data.DateTime.split('T')[0],
          [CardScreeningData.FirstTime]: data.DateTime.split('T')[1],
          [CardScreeningData.Signed2ExamplesDateTime]:
            data.Signed2ExamplesDateTime.split('T')[0],
          [CardScreeningData.ThirdTime]:
            data.Signed2ExamplesDateTime.split('T')[1],
          [CardScreeningData.FormTime]: data.FormTime.split(':00')[0],
          [CardScreeningData.Agreed]:
            data.Agreed === null ? null : data.Agreed ? '1' : '0',
          [CardScreeningData.Form]:
            data.Form === null ? null : data.Form ? '1' : '0',
          [CardScreeningData.FormEnoughTime]:
            data.FormEnoughTime === null
              ? null
              : data.FormEnoughTime
                ? '1'
                : '0',
          [CardScreeningData.Acquaintance]:
            data.Acquaintance === null ? null : data.Acquaintance ? '1' : '0',
          [CardScreeningData.Understanding]:
            data.Understanding === null ? null : data.Understanding ? '1' : '0',
          [CardScreeningData.Requirements]:
            data.Requirements === null ? null : data.Requirements ? '1' : '0',
          [CardScreeningData.Questions]:
            data.Questions === null ? null : data.Questions ? '1' : '0',
          [CardScreeningData.FullInfo]:
            data.FullInfo === null ? null : data.FullInfo ? '1' : '0',
          [CardScreeningData.FullAgreed]:
            data.FullAgreed === null ? null : data.FullAgreed ? '1' : '0',
          [CardScreeningData.ComplyWithTheRequirements]:
            data.ComplyWithTheRequirements === null
              ? null
              : data.ComplyWithTheRequirements
                ? '1'
                : '0',
          [CardScreeningData.Contraception]:
            data.Contraception === null ? null : data.Contraception ? '1' : '0',
          [CardScreeningData.Signed2Examples]:
            data.Signed2Examples === null
              ? null
              : data.Signed2Examples
                ? '1'
                : '0',
          [CardScreeningData.ExampleInDocumentation]:
            data.ExampleInDocumentation === null
              ? null
              : data.ExampleInDocumentation
                ? '1'
                : '0',
          [CardScreeningData.Stacionar]:
            data.Stacionar === null ? null : data.Stacionar ? '1' : '0',
          [CardScreeningData.SignedForm]:
            data.SignedForm === null ? null : data.SignedForm ? '1' : '0',
          [CardScreeningData.HandedPolis]:
            data.HandedPolis === null ? null : data.HandedPolis ? '1' : '0',
          [CardScreeningData.PolisCopy]:
            data.PolisCopy === null ? null : data.PolisCopy ? '1' : '0',
          [CardScreeningData.Insurance]:
            data.Insurance === null ? null : data.Insurance ? '1' : '0',
        });
      };

      getCreatedData();
    }
  }, []);

  const handleCreateDoc = async () => {
    try {
      await axiosCardRequest.post('/Screening/Create', {
        [CardScreeningData.DateTime]:
          formData[CardScreeningData.DateTime] === null
            ? null
            : `${formData[CardScreeningData.DateTime]
            }T${
              formData[CardScreeningData.FirstTime]
            }:00`,
        [CardScreeningData.FormTime]:
          formData[CardScreeningData.FormTime] === null
            ? null
            : `${formData[CardScreeningData.SecondTime]}:00`,
        [CardScreeningData.Signed2ExamplesDateTime]:
          formData[CardScreeningData.DateTime] === null
            ? null
            : `${formData[CardScreeningData.DateTime]
            }T${
              formData[CardScreeningData.ThirdTime]
            }:00`,
        [CardScreeningData.AgreementOperator]:
          formData[CardScreeningData.AgreementOperator] === null
            ? null
            : formData.AgreementOperator,
        [CardScreeningData.IndividualString]:
          formData[CardScreeningData.IndividualString] === null
            ? null
            : formData[CardScreeningData.IndividualString],
        [CardScreeningData.Agreed]:
          formData[CardScreeningData.Agreed] === null
            ? null
            : Boolean(+formData[CardScreeningData.Agreed]),
        [CardScreeningData.Form]:
          formData[CardScreeningData.Form] === null
            ? null
            : Boolean(+formData[CardScreeningData.Form]),
        [CardScreeningData.FormEnoughTime]:
          formData[CardScreeningData.FormEnoughTime] === null
            ? null
            : Boolean(+formData[CardScreeningData.FormEnoughTime]),
        [CardScreeningData.Acquaintance]:
          formData[CardScreeningData.Acquaintance] === null
            ? null
            : Boolean(+formData[CardScreeningData.Acquaintance]),
        [CardScreeningData.Understanding]:
          formData[CardScreeningData.Understanding] === null
            ? null
            : Boolean(+formData[CardScreeningData.Understanding]),
        [CardScreeningData.Requirements]:
          formData[CardScreeningData.Requirements] === null
            ? null
            : Boolean(+formData[CardScreeningData.Requirements]),
        [CardScreeningData.Questions]:
          formData[CardScreeningData.Questions] === null
            ? null
            : Boolean(+formData[CardScreeningData.Questions]),
        [CardScreeningData.FullInfo]:
          formData[CardScreeningData.FullInfo] === null
            ? null
            : Boolean(+formData[CardScreeningData.FullInfo]),
        [CardScreeningData.FullAgreed]:
          formData[CardScreeningData.FullAgreed] === null
            ? null
            : Boolean(+formData[CardScreeningData.FullAgreed]),
        [CardScreeningData.ComplyWithTheRequirements]:
          formData[CardScreeningData.ComplyWithTheRequirements] === null
            ? null
            : Boolean(+formData[CardScreeningData.ComplyWithTheRequirements]),
        [CardScreeningData.Contraception]:
          formData[CardScreeningData.Contraception] === null
            ? null
            : Boolean(+formData[CardScreeningData.Contraception]),
        [CardScreeningData.Signed2Examples]:
          formData[CardScreeningData.Signed2Examples] === null
            ? null
            : Boolean(+formData[CardScreeningData.Signed2Examples]),
        [CardScreeningData.ExampleInDocumentation]:
          formData[CardScreeningData.ExampleInDocumentation] === null
            ? null
            : Boolean(+formData[CardScreeningData.ExampleInDocumentation]),
        [CardScreeningData.Stacionar]:
          formData[CardScreeningData.Stacionar] === null
            ? null
            : Boolean(+formData[CardScreeningData.Stacionar]),
        [CardScreeningData.SignedForm]:
          formData[CardScreeningData.SignedForm] === null
            ? null
            : Boolean(+formData[CardScreeningData.SignedForm]),
        [CardScreeningData.HandedPolis]:
          formData[CardScreeningData.HandedPolis] === null
            ? null
            : Boolean(+formData[CardScreeningData.HandedPolis]),
        [CardScreeningData.PolisCopy]:
          formData[CardScreeningData.PolisCopy] === null
            ? null
            : Boolean(+formData[CardScreeningData.PolisCopy]),
        [CardScreeningData.Insurance]:
          formData[CardScreeningData.Insurance] === null
            ? null
            : formData[CardScreeningData.Insurance],
        CardId: +id,
      });
      navigate(`/documents/${protocolId}`);
    } catch (error) {
      console.log(error);
      const errorMessage = (
        <div className="error-message-container">
          <span className="font-span">Ошибка при создании документа.</span>
        </div>
      );
      message.error(errorMessage, 4);
    }
  };

  const handleEditDoc = async () => {
    try {
      await axiosCardRequest.post('/Screening/Edit', {
        [CardScreeningData.DateTime]:
          formData[CardScreeningData.DateTime] === null
            ? null
            : `${formData[CardScreeningData.DateTime]
            }T${
              formData[CardScreeningData.FirstTime]
            }:00`,
        [CardScreeningData.FormTime]:
          formData[CardScreeningData.FormTime] === null
            ? null
            : `${formData[CardScreeningData.SecondTime]}:00`,
        [CardScreeningData.Signed2ExamplesDateTime]:
          formData[CardScreeningData.DateTime] === null
            ? null
            : `${formData[CardScreeningData.DateTime]
            }T${
              formData[CardScreeningData.ThirdTime]
            }:00`,
        [CardScreeningData.AgreementOperator]:
          formData[CardScreeningData.AgreementOperator] === null
            ? null
            : formData.AgreementOperator,
        [CardScreeningData.IndividualString]:
          formData[CardScreeningData.IndividualString] === null
            ? null
            : formData[CardScreeningData.IndividualString],
        [CardScreeningData.Agreed]:
          formData[CardScreeningData.Agreed] === null
            ? null
            : Boolean(+formData[CardScreeningData.Agreed]),
        [CardScreeningData.Form]:
          formData[CardScreeningData.Form] === null
            ? null
            : Boolean(+formData[CardScreeningData.Form]),
        [CardScreeningData.FormEnoughTime]:
          formData[CardScreeningData.FormEnoughTime] === null
            ? null
            : Boolean(+formData[CardScreeningData.FormEnoughTime]),
        [CardScreeningData.Acquaintance]:
          formData[CardScreeningData.Acquaintance] === null
            ? null
            : Boolean(+formData[CardScreeningData.Acquaintance]),
        [CardScreeningData.Understanding]:
          formData[CardScreeningData.Understanding] === null
            ? null
            : Boolean(+formData[CardScreeningData.Understanding]),
        [CardScreeningData.Requirements]:
          formData[CardScreeningData.Requirements] === null
            ? null
            : Boolean(+formData[CardScreeningData.Requirements]),
        [CardScreeningData.Questions]:
          formData[CardScreeningData.Questions] === null
            ? null
            : Boolean(+formData[CardScreeningData.Questions]),
        [CardScreeningData.FullInfo]:
          formData[CardScreeningData.FullInfo] === null
            ? null
            : Boolean(+formData[CardScreeningData.FullInfo]),
        [CardScreeningData.FullAgreed]:
          formData[CardScreeningData.FullAgreed] === null
            ? null
            : Boolean(+formData[CardScreeningData.FullAgreed]),
        [CardScreeningData.ComplyWithTheRequirements]:
          formData[CardScreeningData.ComplyWithTheRequirements] === null
            ? null
            : Boolean(+formData[CardScreeningData.ComplyWithTheRequirements]),
        [CardScreeningData.Contraception]:
          formData[CardScreeningData.Contraception] === null
            ? null
            : Boolean(+formData[CardScreeningData.Contraception]),
        [CardScreeningData.Signed2Examples]:
          formData[CardScreeningData.Signed2Examples] === null
            ? null
            : Boolean(+formData[CardScreeningData.Signed2Examples]),
        [CardScreeningData.ExampleInDocumentation]:
          formData[CardScreeningData.ExampleInDocumentation] === null
            ? null
            : Boolean(+formData[CardScreeningData.ExampleInDocumentation]),
        [CardScreeningData.Stacionar]:
          formData[CardScreeningData.Stacionar] === null
            ? null
            : Boolean(+formData[CardScreeningData.Stacionar]),
        [CardScreeningData.SignedForm]:
          formData[CardScreeningData.SignedForm] === null
            ? null
            : Boolean(+formData[CardScreeningData.SignedForm]),
        [CardScreeningData.HandedPolis]:
          formData[CardScreeningData.HandedPolis] === null
            ? null
            : Boolean(+formData[CardScreeningData.HandedPolis]),
        [CardScreeningData.PolisCopy]:
          formData[CardScreeningData.PolisCopy] === null
            ? null
            : Boolean(+formData[CardScreeningData.PolisCopy]),
        [CardScreeningData.Insurance]:
          formData[CardScreeningData.Insurance] === null
            ? null
            : formData[CardScreeningData.Insurance],
        CardId: +id,
      });
      navigate(`/documents/${protocolId}`);
    } catch (error) {
      console.log(error);
      const errorMessage = (
        <div className="error-message-container">
          <span className="font-span">Ошибка при создании документа.</span>
        </div>
      );
      message.error(errorMessage, 4);
    }
  };

  return (
    <div className="layout">
      <Sidebar />
      <div className="document-data">
        <div className="document-data-block">
          <div className="document-data-block-info">
            <SelectBlock
              title="Дата и время скринингово визита"
              items={screeningData(setFormData, formData, time, setTime)}
            />
            <SelectBlock
              title="Добровольцу предложено участие в клиническом исследовании ««Открытое рандомизированное перекрестное четырехпериодное в двух последовательностях одноцентровое исследование биоэквивалентности препаратов ТЕЛМИСАРТАН таблетки 80 мг (ООО «СитиФарм», Россия) и Микардис® таблетки 80 мг (Берингер Ингельхайм Интернешнл ГмбХ, Германия) у здоровых добровольцев после однократного приема натощак»"
              items={agreedScreeningSelect(setFormData, formData)}
            />
            <SelectBlock
              title={
                'В _ часы _ добровольцу была выдана форма информированного согласия для прочтения и ознакомления: \n'
                + 'Информационный листок для добровольца и форма информированного согласия, TEL22, версия 1.0 от 28.10.2022г.'
              }
              items={formScreeningSelect(
                setFormData,
                formData,
                timeForm,
                setTimeForm,
              )}
            />
            <SelectBlock
              title="У добровольца было достаточно времени для ознакомления с формой информированного согласия"
              items={formEnoughTimeScreeningSelect(setFormData, formData)}
            />
            <SelectBlock
              title="Доброволец внимательно ознакомился(ась) с информацией об исследовании, представленной в информационном листке"
              items={acquaintanceScreeningSelect(setFormData, formData)}
            />
            <SelectBlock
              title="Доброволец понимает все формулировки, содержащиеся в форме информированного согласия"
              items={understandingScreeningSelect(setFormData, formData)}
            />
            <SelectBlock
              title="С добровольцем обсуждались суть, требования и ограничения исследования"
              items={requirementsScreeningSelect(setFormData, formData)}
            />
            <SelectBlock
              title="Доброволец задал все интересующие вопросы, на которые получил (а) исчерпывающие ответы"
              items={questionsScreeningSelect(setFormData, formData)}
            />
            <SelectBlock
              title="Доброволец получил полную информацию обо всех значимых для принятия им решения аспектах исследования"
              items={fullInfoScreeningSelect(setFormData, formData)}
            />
            <SelectBlock
              title="После чего дал добровольное согласие на участие в исследовании"
              items={fullAgreedScreeningSelect(setFormData, formData)}
            />
            <SelectBlock
              title="Доброволец способен, по мнению исследователя, выполнять требования протокола"
              items={complyWithTheRequirementsScreeningSelect(
                setFormData,
                formData,
              )}
            />
            <SelectBlock
              title="Проведена беседа о необходимости соблюдать эффективные методы контрацепции (внутриматочная негормональная медьсодержащая система + презерватив; двойной барьерный метод: презерватив или окклюзионный колпачок (диафрагма или цервикальный/сводчатый колпачки) плюс спермицид (пенка/гель/ пленка/крем/суппозиторий) или воздержание (отказ) от половых контактов в течение всего периода исследования для мужчин и(или) его половой партнерши) в процессе исследования и в течении 30 дней после его окончания. Доброволец понял и согласился использовать эти методы контрацепции"
              items={contraceptionScreeningSelect(setFormData, formData)}
            />
            <SelectBlock
              title="До выполнения всех процедур исследования, в присутствии врача – исследователя _ дата _ в _ время _ доброволец собственноручно подписал 2 экземпляра формы информированного согласия на участие в клиническом исследовании (Информационный листок для добровольца и Форма Информированного согласия, TEL22, версия 1.0 от 28.10.2022г."
              items={signed2ExamplesScreeningSelect(
                setFormData,
                formData,
                timeSecond,
                setTimeSecond,
              )}
            />
            <SelectBlock
              title="Один экземпляр подписанного согласия вложен в первичную документацию добровольца, второй выдан на руки  "
              items={exampleInDocumentationScreeningSelect(
                setFormData,
                formData,
              )}
            />
            <SelectBlock
              title="Доброволец согласен на соблюдение правил нахождения в стационаре ООО «ННЦ ИССЛЕДОВАНИЙ И ФАРМАКОНАДЗОРА»"
              items={stacionarScreeningSelect(setFormData, formData)}
            />
            <SelectBlock
              title="Подписал форму согласия на соблюдение правил пребывания в стационаре"
              items={signedFormScreeningSelect(setFormData, formData)}
            />
            <SelectBlock
              title={'Процедуру информированного согласия проводил(а)"'}
              items={AgreementOperatorScreening(setFormData, formData)}
              isLongInput
            />
            <SelectBlock
              title="Введите 33 значный код"
              items={IndividualScreening(setFormData, formData)}
              isLongInput
            />
            <SelectBlock
              title="Выписан и выдан на руки полис обязательного страхования жизни и здоровья добровольца, участвующего в клиническом исследовании лекарственного препарата."
              items={HandedPolisScreeningSelect(setFormData, formData)}
            />
            <SelectBlock
              title="Копия полиса оставлена в центре"
              items={PolisCopyScreeningSelect(setFormData, formData)}
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

export default ScreeningData;
