def timesThree(arr):
	for i in range(len(arr)):
		arr[i] = arr[i] * 3
		print i, "wii"
	return arr

# print timesThree([2,34,6,8,9,100])


def oddEven(num):
	even = "is even."
	odd = "is odd."
	for num in range(1,num+1):
		if num % 2 is 0:
			print "the number {} is even".format(num)
		elif num % 5 == 0:
			print "the number", num, "is divisible by five and is odd"
		else:
			print "the number " + str(num) + " is odd"

# oddEven(50)

def stars(arr):
	for idx in range(len(arr)):
		if type(arr[idx]) is int:
			print "*" * arr[idx]
		elif type(arr[idx]) is str:
			print arr[idx][0].lower() * len(arr[idx])

array = [8,3,2,"welf", "MOJO", 3]
# print stars(array)

students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
]
def names(arr):
	for num in range():
		print 'hello'
	return

array = [1,4,7,3,-4,8,2,19.0,-37]

def oneTo255():
	for num in range(0, 255):
		print num + 1
# oneTo255()

def odds():
	for num in range(1, 255 + 1):
		if num % 2 is not 0:
			print num
# odds()

def printAndSum():
	sum = 0
	for num in range(0, 255 + 1):
		sum = sum + num
		print num, sum
# printAndSum()

def iterateAndPrint(arr):
	for value in arr:
		print value

# iterateAndPrint(array)

def findAndPrintMax(arr):
	max = arr[0]
	for value in arr:
		if value > max:
			max = value
	print max

# findAndPrintMax(array)

def getAndPrintAverage(arr):
	sum = 0
	for num in range(0, len(arr)):
		sum += arr[num]
	print sum / len(arr)
# getAndPrintAverage(array)

def arrayWithOdds(): #array of odds 1-255 inclusive
	arr = []
	for num in range(1, 255+1):
		if num % 2 is 1:
			arr.append(num)
	print arr
# arrayWithOdds()

def squareTheValues(arr):
	for num in range(0, len(arr)):
		arr[num] *= arr[num]
	print arr
# squareTheValues(array)

def greaterThanY(arr, y):
	count = 0
	for num in range(0, len(arr)):
		if arr[num] > y:
			count += 1
			print arr[num]
# greaterThanY(array, 3)

def zeroOutNegatives(arr):
	for num in range(0, len(arr)):
		if arr[num] < 0:
			arr[num] = 0
	print arr
# zeroOutNegatives(array)

def maxMinAvg(arr):
	sum = 0
	max = arr[0]
	min = arr[0]
	for num in range(0, len(arr)):
		if arr[num] < min:
			min = arr[num]
		elif arr[num > max]:
			max = arr[num]
		sum += arr[num]
	print max, min, sum / len(arr)
# maxMinAvg(array)

def shiftArrayValues(arr):
	for num in range(1, len(arr)):
		arr[num - 1] = arr[num]
	arr[len(arr) - 1] = 0
	print arr
# shiftArrayValues(array)

def swapStringForArrayNegativeValues(arr):
	for num in range(0, len(arr)):
		if arr[num] < 0:
			arr[num] = "Dojo"
	print arr
# swapStringForArrayNegativeValues(array)
