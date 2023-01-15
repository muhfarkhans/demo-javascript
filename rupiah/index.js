const dataMoney = [100000, 200000, 300000, 400000];

for (let index = 0; index < dataMoney.length; index = index + 1) {
  const money = dataMoney[index];
  const newMoneyIDR = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(money);

  console.log(`${newMoneyIDR} format rupiah dari ${money}`);
}
