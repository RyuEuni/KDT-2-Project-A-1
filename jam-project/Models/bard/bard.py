import bardapi
import os
import re

os.environ['_BARD_API_KEY']='XQgCVhdgnja68ZVA3kXh2Lz2rnSu9I05g3t-DTSbfqD3F-cqzkZjgSlZRUJmWp_mWZYPPQ.'

input_text='삼성전자의 주요 사업 3개를 단어로만 알려줘'
response = bardapi.core.Bard().get_answer(input_text)
stringResponse = response['choices'][0]['content'][0]

print(re.split(r'[\n*,는]', stringResponse))
# 적절하게 자를 방법이.. 어후... 음..?

# print(response.choices)