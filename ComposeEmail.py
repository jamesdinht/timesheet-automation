import datetime
import UserEmailInfo

daysOfTheWeek = [] 

def dow(date):
    days=["Monday,","Tuesday,","Wednesday,","Thursday,","Friday,","Saturday,","Sunday,"]
    dayNumber=date.weekday()
    return days[dayNumber]

def month(date):
    months = ["Jan", "Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"]
    monthNumber = date.month
    return months[monthNumber - 1]

def constructDaysOfTheWeek():
    dat = datetime.datetime.today()
    daysOfTheWeek.append(dat)
    for x in range(1,5):
        daysOfTheWeek.append(dat - datetime.timedelta(days = x))

def email_template():
    hours = 0
    print ('\nHere are my hours worked for the week of ' + str(firstDay.month) + "/" + str(firstDay.day) + "-" 
    + str(lastDay.month) + '/' + str(lastDay.day) +":")
    for x in reversed(daysOfTheWeek):
        dayName = dow(x) 
        months = month(x)
        day = str(x.day)+ "," 
        year = str(x.year)
        hours +=8 # Will eventually add based on user input for hours worked per day
        print("")
        output = '{:15}{:5}{:3}{:10}{:3}{}'.format(dayName,months,day,year,str(UserEmailInfo.defaultHours),"hours")
        print(output)
    print ('\nTotal Hours: ' + str(hours) + ' hours')
    print (UserEmailInfo.signature)
   

constructDaysOfTheWeek()
firstDay = daysOfTheWeek[4]
lastDay = daysOfTheWeek[0]

email_template()


