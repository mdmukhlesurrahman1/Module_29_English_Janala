// Lesson Name Load From Server

const loadLessons = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")    //promise to response
        .then(res => res.json())                                    //promise to response
        .then(json => displayLessons(json.data));
};

// Display Lesson Name With Click Event

const displayLessons = (lessons) => {
    // 1. get the container and empty
    const allLessons = document.getElementById('all-lesson');
    allLessons.innerHTML = "";
    // 2. get into every lessons
    for (let lesson of lessons) {
        // 3. create Element
        const LessonBtn = document.createElement('div');
        LessonBtn.innerHTML = `
                            <button onclick ="loadLessonWord(${lesson.level_no})" class="btn btn-outline btn-primary">
                            <i class="fa-solid fa-book-open pointer-events-none"></i> Lesson - ${lesson.level_no}
                            </button>
        `;
        // 4. Append Child
        allLessons.append(LessonBtn);
    }
};

// Button Data Load
const loadLessonWord = (id) => {
    const url = `https://openapi.programming-hero.com/api/level/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(json => displayLessonWord(json.data)
        );
};

// Button Data Display in Card
const displayLessonWord = (words) => {
    const wordContainer = document.getElementById("word-container");
    wordContainer.innerHTML = "";

    words.forEach(word => {
        const card = document.createElement("div");
        card.innerHTML = `
                        <div class="bg-base-100 rounded-md shadow-sm text-center py-8 px-5 space-y-3">
                            <h2 class="font-bold text-xl">${word.word}</h2>
                            <p class="font-medium text-xm">Meaning / Pronunciation</p>
                            <p class="font-bangla font-semibold text-lg">${word.meaning} / ${word.pronunciation}</p>
                            <div class="flex justify-between">
                                <button class="btn"><i class="fa-solid fa-circle-info"></i></button>
                                <button class="btn"><i class="fa-solid fa-volume-high"></i></button>
                            </div>
                        </div>
        `;
        wordContainer.append(card);
    });

}

loadLessons();