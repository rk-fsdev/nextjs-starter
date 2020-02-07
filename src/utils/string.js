const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const orgNrStyle = str => {
  return str.replace(/(\d{3})/g, '$1 ').replace(/(^\s+|\s+$)/, '');
};

export const mobileStyle = str => {
  return str.replace(/(\d{2})/g, '$1 ').replace(/(^\s+|\s+$)/, '');
};

export const bankAccountNrStyle = str => {
  return `${str.slice(0, 4)} ${str.slice(4, 6)} ${str.slice(6, 11)}`;
};

export const generateDDMMYY = createdAt => new Date(createdAt).toDateString();
