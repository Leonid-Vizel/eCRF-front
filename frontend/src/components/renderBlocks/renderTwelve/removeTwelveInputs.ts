export const removeDiseaseFromFormData = (formData, formIndex, index) => {
    const newFormData = [...formData];
    newFormData[formIndex] = {
        ...newFormData[formIndex],
        deseases: newFormData[formIndex].deseases.filter((item, i) => i !== index),
    };
    return newFormData;
};