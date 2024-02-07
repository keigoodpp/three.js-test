import React, { useState, useEffect } from 'react';
import quizData from './quizdata';
import ProgressBar from './ProgressBar'
import MissionProgress from './MissionProgress'
import ChatComponent from './ChatComponent';
import MissionProgressCircle from './MissionProgressCircle'
import 'tailwindcss/tailwind.css';

const QuizComponent = () => {
  // クイズのデータをステートに設定
  const [questions, setQuestions] = useState(quizData);
  // 現在の問題とサブ問題のインデックスをステートに設定
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentSubQuestionIndex, setCurrentSubQuestionIndex] = useState(0);
  // 選択されたオプションとサブオプションをステートに設定
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedSubOption, setSelectedSubOption] = useState("");
  const [selectedSubOptions, setSelectedSubOptions] = useState([]);
  // 正解数とクイズ終了フラグをステートに設定
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [finished, setFinished] = useState(false);
  // クイズ開始前フラグをステートに設定
const [beforeStart, setBeforeStart] = useState(true);
  // 説明とサブ問題表示フラグをステートに設定
  const [mainExplanation, setMainExplanation] = useState('');
  const [subExplanation, setSubExplanation] = useState('');
  const [showSubQuestion, setShowSubQuestion] = useState(false);
  // 回答履歴をステートに設定
  const [answerHistory, setAnswerHistory] = useState(() => {
    const storedAnswerHistory = localStorage.getItem('answerHistory');
    return storedAnswerHistory ? JSON.parse(storedAnswerHistory) : [];
  });
  // 習得度の範囲をステートに設定
const [scoreRange, setScoreRange] = useState({ min: -100, max: 5 });

  // ローカルストレージから回答履歴を取得し、ステートに設定
  useEffect(() => {
    const storedAnswerHistory = localStorage.getItem('answerHistory');
    if (storedAnswerHistory) {
      setAnswerHistory(JSON.parse(storedAnswerHistory));
    }
  }, []);

  // 選択された回答が正しいかチェックする関数
const checkSelectedAnswer = (selectedAnswers, correctAnswers) => {
  // 単一選択の場合
  if (correctAnswers.length === 1) {
    return correctAnswers.includes(selectedAnswers[0]);
  }
  // 複数選択の場合
  else {
    if (selectedAnswers.length !== correctAnswers.length) {
      return false;
    }

    for (const answer of selectedAnswers) {
      if (!correctAnswers.includes(answer)) {
        return false;
      }
    }

    return true;
  }
};

// メイン問題の回答を処理する関数
const handleMainAnswer = () => {
  const isCorrect = checkSelectedAnswer(selectedOptions, questions[currentQuestionIndex].correctAnswers);
  if (isCorrect) {
    setCorrectAnswers(correctAnswers + 1);
    setMainExplanation('');

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOptions([]);  // 選択肢をリセット
      setShowSubQuestion(false);
    } else {
      setFinished(true);
    }
  } else {
    setMainExplanation(questions[currentQuestionIndex].explanation);
    if (questions[currentQuestionIndex].subQuestions.length > 0) {
      setShowSubQuestion(true);
    }
  }

  updateAnswerHistory(isCorrect);
};

// サブ問題の回答を処理する関数
const handleSubAnswer = () => {
  const isCorrect = checkSelectedAnswer(selectedSubOptions, questions[currentQuestionIndex].subQuestions[currentSubQuestionIndex].correctAnswers);
  if (isCorrect) {
    setCorrectAnswers(correctAnswers + 1);
    setSubExplanation('');

    if (currentSubQuestionIndex < questions[currentQuestionIndex].subQuestions.length - 1) {
      setCurrentSubQuestionIndex(currentSubQuestionIndex + 1);
      setSelectedSubOptions([]);  // 選択肢をリセット
    } else {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setCurrentSubQuestionIndex(0);
        setSelectedOptions([]);  // 選択肢をリセット
        setShowSubQuestion(false);
        setMainExplanation('');  // メイン問題の解説をリセット
      } else {
        setFinished(true);
      }
    }
  } else {
    setSubExplanation(questions[currentQuestionIndex].subQuestions[currentSubQuestionIndex].explanation);
  }

  updateAnswerHistory(isCorrect);
};
// 回答履歴を更新し、ローカルストレージに保存する関数
const updateAnswerHistory = (isCorrect) => {
  const newAnswerHistory = [
    ...answerHistory,
    {
      id: questions[currentQuestionIndex].id,
      question: questions[currentQuestionIndex].question,
      answer: selectedOption || selectedOptions,
      isCorrect,
      date: new Date(),  // 回答の日付を追加
    },
  ];
  setAnswerHistory(newAnswerHistory);
  localStorage.setItem('answerHistory', JSON.stringify(newAnswerHistory));
};

