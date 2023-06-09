import mojito;
import json
from flask import Flask, jsonify
import pandas as pd
### 모듈 임포트 ###
import websockets
import requests
import os
import asyncio
import time

from Crypto.Cipher import AES
from Crypto.Util.Padding import unpad
from base64 import b64decode

clearConsole = lambda: os.system('cls' if os.name in ('nt', 'dos') else 'clear')

key_bytes = 32

# 웹소켓 접속키 발급
def get_approval(key, secret):
    # url = https://openapivts.koreainvestment.com:29443' # 모의투자계좌     
    url = 'https://openapi.koreainvestment.com:9443' # 실전투자계좌
    headers = {"content-type": "application/json"}
    body = {"grant_type": "client_credentials",
            "appkey": key,
            "secretkey": secret}
    PATH = "oauth2/Approval"
    URL = f"{url}/{PATH}"
    res = requests.post(URL, headers=headers, data=json.dumps(body))
    approval_key = res.json()["approval_key"]
    return approval_key

key = "PSqY0usw7Qno1EZq5htoLFGSMghmflV4sSOK"
secret = "tPzkiC4pW43WHREcTXm7rPBRodtAWioxndwBTilX6E3uB1ef6s66jcTyc/dvBG70jrByEWE9uZCG0zbT+XhGydFjJBWgw+huQqRvpl1QYFZiF0I/C1sSfBxXhPI7YhZY7eb04A0E0TAsAvhP4DuA8INfVfYgvxsrMr9UVz3UsWk6yAxYpmE="
acc_no = "50087039-01"
broker = mojito.KoreaInvestment(api_key=key, api_secret=secret, acc_no=acc_no)

data = {
    "ORD_PRCS_DVSN_CD": "02",
    "CANO": "50087039-01",
    "ACNT_PRDT_CD": "03",
    "SLL_BUY_DVSN_CD": "02",
    "SHTN_PDNO": "101S06",
    "ORD_QTY": "1",
    "UNIT_PRICE": "370",
    "NMPR_TYPE_CD": "",
    "KRX_NMPR_CNDT_CD": "",
    "CTAC_TLNO": "",
    "FUOP_ITEM_DVSN_CD": "",
    "ORD_DVSN_CD": "02"
}

# ### 앱키 정의 ###
g_appkey = "PSqY0usw7Qno1EZq5htoLFGSMghmflV4sSOK"
g_appsceret = "tPzkiC4pW43WHREcTXm7rPBRodtAWioxndwBTilX6E3uB1ef6s66jcTyc/dvBG70jrByEWE9uZCG0zbT+XhGydFjJBWgw+huQqRvpl1QYFZiF0I/C1sSfBxXhPI7YhZY7eb04A0E0TAsAvhP4DuA8INfVfYgvxsrMr9UVz3UsWk6yAxYpmE="
g_approval_key = get_approval(g_appkey, g_appsceret)
g_hashkey_key = broker.issue_hashkey(data)
g_token_key = broker.access_token
g_token_key = g_token_key.replace("Bearer ", "")
print("approval_key [%s]" % (g_approval_key))
print("hashkey_key [%s]" % (g_hashkey_key))
print("token_key [%s]" % (g_token_key))


_url = 'https://openapi.koreainvestment.com:9443' # 실전투자계좌
headers = {"content-type": "charset=utf-8","authorization": g_token_key,"appkey": g_appkey,"secretkey": g_appsceret, "personalseckey": "","tr_id":"FHKST01010200","tr_cont":"","custtype":"P","seq_no":"","mac_address":"","phone_number":"","ip_addr":"", "hashkey":g_hashkey_key,"gt_uid":""}
body = {"fid_cond_mrkt_div_code": "J","fid_input_iscd": "005930"}
PATH = "uapi/domestic-stock/v1/quotations/inquire-asking-price-exp-ccn"
URL = f"{_url}/{PATH}"

try:
    # API 호출
    res = requests.get(URL, headers=headers, data=json.dumps(body))
    # 응답 확인
    if res.status_code == 200:
        # API 호출 성공
        # data = res.json()
        print("응답결과다::: ", res.text);
        # TODO: 응답 데이터 처리
    else:
        # API 호출 실패
        print(f"API 호출 실패: {res.status_code} {res.text}")
except requests.exceptions.RequestException as e:
    # 네트워크 오류 등으로 인한 API 호출 실패
    print(f"API 호출 실패: {e}")
