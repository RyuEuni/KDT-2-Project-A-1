import mojito;
import json
from flask import Flask, jsonify
import pandas as pd

key = "PSqY0usw7Qno1EZq5htoLFGSMghmflV4sSOK"
secret = "tPzkiC4pW43WHREcTXm7rPBRodtAWioxndwBTilX6E3uB1ef6s66jcTyc/dvBG70jrByEWE9uZCG0zbT+XhGydFjJBWgw+huQqRvpl1QYFZiF0I/C1sSfBxXhPI7YhZY7eb04A0E0TAsAvhP4DuA8INfVfYgvxsrMr9UVz3UsWk6yAxYpmE="
acc_no = "50087039-01"
broker = mojito.KoreaInvestment(api_key=key, api_secret=secret, acc_no=acc_no)


# result = broker.fetch_today_1m_ohlcv("005930")

print(mojito.__version__)

# df = pd.DataFrame(result['output2'])
# dt = pd.to_datetime(df['stck_bsop_date'] + ' ' + df['stck_cntg_hour'], format="%Y%m%d %H%M%S")
# df.set_index(dt, inplace=True)
# df = df[['stck_oprc', 'stck_hgpr', 'stck_lwpr', 'stck_prpr', 'cntg_vol']]
# df.columns = ['open', 'high', 'low', 'close', 'volume']
# df.index.name = "datetime"
# df = df[::-1]
# print(df)