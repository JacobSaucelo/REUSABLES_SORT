import { DATA_TEMPLATE, DATA_NUMBERS, DATA_STRING } from "./data.js";

//?             ARRAY OF OBJECTS
const REUSABLES_QUICKSORT_OBJECT = function (PARAM_CONTAINER, PARAM_SORT_BY) {
  if (PARAM_CONTAINER.length <= 1) {
    return PARAM_CONTAINER;
  }

  let CONFIG_PIVOT = PARAM_CONTAINER[0];
  let LEFT_CONTAINER = [];
  let RIGHT_CONTAINER = [];

  for (let i = 1; i < PARAM_CONTAINER.length; i++) {
    if (PARAM_CONTAINER[i][PARAM_SORT_BY] < CONFIG_PIVOT[PARAM_SORT_BY]) {
      LEFT_CONTAINER.push(PARAM_CONTAINER[i]);
    } else {
      RIGHT_CONTAINER.push(PARAM_CONTAINER[i]);
    }
  }

  return [
    ...REUSABLES_QUICKSORT_OBJECT(LEFT_CONTAINER, PARAM_SORT_BY),
    CONFIG_PIVOT,
    ...REUSABLES_QUICKSORT_OBJECT(RIGHT_CONTAINER, PARAM_SORT_BY),
  ];
};

//?             ARRAY OF NUMBERS / STRING
const REUSABLES_QUICKSORT = function (PARAM_CONTAINER) {
  if (PARAM_CONTAINER.length <= 1) {
    return PARAM_CONTAINER;
  }

  let CONFIG_PIVOT = PARAM_CONTAINER[0];
  let LEFT_CONTAINER = [];
  let RIGHT_CONTAINER = [];

  for (let i = 1; i < PARAM_CONTAINER.length; i++) {
    if (PARAM_CONTAINER[i] < CONFIG_PIVOT) {
      LEFT_CONTAINER.push(PARAM_CONTAINER[i]);
    } else {
      RIGHT_CONTAINER.push(PARAM_CONTAINER[i]);
    }
  }

  return [
    ...REUSABLES_QUICKSORT(LEFT_CONTAINER),
    CONFIG_PIVOT,
    ...REUSABLES_QUICKSORT(RIGHT_CONTAINER),
  ];
};

const result = REUSABLES_QUICKSORT_OBJECT(DATA_TEMPLATE, "first_name");
const result2 = REUSABLES_QUICKSORT(DATA_NUMBERS);
const result3 = REUSABLES_QUICKSORT(DATA_STRING);
// console.log(result);
// result3.map((RESULT_ITEM) => console.log(RESULT_ITEM));
result.map((RESULT_ITEM) => console.log(RESULT_ITEM.first_name));
