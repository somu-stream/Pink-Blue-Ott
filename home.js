function showToast(message) {
  const toast = document.getElementById('toast-message');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

window.addEventListener('load', () => {
  const loader = document.getElementById('page-loader');
  loader.style.opacity = '0';
  setTimeout(() => {
    loader.style.display = 'none';
  }, 500); // Fade-out animation-kku time
});
      
/* ===== TOTAL SECURITY & ANTI-INSPECT ===== */
document.addEventListener('contextmenu', e => e.preventDefault());
document.addEventListener('keydown', e => {
  if (e.key==='F12' || (e.ctrlKey&&e.shiftKey&&['I','J','C'].includes(e.key)) || (e.ctrlKey&&e.key==='U') || (e.ctrlKey&&e.key==='S')) {
    e.preventDefault(); return false;
  }
});

document.querySelectorAll('img').forEach(img => {
  img.addEventListener('contextmenu', e => e.preventDefault());
});

document.addEventListener('touchstart', function (event) {
  if (event.touches.length > 1) {
    event.preventDefault();
  }
}, { passive: false });

document.addEventListener('gesturestart', function (event) {
  event.preventDefault();
});

/* ===== MOVIES ARRAY ===== */
  const movies = [
  { id: 1, title: 'Karuppu', year: 2026, rating: '8.2', genre: 'action', lang: 'tamil', badge: 'new', thumbnail: 'karuppu.webp', banner: 'karuppu_b.webp', modal: 'karuppu_m.webp', category: 'trending', url: 'karuppu.html' },
  { id: 2, title: 'Ghilli', year: 2004, rating: '8.0', genre: 'action', lang: 'tamil', badge: '4k', thumbnail: 'ghilli.webp', modal: 'ghilli_m.webp', category: ['popular'], url: 'ghilli.html' },
  { id: 3, title: 'Leo', year: 2023, rating: '7.2', genre: 'action', lang: 'tamil', badge: '', thumbnail: 'leo.webp', modal: 'leo_m.webp', category: 'popular', url: 'leo.html' },
  { id: 4, title: 'Lik', year: 2026, rating: '7.0', genre: 'romance', lang: 'tamil', badge: 'trend', thumbnail: 'lik.webp', banner: 'lik.webp', modal: 'lik_m.webp', category: 'trending', url: 'lik.html' },
  { id: 5, title: 'Oppenheimer', year: 2023, rating: '8.3', genre: 'thriller', lang: 'english', badge: '', thumbnail: 'oppenheimer.webp', banner: 'oppenheimer_b.webp', modal: 'oppenheimer_m.webp', category: 'trending', url: 'oppenheimer.html' },
  { id: 6, title: 'Thaai kizhavi', year: 2026, rating: '7.1', genre: 'action', lang: 'tamil', badge: 'new', thumbnail: 'thaai.webp', banner: 'thaai.webp', modal: 'thaai_m.webp', category: 'trending', url: 'thaai.html' },
  { id: 7, title: '29', year: 2026, rating: '8.2', genre: 'romance', lang: 'tamil', badge: 'new', thumbnail: '29.webp', banner: '29.webp', modal: '29_m.webp', category: 'trending', url: '29.html' },
  { id: 8, title: 'Dragon', year: 2025, rating: '7.8', genre: 'romance', lang: 'tamil', badge: '4k', thumbnail: 'dragon.webp', modal: 'dragon_m.webp', category: 'popular', url: 'dragon.html' },
  { id: 9, title: 'Don', year: 2022, rating: '6.5', genre: 'romance', lang: 'tamil', badge: '', thumbnail: 'don.webp', modal: 'don_m.webp', category: 'popular', url: 'don.html' },
  { id: 10, title: 'Youth', year: 2002, rating: '6.8', genre: 'romance', lang: 'tamil', badge: '', thumbnail: 'youth.jpg', modal: 'youth_m.jpg', category: 'new', url: 'youth.html' },
  { id: 11, title: 'DD Next Level', year: 2025, rating: '6.9', genre: 'comedy', lang: 'tamil', badge: '', thumbnail: 'dd4.webp', category: 'popular', modal: 'dd4_m.webp', url: 'ddnxt.html' },
  { id: 12, title: 'Meiyazhagan', year: 2024, rating: '8.7', genre: 'comedy', lang: 'tamil', badge: '', thumbnail: 'mei.jpeg', modal: 'mei_m.jpg', category: 'popular', url: 'mei.html' },
  { id: 13, title: 'Michael', year: 2023, rating: '6.3', genre: 'thriller', lang: 'english', badge: 'new', thumbnail: 'michael.jpg', modal: 'michael_m.jpg', category: 'new', url: 'michael.html' },
  { id: 14, title: 'Spiderman-HomeComing', year: 2017, rating: '7.4', genre: 'action', lang: 'tamil', badge: 'spidey', thumbnail: 'home.webp', category: 'featured', url: 'homecoming.html' },
  { id: 15, title: 'Avengers-EndGame', year: 2019, rating: '8.4', genre: 'action', lang: 'tamil', badge: 'dub', thumbnail: 'avengers.webp', category: 'featured', url: 'endgame.html' },
  { id: 16, title: 'Spiderman-No Way Home', year: 2021, rating: '8.2', genre: 'action', lang: 'tamil', badge: 'spidey', thumbnail: 'home3.webp', category: 'featured', url: 'nowayhome.html' },
  { id: 17, title: 'The Incredible Hulk', year: 2008, rating: '6.6', genre: 'thriller', lang: 'tamil', badge: 'dub', thumbnail: 'hulk.webp', category: 'featured', url: 'hulk.html' },
  { id: 18, title: 'Spiderman 3', year: 2007, rating: '6.2', genre: 'action', lang: 'tamil', badge: 'spidey', thumbnail: 'spider3_m.webp', modal: 'spider3_m.webp', category: 'featured', url: 'spider3.html' },
  { id: 19, title: 'Iron Man', year: 2008, rating: '7.9', genre: 'thriller', lang: 'tamil', badge: 'dub', thumbnail: 'ironman.webp', category: 'featured', url: 'iron.html' },
  { id: 20, title: 'Captain America-Civil War', year: 2016, rating: '7.8', genre: 'thriller', lang: 'tamil', badge: 'dub', thumbnail: 'civil.webp', category: 'featured', url: 'civil.html' },
  { id: 21, title: 'Master', year: 2021, rating: '7.8', genre: 'action', lang: 'tamil', badge: '4k', thumbnail: 'master.webp', modal: 'master_m.webp', category: 'tamil', url: 'master.html' },
  { id: 22, title: 'Beast', year: 2022, rating: '5.3', genre: 'action', lang: 'tamil', badge: '4k', thumbnail: 'beast.webp', modal: 'beast_m.webp', category: 'tamil', url: 'beast.html' },
  { id: 23, title: 'Kanchana 2', year: 2015, rating: '5.5', genre: 'horror', lang: 'tamil', badge: 'horror', thumbnail: 'kanchana2.jpg', modal: 'kanchan2_m.jpg', category: 'horror', url: 'kanchana2.html' },
  { id: 24, title: 'Dude', year: 2025, rating: '8.7', genre: 'romance', lang: 'tamil', badge: '4k', thumbnail: 'dude.webp', modal: 'dude_m.webp', category: 'tamil', url: 'dude.html' },
  { id: 25, title: 'Maanaadu', year: 2021, rating: '8.2', genre: 'action', lang: 'tamil', badge: '4k', thumbnail: 'maanaadu.webp', modal: 'maanaadu_m.webp', category: 'tamil', url: 'maanaadu.html' },
  { id: 26, title: 'Raja Rani', year: 2013, rating: '7.6', genre: 'romance', lang: 'tamil', badge: 'love', thumbnail: 'rajarani.webp', category: 'love_story', url: 'rajarani.html' },
  { id: 27, title: 'Titanic', year: 1997, rating: '7.9', genre: 'romance', lang: 'tamil', badge: 'love', thumbnail: 'titanic.webp', category: 'love_story', url: 'titanic.html' },
  { id: 28, title: 'Paiyaa', year: 2010, rating: '7.2', genre: 'romance', lang: 'tamil', badge: 'love', thumbnail: 'paiyaa_m.webp', category: 'love_story', url: 'paiyaa.html' },
  { id: 29, title: 'Joe', year: 2023, rating: '6.8', genre: 'romance', lang: 'tamil', badge: 'love', thumbnail: 'joe.webp', category: 'love_story', url: 'joe.html' },
  { id: 30, title: 'Love Today', year: 2022, rating: '7.4', genre: 'romance', lang: 'tamil', badge: 'love', thumbnail: 'lovetoday.webp', category: 'love_story', url: 'lovetoday.html' },
  { id: 31, title: 'Mufasa - The Lion King', year: 2024, rating: '6.8', genre: 'action', lang: 'tamil', badge: 'kids', thumbnail: 'mufasa.jpg', modal: 'mufasa_m.jpg', category: 'kids', url: 'mufasa.html' },
  { id: 32, title: 'Roll No 21 - Time Ki Bhool Bhulaiya', year: 2010, rating: '7.0', genre: 'action', lang: 'tamil', badge: 'kids', thumbnail: 'kris1.jpeg', modal: 'kris1_m.jpg', category: 'kids', url: 'kris1.html' },
  { id: 33, title: 'Doraemon: Nobita and the Green Giant Legend', year: 2008, rating: '6.7', genre: 'action', lang: 'tamil', badge: 'kids', thumbnail: 'doremon1.jpg', modal: 'doremon1_m.jpg', category: 'kids', url: 'doremon1.html' },
  { id: 34, title: 'Roll No. 21 and the Quest for Swanamani', year: 2011, rating: '7.0', genre: 'action', lang: 'tamil', badge: 'kids', thumbnail: 'kris2.jpg', modal: 'kris2_m.jpg', category: 'kids', url: 'kris2.html' },
  { id: 35, title: 'Cars', year: 2006, rating: '7.2', genre: 'action', lang: 'tamil', badge: 'kids', thumbnail: 'cars.jpg', modal: 'cars_m.jpg', category: 'kids', url: 'cars.html' },
  { id: 36, title: 'The Nun', year: 2018, rating: '5.3', genre: 'horror', lang: 'tamil', badge: 'horror', thumbnail: 'thenun.jpg', modal: 'thenun_m.jpg', category: 'horror', url: 'thenun.html' },
  { id: 37, title: 'Annabelle: Creation', year: 2017, rating: '6.5', genre: 'horror', lang: 'tamil', badge: 'horror', thumbnail: 'annabellecreation.jpg', modal: 'annabellecreation_m.jpg', category: 'horror', url: 'annabellecreation.html' },
  { id: 38, title: 'The Conjuring', year: 2013, rating: '7.5', genre: 'horror', lang: 'tamil', badge: 'horror', thumbnail: 'theconjuring.jpg', modal: 'theconjuring_m.jpg', category: 'horror', url: 'theconjuring.html' },
  { id: 39, title: 'Kanchana', year: 2011, rating: '6.7', genre: 'horror', lang: 'tamil', badge: 'horror', thumbnail: 'kanchana.jpg', modal: 'kanchana_m.jpg', category: 'horror', url: 'kanchana.html' },
  { id: 40, title: 'Kara', year: 2026, rating: '6.7', genre: 'action', lang: 'tamil', badge: 'trend', thumbnail: 'kara.webp', modal: 'kara_m.webp', category: ['trending','popular'], url: 'kara1.html' },
  { id: 41, title: 'Manam Kothi paravai', year: 2012, rating: '6.7', genre: 'romance', lang: 'tamil', badge: '4k', thumbnail: 'manam.webp', modal: 'manam_m.webp', category: 'tamil', url: 'manam.html' },
  { id: 42, title: 'Vallavan', year: 2006, rating: '6.5', genre: 'romance', lang: 'tamil', badge: '4k', thumbnail: 'vallavan.jpg', modal: 'vallavan_m.jpg', category: 'classic', url: 'vallavan.html' },
  { id: 43, title: 'Aadhavan', year: 2009, rating: '6.7', genre: 'action', lang: 'tamil', badge: '', thumbnail: 'aadhavan.jpeg', modal: 'aadhavan_m.jpg', category: 'classic', url: 'aadhavan.html' },
  { id: 44, title: 'The Evil Dead-1', year: 1981, rating: '7.4', genre: 'horror', lang: 'tamil', badge: 'horror', thumbnail: 'evil1.webp', modal: 'evil1_m.webp', category: 'evil', url: 'evil1.html' },
  { id: 45, title: 'The Evil Dead-2', year: 1987, rating: '7.7', genre: 'horror', lang: 'tamil', badge: 'horror', thumbnail: 'evil2.webp', modal: 'evil2_m.webp', category: 'evil', url: 'evil2.html' },
  { id: 46, title: 'Army Of Darkness', year: 1992, rating: '7.4', genre: 'horror', lang: 'tamil', badge: 'horror', thumbnail: 'evil3.webp', modal: 'evil3_m.webp', category: 'evil', url: 'evil3.html' },
  { id: 47, title: 'The Evil Dead-4', year: 2013, rating: '6.5', genre: 'horror', lang: 'tamil', badge: 'horror', thumbnail: 'evil4.webp', modal: 'evil4_m.webp', category: 'evil', url: 'evil4.html' },
  { id: 48, title: 'Thiruvilaiyadal', year: 1965, rating: '8.5', genre: 'action', lang: 'tamil', badge: '4k', thumbnail: 'thiru.jpg', category: '80', url: 'thiru.html' },
  { id: 49, title: 'Ben 10 - S1E1', year: 2005, rating: '8.2', genre: 'action', lang: 'tamil', badge: 'ben10', thumbnail: 'ben11.webp', modal: 'ben11_m.webp', category: 'ben1', url: 'ben11.html' },
  { id: 50, title: 'Ben 10 - S1E2', year: 2005, rating: '8.2', genre: 'action', lang: 'tamil', badge: 'ben10', thumbnail: 'ben12.webp', modal: 'ben12_m.webp', category: 'ben1', url: 'ben12.html' },
  { id: 51, title: 'Spiderman 1', year: 2002, rating: '7.4', genre: 'action', lang: 'tamil', badge: 'spidey', thumbnail: 'spider1.webp', modal: 'spider1_m.webp', category: 'spider', url: 'spider1.html' },
  { id: 52, title: 'Spiderman 2', year: 2004, rating: '7.5', genre: 'action', lang: 'tamil', badge: 'spidey', thumbnail: 'spider2.webp', modal: 'spider2_m.webp', category: 'spider', url: 'spider2.html' },
  { id: 53, title: 'Spiderman 3', year: 2007, rating: '6.2', genre: 'action', lang: 'tamil', badge: 'spidey', thumbnail: 'spider3.webp', modal: 'spider3_m.webp', category: 'spider', url: 'spider3.html' },
  { id: 54, title: 'The Amazing Spiderman', year: 2012, rating: '6.9', genre: 'action', lang: 'tamil', badge: 'spidey', thumbnail: 'amazing1.webp', modal: 'amazing1_m.webp', category: 'spider', url: 'amazing1.html' },
  { id: 55, title: 'The Amazing Spiderman 2', year: 2014, rating: '6.6', genre: 'action', lang: 'tamil', badge: 'spidey', thumbnail: 'amazing2.webp', modal: 'amazing2_m.webp', category: 'spider', url: 'amazing2.html' },
  { id: 56, title: 'Spiderman-HomeComing', year: 2017, rating: '7.4', genre: 'action', lang: 'tamil', badge: 'spidey', thumbnail: 'home_r.webp', modal: 'home.webp', category: 'spider', url: 'homecoming.html' },
  { id: 57, title: 'Spiderman-Far From Home', year: 2019, rating: '7.4', genre: 'action', lang: 'tamil', badge: 'spidey', thumbnail: 'home2_r.webp', modal: 'home2.webp', category: 'spider', url: 'far.html' },
  { id: 58, title: 'Spiderman-No Way Home', year: 2021, rating: '8.2', genre: 'action', lang: 'tamil', badge: 'spidey', thumbnail: 'home3_r.webp', modal: 'home3.webp', category: 'spider', url: 'nowayhome.html' },
  { id: 59, title: 'The Amazing Spiderman', year: 2012, rating: '6.9', genre: 'action', lang: 'tamil', badge: 'spidey', thumbnail: 'amazing1_m.webp', modal: 'amazing1_m.webp', category: 'featured', url: 'amazing1.html' }
];

const genreEmojis = { action:'⚔️', comedy:'😂', thriller:'🔥', romance:'💕', 'sci-fi':'🚀', horror:'👻', tamil:'🎵', hindi:'🎬' };
let activeGenre = 'all';
let isViewAllMode = false;
let currentViewAllCat = '';
let currentViewAllIsLandscape = false;

function badgeHTML(badge) {
  if (!badge) return '';
  return `<span class="card-badge badge-${badge}">${badge.toUpperCase()}</span>`;
}

function thumbHTML(movie, isLandscape=false) {
    return `<div class="card-thumb-wrapper" style="position:absolute; inset:0; width:100%; height:100%; z-index:1;">
              <div class="shimmer-loading"></div>
              <img class="card-thumb" src="${movie.thumbnail}" alt="${movie.title}" loading="lazy" draggable="false" 
                   style="position:absolute; inset:0; width:100%; height:100%; z-index:3; opacity:0; transition:opacity 0.3s ease; object-fit:cover;"
                   onload="this.style.opacity='1'; this.previousElementSibling.remove();"
                   onerror="handleImgError(this, '${movie.genre}', '${movie.title}')">
            </div>`;
  }

function handleImgError(img, genre, title) {
  const parent = img.parentElement;
  const icon = genreEmojis[genre] || '🎬';
  parent.innerHTML = `<div class="card-thumb-placeholder">
    <div class="movie-icon">${icon}</div>
    <div class="movie-title-ph">${title}</div>
  </div>`;
}

/* ===== MY LIST (localStorage) ===== */
function getMyList() {
  try { return JSON.parse(localStorage.getItem('somuMyList') || '[]'); }
  catch(e) { return []; }
}
function isInMyList(id) { return getMyList().includes(id); }

function toggleMyList(event, id) {
  if (event) event.stopPropagation();
  let ids = getMyList();
  const idx = ids.indexOf(id);
  let added;
  if (idx > -1) { ids.splice(idx, 1); added = false; }
  else { ids.push(id); added = true; }
  localStorage.setItem('somuMyList', JSON.stringify(ids));

  const myListSection = document.getElementById('myListSection');
  const inMyListView = myListSection && myListSection.style.display === 'block';

  document.querySelectorAll(`.card-plus-btn[data-id="${id}"]`).forEach(btn => {
    const insideMyListGrid = !!btn.closest('#myListGrid');
    if (insideMyListGrid && inMyListView && !added) {
      /* card is being removed from this view — just let the tick fall away */
      btn.classList.add('tick-remove');
    } else {
      btn.classList.toggle('added', added);
      btn.innerHTML = added ? '✓' : '+';
      btn.classList.remove('pop');
      void btn.offsetWidth;
      btn.classList.add('pop');
    }
  });

  showToast(added ? 'MyList la add pannaachu ✓' : 'MyList la irundhu remove pannaachu');

  if (!added && inMyListView) {
    const btn = document.querySelector(`#myListGrid .card-plus-btn[data-id="${id}"]`);
    const cardEl = btn ? btn.closest('.card, .card-landscape') : null;
    if (cardEl) {
      cardEl.classList.add('card-removing');
      cardEl.addEventListener('animationend', () => {
        cardEl.remove();
        const grid = document.getElementById('myListGrid');
        const countEl = document.getElementById('myListCount');
        const remaining = grid ? grid.querySelectorAll('.card, .card-landscape').length : 0;
        if (countEl) countEl.innerText = remaining;
        if (grid && remaining === 0) {
          grid.innerHTML = '<p style="color:var(--muted);padding:30px 10px;text-align:center;grid-column:1/-1">Unga MyList innum empty 🎬<br>Plus (+) icon-a touch panni movies add pannunga!</p>';
        }
      }, { once: true });
    } else {
      renderMyList();
    }
  } else if (inMyListView) {
    renderMyList();
  }
}

function plusBtnHTML(movie) {
  const added = isInMyList(movie.id);
  return `<button class="card-plus-btn ${added ? 'added' : ''}" data-id="${movie.id}" onclick="toggleMyList(event, ${movie.id})">${added ? '✓' : '+'}</button>`;
}

function buildCard(movie) {
  return `<div class="card" onclick="handleCardTouch(this, ${movie.id}, event)">
    ${thumbHTML(movie)}
    ${badgeHTML(movie.badge)}
    ${plusBtnHTML(movie)}
    <div class="card-overlay">
      <div class="card-play">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><polygon points="5 3 19 12 5 21 5 3"/></svg>
      </div>
      <div class="card-name">${movie.title}</div>
      <div class="card-meta"><span class="card-rating">★ ${movie.rating}</span><span>${movie.year}</span><span>${movie.lang.toUpperCase()}</span></div>
    </div>
  </div>`;
}

function buildLandscapeCard(movie) {
  return `<div class="card-landscape" onclick="handleCardTouch(this, ${movie.id}, event)">
    ${thumbHTML(movie, true)}
    ${badgeHTML(movie.badge)}
    ${plusBtnHTML(movie)}
    <div class="card-overlay">
      <div class="card-play">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><polygon points="5 3 19 12 5 21 5 3"/></svg>
      </div>
      <div class="card-name">${movie.title}</div>
      <div class="card-meta"><span class="card-rating">★ ${movie.rating}</span><span>${movie.year}</span><span>${movie.lang.toUpperCase()}</span></div>
    </div>
  </div>`;
}

function renderMyList() {
  const ids = getMyList();
  const list = movies.filter(m => ids.includes(m.id));
  const grid = document.getElementById('myListGrid');
  const countEl = document.getElementById('myListCount');
  if (countEl) countEl.innerText = list.length;
  if (grid) {
    grid.innerHTML = list.map(buildCard).join('') || '<p style="color:var(--muted);padding:30px 10px;text-align:center;grid-column:1/-1">Unga MyList innum empty 🎬<br>Plus (+) icon-a touch panni movies add pannunga!</p>';
  }
}

/* ===== MOVIE MODAL ===== */
function openModal(id) {
  const m = movies.find(x => x.id === id);
  if (!m) return;

  const posterSrc = m.modal || m.banner || m.thumbnail || '';
  const icon = genreEmojis[m.genre] || '🎬';

  document.getElementById('modalPosterWrap').innerHTML = posterSrc
    ? `<img class="modal-poster" src="${posterSrc}" alt="${m.title}" onerror="this.outerHTML='<div class=\\'modal-poster-fallback\\'><span style=\\'font-size:52px\\'>${icon}</span><span style=\\'font-size:13px;color:var(--muted)\\'>${m.title}</span></div>'">`
    : `<div class="modal-poster-fallback"><span style="font-size:52px">${icon}</span><span style="font-size:13px;color:var(--muted)">${m.title}</span></div>`;

  document.getElementById('modalBadgeRow').innerHTML = m.badge ? `<span class="card-badge badge-${m.badge}" style="position:static">${m.badge.toUpperCase()}</span>` : '';
  document.getElementById('modalTitle').textContent = m.title;
  document.getElementById('modalMeta').innerHTML = `
    <span class="m-rating">★ ${m.rating}</span>
    <span class="m-tag">${m.year}</span>
    <span class="m-tag">${m.genre}</span>
    <span class="m-tag">${m.lang.toUpperCase()}</span>`;
  document.getElementById('modalWatchBtn').onclick = () => { closeModal(); playMovie(id); };

  document.getElementById('movieModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('movieModal').classList.remove('open');
  document.body.style.overflow = '';
}

function hasCategory(m, cat) {
  return Array.isArray(m.category) ? m.category.includes(cat) : m.category === cat;
}

function isLandscapeMovie(m) {
  return hasCategory(m, 'featured') || hasCategory(m, 'love_story') || hasCategory(m, '80');
}

function buildMixedCard(m) {
  return isLandscapeMovie(m) ? buildLandscapeCard(m) : buildCard(m);
}

function updateCounters(src) {
  document.getElementById('trendingCount').innerText = src.filter(m => hasCategory(m, 'trending')).length;
  document.getElementById('spiderCount').innerText      = src.filter(m => hasCategory(m, 'spider')).length;
  document.getElementById('featuredCount').innerText = src.filter(m => hasCategory(m, 'featured')).length;
  document.getElementById('tamilCount').innerText    = src.filter(m => hasCategory(m, 'tamil')).length;
  document.getElementById('popularCount').innerText  = src.filter(m => hasCategory(m, 'popular')).length;
  document.getElementById('loveStoryCount').innerText = src.filter(m => hasCategory(m, 'love_story')).length;
  document.getElementById('KidsCount').innerText = src.filter(m => hasCategory(m, 'kids')).length;
  document.getElementById('horrorCount').innerText = src.filter(m => hasCategory(m, 'horror')).length;
  document.getElementById('evilCount').innerText = src.filter(m => hasCategory(m, 'evil')).length;
  document.getElementById('80Count').innerText = src.filter(m => hasCategory(m, '80')).length;
  document.getElementById('ben1Count').innerText = src.filter(m => hasCategory(m, 'ben1')).length;   
}
  

function renderRows(list) {
  const src = list || movies;
  updateCounters(src);

  if(!isViewAllMode) {
    document.getElementById('trendingRow').innerHTML = src.filter(m=>hasCategory(m, 'trending')).map(buildCard).join('') || '<p style="color:var(--muted);padding:20px">No results found</p>';
    document.getElementById('spiderRow').innerHTML      = src.filter(m=>hasCategory(m, 'spider')).map(buildCard).join('')      || '<p style="color:var(--muted);padding:20px">No results found</p>';
    document.getElementById('featuredRow').innerHTML = src.filter(m=>hasCategory(m, 'featured')).map(buildLandscapeCard).join('') || '';
    document.getElementById('tamilRow').innerHTML    = src.filter(m=>hasCategory(m, 'tamil')).map(buildCard).join('')    || '<p style="color:var(--muted);padding:20px">No results found</p>';
    document.getElementById('popularRow').innerHTML  = src.filter(m=>hasCategory(m, 'popular')).map(buildCard).join('')    || '<p style="color:var(--muted);padding:20px">No results found</p>';
    document.getElementById('loveStoryRow').innerHTML = src.filter(m=>hasCategory(m, 'love_story')).map(buildLandscapeCard).join('') || '<p style="color:var(--muted);padding:20px">No results found</p>';
    document.getElementById('KidsRow').innerHTML  = src.filter(m=>hasCategory(m, 'kids')).map(buildCard).join('')    || '<p style="color:var(--muted);padding:20px">No results found</p>';
    document.getElementById('horrorRow').innerHTML  = src.filter(m=>hasCategory(m, 'horror')).map(buildCard).join('')    || '<p style="color:var(--muted);padding:20px">No results found</p>';
    document.getElementById('evilRow').innerHTML = src.filter(m => hasCategory(m, 'evil')).map(buildCard).join('') || '<p style="color:var(--muted);padding:20px">No results found</p>';
    document.getElementById('80Row').innerHTML = src.filter(m=>hasCategory(m, '80')).map(buildLandscapeCard).join('') || '';
    document.getElementById('ben1Row').innerHTML = src.filter(m=>hasCategory(m, 'ben1')).map(buildCard).join('') || '<p style="color:var(--muted);padding:20px">No results found</p>';
  } else {
    const gridContainer = document.getElementById('viewAllGridContainer');
    const filteredMovies = src.filter(m => hasCategory(m, currentViewAllCat));
    
    if (currentViewAllIsLandscape) {
      gridContainer.className = "view-all-grid landscape-grid";
      gridContainer.innerHTML = filteredMovies.map(buildLandscapeCard).join('') || '<p style="color:var(--muted);padding:20px">No results found</p>';
    } else {
      gridContainer.className = "view-all-grid";
      gridContainer.innerHTML = filteredMovies.map(buildCard).join('') || '<p style="color:var(--muted);padding:20px">No results found</p>';
    }
  }
}

function viewAllCategory(categoryName, displayTitle, isLandscapeView = false) {
  isViewAllMode = true;
  currentViewAllCat = categoryName;
  currentViewAllIsLandscape = isLandscapeView;
  
  const totalCount = movies.filter(m => hasCategory(m, categoryName)).length;
  document.getElementById('viewAllTitle').innerHTML = `${displayTitle} <span class="section-counter">${totalCount} Movies</span>`;
  
  document.getElementById('homepageSections').style.display = 'none';
  const vas = document.getElementById('viewAllSection');
  vas.style.display = 'block';
  slideIn(vas);
  
  window.scrollTo({ top: 0, behavior: 'smooth' });
  renderRows(movies);
}

function resetToHome() {
  showHome();
}

/* ===== BOTTOM NAV VIEW SWITCHING ===== */
function setActiveNav(view) {
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const el = document.getElementById('nav-' + view);
  if (el) el.classList.add('active');
}

function hideAllViews() {
  document.getElementById('heroBannerSection').style.display = 'none';
  document.getElementById('statsBar').style.display = 'none';
  document.getElementById('homepageSections').style.display = 'none';
  document.getElementById('viewAllSection').style.display = 'none';
  document.getElementById('searchView').style.display = 'none';
  document.getElementById('myListSection').style.display = 'none';
}

function slideIn(el) {
  if (!el) return;
  el.classList.remove('slide-in-left');
  void el.offsetWidth;
  el.classList.add('slide-in-left');
}

function showHome() {
  isViewAllMode = false;
  currentViewAllCat = '';
  currentViewAllIsLandscape = false;

  hideAllViews();
  const hero = document.getElementById('heroBannerSection');
  const stats = document.getElementById('statsBar');
  const home = document.getElementById('homepageSections');
  hero.style.display = '';
  stats.style.display = '';
  home.style.display = 'block';
  slideIn(hero); slideIn(stats); slideIn(home);

  renderRows(movies);
  window.scrollTo({ top: 0, behavior: 'smooth' });
  setActiveNav('home');
}

function showSearchView() {
  hideAllViews();
  const sv = document.getElementById('searchView');
  sv.style.display = 'block';
  slideIn(sv);

  filterGenreSearch();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  setActiveNav('search');
  setTimeout(() => document.getElementById('searchInput')?.focus(), 300);
}

function showMyListView() {
  hideAllViews();
  const ml = document.getElementById('myListSection');
  ml.style.display = 'block';
  slideIn(ml);

  renderMyList();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  setActiveNav('mylist');
}

document.addEventListener('contextmenu', function(e) {
  if (e.target.closest('.card') || e.target.closest('.card-landscape')) { e.preventDefault(); }
});

function filterGenre(el, genre) {
  activeGenre = genre;
  document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  filterGenreSearch();
}

function filterGenreSearch() {
  const q = (document.getElementById('searchInput')?.value || '').toLowerCase();
  
  const dynamicLabel = document.getElementById('dynamicLabel');
  const clearBtn = document.getElementById('searchClear');

  if (q.trim() !== "") {
    if (dynamicLabel) dynamicLabel.style.display = 'none';
    if (clearBtn) clearBtn.style.display = 'block';
  } else {
    if (dynamicLabel) dynamicLabel.style.display = 'block';
    if (clearBtn) clearBtn.style.display = 'none';
  }

  const filtered = movies.filter(m => {
    const matchGenre = activeGenre === 'all' || 
                       (Array.isArray(m.genre) ? m.genre.includes(activeGenre) : m.genre === activeGenre) || 
                       m.lang === activeGenre;
                       
    const matchSearch = m.title.toLowerCase().includes(q);
    return matchGenre && matchSearch;
  });

  const grid = document.getElementById('searchResultsGrid');
  if (grid) {
    grid.innerHTML = filtered.map(buildMixedCard).join('') || '<p style="color:var(--muted);padding:20px;grid-column:1/-1;text-align:center">No results found</p>';
  }
}

function clearSearchInput() {
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.value = '';
    filterGenreSearch(); 
    searchInput.focus(); 
  }
}

function playMovie(id) {
  const m = movies.find(x => x.id === id);
  if (!m || !m.url) { alert('இதற்கான Player பக்கத்தைக் காணவில்லை'); return; }
  window.location.href = m.url;
}

function handleCardTouch(cardElement, movieId, event) {
  if (window.innerWidth > 700) {
    openModal(movieId);
    return;
  }
  if (cardElement.classList.contains('touched')) {
    openModal(movieId);
  } else {
    document.querySelectorAll('.touched').forEach(c => c.classList.remove('touched'));
    cardElement.classList.add('touched');
  }
}

document.addEventListener('touchstart', function(e) {
  if (!e.target.closest('.card') && !e.target.closest('.card-landscape')) {
    document.querySelectorAll('.touched').forEach(c => c.classList.remove('touched'));
  }
});

function handleHeroBtnTouch(btnElement, movieId, event) { playMovie(movieId); }

let trendingMovies = [];
let currentHeroIndex = 0;

function initHeroSlider() {
  trendingMovies = movies.filter(m => hasCategory(m, 'trending'));
  if (trendingMovies.length === 0) return;
  updateHeroBanner();
  setInterval(() => {
    currentHeroIndex = (currentHeroIndex + 1) % trendingMovies.length;
    updateHeroBanner();
  }, 5000);
}

function updateHeroBanner() {
  const currentMovie = trendingMovies[currentHeroIndex];
  const bgEl = document.getElementById('heroBg');
  const titleEl = document.getElementById('heroTitle');
  const descEl = document.getElementById('heroDesc');
  const btnEl = document.getElementById('heroWatchBtn');

  if (!currentMovie || !bgEl || !titleEl || !descEl || !btnEl) return;

  bgEl.style.opacity = '0';

  setTimeout(() => {
    const posterImg = currentMovie.banner ? currentMovie.banner : (currentMovie.thumbnail ? currentMovie.thumbnail : 'amaran.jpg');
    bgEl.style.backgroundImage = `url('${posterImg}')`;
    titleEl.innerHTML = `Watch <span>${currentMovie.title}</span>`;
    descEl.innerHTML = `<span class="hero-rating">★ ${currentMovie.rating}</span><span class="hero-meta-item">${currentMovie.year}</span><span class="hero-meta-item">${currentMovie.genre}</span><span class="hero-meta-item">${currentMovie.lang}</span>`;
    btnEl.setAttribute('onclick', `handleHeroBtnTouch(this, ${currentMovie.id}, event)`);
    bgEl.style.opacity = '1';
  }, 500); 
}

function initDynamicPlaceholder() {
  const searchInput = document.getElementById('searchInput');
  const dynamicLabel = document.getElementById('dynamicLabel');
  if (!searchInput || !dynamicLabel) return;

  const placeholders = [
    "Search  Leo...",
    "Search  Amaran...",
    "Search  Karuppu...",
    "Search  Oppenheimer...",
    "Search  Jailer...",
    "Search movies by title..."
  ];

  let currentIndex = 0;

  setInterval(() => {
    if (searchInput.value.trim() !== "") return;

    currentIndex = (currentIndex + 1) % placeholders.length;

    dynamicLabel.classList.remove('slide-up-animation');
    void dynamicLabel.offsetWidth; 
    
    dynamicLabel.innerText = placeholders[currentIndex];
    dynamicLabel.classList.add('slide-up-animation');
  }, 3000);

  dynamicLabel.innerText = placeholders[0];
}

/* ===== DOMContentLoaded ===== */
document.addEventListener('DOMContentLoaded', () => {
  renderRows();
  initHeroSlider();
  initDynamicPlaceholder();

  /* Stats Bar — Dynamic */
  const totalEl = document.getElementById('statTotalMovies');
  const langEl  = document.getElementById('statTotalLangs');
  if (totalEl) {
    const count = movies.length;
    totalEl.textContent = count >= 100 ? count + '+' : count;
  }
  if (langEl) {
    const uniqueLangs = new Set(movies.map(m => m.lang)).size;
    langEl.textContent = uniqueLangs + '+';
  }

  /* Back to Top */
  const btn = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) btn.classList.add('visible');
    else btn.classList.remove('visible');
  }, { passive: true });

  /* Close modal on Escape key */
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
});
const observerOptions = {
  threshold: 0.1 
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    // செக்‌ஷன் ஸ்க்ரீனுக்குள் வரும்போது
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    } 
    // செக்‌ஷன் ஸ்க்ரீனை விட்டு வெளியே செல்லும்போது பழைய நிலைக்குத் திரும்ப
    else {
      entry.target.style.opacity = "0";
      entry.target.style.transform = "translateY(30px)";
    }
  });
}, observerOptions);

// அனிமேஷன் தேவைப்படும் செக்‌ஷன்கள்
document.querySelectorAll('.section').forEach(section => {
  section.style.opacity = "0";
  section.style.transform = "translateY(30px)";
  section.style.transition = "all 0.6s ease-out"; // ஸ்மூத் அனிமேஷன்
  observer.observe(section);
});