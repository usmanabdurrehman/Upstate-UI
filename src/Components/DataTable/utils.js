export let createCSV = (data) => {
  let csv = Object.keys(data[0]).join(",") + "\n";
  data.forEach((row) => {
    Object.values(row).forEach((value) => {
      csv += `"${value}",`;
    });
    csv += "\n";
  });
  const blob = new Blob([csv], { type: "text/csv" });
  return blob;
};
