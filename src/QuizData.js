

async function getQuizData() {
    const url = "https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple";
    return fetch(url)
        .then((res) => res.json())
        .then((data) => {
            return data["results"];
        })
        .then((data) => {
            const questionList = [];
            for(const quis of data) {
                const qustion = {
                    question: quis["question"],
                    answer: quis["correct_answer"],
                    options: quis["incorrect_answers"].concat(quis["correct_answer"])
                };
                console.log(qustion);
                questionList.push(qustion);
            };
            
            return questionList;
        }).catch((err) => console.log(err));
}


export default await getQuizData