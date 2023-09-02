import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { message } from 'antd';
import SelectBlock from '../../../components/document/selectBlock/SelectBlock';
import Sidebar from '../../../components/document/sidebar/Sidebar';
import { Criteria } from '../../../utils/types/documentType';
import { CriteriaFields } from '../../../utils/types/enums/documentEnums';
import {
  Comments,
  ExcludeCriteria1,
  ExcludeCriteria10,
  ExcludeCriteria11,
  ExcludeCriteria12,
  ExcludeCriteria13,
  ExcludeCriteria14,
  ExcludeCriteria15,
  ExcludeCriteria16,
  ExcludeCriteria17,
  ExcludeCriteria18,
  ExcludeCriteria19,
  ExcludeCriteria2,
  ExcludeCriteria20,
  ExcludeCriteria21,
  ExcludeCriteria22,
  ExcludeCriteria23,
  ExcludeCriteria24,
  ExcludeCriteria3,
  ExcludeCriteria4,
  ExcludeCriteria5,
  ExcludeCriteria6,
  ExcludeCriteria7,
  ExcludeCriteria8,
  ExcludeCriteria9,
  IMT,
  IncludeCriteria10,
  IncludeCriteria11,
  IncludeCriteria12,
  IncludeCriteria13,
  IncludeCriteria14,
  IncludeCriteria15,
  IncludeCriteria5,
  IncludeCriteria6,
  IncludeCriteria7,
  IncludeCriteria8,
  IncludeCriteria9,
  informList,
  mensAndWomens,
  verificationDiagnosis,
  CriteriaEvaluated,
  CriteriaAccepted,
  CriteriaAllowed,
  CriteriaYesNo,
  Informed,
  Hospitalized,
  VisitComment,
  Doctor,
} from './blockInputs';
import InputBlock from '../../../components/document/inputBlock/InputBlock';
import { InputBlockItem } from '../../../utils/types/shared';
import SelectInput from '../../../components/document/inputs/selectInput/SelectInput';
import { yesNoOptions } from './blockInputs/data';
import DateInput from '../../../components/document/inputs/dateInput/DateInput';
import DefaultInput from '../../../components/document/inputs/defaultInput/DefaultInput';
import { axiosCardRequest } from '../../../utils/request/NewAxiosRequest';

