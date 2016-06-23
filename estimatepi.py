'''Estimate Pi'''

def nth_term(n):
    return 4 / (2.0 * n + 1) * (-1) ** n

def approximate_pi(error):
    prev = nth_term(0)
    current = nth_term + nth_term(1)
    n = 2

    while abs(prev - current) > error:
        prev = current
        current += nth_term(n)
        n += 1

    return current

my_pi = approximate_pi(.000000000000001)
print(my_pi)    
