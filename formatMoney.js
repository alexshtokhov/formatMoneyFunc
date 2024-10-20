const formatMoney = (val) => {
  const cleanedValue = typeof val === 'string' ? val.replace(/[^0-9.-]+/g, '') : val;
  const numberValue = parseFloat(cleanedValue);

  if (isNaN(numberValue)) {
    return val;
  }
  if (numberValue >= 1000000) {
    return (numberValue / 1000000).toFixed(1).replace('.0', '') + 'M';
  } else if (numberValue >= 1000) {
    return (numberValue / 1000).toFixed(1).replace('.0', '') + 'K';
  }

  const formattedValue = numberValue.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return formattedValue;
}
export default formatMoney;