const CriteriaDocument = () => {
  const { protocolId, id } = useParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const pathParts = pathname.split('/')[3];
  // todo:  НА БЭК!!!!
  const [formData, setFormData] = useState<Criteria>({
    [CriteriaFields.IncludeCriteria1]: null,
    [CriteriaFields.IncludeCriteria2]: null,
    [CriteriaFields.IncludeCriteria3]: null,
    [CriteriaFields.IncludeCriteria4]: null,
    [CriteriaFields.IncludeCriteria5]: null,
    [CriteriaFields.IncludeCriteria6]: null,
    [CriteriaFields.IncludeCriteria7]: null,
    [CriteriaFields.IncludeCriteria8]: null,
    [CriteriaFields.IncludeCriteria9]: null,
    [CriteriaFields.IncludeCriteria10]: null,
    [CriteriaFields.IncludeCriteria11]: null,
    [CriteriaFields.IncludeCriteria12]: null,
    [CriteriaFields.IncludeCriteria13]: null,
    [CriteriaFields.IncludeCriteria14]: null,
    [CriteriaFields.IncludeCriteria15]: null,
    [CriteriaFields.ExcludeCriteria1]: null,
    [CriteriaFields.ExcludeCriteria2]: null,
    [CriteriaFields.ExcludeCriteria3]: null,
    [CriteriaFields.ExcludeCriteria4]: null,
    [CriteriaFields.ExcludeCriteria5]: null,
    [CriteriaFields.ExcludeCriteria6]: null,
    [CriteriaFields.ExcludeCriteria7]: null,
    [CriteriaFields.ExcludeCriteria8]: null,
    [CriteriaFields.ExcludeCriteria9]: null,
    [CriteriaFields.ExcludeCriteria10]: null,
    [CriteriaFields.ExcludeCriteria11]: null,
    [CriteriaFields.ExcludeCriteria12]: null,
    [CriteriaFields.ExcludeCriteria13]: null,
    [CriteriaFields.ExcludeCriteria14]: null,
    [CriteriaFields.ExcludeCriteria15]: null,
    [CriteriaFields.ExcludeCriteria16]: null,
    [CriteriaFields.ExcludeCriteria17]: null,
    [CriteriaFields.ExcludeCriteria18]: null,
    [CriteriaFields.ExcludeCriteria19]: null,
    [CriteriaFields.ExcludeCriteria20]: null,
    [CriteriaFields.ExcludeCriteria21]: null,
    [CriteriaFields.ExcludeCriteria22]: null,
    [CriteriaFields.ExcludeCriteria23]: null,
    [CriteriaFields.ExcludeCriteria24]: null,
    [CriteriaFields.Comment]: null,
    [CriteriaFields.CriteriaEvaluated]: null,
    [CriteriaFields.CriteriaAccepted]: null,
    [CriteriaFields.CriteriaAllowed]: null,
    [CriteriaFields.CriteriaYesNo]: null,
    [CriteriaFields.PhoneDateTime]: null,
    [CriteriaFields.PhoneDate]: null,
    [CriteriaFields.PhoneTime]: null,
    [CriteriaFields.PhoneYesNo]: null,
    [CriteriaFields.Informed]: null,
    [CriteriaFields.Hospitalized]: null,
    [CriteriaFields.VisitComment]: null,
    [CriteriaFields.Doctor]: null,
    [CriteriaFields.CardId]: +id,
  });

  useEffect(() => {
    if (pathParts === 'edit') {
      const getCreatedData = async () => {
        const { data } = await axiosCardRequest.get<Criteria>(
          `/Criteria/Index/${id}`,
        );

        setFormData({
          ...data,
          [CriteriaFields.IncludeCriteria1]:
                        data.IncludeCriteria1 === null
                          ? null
                          : data.IncludeCriteria1
                            ? '1'
                            : '0',

          [CriteriaFields.IncludeCriteria2]:
                        data.IncludeCriteria2 === null
                          ? null
                          : data.IncludeCriteria2
                            ? '1'
                            : '0',

          [CriteriaFields.IncludeCriteria3]:
                        data.IncludeCriteria3 === null
                          ? null
                          : data.IncludeCriteria3
                            ? '1'
                            : '0',

          [CriteriaFields.IncludeCriteria4]:
                        data.IncludeCriteria4 === null
                          ? null
                          : data.IncludeCriteria4
                            ? '1'
                            : '0',

          [CriteriaFields.IncludeCriteria5]:
                        data.IncludeCriteria5 === null
                          ? null
                          : data.IncludeCriteria5
                            ? '1'
                            : '0',

          [CriteriaFields.IncludeCriteria6]:
                        data.IncludeCriteria6 === null
                          ? null
                          : data.IncludeCriteria6
                            ? '1'
                            : '0',

          [CriteriaFields.IncludeCriteria7]:
                        data.IncludeCriteria7 === null
                          ? null
                          : data.IncludeCriteria7
                            ? '1'
                            : '0',

          [CriteriaFields.IncludeCriteria8]:
                        data.IncludeCriteria8 === null
                          ? null
                          : data.IncludeCriteria8
                            ? '1'
                            : '0',

          [CriteriaFields.IncludeCriteria9]:
                        data.IncludeCriteria9 === null
                          ? null
                          : data.IncludeCriteria9
                            ? '1'
                            : '0',

          [CriteriaFields.IncludeCriteria10]:
                        data.IncludeCriteria10 === null
                          ? null
                          : data.IncludeCriteria10
                            ? '1'
                            : '0',

          [CriteriaFields.IncludeCriteria11]:
                        data.IncludeCriteria11 === null
                          ? null
                          : data.IncludeCriteria11
                            ? '1'
                            : '0',
          [CriteriaFields.IncludeCriteria12]:
                        data.IncludeCriteria12 === null
                          ? null
                          : data.IncludeCriteria12
                            ? '1'
                            : '0',

          [CriteriaFields.IncludeCriteria13]:
                        data.IncludeCriteria13 === null
                          ? null
                          : data.IncludeCriteria13
                            ? '1'
                            : '0',

          [CriteriaFields.IncludeCriteria14]:
                        data.IncludeCriteria14 === null
                          ? null
                          : data.IncludeCriteria14
                            ? '1'
                            : '0',

          [CriteriaFields.IncludeCriteria15]:
                        data.IncludeCriteria15 === null
                          ? null
                          : data.IncludeCriteria15
                            ? '1'
                            : '0',

          [CriteriaFields.ExcludeCriteria1]:
                        data.ExcludeCriteria1 === null
                          ? null
                          : data.ExcludeCriteria1
                            ? '1'
                            : '0',

          [CriteriaFields.ExcludeCriteria2]:
                        data.ExcludeCriteria2 === null
                          ? null
                          : data.ExcludeCriteria2
                            ? '1'
                            : '0',

          [CriteriaFields.ExcludeCriteria3]:
                        data.ExcludeCriteria3 === null
                          ? null
                          : data.ExcludeCriteria3
                            ? '1'
                            : '0',

          [CriteriaFields.ExcludeCriteria4]:
                        data.ExcludeCriteria4 === null
                          ? null
                          : data.ExcludeCriteria4
                            ? '1'
                            : '0',
          [CriteriaFields.ExcludeCriteria5]:
                        data.ExcludeCriteria5 === null
                          ? null
                          : data.ExcludeCriteria5
                            ? '1'
                            : '0',
          [CriteriaFields.ExcludeCriteria6]:
                        data.ExcludeCriteria6 === null
                          ? null
                          : data.ExcludeCriteria6
                            ? '1'
                            : '0',
          [CriteriaFields.ExcludeCriteria7]:
                        data.ExcludeCriteria7 === null
                          ? null
                          : data.ExcludeCriteria7
                            ? '1'
                            : '0',
          [CriteriaFields.ExcludeCriteria8]:
                        data.ExcludeCriteria8 === null
                          ? null
                          : data.ExcludeCriteria8
                            ? '1'
                            : '0',
          [CriteriaFields.ExcludeCriteria9]:
                        data.ExcludeCriteria9 === null
                          ? null
                          : data.ExcludeCriteria9
                            ? '1'
                            : '0',
          [CriteriaFields.ExcludeCriteria10]:
                        data.ExcludeCriteria10 === null
                          ? null
                          : data.ExcludeCriteria10
                            ? '1'
                            : '0',
          [CriteriaFields.ExcludeCriteria11]:
                        data.ExcludeCriteria11 === null
                          ? null
                          : data.ExcludeCriteria11
                            ? '1'
                            : '0',
          [CriteriaFields.ExcludeCriteria12]:
                        formData.ExcludeCriteria12 === null
                          ? null
                          : formData.ExcludeCriteria12
                            ? '1'
                            : '0',
          [CriteriaFields.ExcludeCriteria13]:
                        data.ExcludeCriteria13 === null
                          ? null
                          : data.ExcludeCriteria13
                            ? '1'
                            : '0',
          [CriteriaFields.ExcludeCriteria14]:
                        data.ExcludeCriteria14 === null
                          ? null
                          : data.ExcludeCriteria14
                            ? '1'
                            : '0',
          [CriteriaFields.ExcludeCriteria15]:
                        data.ExcludeCriteria15 === null
                          ? null
                          : data.ExcludeCriteria15
                            ? '1'
                            : '0',
          [CriteriaFields.ExcludeCriteria16]:
                        data.ExcludeCriteria16 === null
                          ? null
                          : data.ExcludeCriteria16
                            ? '1'
                            : '0',
          [CriteriaFields.ExcludeCriteria17]:
                        data.ExcludeCriteria17 === null
                          ? null
                          : data.ExcludeCriteria17
                            ? '1'
                            : '0',
          [CriteriaFields.ExcludeCriteria18]:
                        data.ExcludeCriteria18 === null
                          ? null
                          : data.ExcludeCriteria18
                            ? '1'
                            : '0',
          [CriteriaFields.ExcludeCriteria19]:
                        data.ExcludeCriteria19 === null
                          ? null
                          : data.ExcludeCriteria19
                            ? '1'
                            : '0',
          [CriteriaFields.ExcludeCriteria20]:
                        data.ExcludeCriteria20 === null
                          ? null
                          : data.ExcludeCriteria20
                            ? '1'
                            : '0',
          [CriteriaFields.ExcludeCriteria21]:
                        data.ExcludeCriteria21 === null
                          ? null
                          : data.ExcludeCriteria21
                            ? '1'
                            : '0',
          [CriteriaFields.ExcludeCriteria22]:
                        data.ExcludeCriteria22 === null
                          ? null
                          : data.ExcludeCriteria22
                            ? '1'
                            : '0',
          [CriteriaFields.ExcludeCriteria23]:
                        data.ExcludeCriteria23 === null
                          ? null
                          : data.ExcludeCriteria23
                            ? '1'
                            : '0',

          [CriteriaFields.ExcludeCriteria24]:
                        data.ExcludeCriteria24 === null
                          ? null
                          : data.ExcludeCriteria24
                            ? '1'
                            : '0',
          [CriteriaFields.CriteriaEvaluated]:
                        data.CriteriaEvaluated === null
                          ? null
                          : data.CriteriaEvaluated
                            ? '1'
                            : '0',

          [CriteriaFields.CriteriaAccepted]:
                        data.CriteriaAccepted === null
                          ? null
                          : data.CriteriaAccepted
                            ? '1'
                            : '0',

          [CriteriaFields.CriteriaAllowed]:
                        data.CriteriaAllowed === null
                          ? null
                          : data.CriteriaAllowed
                            ? '1'
                            : '0',

          [CriteriaFields.CriteriaYesNo]:
                        data.CriteriaYesNo === null
                          ? null
                          : data.CriteriaYesNo
                            ? '1'
                            : '0',

          [CriteriaFields.PhoneDate]:
                        data.PhoneDateTime && data.PhoneDateTime.split('T')[0],

          [CriteriaFields.PhoneTime]:
                        data.PhoneDateTime && data.PhoneDateTime.split('T')[1],

          [CriteriaFields.PhoneYesNo]:
                        data.PhoneYesNo === null
                          ? null
                          : data.PhoneYesNo
                            ? '1'
                            : '0',

          [CriteriaFields.Informed]:
                        data.Informed === null
                          ? null
                          : data.Informed
                            ? '1'
                            : '0',

          [CriteriaFields.Hospitalized]:
                        data.Hospitalized === null
                          ? null
                          : data.Hospitalized
                            ? '1'
                            : '0',
        });
      };

      getCreatedData();
    }
  }, []);

  const handleCreateDoc = async () => {
    try {
      await axiosCardRequest.post('/Criteria/Create', {
        ...formData,
        [CriteriaFields.IncludeCriteria1]:
                    formData.IncludeCriteria1 === null
                      ? null
                      : Boolean(+formData.IncludeCriteria1),

        [CriteriaFields.IncludeCriteria2]:
                    formData.IncludeCriteria2 === null
                      ? null
                      : Boolean(+formData.IncludeCriteria2),

        [CriteriaFields.IncludeCriteria3]:
                    formData.IncludeCriteria3 === null
                      ? null
                      : Boolean(+formData.IncludeCriteria3),

        [CriteriaFields.IncludeCriteria4]:
                    formData.IncludeCriteria4 === null
                      ? null
                      : Boolean(+formData.IncludeCriteria4),

        [CriteriaFields.IncludeCriteria5]:
                    formData.IncludeCriteria5 === null
                      ? null
                      : Boolean(+formData.IncludeCriteria5),

        [CriteriaFields.IncludeCriteria6]:
                    formData.IncludeCriteria6 === null
                      ? null
                      : Boolean(+formData.IncludeCriteria6),

        [CriteriaFields.IncludeCriteria7]:
                    formData.IncludeCriteria7 === null
                      ? null
                      : Boolean(+formData.IncludeCriteria7),

        [CriteriaFields.IncludeCriteria8]:
                    formData.IncludeCriteria8 === null
                      ? null
                      : Boolean(+formData.IncludeCriteria8),

        [CriteriaFields.IncludeCriteria9]:
                    formData.IncludeCriteria9 === null
                      ? null
                      : Boolean(+formData.IncludeCriteria9),

        [CriteriaFields.IncludeCriteria10]:
                    formData.IncludeCriteria10 === null
                      ? null
                      : Boolean(+formData.IncludeCriteria10),

        [CriteriaFields.IncludeCriteria11]:
                    formData.IncludeCriteria11 === null
                      ? null
                      : Boolean(+formData.IncludeCriteria11),

        [CriteriaFields.IncludeCriteria12]:
                    formData.IncludeCriteria12 === null
                      ? null
                      : Boolean(+formData.IncludeCriteria12),

        [CriteriaFields.IncludeCriteria13]:
                    formData.IncludeCriteria13 === null
                      ? null
                      : Boolean(+formData.IncludeCriteria13),

        [CriteriaFields.IncludeCriteria14]:
                    formData.IncludeCriteria14 === null
                      ? null
                      : Boolean(+formData.IncludeCriteria14),

        [CriteriaFields.IncludeCriteria15]:
                    formData.IncludeCriteria15 === null
                      ? null
                      : Boolean(+formData.IncludeCriteria15),

        [CriteriaFields.ExcludeCriteria1]:
                    formData.ExcludeCriteria1 === null
                      ? null
                      : Boolean(+formData.ExcludeCriteria1),

        [CriteriaFields.ExcludeCriteria2]:
                    formData.ExcludeCriteria2 === null
                      ? null
                      : Boolean(+formData.ExcludeCriteria2),

        [CriteriaFields.ExcludeCriteria3]:
                    formData.ExcludeCriteria3 === null
                      ? null
                      : Boolean(+formData.ExcludeCriteria3),

        [CriteriaFields.ExcludeCriteria4]:
                    formData.ExcludeCriteria4 === null
                      ? null
                      : Boolean(+formData.ExcludeCriteria4),
        [CriteriaFields.ExcludeCriteria5]:
                    formData.ExcludeCriteria5 === null
                      ? null
                      : Boolean(+formData.ExcludeCriteria5),
        [CriteriaFields.ExcludeCriteria6]:
                    formData.ExcludeCriteria6 === null
                      ? null
                      : Boolean(+formData.ExcludeCriteria6),
        [CriteriaFields.ExcludeCriteria7]:
                    formData.ExcludeCriteria7 === null
                      ? null
                      : Boolean(+formData.ExcludeCriteria7),
        [CriteriaFields.ExcludeCriteria8]:
                    formData.ExcludeCriteria8 === null
                      ? null
                      : Boolean(+formData.ExcludeCriteria8),
        [CriteriaFields.ExcludeCriteria9]:
                    formData.ExcludeCriteria9 === null
                      ? null
                      : Boolean(+formData.ExcludeCriteria9),
        [CriteriaFields.ExcludeCriteria10]:
                    formData.ExcludeCriteria10 === null
                      ? null
                      : Boolean(+formData.ExcludeCriteria10),
        [CriteriaFields.ExcludeCriteria11]:
                    formData.ExcludeCriteria11 === null
                      ? null
                      : Boolean(+formData.ExcludeCriteria11),
        [CriteriaFields.ExcludeCriteria12]:
                    formData.ExcludeCriteria12 === null
                      ? null
                      : Boolean(+formData.ExcludeCriteria12),
        [CriteriaFields.ExcludeCriteria13]:
                    formData.ExcludeCriteria13 === null
                      ? null
                      : Boolean(+formData.ExcludeCriteria13),
        [CriteriaFields.ExcludeCriteria14]:
                    formData.ExcludeCriteria14 === null
                      ? null
                      : Boolean(+formData.ExcludeCriteria14),
        [CriteriaFields.ExcludeCriteria15]:
                    formData.ExcludeCriteria15 === null
                      ? null
                      : Boolean(+formData.ExcludeCriteria15),
        [CriteriaFields.ExcludeCriteria16]:
                    formData.ExcludeCriteria16 === null
                      ? null
                      : Boolean(+formData.ExcludeCriteria16),
        [CriteriaFields.ExcludeCriteria17]:
                    formData.ExcludeCriteria17 === null
                      ? null
                      : Boolean(+formData.ExcludeCriteria17),
        [CriteriaFields.ExcludeCriteria18]:
                    formData.ExcludeCriteria18 === null
                      ? null
                      : Boolean(+formData.ExcludeCriteria18),
        [CriteriaFields.ExcludeCriteria19]:
                    formData.ExcludeCriteria19 === null
                      ? null
                      : Boolean(+formData.ExcludeCriteria19),
        [CriteriaFields.ExcludeCriteria20]:
                    formData.ExcludeCriteria20 === null
                      ? null
                      : Boolean(+formData.ExcludeCriteria20),
        [CriteriaFields.ExcludeCriteria21]:
                    formData.ExcludeCriteria21 === null
                      ? null
                      : Boolean(+formData.ExcludeCriteria21),
        [CriteriaFields.ExcludeCriteria22]:
                    formData.ExcludeCriteria22 === null
                      ? null
                      : Boolean(+formData.ExcludeCriteria22),
        [CriteriaFields.ExcludeCriteria23]:
                    formData.ExcludeCriteria23 === null
                      ? null
                      : Boolean(+formData.ExcludeCriteria23),

        [CriteriaFields.ExcludeCriteria24]:
                    formData.ExcludeCriteria24 === null
                      ? null
                      : Boolean(+formData.ExcludeCriteria24),

        [CriteriaFields.CriteriaEvaluated]:
                    formData.CriteriaEvaluated === null
                      ? null
                      : Boolean(+formData.CriteriaEvaluated),

        [CriteriaFields.CriteriaAccepted]:
                    formData.CriteriaAccepted === null
                      ? null
                      : Boolean(+formData.CriteriaAccepted),

        [CriteriaFields.CriteriaAllowed]:
                    formData.CriteriaAllowed === null
                      ? null
                      : Boolean(+formData.CriteriaAllowed),

        [CriteriaFields.CriteriaYesNo]:
                    formData.CriteriaYesNo === null
                      ? null
                      : Boolean(+formData.CriteriaYesNo),

        [CriteriaFields.PhoneDateTime]:
                    formData.PhoneDate && formData.PhoneTime
                      ? `${formData.PhoneDate}T${formData.PhoneTime}`
                      : null,

        [CriteriaFields.PhoneYesNo]:
                    formData.PhoneYesNo === null
                      ? null
                      : Boolean(+formData.PhoneYesNo),

        [CriteriaFields.Informed]:
                    formData.Informed === null
                      ? null
                      : Boolean(+formData.Informed),

        [CriteriaFields.Hospitalized]:
                    formData.Hospitalized === null
                      ? null
                      : Boolean(+formData.Hospitalized),
      });
      navigate(`/documents/${protocolId}`);
    } catch (error) {
      console.log(error);
      const errorMessage = (
        <div className="error-message-container">
          <span className="font-span">
            Ошибка при создании документа.
          </span>
        </div>
      );
      message.error(errorMessage, 4);
    }
  };

  const handleEditDoc = async () => {
    try {
      await axiosCardRequest.post('/Criteria/Edit', {
        ...formData,
        [CriteriaFields.IncludeCriteria1]:
                    formData.IncludeCriteria1 === null
                      ? null
                      : Boolean(+formData.IncludeCriteria1),

        [CriteriaFields.IncludeCriteria2]:
                    formData.IncludeCriteria2 === null
                      ? null
                      : Boolean(+formData.IncludeCriteria2),

        [CriteriaFields.IncludeCriteria3]:
                    formData.IncludeCriteria3 === null
                      ? null
                      : Boolean(+formData.IncludeCriteria3),

        [CriteriaFields.IncludeCriteria4]:
                    formData.IncludeCriteria4 === null
                      ? null
                      : Boolean(+formData.IncludeCriteria4),

        [CriteriaFields.IncludeCriteria5]:
                    formData.IncludeCriteria5 === null
                      ? null
                      : Boolean(+formData.IncludeCriteria5),

        [CriteriaFields.IncludeCriteria6]:
                    formData.IncludeCriteria6 === null
                      ? null
                      : Boolean(+formData.IncludeCriteria6),

        [CriteriaFields.IncludeCriteria7]:
                    formData.IncludeCriteria7 === null
                      ? null
                      : Boolean(+formData.IncludeCriteria7),

        [CriteriaFields.IncludeCriteria8]:
                    formData.IncludeCriteria8 === null
                      ? null
                      : Boolean(+formData.IncludeCriteria8),

        [CriteriaFields.IncludeCriteria9]:
                    formData.IncludeCriteria9 === null
                      ? null
                      : Boolean(+formData.IncludeCriteria9),

        [CriteriaFields.IncludeCriteria10]:
                    formData.IncludeCriteria10 === null
                      ? null
                      : Boolean(+formData.IncludeCriteria10),

        [CriteriaFields.IncludeCriteria11]:
                    formData.IncludeCriteria11 === null
                      ? null
                      : Boolean(+formData.IncludeCriteria11),

        [CriteriaFields.IncludeCriteria12]:
                    formData.IncludeCriteria12 === null
                      ? null
                      : Boolean(+formData.IncludeCriteria12),

        [CriteriaFields.IncludeCriteria13]:
                    formData.IncludeCriteria13 === null
                      ? null
                      : Boolean(+formData.IncludeCriteria13),

        [CriteriaFields.IncludeCriteria14]:
                    formData.IncludeCriteria14 === null
                      ? null
                      : Boolean(+formData.IncludeCriteria14),

        [CriteriaFields.IncludeCriteria15]:
                    formData.IncludeCriteria15 === null
                      ? null
                      : Boolean(+formData.IncludeCriteria15),

        [CriteriaFields.ExcludeCriteria1]:
                    formData.ExcludeCriteria1 === null
                      ? null
                      : Boolean(+formData.ExcludeCriteria1),

        [CriteriaFields.ExcludeCriteria2]:
                    formData.ExcludeCriteria2 === null
                      ? null
                      : Boolean(+formData.ExcludeCriteria2),

        [CriteriaFields.ExcludeCriteria3]:
                    formData.ExcludeCriteria3 === null
                      ? null
                      : Boolean(+formData.ExcludeCriteria3),

        [CriteriaFields.ExcludeCriteria4]:
                    formData.ExcludeCriteria4 === null
                      ? null
                      : Boolean(+formData.ExcludeCriteria4),
        [CriteriaFields.ExcludeCriteria5]:
                    formData.ExcludeCriteria5 === null
                      ? null
                      : Boolean(+formData.ExcludeCriteria5),
        [CriteriaFields.ExcludeCriteria6]:
                    formData.ExcludeCriteria6 === null
                      ? null
                      : Boolean(+formData.ExcludeCriteria6),
        [CriteriaFields.ExcludeCriteria7]:
                    formData.ExcludeCriteria7 === null
                      ? null
                      : Boolean(+formData.ExcludeCriteria7),
        [CriteriaFields.ExcludeCriteria8]:
                    formData.ExcludeCriteria8 === null
                      ? null
                      : Boolean(+formData.ExcludeCriteria8),
        [CriteriaFields.ExcludeCriteria9]:
                    formData.ExcludeCriteria9 === null
                      ? null
                      : Boolean(+formData.ExcludeCriteria9),
        [CriteriaFields.ExcludeCriteria10]:
                    formData.ExcludeCriteria10 === null
                      ? null
                      : Boolean(+formData.ExcludeCriteria10),
        [CriteriaFields.ExcludeCriteria11]:
                    formData.ExcludeCriteria11 === null
                      ? null
                      : Boolean(+formData.ExcludeCriteria11),
        [CriteriaFields.ExcludeCriteria12]:
                    formData.ExcludeCriteria12 === null
                      ? null
                      : Boolean(+formData.ExcludeCriteria12),
        [CriteriaFields.ExcludeCriteria13]:
                    formData.ExcludeCriteria13 === null
                      ? null
                      : Boolean(+formData.ExcludeCriteria13),
        [CriteriaFields.ExcludeCriteria14]:
                    formData.ExcludeCriteria14 === null
                      ? null
                      : Boolean(+formData.ExcludeCriteria14),
        [CriteriaFields.ExcludeCriteria15]:
                    formData.ExcludeCriteria15 === null
                      ? null
                      : Boolean(+formData.ExcludeCriteria15),
        [CriteriaFields.ExcludeCriteria16]:
                    formData.ExcludeCriteria16 === null
                      ? null
                      : Boolean(+formData.ExcludeCriteria16),
        [CriteriaFields.ExcludeCriteria17]:
                    formData.ExcludeCriteria17 === null
                      ? null
                      : Boolean(+formData.ExcludeCriteria17),
        [CriteriaFields.ExcludeCriteria18]:
                    formData.ExcludeCriteria18 === null
                      ? null
                      : Boolean(+formData.ExcludeCriteria18),
        [CriteriaFields.ExcludeCriteria19]:
                    formData.ExcludeCriteria19 === null
                      ? null
                      : Boolean(+formData.ExcludeCriteria19),
        [CriteriaFields.ExcludeCriteria20]:
                    formData.ExcludeCriteria20 === null
                      ? null
                      : Boolean(+formData.ExcludeCriteria20),
        [CriteriaFields.ExcludeCriteria21]:
                    formData.ExcludeCriteria21 === null
                      ? null
                      : Boolean(+formData.ExcludeCriteria21),
        [CriteriaFields.ExcludeCriteria22]:
                    formData.ExcludeCriteria22 === null
                      ? null
                      : Boolean(+formData.ExcludeCriteria22),
        [CriteriaFields.ExcludeCriteria23]:
                    formData.ExcludeCriteria23 === null
                      ? null
                      : Boolean(+formData.ExcludeCriteria23),

        [CriteriaFields.ExcludeCriteria24]:
                    formData.ExcludeCriteria24 === null
                      ? null
                      : Boolean(+formData.ExcludeCriteria24),

        [CriteriaFields.CriteriaEvaluated]:
                    formData.CriteriaEvaluated === null
                      ? null
                      : Boolean(+formData.CriteriaEvaluated),

        [CriteriaFields.CriteriaAccepted]:
                    formData.CriteriaAccepted === null
                      ? null
                      : Boolean(+formData.CriteriaAccepted),

        [CriteriaFields.CriteriaAllowed]:
                    formData.CriteriaAllowed === null
                      ? null
                      : Boolean(+formData.CriteriaAllowed),

        [CriteriaFields.CriteriaYesNo]:
                    formData.CriteriaYesNo === null
                      ? null
                      : Boolean(+formData.CriteriaYesNo),

        [CriteriaFields.PhoneDateTime]:
                    formData.PhoneDate && formData.PhoneTime
                      ? `${formData.PhoneDate}T${formData.PhoneTime}`
                      : null,

        [CriteriaFields.PhoneYesNo]:
                    formData.PhoneYesNo === null
                      ? null
                      : Boolean(+formData.PhoneYesNo),

        [CriteriaFields.Informed]:
                    formData.Informed === null
                      ? null
                      : Boolean(+formData.Informed),

        [CriteriaFields.Hospitalized]:
                    formData.Hospitalized === null
                      ? null
                      : Boolean(+formData.Hospitalized),
        [CriteriaFields.CardId]: +id,
      });
      navigate(`/documents/${protocolId}`);
    } catch (error) {
      console.log(error);
      const errorMessage = (
        <div className="error-message-container">
          <span className="font-span">
            Ошибка при создании документа.
          </span>
        </div>
      );
      message.error(errorMessage, 4);
    }
  };

  const phoneItems: InputBlockItem[] = formData.PhoneYesNo === '1'
    ? [
      {
        inputTitle: 'Добровольцу осуществлен телефонный звонок',
        input: (
          <SelectInput
            options={yesNoOptions}
            selectValue={formData.PhoneYesNo}
            fieldName={CriteriaFields.PhoneYesNo}
            setFormData={setFormData}
          />
        ),
      },
      {
        inputTitle: 'Дата',
        input: (
          <DateInput
            inputValue={formData.PhoneDate}
            fieldName={CriteriaFields.PhoneDate}
            setFormData={setFormData}
          />
        ),
      },
      {
        inputTitle: 'Время',
        input: (
          <DefaultInput
            inputValue={formData.PhoneTime}
            fieldName={CriteriaFields.PhoneTime}
            setFormData={setFormData}
            type="time"
          />
        ),
      },
    ]
    : [
      {
        inputTitle: 'Добровольцу осуществлен телефонный звонок',
        input: (
          <SelectInput
            options={yesNoOptions}
            selectValue={formData.PhoneYesNo}
            fieldName={CriteriaFields.PhoneYesNo}
            setFormData={setFormData}
          />
        ),
      },
    ];

  return (
    <div className="layout">
      <Sidebar />
      <div className="document-data">
        <div className="document-data-block">
          <div className="document-data-block-info">
            <InputBlock title="Оценка критериев включения" />
            <SelectBlock
              title="1.	Мужчины и женщины в возрасте от 18 до 45 лет включительно"
              items={mensAndWomens(formData, setFormData)}
            />
            <SelectBlock
              title="2.	Наличие подписанного информационного листка добровольца с формой информированного согласия на участие в исследовании"
              items={informList(formData, setFormData)}
            />
            <SelectBlock
              title="3.	Индекс массы тела (ИМТ), рассчитанный по индексу Кетле, в пределах от 18,5 до 30 кг/м2 включительно"
              items={IMT(formData, setFormData)}
            />
            <SelectBlock
              title="4.	Верифицированный диагноз «здоров» по данным анамнеза и стандартных клинических, инструментальных и лабораторных методов обследования"
              items={verificationDiagnosis(formData, setFormData)}
            />
            <SelectBlock
              title="5.	Некурящие или бросившие курить не менее чем за 6 мес. до включения в исследование"
              items={IncludeCriteria5(formData, setFormData)}
            />
            <SelectBlock
              title="6.	Результаты рентгенологического или флюорографического исследования грудной клетки в пределах нормы, выполненного в течение 12 мес. до включения в исследование"
              items={IncludeCriteria6(formData, setFormData)}
            />
            <SelectBlock
              title="7.	Физикальный осмотр в пределах нормы на момент включения в исследование"
              items={IncludeCriteria7(formData, setFormData)}
            />
            <SelectBlock
              title="8.	ЭКГ в пределах нормы на скрининге, в том числе значения ЧСС, PQ-, QT-, QTc и QRS- интервалов, согласно справочным данным исследовательского центра"
              items={IncludeCriteria8(formData, setFormData)}
            />
            <SelectBlock
              title="9.	Результаты лабораторных анализов (клинический анализ крови, биохимический анализ крови, общий анализ мочи с микроскопией осадка, серологический анализ на ВИЧ, поверхностный антиген вируса гепатита B (HBsAg), антитела к вирусу гепатита C (anti-HCV), тест на сифилис) на скрининге в пределах нормальных значений, согласно справочным данным клинической лаборатории исследовательского центра"
              items={IncludeCriteria9(formData, setFormData)}
            />
            <SelectBlock
              title="10.	Отрицательный тест мочи на наркотические вещества и сильнодействующие лекарственные средства: амфетамин, марихуану, морфин, кокаин, барбитураты, бензодиазепины и метамфетамин"
              items={IncludeCriteria10(formData, setFormData)}
            />
            <SelectBlock
              title="11.	Отрицательный тест на содержание паров алкоголя в выдыхаемом воздухе"
              items={IncludeCriteria11(formData, setFormData)}
            />
            <SelectBlock
              title="12.	Отрицательный тест мочи на котинин"
              items={IncludeCriteria12(formData, setFormData)}
            />
            <SelectBlock
              title="13.	Для женщин: отрицательный тест мочи на беременность; в случае применения гормональных контрацептивов, они должны быть отменены не менее чем за 2 месяца до начала исследования"
              items={IncludeCriteria13(formData, setFormData)}
            />
            <SelectBlock
              title="14.	Согласие применять эффективные методы контрацепции на протяжении исследования и в течение 1 месяца после него"
              items={IncludeCriteria14(formData, setFormData)}
            />
            <SelectBlock
              title="15.	Доброволец способен понимать требования исследования, соблюдать все ограничения и требования по протоколу"
              items={IncludeCriteria15(formData, setFormData)}
            />

            <InputBlock title="Оценка критериев невключения" />
            <SelectBlock
              title="1.   Участие в клинических исследованиях менее чем за 90 дней до начала исследования"
              items={ExcludeCriteria1(formData, setFormData)}
            />
            <SelectBlock
              title="2.	Донорство крови или плазмы менее чем за 3 месяца до начала исследования (450 мл крови или плазмы и более)"
              items={ExcludeCriteria2(formData, setFormData)}
            />
            <SelectBlock
              title="3.	Гиперчувствительность к телмисартану или любому из вспомогательных веществ в составе исследуемых препаратов или непереносимость этих компонентов"
              items={ExcludeCriteria3(formData, setFormData)}
            />
            <SelectBlock
              title="4.	Отягощенный аллергологический анамнез"
              items={ExcludeCriteria4(formData, setFormData)}
            />
            <SelectBlock
              title="5.	Лекарственная непереносимость в анамнезе"
              items={ExcludeCriteria5(formData, setFormData)}
            />
            <SelectBlock
              title="6.	Хирургические вмешательства на желудочно-кишечном тракте в анамнезе (за исключением аппендэктомии, перенесенной более 1 года назад), а также любые другие перенесенные заболевания или операции, которые по мнению исследователя могут повлиять на абсорбцию, распределение или выведение препаратов исследования"
              items={ExcludeCriteria6(formData, setFormData)}
            />
            <SelectBlock
              title="7.	Острые инфекционные заболевания, завершившиеся менее чем за 4 недели до скрининга"
              items={ExcludeCriteria7(formData, setFormData)}
            />
            <SelectBlock
              title="8.	Острые или хронические заболевания сердечно-сосудистой, бронхолегочной, эндокринной, иммунной или нервной систем, заболевания желудочно-кишечного тракта, печени и желчевыводящих путей, почек и мочевыводящих путей, крови и лимфатической системы, психические заболевания в анамнезе"
              items={ExcludeCriteria8(formData, setFormData)}
            />
            <SelectBlock
              title="9.	Систолическое АД ниже 100 мм рт. ст. или выше 130 мм рт. ст.; диастолическое АД ниже 60 мм рт. ст. или выше 90 мм рт. ст.; ЧСС ниже 60 уд/мин или выше 90 уд/мин в покое; ЧД ниже 12 или выше 18 в минуту, температура тела ниже 36,0°С или выше 36,9°C"
              items={ExcludeCriteria9(formData, setFormData)}
            />
            <SelectBlock
              title="10.	 Отклонения результатов лабораторных тестов от нормы, включая положительный результат анализов на ВИЧ, сифилис, маркеры гепатитов В и С, исследования на COVID-19"
              items={ExcludeCriteria10(formData, setFormData)}
            />
            <SelectBlock
              title="11. 	Клинически значимые отклонения на ЭКГ"
              items={ExcludeCriteria11(formData, setFormData)}
            />
            <SelectBlock
              title="12.	 У женщин: беременность или период грудного вскармливания"
              items={ExcludeCriteria12(formData, setFormData)}
            />
            <SelectBlock
              title="13.	 Трудности забора крови (например, перенесенные заболевания вен, изменения в области установки кубитального катетера, плохая переносимость венепункции)"
              items={ExcludeCriteria13(formData, setFormData)}
            />
            <SelectBlock
              title="14.	 Трудности с проглатыванием капсул у добровольца"
              items={ExcludeCriteria14(formData, setFormData)}
            />
            <SelectBlock
              title="15.	 Применение любых рецептурных и безрецептурных препаратов, включая растительные препараты, БАД и витамины менее чем за 2 нед. до начала исследования"
              items={ExcludeCriteria15(formData, setFormData)}
            />
            <SelectBlock
              title="16.	 Применение инъекционных или пероральных гормональных контрацептивов, имплантатов любых других препаратов менее чем за 60 дней до начала исследования"
              items={ExcludeCriteria16(formData, setFormData)}
            />
            <SelectBlock
              title="17.	 Прием лекарственных препаратов, оказывающих выраженное влияние на гемодинамику, функцию печени и др. (барбитураты, омепразол, циметидин и т.д.) менее, чем за 2 месяца до начала исследования"
              items={ExcludeCriteria17(formData, setFormData)}
            />
            <SelectBlock
              title="18.	 Прием более 10 ед. алкоголя в неделю (1 ед. алкоголя эквивалентна ½ л пива, 200 мл сухого вина или 50 мл крепких спиртных напитков) или анамнестические сведения об алкоголизме, наркомании, злоупотреблении лекарственными препаратами, кофеин-содержащими продуктами"
              items={ExcludeCriteria18(formData, setFormData)}
            />
            <SelectBlock
              title="19.	 Применение никотин-содержащих препаратов менее, чем за 2 месяца до начала исследования"
              items={ExcludeCriteria19(formData, setFormData)}
            />
            <SelectBlock
              title="20.	 Особая диета (например, вегетарианская, веганская, с ограничением употребления поваренной соли) или образ жизни (работа в ночное время, экстремальные физические нагрузки)"
              items={ExcludeCriteria20(formData, setFormData)}
            />
            <SelectBlock
              title="21.	 Употребление грейпфрутов или других цитрусовых менее чем за 7 дней до приема исследуемых препаратов"
              items={ExcludeCriteria21(formData, setFormData)}
            />
            <SelectBlock
              title="22.	Употребление алкоголя и ксантинсодержащих продуктов (чай, кофе, кола, шоколад, энергетические напитки) в течение 48 часов до приема исследуемых препаратов"
              items={ExcludeCriteria22(formData, setFormData)}
            />
            <SelectBlock
              title="23.	Дегидратация вследствие рвоты, диареи или другой причины в течение 24 ч до начала исследования"
              items={ExcludeCriteria23(formData, setFormData)}
            />
            <SelectBlock
              title="24.	Другая причина, которая, по мнению исследователя, будет препятствовать участию добровольца в исследовании"
              items={ExcludeCriteria24(formData, setFormData)}
            />

            <InputBlock
              title="Комментарии"
              items={Comments(formData, setFormData)}
            />
            <SelectBlock
              title="Доброволец оценен в соответствии с критериями включения/исключения"
              items={CriteriaEvaluated(formData, setFormData)}
            />
            <SelectBlock
              title="Предварительно соответствует/не соответствует"
              items={CriteriaAccepted(formData, setFormData)}
            />
            <SelectBlock
              title="Всем критериям включения в исследование на скрининге, критериев исключения не выявлено/выявлено"
              items={CriteriaAllowed(formData, setFormData)}
            />
            <SelectBlock
              title="Предварительно соответствует/не соответствует всем критериям включения в исследование на скрининге, критериев исключения не выявлено/выявлено"
              items={CriteriaYesNo(formData, setFormData)}
            />
            <InputBlock title="" items={phoneItems} />
            <SelectBlock
              title="Доброволец проинформирован о результатах предварительного обследования"
              items={Informed(formData, setFormData)}
            />
            <SelectBlock
              title="Добровольцу назначена и сообщена дата госпитализации"
              items={Hospitalized(formData, setFormData)}
            />
            <InputBlock
              title="Комментарии к визиту"
              items={VisitComment(formData, setFormData)}
            />
            <InputBlock
              title="Лечащий врач"
              items={Doctor(formData, setFormData)}
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

export default CriteriaDocument;
