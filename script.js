const verse = document.getElementById('verse');
const verseNum = document.getElementById('verse-no');
const showBtn = document.getElementById('show');
// total verses of Al-Quran
const totalVerses = 6236;

// alquran.cloud api
const apiFetch = () => {
  const randomVerse = Math.floor(Math.random() * (totalVerses+1));
  const url = `http://api.alquran.cloud/v1/ayah/${randomVerse}/en.sahih`;
  fetch(url).then(
    response => response.json()
  ).then(data => {
    verse.textContent = '"' + data.data.text + '"';
    verseNum.textContent = 'Al-Quran ' + '[' + data.data.numberInSurah +':'+data.data.surah.number + ']';
  })
};

apiFetch();
showBtn.addEventListener('click', apiFetch);