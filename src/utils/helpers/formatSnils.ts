export function formatSnils(value: string) {
  // const groups = value.match(/^(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})$/);
  // if (groups) {
  //     return [groups[1], groups[2], groups[3], groups[4]]
  //         .filter(Boolean)
  //         .join('-');
  // }
  // return '';

  const template = '___-___-___-__';
  let result = '';
  let valueIndex = 0;

  for (let i = 0; i < template.length; i++) {
    if (template[i] === '_') {
      result += value[valueIndex] || '_';
      valueIndex++;
    } else {
      result += template[i];
    }
  }

  return result;
}
