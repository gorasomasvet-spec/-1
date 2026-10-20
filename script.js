// Episode database
const seasonsData = {
    1: [
        { ep: 1, title: "Зима близко", desc: "Лорд Эддард Старк обеспокоен вестями с Севера и согласием стать Десницей Короля." },
        { ep: 2, title: "Королевский тракт", desc: "Старки прощаются: Нед отправляется на юг, а Джон Сноу — на Ночную Стражу." },
        { ep: 3, title: "Лорд Сноу", desc: "Нед прибывает в Королевскую Гавань, а Тирион посещает Стену." },
        { ep: 4, title: "Калеки, бастарды и сломанные вещи", desc: "Нед расследует смерть предыдущего Десницы Короля — Джона Аррена." },
        { ep: 5, title: "Волк и Лев", desc: "Напряжение между Старками и Ланнистерами достигает пика." },
        { ep: 6, title: "Золотая корона", desc: "Нед замещает короля на Железном Троне и принимает важное решение." },
        { ep: 7, title: "Победа или смерть", desc: "Нед предъявляет ультиматум Серсее после раскрытия тайны наследников." },
        { ep: 8, title: "Острый конец", desc: "После ареста Неда его дочь Арья пытается сбежать из замка." },
        { ep: 9, title: "Бейлор", desc: "Судьба Эддарда Старка решается на ступенях Великой Септы Бейлора." },
        { ep: 10, title: "Пламя и кровь", desc: "Робб Старк провозглашен Королем Севера. Дейнерис совершает ритуал." }
    ],
    2: [
        { ep: 1, title: "Север помнит", desc: "Робб Старк продолжает войну против Ланнистеров. Тирион прибывает в Гавань." },
        { ep: 2, title: "Ночные земли", desc: "Арья знакомится с Джендри. Тирион укрепляет власть в столице." },
        { ep: 3, title: "То, что мертво, умереть не может", desc: "Кейтилин пытается заключить союз с Ренли Баратеоном." },
        { ep: 4, title: "Костяной Сад", desc: "Джоффри мучает подданных, а Дейнерис прибывает в великий город Кварт." },
        { ep: 5, title: "Призрак Харенхолла", desc: "Таинственная сила вмешивается в войну претендентов на трон." },
        { ep: 6, title: "Боги старые и новые", desc: "Теон Грейджой захватывает Винтерфелл. Джон Сноу встречает Игритт." },
        { ep: 7, title: "Человек без чести", desc: "Джейме Ланнистер предпринимает попытку побега из плена." },
        { ep: 8, title: "Принц Винтерфелла", desc: "Яра Грейджой прибывает в Винтерфелл, чтобы забрать брата." },
        { ep: 9, title: "Черноводная", desc: "Флот Станниса Баратеона штурмует Королевскую Гавань." },
        { ep: 10, title: "Валар Моргулис", desc: "Итоги битвы при Черноводной. Дейнерис посещает Дом Неумирающих." }
    ],
    3: [
        { ep: 1, title: "Каждый должен служить", desc: "Джон Сноу предстает перед Мансом Налетчиком — Королем-за-Стеной." },
        { ep: 2, title: "Тёмные крылья, тёмные вести", desc: "Бран Старк встречает Жойена и Миру Рид." },
        { ep: 3, title: "Аллея наказаний", desc: "Тирион получает новую должность. Дейнерис торгуется за Безупречных." },
        { ep: 4, title: "И теперь его дозор окончен", desc: "Дейнерис показывает свою настоящую силу в Астапоре." },
        { ep: 5, title: "Поцелованная огнем", desc: "Джейме и Бриенна попадают в плен. Пёс сражается с Бериком Дондаррионом." },
        { ep: 6, title: "Подъем", desc: "Джон и дикие совершают опасное восхождение на Стену." },
        { ep: 7, title: "Медведь и прекрасная дева", desc: "Дейнерис подступает к Юнкаю. Бриенна оказывается на арене." },
        { ep: 8, title: "Вторые сыновья", desc: "В Королевской Гавани проходит свадьба Тириона и Сансы." },
        { ep: 9, title: "Рейны из Кастамере", desc: "Свадьба Эдмара Талли в Близнецах превращается в Красную Свадьбу." },
        { ep: 10, title: "Миса", desc: "Итоги предательства в Близнецах. Дейнерис приветствуют как освободительницу." }
    ],
    4: [
        { ep: 1, title: "Два меча", desc: "Тайвин Ланнистер переплавляет Лёд. В столицу прибывает Оберин Мартелл." },
        { ep: 2, title: "Лев и Роза", desc: "Пурпурная Свадьба короля Джоффри и Маргери Тирелл." },
        { ep: 3, title: "Разрушительница оков", desc: "Санса бежит из столицы. Тирион обвинен в государственном преступлении." },
        { ep: 4, title: "Верный клятве", desc: "Джейме вручает Бриенне меч из валирийской стали." },
        { ep: 5, title: "Первый этого имени", desc: "Томмен коронован. Бран и его спутники попадают в засаду." },
        { ep: 6, title: "Законы богов и людей", desc: "Суд над Тирионом Ланнистером заканчивается требованием испытания поединком." },
        { ep: 7, title: "Пересмешник", desc: "Оберин Мартелл соглашается стать бойцом Тириона." },
        { ep: 8, title: "Гора и Змей", desc: "Решающий поединок между Оберином Мартеллом и Григором Клиганом." },
        { ep: 9, title: "Дозорные на Стене", desc: "Армия диких штурмует Чёрный Замок с двух сторон." },
        { ep: 10, title: "Дети", desc: "Джон Сноу отправляется к Мансу. Тирион совершает побег с помощью Вариса." }
    ],
    5: [
        { ep: 1, title: "Грядущие войны", desc: "Серсея и Джейме скорбят. В Миэрине активизируются Сыны Гарпии." },
        { ep: 2, title: "Дом Черного и Белого", desc: "Арья прибывает в Браавос. Джон Сноу получает новое назначение." },
        { ep: 3, title: "Его Воробейшество", desc: "Маргери выходит за Томмена. Серсея ищет союзников в религиозном ордене." },
        { ep: 4, title: "Sons of the Harpy", desc: "Сыны Гарпии устраивают засаду в Миэрине." },
        { ep: 5, title: "Убей мальчишку", desc: "Джон Сноу принимает непопулярное решение о союзе с дикими." },
        { ep: 6, title: "Непоклоненные, несломленные, несдавшиеся", desc: "Арья делает первые шаги в Безликих. Песчаные Змейки атакуют Джейме." },
        { ep: 7, title: "Дар", desc: "Джон отправляется в Суровый Долу. Серсея попадает в собственную ловушку." },
        { ep: 8, title: "Суровый Дол", desc: "Король Ночи и армия мертвых атакуют поселение диких." },
        { ep: 9, title: "Танец драконов", desc: "Нападение на арену в Миэрине. Дрогон приходит на помощь Дейнерис." },
        { ep: 10, title: "Милосердие Матери", desc: "Позорное шествие Серсеи. Трагический финал пятого сезона." }
    ],
    6: [
        { ep: 1, title: "Красная женщина", desc: "Судьба Джона Сноу. Мелисандра раскрывает свою истинную сущность." },
        { ep: 2, title: "Дом", desc: "Бран тренируется с Трехглавым Вороном. Мелисандра совершает ритуал." },
        { ep: 3, title: "Клятвопреступник", desc: "Джон Сноу вершит правосудие. Арья восстанавливает зрение." },
        { ep: 4, title: "Книга Неопалимой", desc: "Санса воссоединяется с Джоном. Дейнерис удивляет вождей дотракийцев." },
        { ep: 5, title: "Дверь", desc: "Тайна имени Ходора и происхождение Белых Ходоков." },
        { ep: 6, title: "Кровь моей крови", desc: "Бран и Мира спасаются благодаря старому другу." },
        { ep: 7, title: "Сломленный человек", desc: "Возвращение Пса. Санса и Джон собирают войска Севера." },
        { ep: 8, title: "Никто", desc: "Арья завершает обучение в Браавосе и объявляет свое имя." },
        { ep: 9, title: "Битва бастардов", desc: "Эпическое сражение армии Джона Сноу и Рамси Болтона за Винтерфелл." },
        { ep: 10, title: "Ветры зимы", desc: "Серсея использует дикий огонь. Раскрытие тайны происхождения Джона." }
    ],
    7: [
        { ep: 1, title: "Драконий Камень", desc: "Дейнерис ступает на землю предков. Арья мстит за Красную Свадьбу." },
        { ep: 2, title: "Бурерожденная", desc: "Дейнерис собирает военный совет. Дейрон совершает визит на Север." },
        { ep: 3, title: "Правосудие королевы", desc: "Первая встреча Дейнерис Таргариен и Джона Сноу." },
        { ep: 4, title: "Трофеи войны", desc: "Дейнерис и Дрогон атакуют караван Ланнистеров." },
        { ep: 5, title: "Восточный Дозор", desc: "Джон Сноу формирует отряд для вылазки за Стеной." },
        { ep: 6, title: "За Стеной", desc: "Опасная миссия по захвату упыря заканчивается вмешательством драконов." },
        { ep: 7, title: "Дракон и Волк", desc: "Переговоры в Драконьей Яме. Стена падает под ударом ледяного дракона." }
    ],
    8: [
        { ep: 1, title: "Винтерфелл", desc: "Дейнерис и Джон прибывают в Винтерфелл. Сэм раскрывает правду Джон." },
        { ep: 2, title: "Рыцарь Семью Королевств", desc: "Последняя ночь перед великой битвой с армией мертвых." },
        { ep: 3, title: "Долгая Ночь", desc: "Великая Битва за Винтерфелл против Короля Ночи." },
        { ep: 4, title: "Последние из Старков", desc: "Прощание с павшими и подготовка к походу на Королевскую Гавань." },
        { ep: 5, title: "Колокола", desc: "Решающий штурм столицы и разрушение Королевской Гавани." },
        { ep: 6, title: "Железный Трон", desc: "Финал истории. Выбор нового правителя и судьба всех героев." }
    ]
};

