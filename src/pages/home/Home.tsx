import { useState } from 'react';
import './home.sass';
import { FaRegHeart, FaCheck } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

export default function Home() {
    const [more, setMore] = useState(false); // По умолчанию more = false
    const [completedTasks, setCompletedTasks] = useState<boolean[]>(Array(7).fill(false)); // Массив для выполнения заданий

    const handleJoinClick = (index: number) => {
        const newCompletedTasks = [...completedTasks];
        newCompletedTasks[index] = true; // Обновляем состояние для конкретного задания
        setCompletedTasks(newCompletedTasks);
    };

    const telegramForwardButton = (url: string | null, text = 'Привет от NotTon\nЗайди и получи 10 TON для оплаты комиссии для твоих таполок!') => {
        if (!url) return '#'; // Проверка на случай отсутствия ссылки
        const share_url = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
        return share_url;
    };

    const tasks = [
        { text: 'Подпишись на наш канал', url: 'https://t.me/notcoin_explore' },
        { text: 'Зайди в NOT PIXEL', url: 'https://t.me/notpixel/app?startapp=f5926461080' },
        { text: 'Зайди в Major', url: 'https://t.me/major/start?startapp=5926461080' },
        { text: 'Зайди в Cats', url: 't.me/catsgang_bot/join?startapp=9q84cg87TUd9F8FgDPJxY' },
        { text: 'Зайди в OXK Racer', url: 'https://t.me/OKX_official_bot/OKX_Racer?startapp=linkCode_89541109' },
        { text: 'Зайди в Blum', url: 'https://t.me/blum/app?startapp=ref_kZlacW6I6R' },
        { text: 'Пригласи одного друга 0/1', url: telegramForwardButton('') },
    ];

    return (
        <div className="Home">
            <div className="info">
                <p className='container'><FaRegHeart />Получи 10 TON от твоей любимой тапалки! </p>
            </div>
            <div className="main__content">
                <div className="user__balance">
                    <img className='logo' src="https://cryptologos.cc/logos/toncoin-ton-logo.png" alt="" />
                    <h2>Выполни задания и получи 10 TON на свой кошелек</h2>
                </div>
                <div className="tasks__container container">
                    <div className="daily__task">
                        <h2 className='section__name'>Main Tasks</h2>
                        <div className="task dashed">
                            <div className="task__info">
                                <p>{tasks[0].text}</p>
                                <span>
                                    <button className='check'>
                                        {completedTasks[0] ? <FaCheck /> : 'Check'}
                                    </button>
                                </span>
                            </div>
                            <a className='join' href={tasks[0].url} onClick={() => handleJoinClick(0)}>Join</a>
                        </div>
                    </div>
                    <div className="main__tasks">
                        <h2 className='section__name'>Tasks</h2>
                        {tasks.slice(1, more ? tasks.length : 3).map((task, index) => (
                            <div className="task" key={index + 1}>
                                <div className="task__info">
                                    <p>{task.text}</p>
                                    <span>
                                        <button className='check'>
                                            {completedTasks[index + 1] ? <FaCheck /> : 'Check'}
                                        </button>
                                    </span>
                                </div>
                                <a className='join' href={task.url} onClick={() => handleJoinClick(index + 1)}>Join</a>
                            </div>
                        ))}

                        {
                            more ? (
                                <>
                                    <button onClick={() => setMore(false)} className='button__more'>
                                        Show less tasks <IoIosArrowDown style={{ transform: 'rotate(180deg)' }} />
                                    </button>
                                </>
                            ) : (
                                <button onClick={() => setMore(true)} className='button__more'>
                                    Show more tasks <IoIosArrowDown />
                                </button>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
