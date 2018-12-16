import datetime
import smtplib
import UserEmailInfo
import email.message

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
    
    email = ('<pre> \nHere are my hours worked for the week of ' + str(firstDay.month) + "/" + str(firstDay.day) + "-" 
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
    email = email + '</pre>'
    return email
   

constructDaysOfTheWeek()
firstDay = daysOfTheWeek[4]
lastDay = daysOfTheWeek[0]



mail = email_template()
 
email_content = """
<html>
<body>
""" + mail + """
</body>
</html>
 
 
"""
 
msg = email.message.Message()
msg['Subject'] = UserEmailInfo.subject
 
 
msg['From'] = UserEmailInfo.user_email
msg['To'] = UserEmailInfo.to[0]
msg.add_header('Content-Type', 'text/html')
msg.set_payload(email_content)

try:
    s = smtplib.SMTP(UserEmailInfo.yahoo_server,587)
    s.starttls()
    #Login Credentials for sending the mail
    s.login(msg['From'], UserEmailInfo.user_pass)
    s.sendmail(msg['From'], [msg['To']], msg.as_string())
    s.close()
    print('Email Succesfully sent!')
except:
    print('Something went wrong.')
    

