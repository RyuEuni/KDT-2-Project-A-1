# from flask import Flask
# app = Flask(__name__)

# @app.route('/')
# def hello_world():
#     return 'Hello World!'

# if __name__ == '__main__':
#     app.run()

### 종목 데이터 DB에 저장 ###
import json
import mysql.connector

# JSON 파일 읽기
with open('stocks.json', 'r') as file:
    data = json.load(file)

# MySQL 연결 설정
db_config = {
    'host': 'localhost',
    'user': 'your_username',
    'password': 'your_password',
    'database': 'your_database'
}

# MySQL 연결 생성
cnx = mysql.connector.connect(**db_config)
cursor = cnx.cursor()

# 주식 종목 데이터 MySQL에 저장
for stock in data:
    stock_code = stock['code']
    stock_name = stock['name']

    # 쿼리 실행
    query = "INSERT INTO stocks (code, name) VALUES (%s, %s)"
    values = (stock_code, stock_name)
    cursor.execute(query, values)

# 변경 사항 저장 및 연결 종료
cnx.commit()
cursor.close()
cnx.close()