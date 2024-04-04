function fibTail(n){ return fibT(n, 1, 1) }

function fibT(b, fib, fib_old){
    if (b <= 2) return fib
    else
    fib_new = fib + fib_old
    fib_old = fib;
    fib = fib_new;
    return fibT(b - 1, fib, fib_old)
}



