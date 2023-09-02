import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { message } from 'antd';
import Sidebar from '../../../components/document/sidebar/Sidebar';
import SelectBlock from '../../../components/document/selectBlock/SelectBlock';
import InputBlock from '../../../components/document/inputBlock/InputBlock';
import { Anamnesis } from '../../../utils/types/documentType';
import {
  AllergyType,
  AnamnesisFields,
} from '../../../utils/types/enums/documentEnums';
import { anamnesis } from './blockInputs/Anamnesis';
import { medicalAnamnesis } from './blockInputs/MedicalAnamnesis';
import { pharmacologicalAnamnesis } from './blockInputs/PharmacologicalAnamnesis';
import DefaultInput from '../../../components/document/inputs/defaultInput/DefaultInput';
import SelectInput from '../../../components/document/inputs/selectInput/SelectInput';
import { NotNumberPattern, NumberPattern } from '../../../utils/consts';
import { allergyType } from './blockInputs/AllergyType';
import { heredity } from './blockInputs/Heredity';
import { pastIllnesses } from './blockInputs/PastIllnesses';
import { accompanyingIllnesses } from './blockInputs/AccompanyingIllnesses';
import { surgicalInterventions } from './blockInputs/SurgicalInterventions';
import { yesNoOptions } from './blockInputs/data';
import { alcohol } from './blockInputs/Alcohol';
import { alcoholInfos } from './blockInputs/AlcoholInfos';
import { narcotics } from './blockInputs/Narcotics';
import { narcoticsInfos } from './blockInputs/NarcoticsInfos';
import { addictionAbuse } from './blockInputs/AddictionAbuse';
import { pastDays } from './blockInputs/PastDays';
import { axiosCardRequest } from '../../../utils/request/NewAxiosRequest';

