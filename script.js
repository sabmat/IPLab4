// Завдання 1
function showCurrentDate() {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('uk-UA', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const dayOfWeek = currentDate.toLocaleDateString('uk-UA', { weekday: 'long' });
    const time = currentDate.toLocaleTimeString('uk-UA');
    const output = `Дата: ${formattedDate}<br>День тижня: ${dayOfWeek}<br>Час: ${time}`;

    document.getElementById('currentDateOutput').innerHTML = output;
}

// Завдання 2
function getDayInfo() {
    const currentDate = new Date();
    const dayNumber = currentDate.getDay() === 0 ? 7 : currentDate.getDay();
    const dayName = currentDate.toLocaleDateString('uk-UA', { weekday: 'long' });

    const formattedOutput = `
        <p>Номер дня тижня: ${dayNumber}</p>
        <p>Назва дня тижня: ${dayName}</p>
    `;

    document.getElementById('dayInfoOutput').innerHTML = formattedOutput;
}

// Завдання 3
function findDate() {
    const daysAgo = parseInt(document.getElementById('daysAgoInput').value);
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - daysAgo);
    const formattedDate = currentDate.toLocaleDateString('uk-UA', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const output = `Знайдена дата: ${formattedDate}`;
    document.getElementById('foundDateOutput').innerHTML = output;
}

// Завдання 4
function getLastDayOfMonth() {
    const year = parseInt(document.getElementById('yearInput').value);
    const month = parseInt(document.getElementById('monthInput').value);
    const lastDay = new Date(year, month, 0).getDate();
    const output = `Останній день місяця: ${lastDay}`;
    document.getElementById('lastDayOfMonthOutput').innerHTML = output;
}

// // Завдання 5
function getSecondsInfo() {
    const now = new Date();
    const startOfDay = new Date(now);
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date(startOfDay);
    endOfDay.setDate(endOfDay.getDate() + 1);
    const secondsUntilStartOfDay = Math.floor((startOfDay - now) / 1000);
    const secondsUntilEndOfDay = Math.floor((endOfDay - now) / 1000);

    const output = `Секунд від початку дня: ${secondsUntilStartOfDay}, Секунд до наступного дня: ${secondsUntilEndOfDay}`;
    document.getElementById('secondsInfoOutput').innerHTML = output;
}

// Завдання 6
function formatDateToDDMMYYYY(inputDate) {
    const date = new Date(inputDate);

    // Отримуємо компоненти дати
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Місяці у JavaScript нумеруються з 0
    const year = date.getFullYear();

    // Форматуємо та виводимо результат
    const formattedDate = `${day}.${month}.${year}`;
    document.getElementById('formattedDate').innerText = formattedDate;
}

// Завдання 7
function calculateDifference() {
    const date1 = document.getElementById('date1').value;
    const date2 = document.getElementById('date2').value;

    const difference = dateDifference(date1, date2);

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `
        Difference:
        ${difference.years} years,
        ${difference.months} months,
        ${difference.days} days,
    `;
}

function dateDifference(date1, date2) {
    const d1 = new Date(date1);
    const d2 = new Date(date2);

    const timeDifference = Math.abs(d2 - d1);

    const years = Math.floor(timeDifference / (365 * 24 * 60 * 60 * 1000));
    const months = Math.floor((timeDifference % (365 * 24 * 60 * 60 * 1000)) / (30 * 24 * 60 * 60 * 1000));
    const days = Math.floor((timeDifference % (30 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));
    return {
        years: years,
        months: months,
        days: days,
       
    };
}
// Завдання 8
function formatDate() {
    const inputDate = new Date(document.getElementById('formatDateInput').value);
    const now = new Date();
    const diff = (now - inputDate) / 1000;

    if (diff < 1) {
        document.getElementById('formattedDateResultOutput').innerHTML = 'Тільки що';
    } else if (diff < 60) {
        document.getElementById('formattedDateResultOutput').innerHTML = `${Math.floor(diff)} сек. назад`;
    } else if (diff < 3600) {
        document.getElementById('formattedDateResultOutput').innerHTML = `${Math.floor(diff / 60)} хв. назад`;
    } else {
        const formattedDate = inputDate.toLocaleString('uk-UA');
        document.getElementById('formattedDateResultOutput').innerHTML = formattedDate;
    }
}

// Завдання 9
function parseUserInputDate() {
    const inputDate = document.getElementById('userInputDate').value;
    const date = new Date(inputDate);

    if (!isNaN(date.getTime())) {
        const ukrainianFormat = date.toLocaleString('uk-UA');
        const englishFormat = date.toLocaleString('en-US');
        const customFormat = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

        document.getElementById('parsedUserDateOutputUkrainian').innerHTML = ukrainianFormat;
        document.getElementById('parsedUserDateOutputEnglish').innerHTML = englishFormat;
        document.getElementById('parsedUserDateOutputCustom').innerHTML = customFormat;
    } else {
        document.getElementById('parsedUserDateOutputUkrainian').innerHTML = 'Некоректний формат дати.';
        document.getElementById('parsedUserDateOutputEnglish').innerHTML = 'Некоректний формат дати.';
        document.getElementById('parsedUserDateOutputCustom').innerHTML = 'Некоректний формат дати.';
    }
}

// Завдання 10
function formatDateTime(languageCode) {
    const date = new Date();
    const dayOfWeek = date.toLocaleDateString(languageCode, { weekday: 'long' });
    const day = date.getDate();
    const month = date.toLocaleDateString(languageCode, { month: 'long' });
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const formattedDate = `${dayOfWeek}, ${day} ${month} ${year} нашої ери, ${hours}:${minutes}:${seconds}`;
    document.getElementById('formattedDate1').innerText = formattedDate;
}
// Перевірка валідно
