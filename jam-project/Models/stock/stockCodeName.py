import mojito
import pprint
import json
import dotenv
import os

dotenv_file=dotenv.find_dotenv()
dotenv.load_dotenv(dotenv_file)

key = os.environ['APIKey']
secret = os.environ['APISecret']
acc_no = os.environ['APIAccNo']
broker = mojito.KoreaInvestment(api_key=key, api_secret=secret, acc_no=acc_no)


# symbols = broker.fetch_symbols()
symbols = broker.fetch_kospi_symbols()
stockCode = symbols['단축코드']
stockName = symbols['한글명']

kospiData = {}
kosdaqData = {}
stockData = {}

for i in range(len(stockCode)):
    key = stockName[i]
    # value = [stockCode[i], stockName[i]]
    value = stockCode[i]
    kospiData[key] = value

#코스피 종목 코드
stockData['kospi'] = kospiData

stockCode = 0
stockName = 0

symbols = broker.fetch_kosdaq_symbols()

stockCode = symbols['단축코드']
stockName = symbols['한글명']

for i in range(len(stockCode)):
    key = stockName[i]
    # value = [stockCode[i], stockName[i]]
    value = stockCode[i]
    kosdaqData[key] = value

#코스닥 종목 코드
stockData['kosdaq'] = kosdaqData


file_path = './stockInfo.json'
with open(file_path, 'w', encoding='utf-8') as f:
    json.dump(stockData, f, ensure_ascii=False)

