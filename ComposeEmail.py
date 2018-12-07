import datetime
import smtplib
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
    email = ('\nHere are my hours worked for the week of ' + str(firstDay.month) + "/" + str(firstDay.day) + "-" 
    + str(lastDay.month) + '/' + str(lastDay.day) +":\n")
    print ('\nHere are my hours worked for the week of ' + str(firstDay.month) + "/" + str(firstDay.day) + "-" 
    + str(lastDay.month) + '/' + str(lastDay.day) +":")
    for x in reversed(daysOfTheWeek):
        dayName = dow(x) 
        months = month(x)
        day = str(x.day)+ "," 
        year = str(x.year)
        hours +=8 # Will eventually add based on user input for hours worked per day
        print("")
        email += "\n"
        output = '{:15}{:5}{:3}{:10}{:3}{}'.format(dayName,months,day,year,str(UserEmailInfo.defaultHours),"hours")
        print(output)
        email +=output 
        email += "\n"
    print ('\nTotal Hours: ' + str(hours) + ' hours')
    email += ('\nTotal Hours: ' + str(hours) + ' hours\n')
    print (UserEmailInfo.signature)
    email += (UserEmailInfo.signature)
    return email
   

constructDaysOfTheWeek()
firstDay = daysOfTheWeek[4]
lastDay = daysOfTheWeek[0]



mail = email_template()
print("\nHere is the line split\n")
print (mail)

test_email = """From: %s
To: %s
Subject: %s

%s
""" %(UserEmailInfo.user_email,', '.join(UserEmailInfo.to),UserEmailInfo.subject,mail)

try:
    server = smtplib.SMTP('smtp.gmail.com',587)
    server.ehlo() #identify to the SMTP server
    server.starttls()#begin secure connection
    server.login(UserEmailInfo.user_email,UserEmailInfo.user_pass)
    server.sendmail(UserEmailInfo.user_email,UserEmailInfo.to,test_email)
    server.close()

    print('Email Successfully Sent?')
except:
    print("Something went wrong")
    

