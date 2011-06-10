from datetime import datetime
import time

def from_unixtime(timestamp):
    try:
        return datetime.fromtimestamp(float(timestamp))
    except:
        return datetime.fromtimestamp(0)

def unix_timestamp(dt):
    return int(time.mktime(dt.timetuple()))

