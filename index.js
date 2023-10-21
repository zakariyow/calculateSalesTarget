  function calculateSalesTarget(monthlyTarget, workingDays) {
    const dailyTargetSales = monthlyTarget / workingDays;
  
    return dailyTargetSales;
  }
  
  function calculateTotalTargetInRange(startDate, endDate, dailyTargetSales) {
     
    const oneDay = 24 * 60 * 60 * 1000;  
    const start = new Date(startDate);
    const end = new Date(endDate);
    const totalDays = Math.floor((end - start) / oneDay) + 1;
  
   
    const totalTargetInRange = dailyTargetSales * totalDays;
    return totalTargetInRange;
  }
  
  
  const monthlyTarget = 435;
  const workingDays = 6;
  const dailyTargetSales = calculateSalesTarget(monthlyTarget, workingDays);
  
  
  const startDate = '2023-01-01';
  const endDate = '2023-02-02';
  
  
  const totalTargetInRange = calculateTotalTargetInRange(startDate, endDate, dailyTargetSales);
  console.log('Daily target sales:', dailyTargetSales);
  console.log('Total target sales within the date range:', totalTargetInRange);