// 選択肢の選択状態を更新する関数
const handleOptionChange = (e, setSelected) => {
  if (e.target.type === 'checkbox') {
    if (e.target.checked) {
      setSelected(prev => [...prev, e.target.value]);
    } else {
      setSelected(prev => prev.filter(option => option !== e.target.value));
    }
  } else {
    setSelected([e.target.value]);
  }
};

// 各問題の正解数と不正解数を保存するオブジェクト
const questionScores = {};

// 回答履歴をループして各問題のスコアを計算
answerHistory.forEach(answer => {
  if (!questionScores[answer.id]) {
    questionScores[answer.id] = 0;
  }

  if (answer.isCorrect) {
    questionScores[answer.id] += 2;
  } else {
    questionScores[answer.id] -= 3;
  }
});

// 各問題の習得度を計算して問題オブジェクトに追加
questions.forEach(question => {
  if (questionScores[question.id]) {
    question.score = questionScores[question.id];
  } else {
    question.score = 0;
  }
});

// 習得度の範囲を選択するための関数
const handleScoreRangeChange = (min, max) => {
  setScoreRange({ min, max });
};

// 習得度の範囲に基づいて問題をフィルタリング
const filteredQuestions = questions.filter(question => question.score >= scoreRange.min && question.score <= scoreRange.max);

// 範囲選択画面からクイズ画面に切り替えるための関数
const startQuiz = () => {
  // 習得度の範囲に基づいて問題をフィルタリング
  const filteredQuestions = questions.filter(question => question.score >= scoreRange.min && question.score <= scoreRange.max);
  // 習得度の低い順に問題をソート
  const sortedQuestions = filteredQuestions.sort((a, b) => a.score - b.score);
  // ソートした問題をステートに設定
  setQuestions(sortedQuestions);
  setBeforeStart(false);
};


// 成績をリセットする関数
const resetScore = () => {
  if (window.confirm('本当に成績をリセットしますか？')) {
    setCorrectAnswers(0);
    setAnswerHistory([]);
    localStorage.removeItem('answerHistory');
  }
};

// ローカルストレージから回答履歴を取得
const storedAnswerHistory = JSON.parse(localStorage.getItem('answerHistory')) || [];

// 今日の日付を取得
const today = new Date();
today.setHours(0, 0, 0, 0);

// 今週の最初の日を取得
const firstDayOfWeek = new Date(today);
firstDayOfWeek.setDate(today.getDate() - today.getDay());

// 今月の最初の日を取得
const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);

// 今日、今週、今月の正解数を計算
const dailyCompleted = storedAnswerHistory.filter(answer => new Date(answer.date) >= today && answer.isCorrect).length;
const weeklyCompleted = storedAnswerHistory.filter(answer => new Date(answer.date) >= firstDayOfWeek && answer.isCorrect).length;
const monthlyCompleted = storedAnswerHistory.filter(answer => new Date(answer.date) >= firstDayOfMonth && answer.isCorrect).length;

// 次の週の最初の日（次の日曜日）を取得
const nextWeek = new Date(today);
nextWeek.setDate(today.getDate() - today.getDay() + 7);

// 次の月の最初の日を取得
const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1);

// 更新までの残り日数を計算
const daysUntilNextWeek = Math.ceil((nextWeek - today) / (1000 * 60 * 60 * 24));
const daysUntilNextMonth = Math.ceil((nextMonth - today) / (1000 * 60 * 60 * 24));

// 残り日数を表示
useEffect(() => {
  console.log(`週ミッション更新まであと${daysUntilNextWeek}日`);
  console.log(`月ミッション更新まであと${daysUntilNextMonth}日`);
}, [daysUntilNextWeek, daysUntilNextMonth]);

// 全体の問題数
const totalQuestions = questions.length;

// 習得度が2以上の問題数
const OKScoreQuestions = questions.filter(question => question.score >= 2).length;
// 習得度が4以上の問題数
const highScoreQuestions = questions.filter(question => question.score >= 4).length;

