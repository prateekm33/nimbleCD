export function sortBy(label, arr) {
  switch (label.toLowerCase()) {
    case 'location':
    case 'applicant':
      return sortStrings(arr, label.toLowerCase());

    case 'status':
      return sortByStatus(arr);

    case 'application date':
      return sortByDate(arr);

    default: return arr;
  } 
}

function sortStrings(arr, label) {
  // todo ...
}


let lastSortDate = true;
function sortByDate(arr) {
  const temp = arr.sort((a,b) => {
    return lastSortDate ? 
      new Date(a.applicationDate).getTime() - new Date(b.applicationDate).getTime() : 
      new Date(b.applicationDate).getTime() - new Date(a.applicationDate).getTime();
  });

  lastSortDate = !lastSortDate;
  return temp;
}