def timesThree(arr):
	for i in range(len(arr)):
		arr[i] = arr[i] * 3
		print i, "wii"
	return arr

print timesThree([2,34,6,8,9,100])


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

oddEven(50)
