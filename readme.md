

### ✅ 1. AI 기록 요약 기능

##### “오늘 공부한 걸 자동으로 정리해주는 비서”

- Markdown 형식 TIL 글을 저장하면, GPT 기반 AI(JBOT)이 핵심 내용을 뽑아 요약 정리

- 키워드, 요점, 오늘의 배운 점 등을 자동 생성

- 나중에 ‘한 줄 요약 모아보기’ 기능도 가능

##### 📌 학습한 양을 한눈에 정리하고 싶을 때 딱!!

<hr/>

### 2. 🤖 채팅봇 비서 (Jbot)

##### “나만의 개발 질문 도우미 + 일정 알림 비서”

- 화면 우측 하단에 ‘Jbot’ 채팅 버튼

- 공부 질문, 기술 팁, 내가 쓴 TIL 기반 추천까지 해줌

- 나만의 FAQ를 학습시켜 커스터마이징도 가능

- 일정이나 할 일 남기면 “오늘 해야 할 것” 자동 알림


### 📦 파일구조

jay-ai/
│
├── app.py                ← Flask 앱 실행 파일
├── readme.md
├── .gitignore
│
├── routes/                      ← 라우터 분리 폴더
│   └── chat_routes.py           ← /chat, /learn 라우트 정의
│
├── static/               ← 정적 파일 (JS, CSS, 이미지)
│   ├── style.css
│   └── script.js         ← 🔹 JavaScript 파일 여기에 추가
│
├── templates/            ← HTML 템플릿
│   └── index.html
│
└── data/                 ← (필요 시 사용하는 데이터 폴더)