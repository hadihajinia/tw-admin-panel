const labels = [
    'فروردین',
    'اردیبهشت',
    'خرداد',
    'تیر',
    'مرداد',
    'شهریور',
    'مهر',
    'آبان',
    'آذر',
    'دی',
    'بهمن',
    'اسفند',
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'نمودار کاربران',
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(155, 200, 90)'
      ],
    //   borderColor: 'rgb(255, 99, 132)',
      data: [3, 10, 5, 2, 20, 30, 45, 50, 15, 25, 35, 40],
    }]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {
        plugins: {
            legend: {
                labels: {
                    font: {
                        size: 14,
                        family : 'Vazirmatn FD'
                    }
                }
            },
            scales: {
                y: {
                  beginAtZero: true
                }
              }
        }
    }
  };


 
Chart.defaults.font.family="Vazirmatn FD";
  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );