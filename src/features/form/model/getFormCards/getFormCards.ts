import { AppDispatch } from 'app/providers/StoreProvider';
import { FormCardsItem, FormSchemaItem } from 'features/form/types/types';
import { setFormData } from 'features/outpatientCard';

export const getFormCards = ({
  data,
  formCards,
  cardId,
  dispatch,
  formEntityName,
}: {
  data: FormSchemaItem[];
  formCards: FormCardsItem[];
  cardId: string;
  dispatch: AppDispatch;
  formEntityName: string
}) => {
  const cards = data.map((item, index) => {
    item.value.forEach((value, valueIndex) => {
      dispatch(
        setFormData({
          formEntityName,
          entityName: cardId,
          data: { [formCards[index].fields[valueIndex].name]: value },
        }),
      );
    });

    const card = {
      id: cardId,
      key: formCards[index].name,
      title: item.label,
      fields: formCards[index].fields,
    };
    return card;
  });
  return cards;
};
