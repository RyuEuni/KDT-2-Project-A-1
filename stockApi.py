
# 현재가 조회
#import mojito

# 게정정보 파일 읽기
# with open("../koreainvestment.key") as f:
#     lines = f.readlines()
#     key = lines[0].strip()
#     secret = lines[1].strip()
#     acc_no = lines[2].strip()

# broker = mojito.KoreaInvestment(
#     api_key=key,
#     api_secret=secret,
#     acc_no=acc_no
# )

# balance = broker.fetch_balance()
# deposit = int(balance['output2'][0]['dnca_tot_amt'])
# print(deposit)

# SYMBOL = "005930"
# price = broker.fetch_price(symbol=SYMBOL)
# curr_price = price['output']['stck_prpr']
# print(curr_price)





import websockets
import json
import os
import asyncio
import time

from Crypto.Cipher import AES
from Crypto.Util.Padding import unpad
from base64 import b64decode

g_appkey = "PSqY0usw7Qno1EZq5htoLFGSMghmflV4sSOK"
g_appsceret = "tPzkiC4pW43WHREcTXm7rPBRodtAWioxndwBTilX6E3uB1ef6s66jcTyc/dvBG70jrByEWE9uZCG0zbT+XhGydFjJBWgw+huQqRvpl1QYFZiF0I/C1sSfBxXhPI7YhZY7eb04A0E0TAsAvhP4DuA8INfVfYgvxsrMr9UVz3UsWk6yAxYpmE="



