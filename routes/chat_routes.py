from flask import Blueprint, request, jsonify
import os
import json

chat_bp = Blueprint("chat", __name__)

# # 데이터 파일 경로
# DATA_DIR = "data"
# DATA_PATH = os.path.join(DATA_DIR, "jbot_knowledge.json")

# # 데이터 초기화
# os.makedirs(DATA_DIR, exist_ok=True)
# if not os.path.exists(DATA_PATH):
#     with open(DATA_PATH, 'w', encoding='utf-8') as f:
#         json.dump({}, f, ensure_ascii=False, indent=2)

# # 데이터 로딩
# with open(DATA_PATH, 'r', encoding='utf-8') as f:
#     knowledge = json.load(f)

# @chat_bp.route("/chat", methods=["POST"])
# def chat():
#     user_msg = request.json.get("message", "").strip().lower()

#     if user_msg in knowledge:
#         return jsonify({"reply": knowledge[user_msg]})
    
#     return jsonify({"reply": f"'{user_msg}'에 대한 답변을 모르겠어요. 답변을 알려주세요!"})

# @chat_bp.route("/learn", methods=["POST"])
# def learn():
#     data = request.json
#     question = data.get("question", "").strip().lower()
#     answer = data.get("answer", "").strip()

#     if question and answer:
#         knowledge[question] = answer
#         with open(DATA_PATH, 'w', encoding='utf-8') as f:
#             json.dump(knowledge, f, ensure_ascii=False, indent=2)
#         return jsonify({"status": "학습 완료!"})

#     return jsonify({"status": "입력이 유효하지 않습니다."}), 400