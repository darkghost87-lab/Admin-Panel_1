document.addEventListener('DOMContentLoaded', () => {
    displayChart();
});

function displayChart() {
    // first
    const ctxPie = document.getElementById('donatChart').getContext('2d');
    new Chart(ctxPie, {
        type: 'line',
        data: {
            labels: ['پنج شنبه', 'چهار شنبه', 'سه شنبه', 'دوشنبه', 'یکشنبه', 'شنبه'],
            datasets: [{
                label: 'فروش (میلیون تومان)',
                data: [12, 19, 8, 15, 10, 14],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // second
    const ctxLiner = document.getElementById('linerChart').getContext('2d');

    new Chart(ctxLiner, {
        type: 'bar',
        data: {
            labels: ['کارت گرافیک', 'مادربرد', 'رم', 'SSD', 'پردازنده'],
            datasets: [{
                label: 'تعداد فروش',
                data: [42, 38, 35, 30, 25],
                backgroundColor: [
                    '#4F46E5', '#EF4444', '#10B981', '#F59E0B', '#8B5CF6'
                ],
                borderRadius: 5
            }]
        },
        options: {
            indexAxis: 'y',  // افقی کردن نمودار
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    grid: {
                        display: false
                    }
                },
                y: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });


    // چارت اول: رشد کاربران
    const lineChartUsers = document.getElementById('lineChartUsers').getContext('2d');
    new Chart(lineChartUsers, {
        type: 'line',
        data: {
            labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر'],
            datasets: [{
                label: 'کاربران جدید',
                data: [30, 42, 40, 55],
                borderColor: '#4F46E5',
                backgroundColor: 'rgba(79, 70, 229, 0.1)',
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            }
        }
    });

    // چارت دوم: نقش‌های کاربران
    const doughnutChartUsers = document.getElementById('doughnutChartUsers').getContext('2d');
    new Chart(doughnutChartUsers, {
        type: 'doughnut',
        data: {
            labels: ['مدیران', 'کارمندان', 'کاربران عادی', 'VIP'],
            datasets: [{
                data: [2, 10, 16, 8],
                backgroundColor: ['#8B5CF6', '#3B82F6', '#10B981', '#F59E0B']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 15,
                        usePointStyle: true
                    }
                }
            }
        }
    });

    const storeChart = document.getElementById('storeChart').getContext('2d');
    new Chart(storeChart, {
        type: 'bar',
        data: {
            labels: ['کارت گرافیک', 'مادربرد', 'رم', 'SSD', 'پردازنده', 'کیس', 'پاور'],
            datasets: [{
                label: 'تعداد موجودی',
                data: [42, 38, 15, 30, 8, 45, 12],
                backgroundColor: [
                    '#10B981', // سبز (کارت گرافیک)
                    '#10B981', // سبز (مادربرد)
                    '#F59E0B', // زرد (رم)
                    '#10B981', // سبز (SSD)
                    '#EF4444', // قرمز (پردازنده - کم!)
                    '#10B981', // سبز (کیس)
                    '#F59E0B'  // زرد (پاور)
                ]
            }]
        },
        options: {
            indexAxis: 'y',  // افقی کردن نمودار
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    grid: {
                        display: false
                    }
                },
                y: {
                    grid: {
                        display: false
                    }
                }
            }
        },
        animation: {
            duration: 1500,
            easing: 'easeInOutCubic'
        }
    });

    const bestSellerChart = document.getElementById('bestSellerChart').getContext('2d');
    new Chart(bestSellerChart, {
        type: "bar",
        data: {
            labels: ['RTX 4060', 'RTX 4070', 'Ryzen 7', 'MAG B760', 'SSD 1TB'],
            datasets: [{
                label: 'تعداد فروش',
                data: [42, 35, 28, 22, 18],
                backgroundColor: [
                    '#4F46E5', '#6366F1', '#8B5CF6', '#A78BFA', '#C4B5FD'
                ],
                borderRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            }
        },
        animation: {
            duration: 1500,
            easing: 'easeInOutCubic'
        }
    });

    const weekOrderNum = document.getElementById('weekOrderNum').getContext('2d');
    new Chart(weekOrderNum, {
        type: 'line',
        data: {
            labels: ['شنبه', 'یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنجشنبه'],
            datasets: [{
                label: 'تعداد سفارشات',
                data: [28, 35, 42, 55, 48, 30, 10],
                borderColor: '#4F46E5',
                backgroundColor: 'rgba(79, 70, 229, 0.1)',
                fill: true,
                tension: 0.4
            },
            {
                label: 'لغو شده',
                data: [2, 5, 4, 2, 4, 6, 2],
                borderColor: '#EF4444',
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                borderDash: [5, 5] // خط چین برای تشخیص راحت‌تر
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            }
        }
    });

    const stateOrder = document.getElementById('stateOrder').getContext('2d');
    new Chart(stateOrder, {
        type: "doughnut",
        data: {
            labels: ['در انتظار تأیید', 'در حال پردازش', 'ارسال شده', 'تحویل شده'],
            datasets: [{
                data: [55, 42, 50, 100],
                backgroundColor: ['#F59E0B', '#3B82F6', '#8B5CF6', '#10B981']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 15,
                        usePointStyle: true
                    }
                }
            }
        }
    });
}