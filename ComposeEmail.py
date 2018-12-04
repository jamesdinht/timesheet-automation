import datetime

daysOfTheWeek = [] 

def dow(date):
    days=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    dayNumber=date.weekday()
    print days[dayNumber]

def month(date):
    months = ["Jan", "Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"]
    monthNumber = date.month
    print months[monthNumber - 1]

def constructDaysOfTheWeek():
    dat = datetime.datetime.today()
    for x in range(1,5):
        daysOfTheWeek.append(dat - datetime.timedelta(days = x))


constructDaysOfTheWeek()

for x in daysOfTheWeek:
    dow(x)
    month(x)
    print(x.day)
    print(x.year)
    print("")

print'Here are my hours worked for the week of 11/26-11/30:'
print'Monday,       Nov 26, 2018        8 hours' 
print'Tuesday,      Nov 27, 2018        8 hours' 
print'Wednesday,    Nov 28, 2018        8 hours'
print'Thursday,     Nov 29, 2018        8 hours'
print'Friday,       Nov 30, 2018        8 hours'

print'Total Hours: 40 hours'

print'-Steven Santiago'
