export const updateDiseaseFieldInFormData = (formData, formIndex, index, field, value) => {
    const newFormData = [...formData];
    newFormData[formIndex] = {
        ...newFormData[formIndex],
        deseases: newFormData[formIndex].deseases.map((item, i) =>
            i === index
                ? {
                    ...item,
                    [field]: value,
                }
                : item
        ),
    };

    if (field === 'date') {
        const currentEndDate = newFormData[formIndex].deseases[index].endDate;
        if (currentEndDate && value > currentEndDate) {
            newFormData[formIndex].deseases[index] = {
                ...newFormData[formIndex].deseases[index],
                endDate: value,
            };
        }
    } else if (field === 'endDate') {
        const currentStartDate = newFormData[formIndex].deseases[index].date;
        if (currentStartDate && value < currentStartDate) {
            newFormData[formIndex].deseases[index] = {
                ...newFormData[formIndex].deseases[index],
                date: value,
            };
        }
    }

    return newFormData;
};