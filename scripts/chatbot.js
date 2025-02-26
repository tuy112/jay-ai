// 챗봇 클래스 정의
class SimpleBot {
    constructor() {
        // 기본 응답 사전
        this.responses = {
            "안녕": ["안녕하세요!", "반가워요!", "어서오세요!"],
            "이름": ["저는 자바스크립트 챗봇이에요.", "제 이름은 JS봇이에요."],
            "날씨": ["오늘은 날씨가 좋아요.", "날씨 정보는 업데이트 중이에요."],
            "도움": ["무엇을 도와드릴까요?", "궁금한 것이 있으신가요?"],
            "시간": ["지금 시간을 알려드립니다.", "시간 확인 중입니다..."],
            "음악": ["어떤 음악을 좋아하세요?", "음악 추천해 드릴까요?"],
            "영화": ["최근에 본 영화가 있으신가요?", "영화 추천해 드릴까요?"],
            "음식": ["배고프신가요?", "맛있는 음식이 생각나는군요."],
            "취미": ["어떤 취미를 가지고 계세요?", "취미 활동은 중요해요."]
        };
        
        // 인사 및 작별 인사
        this.greetings = ["안녕", "하이", "헬로", "반가워"];
        this.farewells = ["잘가", "바이", "안녕히", "종료"];
    }
    
    getResponse(userInput) {
        // 소문자로 변환하여 처리
        const text = userInput.toLowerCase();
        
        // 인사 확인
        for (const greeting of this.greetings) {
            if (text.includes(greeting)) {
                return this.getRandomResponse("안녕");
            }
        }
        
        // 작별 인사 확인
        for (const farewell of this.farewells) {
            if (text.includes(farewell)) {
                return "조심히 들어가고~ 👋";
            }
        }
        
        // 키워드 기반 응답
        for (const [key, responses] of Object.entries(this.responses)) {
            if (text.includes(key)) {
                return this.getRandomResponse(key);
            }
        }
        
        // 기본 응답
        const defaultResponses = [
            "흥미로운 이야기네요.",
            "더 자세히 말씀해 주세요.",
            "어떻게 도와드릴까요?",
            "그것에 대해 더 알고 싶어요.",
            "계속해서 말씀해 주세요."
        ];
        
        return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
    }
    
    getRandomResponse(key) {
        const responses = this.responses[key];
        return responses[Math.floor(Math.random() * responses.length)];
    }
}

// DOM이 로드된 후 실행
document.addEventListener('DOMContentLoaded', () => {
    const chatArea = document.getElementById('chatArea');
    const userInput = document.getElementById('userInput');
    const sendButton = document.getElementById('sendButton');
    
    // 챗봇 인스턴스 생성
    const bot = new SimpleBot();
    
    // 웰컴 메시지 추가
    addMessage("ㅎㅇ?", false);
    
    // 메시지 전송 이벤트 리스너
    sendButton.addEventListener('click', sendMessage);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    // 메시지 전송 함수
    function sendMessage() {
        const text = userInput.value.trim();
        
        if (text) {
            // 사용자 메시지 추가
            addMessage(text, true);
            userInput.value = '';
            
            // 챗봇 응답 추가 (약간의 지연으로 자연스러움 부여)
            setTimeout(() => {
                const response = bot.getResponse(text);
                addMessage(response, false);
            }, 500);
        }
    }
    
    // 메시지 추가 함수
    function addMessage(text, isUser) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.classList.add(isUser ? 'user-message' : 'bot-message');
        messageElement.textContent = text;
        
        chatArea.appendChild(messageElement);
        
        // 스크롤을 아래로 이동
        chatArea.scrollTop = chatArea.scrollHeight;
    }
});