// 習得度が4以上の問題の割合（全体のスコア）
const overallScore = ((OKScoreQuestions + highScoreQuestions) / 2 / totalQuestions) * 100;

return (
  <div className="p-6 bg-gray-100 min-h-screen">
    <ChatComponent />
  {beforeStart ? (
    <div className="space-y-4">
      <ProgressBar progress={overallScore} />
      <div className="flex flex-wrap justify-around items-start gap-4 mx-auto">
        <div className="flex-shrink-0">
          <MissionProgressCircle missionName="Daily Mission" completed={dailyCompleted} total={10} />
        </div>
        <div className="flex-shrink-0">
          <MissionProgressCircle missionName="Weekly Mission" completed={weeklyCompleted} total={50} />
        </div>
        <div className="flex-shrink-0">
          <MissionProgressCircle missionName="Monthly Mission" completed={monthlyCompleted} total={200} />
        </div>
      </div>
      
      <button onClick={startQuiz} className="px-4 py-2 bg-blue-500 text-white rounded mt-4 hover:bg-blue-700 active:scale-95 transition duration-200">Start Quiz</button>
      <button onClick={resetScore} className="px-4 py-2 bg-red-500 text-white rounded mt-4 hover:bg-red-700 active:scale-95 transition duration-200">Reset Score</button>
      <div><label className="text-lg leading-relaxed">習得度の範囲を選択：</label></div>
      <div className="flex space-x-2">
        <input type="number" min="-100" max="100" value={scoreRange.min} onChange={(e) => handleScoreRangeChange(e.target.value, scoreRange.max)} className="border-2 border-gray-300 rounded-md p-1" />
        <span> - </span>
        <input type="number" min="-100" max="100" value={scoreRange.max} onChange={(e) => handleScoreRangeChange(scoreRange.min, e.target.value)} className="border-2 border-gray-300 rounded-md p-1" />
      </div>
    </div>
  ) : (
      finished ? (
        <div className="text-center">
          <h1 className="text-4xl mb-4 text-blue-500">Quiz Finished</h1>
          <p className="text-xl">You answered {correctAnswers} out of {questions.length} questions correctly.</p>
        </div>
      ) : (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3 p-6">
          <h1 className="text-4xl mb-4 text-blue-500">Quiz</h1>
          <p className="text-green-500">習得度: {questions[currentQuestionIndex].score}</p>
          <p className="text-xl mb-4">{questions[currentQuestionIndex].question}</p>
          {questions[currentQuestionIndex].options.map((option, index) => (
            <div key={index} className="mb-2 flex items-center">
              <input
                type={questions[currentQuestionIndex].correctAnswers.length > 1 ? "checkbox" : "radio"}
                id={`option-${index}`}
                name="option"
                value={option}
                checked={selectedOptions.includes(option)}
                onChange={(e) => handleOptionChange(e, setSelectedOptions)}
                className="mr-2"
              />
              <label htmlFor={`option-${index}`}>{option}</label>
            </div>
          ))}
          <button onClick={handleMainAnswer} className="px-4 py-2 bg-blue-500 text-white rounded mt-4">Submit Answer</button>
          {mainExplanation && <p className="mt-4 text-red-500">{mainExplanation}</p>}
          {showSubQuestion && (
            <div className="mt-8">
              <h2 className="text-3xl mb-4 text-blue-500">Sub Question</h2>
              <p className="text-xl mb-4">{questions[currentQuestionIndex].subQuestions[currentSubQuestionIndex].question}</p>
              {questions[currentQuestionIndex].subQuestions[currentSubQuestionIndex].options.map((option, index) => (
                <div key={index} className="mb-2 flex items-center">
                  <input
                    type={questions[currentQuestionIndex].subQuestions[currentSubQuestionIndex].correctAnswers.length > 1 ? "checkbox" : "radio"}
                    id={`sub-option-${index}`}
                    name="sub-option"
                    value={option}
                    checked={selectedSubOptions.includes(option)}
                    onChange={(e) => handleOptionChange(e, setSelectedSubOptions)}
                    className="mr-2"
                  />
                  <label htmlFor={`sub-option-${index}`}>{option}</label>
                </div>
              ))}
              <button onClick={handleSubAnswer} className="px-4 py-2 bg-blue-500 text-white rounded mt-4">Submit Sub Answer</button>
              {subExplanation && <p className="mt-4 text-red-500">{subExplanation}</p>}
            </div>
          )}
        </div>
      )
    )}
  </div>
);
};

export default QuizComponent;