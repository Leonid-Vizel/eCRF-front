import Textarea from '../../../../components/document/inputs/textarea/Textarea';
import { Anamnesis } from '../../../../utils/types/documentType';
import { AnamnesisFields } from '../../../../utils/types/enums/documentEnums';
import { InputBlockItem } from '../../../../utils/types/shared';

export const anamnesis = (
    setFormData,
    formData: Anamnesis
): InputBlockItem[] => [
    {
        inputTitle: '',
        input: (
            <Textarea
                fieldName={AnamnesisFields.Anamnesis}
                inputValue={formData.Anamnesis}
                setFormData={setFormData}
                width='600px'
            />
        ),
    },
];
