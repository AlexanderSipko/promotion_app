import React, {useState} from 'react';
import { observer } from 'mobx-react';
import './style.scss';

const MOCK_DATA = {
    title: '50 вопросов для повышения самооценки',
    description: 'Верить в себя так же важно, как дышать, ходить, читать. Человек, потерявший веру в себя, теряет опору и пропускает возможности.\nТолько мы сами можем найти свою опору и развить ее, приняв ответственность за свою жизнь на себя.\nКоучинговая компания Next Level предлагает 50 вопросов для повышения веры в себя, ответы на которые помогут стать эффективным и успешным.\n',
    instructions: 'Выберите спокойное место, где Вы можете остаться сами с собой. Ответьте себе на эти вопросы. Отвечайте максимально честно и запишите свои ответы. Пишите о себе и про себя.',
    blocks: [
        {
            title: 'Блок 1: Текущая вера в себя',
            questions: [
                {text:'Что для вас значит вера в себя?', answer:''},
                {text:'Как бы изменилась ваша жизнь, если бы вы поверили в себя на 100%?', answer:''},
                {text:'Оцените свою веру в себя по шкале от 1 до 10.', answer:''},
                {text:'Что помогает вам верить в себя уже сейчас?', answer:''},
                {text:'Какие изменения нужны, чтобы уверенность стала максимальной?', answer:''},
            ]
        },
        {
            title: 'Блок 2: Личное признание и достижения',
            questions: [
                {text:'Вспомните моменты, когда вы были счастливы, и что их вызвало?', answer:''},
                {text:'В чем вы особенно успешны?', answer:''},
                {text:'Что у вас получается лучше всего сейчас?', answer:''},
                {text:'В чем вы себя считаете экспертом?', answer:''},
                {text:'Какие качества помогают вам достигать успеха?', answer:''},
            ]
        },
        {
            title: 'Блок 3: Похвала от себя и других',
            questions: [
                {text:'За что вы можете себя похвалить?', answer:''},
                {text:'Какие качества в вас ценят друзья?', answer:''},
                {text:'Что ценят в вас коллеги?', answer:''},
                {text:'Что хорошего о вас скажет семья?', answer:''},
            ]
        },
        {
            title: 'Блок 4: Идеальный день и цели',
            questions: [
                {text:'Опишите свой идеальный день. Какими событиями он наполнен?', answer:''},
                {text:'Какие качества проявляются в этот день? Что он вам приносит?', answer:''},
                {text:'Какие ваши качества чаще всего встречаются в ответах?', answer:''},
            ]
        },
        {
            title: 'Блок 5: Применение сильных качеств',
            questions: [
                {text:'Где еще вы можете использовать свои сильные стороны?', answer:''},
                {text:'Какими новыми качествами вы хотите обладать для уверенности?', answer:''},
                {text:'Что мешает вам проявлять их?', answer:''},
            ]
        },
        {
            title: 'Блок 6: Поддержка и ресурсы',
            questions: [
                {text:'Кто или что поможет вам развить нужные качества?', answer:''},
                {text:'Что или кто может мешать на этом пути, и как устранить преграды?', answer:''},
                {text:'На кого вы можете положиться для поддержки?', answer:''},
            ]
        },
        {
            title: 'Блок 7: План действий и цели',
            questions: [
                {text:'Какой первый шаг вы сделаете для уверенности в себе?', answer:''},
                {text:'Напишите вдохновляющее послание для себя.', answer:''},
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
        
        // Пример анализа
        const wordCount = answers.reduce((acc, answer) => acc + answer.split(" ").length, 0);
        
        const positiveWords = ['успех', 'счастье', 'уверенность'];
        const positiveMentions = answers.reduce((acc, answer) => {
            positiveWords.forEach(word => {
                if (answer.includes(word)) acc++;
            });
            return acc;
        }, 0);
        
        const summary = {
            totalAnswers: answers.length,
            wordCount,
            positiveMentions,
            recommendation: positiveMentions > 5 
                ? "Вы демонстрируете позитивный настрой, что может помочь в достижении целей!"
                : "Попробуйте сосредоточиться на положительных моментах и достижениях, чтобы укрепить веру в себя."
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
                    <h3>{block.title}</h3>
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
                    <h3>Результат анализа:</h3>
                    <p>Количество ответов: {analysisResult.totalAnswers}</p>
                    <p>Общее количество слов: {analysisResult.wordCount}</p>
                    <p>Упоминания позитивных слов: {analysisResult.positiveMentions}</p>
                    <p>Рекомендация: {analysisResult.recommendation}</p>
                </div>
            )}
        </div>
    );
});

export { Content };
