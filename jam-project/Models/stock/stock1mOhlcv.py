import mojito;
import json
from flask import Flask, jsonify
import pandas as pd
### 모듈 임포트 ###
import dotenv
import os

from Crypto.Cipher import AES
from Crypto.Util.Padding import unpad
from base64 import b64decode

clearConsole = lambda: os.system('cls' if os.name in ('nt', 'dos') else 'clear')

key_bytes = 32

dotenv_file=dotenv.find_dotenv()
dotenv.load_dotenv(dotenv_file)

key = os.environ['APIKey']
secret = os.environ['APISecret']
acc_no = os.environ['APIAccNo']
broker = mojito.KoreaInvestment(api_key=key, api_secret=secret, acc_no=acc_no)



# print(":adad:: ", dir(broker))

# resp = broker.fetch_ohlcv(
#     symbol="005930",
#     timeframe='D',
#     adj_price=True
# )

# print(resp)

result = broker._fetch_today_1m_ohlcv("005930","10:00:00")
print(result)

df = pd.DataFrame(result['output2'])
dt = pd.to_datetime(df['stck_bsop_date'] + ' ' + df['stck_cntg_hour'], format="%Y%m%d %H%M%S")
df.set_index(dt, inplace=True)
df = df[['stck_oprc', 'stck_hgpr', 'stck_lwpr', 'stck_prpr', 'cntg_vol']]
df.columns = ['open', 'high', 'low', 'close', 'volume']
df.index.name = "datetime"
df = df[::-1]
print(df)

