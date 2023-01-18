const dataMoneyItems = [100000, 200000, 300000, 400000];

for (let index = 0; index < dataMoneyItems.length; index = index + 1) {
  const moneyItem = dataMoneyItems[index];

  const newMoneyItemIDR = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(moneyItem);

  console.log(`${newMoneyItemIDR} is formatted in Rupiah from ${moneyItem}`);
}
