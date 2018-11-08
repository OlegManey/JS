function mathOperation ( arg1, arg2, operation ) { 
    switch (operation) { 
        case '+': 
            return add ( arg1, arg2 ); 
            break; 
        case '-': 
            return sub ( arg1, arg2 ); 
            break; 
        case '/': 
            return div ( arg1, arg2 ); 
            break; 
        case '*': 
            return mul ( arg1, arg2 ); 
            break; 
    } 
} 