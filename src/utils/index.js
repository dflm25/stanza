import moment from 'moment';

export const parseInfoAndGroup = (data) => {
  const list = {};

  for (let i = 0; i < data.length; i++) {
    const mth = moment(data[i].when).format('MMMM YYYY');
    if (!list[mth]) {
      list[mth] = [];
    }

    list[mth].push({
      name: data[i].name,
      date: data[i].when,
      image: data[i].background,
    });
  }

  return list;
};

export const filterData = (data, param) => {
  const filtered = data.filter((item) => item.name.includes(param.query));
  return parseInfoAndGroup(filtered);
};
