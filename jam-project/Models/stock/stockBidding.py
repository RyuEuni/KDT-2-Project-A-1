import mojito;
import json
from flask import Flask, jsonify
import pandas as pd
import requests
import os
import dotenv

dotenv_file=dotenv.find_dotenv()
dotenv.load_dotenv(dotenv_file)


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


key = os.environ['APIKey']
secret = os.environ['APISecret']
acc_no = os.environ['APIAccNo']
broker = mojito.KoreaInvestment(api_key=key, api_secret=secret, acc_no=acc_no)

data = {
    "CANO": "5008703901",
    "ACNT_PRDT_CD": "03",
    "PDNO": "005930",
    "ORD_DVSN": "02",
    "ORD_QTY": "1",
    "ORD_UNPR": "69000",
    "CTAC_TLNO": ""
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
# uapi/domestic-stock/v1/quotations/inquire-price
URL = f"{_url}/{PATH}"

try:
    # API 호출
    res = requests.get(URL, headers=headers, data=json.dumps(body))
    # 응답 확인
    if res.status_code == 200:
        # API 호출 성공
        # data = res.json()
        print(f"응답결과다::: {res.text}");
        # TODO: 응답 데이터 처리
    else:
        # API 호출 실패
        print(f"API 호출 실패: {res.status_code} {res.text}")
except requests.exceptions.RequestException as e:
    # 네트워크 오류 등으로 인한 API 호출 실패
    print(f"API 호출 실패: {e}")
