from datetime import datetime
import time

def from_unixtime(timestamp):
    if timestamp:
        return datetime.fromtimestamp(float(timestamp))
    else:
        return datetime.fromtimestamp(0)

def unix_timestamp(dt):
    return int(time.mktime(dt.timetuple()))

