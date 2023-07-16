/**
 * set data to local storage
 */

const insertData = (key, data) => {
  let lsdata = [];
  if (localStorage.getItem(key)) {
    lsdata = JSON.parse(localStorage.getItem(key));
  }

  lsdata.push(data);

  localStorage.setItem(key, JSON.stringify(lsdata));
};

/**
 * Insert New data
 */

const getData = (key) => {
  const fetchData = localStorage.getItem(key);
  return JSON.parse(fetchData);
};
