import React, { useState } from 'react';
import { observer } from 'mobx-react';
import './style.scss';

const MOCK_DATA = {
    title: '50 вопросов для повышения самооценки',
    description: 'Оцените свою уверенность в себе, ответив на несколько простых вопросов.',
    instructions: 'Ответьте на вопросы честно, это поможет вам понять, в каких областях вам стоит развиваться.',
    blocks: [
        {
            title: 'Блок 1: Вера в себя',
            questions: [
                {text: 'Оцените свою веру в себя по шкале от 1 до 10.', answer: ''},
                {text: 'Что помогает вам верить в себя?', answer: ''},
            ]
        },
        {
            title: 'Блок 2: Достижения',
            questions: [
                {text: 'Что для вас значит успех?', answer: ''},
                {text: 'Какие достижения в жизни вас гордят?', answer: ''},
            ]
        },
        {
            title: 'Блок 3: Цели',
            questions: [
                {text: 'Какие цели вы хотите достичь в ближайшее время?', answer: ''},
                {text: 'Что мешает вам достигать этих целей?', answer: ''},
            ]
        }
    ]
};

const Content = observer(() => {
    const [data, setData] = useState(MOCK_DATA);
    const [analysisResult, setAnalysisResult] = useState(null);

    const handleAnswerChange = (blockIndex, questionIndex, value) => {
        const updatedData = { ...data };
        updatedData.blocks[blockIndex].questions[questionIndex].answer = value;
        setData(updatedData);
    };

    const collectAnswers = () => {
        const answers = data.blocks.flatMap(block => block.questions.map(q => q.answer));
        return answers;
    };

    const analyzeAnswers = () => {
        const answers = collectAnswers();
        
        // Simple scoring system based on answers:
        const positiveKeywords = ['успех', 'достижения', 'цели', 'уверенность', 'счастье'];
        const positiveMentions = answers.reduce((acc, answer) => {
            positiveKeywords.forEach(word => {
                if (answer.includes(word)) acc++;
            });
            return acc;
        }, 0);

        const score = positiveMentions * 10; // For simplicity, each positive mention adds 10 points

        const summary = {
            totalAnswers: answers.length,
            positiveMentions,
            score,
            recommendation: score > 30
                ? "Вы демонстрируете позитивный настрой! Продолжайте двигаться в том же направлении."
                : "Попробуйте сосредоточиться на достижениях и целях, чтобы укрепить свою уверенность."
        };

        setAnalysisResult(summary);
    };

    return (
        <div className='content'>
            <a href="https://treningnl.ru/50-voprosov-dlya-povysheniya-samoocenki/">Источник</a>
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            <p>{data.instructions}</p>
            {data.blocks.map((block, blockIndex) => (
                <div key={`block_${blockIndex}`} className='block'>
                    <h2>{block.title}</h2>
                    <ul>
                        {block.questions.map((question, questionIndex) => (
                            <li key={`${blockIndex}_question_${questionIndex}`}>
                                <p>{question.text}</p>
                                <input 
                                    type="text"
                                    value={question.answer}
                                    onChange={(e) => handleAnswerChange(blockIndex, questionIndex, e.target.value)}
                                    placeholder="Введите ваш ответ"
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            ))}

            <button onClick={analyzeAnswers}>Анализировать ответы</button>

            {analysisResult && (
                <div className='analysis-result'>
                    <h2>Результат анализа:</h2>
                    <p>Количество ответов: {analysisResult.totalAnswers}</p>
                    <p>Упоминания позитивных слов: {analysisResult.positiveMentions}</p>
                    <p>Ваш результат: {analysisResult.score} баллов</p>
                    <p>Рекомендация: {analysisResult.recommendation}</p>
                </div>
            )}
        </div>
    );
});

export { Content };