let currentSeason = 1;
let currentEpisodeIndex = 0;

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    renderSeasonTabs();
    loadSeason(1);
});

// Render Season Navigation
function renderSeasonTabs() {
    const tabsContainer = document.getElementById('seasonTabs');
    tabsContainer.innerHTML = '';
    
    for (let i = 1; i <= 8; i++) {
        const btn = document.createElement('button');
        btn.className = `season-tab ${i === currentSeason ? 'active' : ''}`;
        btn.innerText = `Сезон ${i}`;
        btn.onclick = () => selectSeason(i);
        tabsContainer.appendChild(btn);
    }
}

// Select Active Season
function selectSeason(seasonNum) {
    currentSeason = seasonNum;
    renderSeasonTabs();
    loadSeason(seasonNum);
}

// Load Season Episodes
function loadSeason(seasonNum) {
    const grid = document.getElementById('episodesGrid');
    grid.innerHTML = '';
    
    const episodes = seasonsData[seasonNum];
    episodes.forEach((ep, index) => {
        const card = document.createElement('div');
        card.className = `episode-card ${index === currentEpisodeIndex ? 'active' : ''}`;
        card.onclick = () => playEpisode(seasonNum, index);
        
        card.innerHTML = `
            <div>
                <div class="ep-num">Серия ${ep.ep}</div>
                <div class="ep-title">${ep.title}</div>
                <div class="ep-desc">${ep.desc}</div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Play Selected Episode
function playEpisode(season, index) {
    currentSeason = season;
    currentEpisodeIndex = index;
    
    const episode = seasonsData[season][index];
    const iframe = document.getElementById('videoIframe');
    const title = document.getElementById('currentEpisodeTitle');
    
    // Update player URL
    iframe.src = `https://vidsrc.me/embed/tv?imdb=tt0944947&season=${season}&episode=${episode.ep}`;
    title.innerText = `Сезон ${season}, Серия ${episode.ep}: «${episode.title}»`;
    
    // Refresh card selection
    loadSeason(season);
    
    // Smooth scroll to player
    document.getElementById('player-section').scrollIntoView({ behavior: 'smooth' });
}

// Control Buttons (Next / Prev)
function changeEpisode(direction) {
    const currentSeasonEpisodes = seasonsData[currentSeason];
    let newIndex = currentEpisodeIndex + direction;
    
    if (newIndex >= 0 && newIndex < currentSeasonEpisodes.length) {
        playEpisode(currentSeason, newIndex);
    } else if (direction > 0 && currentSeason < 8) {
        selectSeason(currentSeason + 1);
        playEpisode(currentSeason + 1, 0);
    } else if (direction < 0 && currentSeason > 1) {
        const prevSeasonEps = seasonsData[currentSeason - 1];
        selectSeason(currentSeason - 1);
        playEpisode(currentSeason - 1, prevSeasonEps.length - 1);
    }
}

// Search Episodes
function filterEpisodes() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const cards = document.querySelectorAll('.episode-card');
    
    cards.forEach(card => {
        const text = card.innerText.toLowerCase();
        card.style.display = text.includes(query) ? 'flex' : 'none';
    });
}

// Theater Mode Toggle
function toggleTheaterMode() {
    document.body.classList.toggle('theater-mode');
}

// Voice Selector
function setVoice(btn, voiceType) {
    document.querySelectorAll('.voice-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}
