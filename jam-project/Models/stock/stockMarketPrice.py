import mojito
import json
from flask import Flask, jsonify

key = "PSqY0usw7Qno1EZq5htoLFGSMghmflV4sSOK"
secret = "tPzkiC4pW43WHREcTXm7rPBRodtAWioxndwBTilX6E3uB1ef6s66jcTyc/dvBG70jrByEWE9uZCG0zbT+XhGydFjJBWgw+huQqRvpl1QYFZiF0I/C1sSfBxXhPI7YhZY7eb04A0E0TAsAvhP4DuA8INfVfYgvxsrMr9UVz3UsWk6yAxYpmE="
acc_no = "50087039-01"
broker = mojito.KoreaInvestment(api_key=key, api_secret=secret, acc_no=acc_no)

resp = broker.fetch_price("005930")
# pprint.pprint(resp)


# print("Open:  ", resp['output']['stck_oprc'])   # 시가
# print("High : ", resp['output']['stck_hgpr'])    # 고가
# print("Low  : ", resp['output']['stck_lwpr'])     # 저가
# print("Close: ", resp['output']['stck_prpr'])    # 종가


symbols = broker.fetch_kospi_symbols()

class myObject:
    def __init__(self):
        self.data = {}

    def __str__(self):
        return str(self.data)



app = Flask(__name__)

@app.route('/api/data', methods=['GET'])

def get_data():
    my_object = myObject()

    for i in range(len(symbols)):
        key = symbols['한글명'][i]
        value = {
            '종목이름': symbols['한글명'][i],
            '단축코드': symbols['단축코드'][i],
            '시가총액': int(symbols['시가총액'][i])
        }
        my_object.data[key] = value

    # print(my_object)
    data = my_object.data['한솔제지']
    return jsonify(data)

if(__name__) == '__main__':
    app.run(host='0.0.0.0', port=5000)