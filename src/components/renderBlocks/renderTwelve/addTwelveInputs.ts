export const addDiseaseToFormData = (formData, formIndex) => {
  const newFormData = [...formData];
  const formDataItem = newFormData[formIndex];

  if (typeof formDataItem === 'object') {
    if (!formDataItem.deseases) {
      formDataItem.deseases = [
        {
          date: null,
          endDate: null,
          diagnosis: null,
          code: null,
          doctor: null,
        },
      ];
    } else {
      formDataItem.deseases.push({
        date: null,
        endDate: null,
        diagnosis: null,
        code: null,
        doctor: null,
      });
    }
  }

  return newFormData;
};
