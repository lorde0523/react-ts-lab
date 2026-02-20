import { useMemo, useState } from 'react';

type Lesson = {
  id: number;
  title: string;
  reactCode: string;
  vueHint: string;
  mission: string;
};

const LESSONS: Lesson[] = [
  {
    id: 1,
    title: 'JSX와 컴포넌트',
    reactCode: `function WelcomeCard() {
  const name = 'React 입문자';
  return <h2>안녕하세요, {name}님!</h2>;
}`,
    vueHint:
      'Vue의 <template>와 비슷하지만, React는 JSX(JavaScript 안의 HTML 문법)를 사용합니다.',
    mission: 'name 값을 본인 이름으로 바꾸고 문장 하나를 더 출력해보세요.',
  },
  {
    id: 2,
    title: 'Props 전달',
    reactCode: `type BadgeProps = { level: string };

function Badge({ level }: BadgeProps) {
  return <span>현재 레벨: {level}</span>;
}

<Badge level="초급" />`,
    vueHint:
      'Vue의 props와 개념이 동일합니다. 단, React는 함수 인자의 객체 구조 분해로 받는 경우가 많습니다.',
    mission: 'Badge에 color prop을 추가해서 스타일을 바꿔보세요.',
  },
  {
    id: 3,
    title: 'State와 이벤트',
    reactCode: `const [count, setCount] = useState(0);

<button onClick={() => setCount((prev) => prev + 1)}>
  {count}
</button>`,
    vueHint:
      'Vue의 ref/reactive와 유사한 역할을 합니다. React에서는 state를 직접 수정하지 않고 setter를 호출합니다.',
    mission: '+1, -1 버튼을 각각 만들어서 카운터를 완성해보세요.',
  },
  {
    id: 4,
    title: '조건부 렌더링 & 리스트',
    reactCode: `const todos = ['React 설치', '컴포넌트 만들기'];

{todos.length === 0 ? (
  <p>할 일이 없습니다.</p>
) : (
  <ul>{todos.map((todo) => <li key={todo}>{todo}</li>)}</ul>
)}`,
    vueHint:
      'Vue의 v-if, v-for를 JSX 표현식으로 직접 작성한다고 생각하면 이해가 빠릅니다.',
    mission: '완료 여부를 나타내는 done 필드를 추가해 완료 항목만 출력해보세요.',
  },
  {
    id: 5,
    title: '폼 입력 다루기',
    reactCode: `const [email, setEmail] = useState('');

<input
  value={email}
  onChange={(event) => setEmail(event.target.value)}
/>`,
    vueHint:
      'Vue의 v-model과 비슷한 동작을 value + onChange 조합으로 명시적으로 구현합니다.',
    mission: '이름(name) 필드를 하나 더 추가하고 제출 버튼을 눌렀을 때 alert로 출력해보세요.',
  },
];

function App() {
  const [selectedLessonId, setSelectedLessonId] = useState(LESSONS[0].id);
  const [progress, setProgress] = useState<Record<number, boolean>>({});

  const selectedLesson = useMemo(
    () => LESSONS.find((lesson) => lesson.id === selectedLessonId) ?? LESSONS[0],
    [selectedLessonId],
  );

  const completedCount = Object.values(progress).filter(Boolean).length;

  const handleToggleProgress = (lessonId: number) => {
    setProgress((prev) => ({
      ...prev,
      [lessonId]: !prev[lessonId],
    }));
  };

  return (
    <main className="course-layout">
      <header className="hero">
        <p className="chip">Vue → React 기초 코스</p>
        <h1>Vue 경험자를 위한 React 입문 실습</h1>
        <p>
          이미 Vue를 써봤다면, React는 "다른 문법 + 같은 목표"입니다. 아래 레슨을 하나씩 완료해보세요.
        </p>
        <strong>
          진행률: {completedCount}/{LESSONS.length}
        </strong>
      </header>

      <section className="content-grid">
        <aside className="lesson-list">
          <h2>레슨 목록</h2>
          {LESSONS.map((lesson) => {
            const done = progress[lesson.id] ?? false;
            return (
              <button
                key={lesson.id}
                className={`lesson-button ${selectedLessonId === lesson.id ? 'active' : ''}`}
                onClick={() => setSelectedLessonId(lesson.id)}
                type="button"
              >
                <span>
                  {lesson.id}. {lesson.title}
                </span>
                {done && <span aria-label="완료">✅</span>}
              </button>
            );
          })}
        </aside>

        <article className="lesson-detail">
          <h2>
            {selectedLesson.id}. {selectedLesson.title}
          </h2>

          <div className="card">
            <h3>React 코드 예시</h3>
            <pre>
              <code>{selectedLesson.reactCode}</code>
            </pre>
          </div>

          <div className="card">
            <h3>Vue 사용자 관점 설명</h3>
            <p>{selectedLesson.vueHint}</p>
          </div>

          <div className="card">
            <h3>실습 미션</h3>
            <p>{selectedLesson.mission}</p>
            <button
              className="mission-button"
              onClick={() => handleToggleProgress(selectedLesson.id)}
              type="button"
            >
              {progress[selectedLesson.id] ? '완료 취소' : '완료 체크'}
            </button>
          </div>
        </article>
      </section>
    </main>
  );
}

export default App;
