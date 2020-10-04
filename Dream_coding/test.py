import datetime
def get_message(date: datetime, username: str, quote: str) -> str:
    
    message = str(date) + username + quote
    
    return message


print(get_message('2020-09-01', 'jinyoung', '4'))