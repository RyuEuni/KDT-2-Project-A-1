import mojito
import pprint
import json

key = "PSqY0usw7Qno1EZq5htoLFGSMghmflV4sSOK"
secret = "tPzkiC4pW43WHREcTXm7rPBRodtAWioxndwBTilX6E3uB1ef6s66jcTyc/dvBG70jrByEWE9uZCG0zbT+XhGydFjJBWgw+huQqRvpl1QYFZiF0I/C1sSfBxXhPI7YhZY7eb04A0E0TAsAvhP4DuA8INfVfYgvxsrMr9UVz3UsWk6yAxYpmE="
acc_no = "50087039-01"
broker = mojito.KoreaInvestment(api_key=key, api_secret=secret, acc_no=acc_no)

resp = broker.fetch_price("005930")
# pprint.pprint(resp)


print("Open:  ", resp['output']['stck_oprc'])   # 시가
print("High : ", resp['output']['stck_hgpr'])    # 고가
print("Low  : ", resp['output']['stck_lwpr'])     # 저가
print("Close: ", resp['output']['stck_prpr'])    # 종가


