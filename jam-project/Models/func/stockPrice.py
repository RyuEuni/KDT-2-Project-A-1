from pykis import *
import dotenv
import mojito;
import json
from flask import Flask, jsonify
import os
import json
from prettytable import PrettyTable
import requests

dotenv_file = dotenv.find_dotenv()
dotenv.load_dotenv(dotenv_file)

key = os.environ['APIKey']
secret = os.environ['APISecret']
acc_no = os.environ['APIAccNo']

kis = PyKis(
    # 앱 키  예) Pa0knAM6JLAjIa93Miajz7ykJIXXXXXXXXXX
    appkey=key,
    # 앱 시크릿  예) V9J3YGPE5q2ZRG5EgqnLHn7XqbJjzwXcNpvY . . .
    appsecret=secret,
    # 가상 계좌 여부
    virtual_account=True,
    # 실시간 조회 비활성화
    realtime=False
)

#코스피, 코스닥 종목 검색 코드
# for market, stocks in kis.market.stock_search("에너지").items():
#     print(f' - - - {market} - - - ')
#     for stock in stocks:
#         print(stock.mksc_shrn_iscd, stock.hts_kor_isnm)



#종목 상세 - 현재가 조회
# stock = kis.stock('000660')
# price = stock.price()

# print(stock.code, stock.name)
# print(f'전일대비율: {price.prdy_ctrt:.2f}%')
# print(f'현재가: {price.stck_prpr:,}원')
# print(f'최저가: {price.stck_lwpr:,}원')
# print(f'최고가: {price.stck_hgpr:,}원')
# print(f'전일대비: {price.prdy_vrss:,}원')
# print(f'전일대비거래량비율: {price.prdy_vrss_vol_rate:.2f}%')
# print(f'거래대금: {price.acml_tr_pbmn:,}원')

# class myObject:
#     def __init__(self):
#         self.data = {}

#     def __str__(self):
#         return str(self.data)



# app = Flask(__name__)

# @app.route('/api/data', methods=['GET'])

# def get_data():
#     my_object = myObject()
#     print("서버 동작")

#     key = stock.name
#     value = {
#         'name': stock.name,
#         'code': stock.code,
#         'prpr': price.stck_prpr
#     }
#     my_object.data[key] = value

#     data = my_object.data[key]
#     return jsonify(data)

# if(__name__) == '__main__':
#     app.run(host='0.0.0.0', port=5000)



table = PrettyTable(field_names=[
        '순위',
        '종목코드',
        '종목명',
        '등락율',
        '거래량',
        '거래대금(만)'
    ],
    align='r',
)

def add_split(name: str):
    table.add_row([
        '- - - -' if e != 0 else name for e in range(len(table.field_names))
    ])

def add_rank(rank: list, p: bool = False):
    for i, item in enumerate(rank):
        item: KRXRank

        table.add_row([
            i+1,
            item.isu_cd,
            item.isu_abbrv,
            item.fluc_rt,
            item.acc_trdvol,
            item.acc_trdval / 10000 if p else item.acc_trdval // 10000
        ])
        symbols[i] = item.isu_cd, item.isu_abbrv


add_split('거래상위')
rank = KRXFluctRank.fetch(table='거래상위')[:8]
add_rank(rank)

print(table)
print(table[1])

# class myObject:
#     def __init__(self):
#         self.data = {}

#     def __str__(self):
#         return str(self.data)



# app = Flask(__name__)

# @app.route('/api/data', methods=['GET'])

# def get_data():
#     my_object = myObject()
#     print("서버 동작")

#     key = '거래상위'
#     value = {
#         'name': item.isu_abbrv,
#         'code': item.isu_cd,
#     }
#     my_object.data[key] = value

#     # print(my_object)
#     data = my_object.data['한솔제지']
#     return jsonify(data)

# if(__name__) == '__main__':
#     app.run(host='0.0.0.0', port=5000)