const AnamnesisDocument = () => {
  const { pathname } = useLocation();
  const pathParts = pathname.split('/')[3];
  const { id, protocolId } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState<Anamnesis>({
    [AnamnesisFields.Anamnesis]: null,
    [AnamnesisFields.MedicalAnamnesis]: null,
    [AnamnesisFields.PharmacologicalAnamnesis]: null,
    [AnamnesisFields.FoodAllergies]: null,
    [AnamnesisFields.FoodAllergiesString]: null,
    [AnamnesisFields.DrugAllergies]: null,
    [AnamnesisFields.DrugAllergiesString]: null,
    [AnamnesisFields.AllergyType]: null,
    [AnamnesisFields.Heredity]: null,
    [AnamnesisFields.PastIllnesses]: null,
    [AnamnesisFields.AccompanyingIllnesses]: null,
    [AnamnesisFields.SurgicalInterventions]: null,
    [AnamnesisFields.TobaccoSmoking]: null,
    [AnamnesisFields.TobaccoDailyPack]: null,
    [AnamnesisFields.Alcohol]: null,
    [AnamnesisFields.AlcoholAgeRange]: null,
    [AnamnesisFields.AlcoholLastDate]: null,
    [AnamnesisFields.AlcoholOnceAmount]: null,
    [AnamnesisFields.AlcoholWeekAmount]: null,
    [AnamnesisFields.Narcotics]: null,
    [AnamnesisFields.NarcoticsLastDate]: null,
    [AnamnesisFields.NarcoticsCurrent]: null,
    [AnamnesisFields.AddictionAbuse]: null,
    [AnamnesisFields.Past90Days]: null,
    [AnamnesisFields.CardId]: +id,
  });

  useEffect(() => {
    if (pathParts === 'edit') {
      const getCreatedData = async () => {
        const { data } = await axiosCardRequest.get<Anamnesis>(
          `/Anamnesis/Index/${id}`,
        );

        setFormData({
          ...data,
          // AllergyType: +data.AllergyType as AllergyType,
          // AlcoholOnceAmount: +data.AlcoholOnceAmount,
          // AlcoholWeekAmount: +data.AlcoholWeekAmount,
          // TobaccoDailyPack: +data.TobaccoDailyPack,
          // DrugAllergies: data.DrugAllergies ? '1' : '0',
          // FoodAllergies: data.FoodAllergies ? '1' : '0',
          // Alcohol: data.Alcohol ? '1' : '0',
          // Narcotics: data.Narcotics ? '1' : '0',
          // TobaccoSmoking: data.TobaccoSmoking ? '1' : '0',
          // AddictionAbuse: data.AddictionAbuse ? '1' : '0',
          // Past90Days: data.Past90Days ? '1' : '0',
        });
      };

      getCreatedData();
    }
  }, []);

  const handleCreateDoc = async () => {
    try {
      await axiosCardRequest.post('/Anamnesis/Create', {
        ...formData,
        AllergyType:
                    formData.AllergyType === null
                      ? null
                      : +formData.AllergyType,
        AlcoholOnceAmount:
                    formData.AlcoholOnceAmount === null
                      ? null
                      : +formData.AlcoholOnceAmount,
        AlcoholWeekAmount:
                    formData.AlcoholWeekAmount === null
                      ? null
                      : +formData.AlcoholWeekAmount,
        TobaccoDailyPack:
                    formData.TobaccoDailyPack === null
                      ? null
                      : +formData.TobaccoDailyPack,
        DrugAllergies:
                    formData.DrugAllergies === null
                      ? null
                      : Boolean(+formData.DrugAllergies),
        FoodAllergies:
                    formData.FoodAllergies === null
                      ? null
                      : Boolean(+formData.FoodAllergies),
        Alcohol:
                    formData.Alcohol === null
                      ? null
                      : Boolean(+formData.Alcohol),
        Narcotics:
                    formData.Narcotics === null
                      ? null
                      : Boolean(+formData.Narcotics),
        TobaccoSmoking:
                    formData.TobaccoSmoking === null
                      ? null
                      : Boolean(+formData.TobaccoSmoking),
        AddictionAbuse:
                    formData.AddictionAbuse === null
                      ? null
                      : Boolean(+formData.AddictionAbuse),
        Past90Days:
                    formData.Past90Days === null
                      ? null
                      : Boolean(+formData.Past90Days),
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
      await axiosCardRequest.post('/Anamnesis/Edit', {
        ...formData,
        AllergyType: +formData.AllergyType,
        AlcoholOnceAmount: +formData.AlcoholOnceAmount,
        AlcoholWeekAmount: +formData.AlcoholWeekAmount,
        TobaccoDailyPack: +formData.TobaccoDailyPack,
        DrugAllergies: Boolean(+formData.DrugAllergies),
        FoodAllergies: Boolean(+formData.FoodAllergies),
        Alcohol: Boolean(+formData.Alcohol),
        Narcotics: Boolean(+formData.Narcotics),
        TobaccoSmoking: Boolean(+formData.TobaccoSmoking),
        AddictionAbuse: Boolean(+formData.AddictionAbuse),
        Past90Days: Boolean(+formData.Past90Days),
        CardId: +id,
      });
      navigate(`/documents/${protocolId}`);
    } catch (error) {
      console.log(error);
      const errorMessage = (
        <div className="error-message-container">
          <span className="font-span">
            Ошибка при редактировании документа.
          </span>
        </div>
      );
      message.error(errorMessage, 4);
    }
  };

  const drugItems = formData.DrugAllergies === '1'
    ? [
      {
        inputTitle: 'Непереносимость лекарственных препаратов',
        input: (
          <SelectInput
            fieldName={AnamnesisFields.DrugAllergies}
            options={yesNoOptions}
            selectValue={formData.DrugAllergies}
            setFormData={setFormData}
          />
        ),
      },
      {
        inputTitle: 'Напишите',
        input: (
          <DefaultInput
            exclusionPattern={NumberPattern}
            fieldName={AnamnesisFields.DrugAllergiesString}
            inputValue={formData.DrugAllergiesString}
            setFormData={setFormData}
          />
        ),
      },
    ]
    : [
      {
        inputTitle: 'Непереносимость лекарственных препаратов',
        input: (
          <SelectInput
            fieldName={AnamnesisFields.DrugAllergies}
            options={yesNoOptions}
            selectValue={formData.DrugAllergies}
            setFormData={setFormData}
          />
        ),
      },
    ];

  const foodItems = formData.FoodAllergies === '1'
    ? [
      {
        inputTitle: 'Непереносимость продуктов питания',
        input: (
          <SelectInput
            fieldName={AnamnesisFields.FoodAllergies}
            options={yesNoOptions}
            selectValue={formData.FoodAllergies}
            setFormData={setFormData}
          />
        ),
      },
      {
        inputTitle: 'Напишите',
        input: (
          <DefaultInput
            exclusionPattern={NumberPattern}
            fieldName={AnamnesisFields.FoodAllergiesString}
            inputValue={formData.FoodAllergiesString}
            setFormData={setFormData}
          />
        ),
      },
    ]
    : [
      {
        inputTitle: 'Непереносимость продуктов питания',
        input: (
          <SelectInput
            fieldName={AnamnesisFields.FoodAllergies}
            options={yesNoOptions}
            selectValue={formData.FoodAllergies}
            setFormData={setFormData}
          />
        ),
      },
    ];

  const tobaccoSmokingItems = formData.TobaccoSmoking === '1'
    ? [
      {
        inputTitle: 'Табакокурение',
        input: (
          <SelectInput
            fieldName={AnamnesisFields.TobaccoSmoking}
            options={yesNoOptions}
            selectValue={formData.TobaccoSmoking}
            setFormData={setFormData}
          />
        ),
      },
      {
        inputTitle: 'Количество пачек в день ',
        input: (
          <DefaultInput
            exclusionPattern={NotNumberPattern}
            fieldName={AnamnesisFields.TobaccoDailyPack}
            inputValue={formData.TobaccoDailyPack}
            setFormData={setFormData}
          />
        ),
      },
    ]
    : [
      {
        inputTitle: 'Табакокурение',
        input: (
          <SelectInput
            fieldName={AnamnesisFields.TobaccoSmoking}
            options={yesNoOptions}
            selectValue={formData.TobaccoSmoking}
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
            <InputBlock
              title="Анамнез жизни"
              items={anamnesis(setFormData, formData)}
            />
            <InputBlock
              title="Медицинский анамнез (указать все имеющиеся заболевания и представляющие интерес состояния) "
              items={medicalAnamnesis(setFormData, formData)}
            />
            <InputBlock
              title="Фармакологический анамнез  (указать все принимаемые препараты и препараты, принимаемые за последние 2 месяца)"
              items={pharmacologicalAnamnesis(
                setFormData,
                formData,
              )}
            />
            <InputBlock
              title="Аллергологический анамнез"
              items={foodItems}
            />
            <InputBlock
              title="Аллергологический анамнез"
              items={drugItems}
            />
            <InputBlock
              title="Аллергологический анамнез"
              items={allergyType(setFormData, formData)}
            />
            <InputBlock
              title="Наследственность"
              items={heredity(setFormData, formData)}
            />
            <InputBlock
              title="Перенесенные заболевания"
              items={pastIllnesses(setFormData, formData)}
            />
            <InputBlock
              title="Cопутствующие заболевания"
              items={accompanyingIllnesses(setFormData, formData)}
            />
            <InputBlock
              title="Оперативные вмешательства"
              items={surgicalInterventions(setFormData, formData)}
            />
            <InputBlock title="" items={tobaccoSmokingItems} />
            <InputBlock
              title=""
              items={alcohol(setFormData, formData)}
            />
            {formData.Alcohol === '1' && (
            <InputBlock
              title=""
              items={alcoholInfos(setFormData, formData)}
            />
            )}
            <InputBlock
              title=""
              items={narcotics(setFormData, formData)}
            />
            {formData.Narcotics === '1' && (
            <InputBlock
              title=""
              items={narcoticsInfos(setFormData, formData)}
            />
            )}

            <SelectBlock
              title="Наличие в медицинском анамнезе злоупотребления наркотическими веществами, алкоголем, амфетамином и его производными либо кокаиновой зависимости"
              items={addictionAbuse(setFormData, formData)}
            />
            <SelectBlock
              title="Участие в других клинических исследованиях в последние 90 дней?"
              items={pastDays(setFormData, formData)}
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

export default AnamnesisDocument;
