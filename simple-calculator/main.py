# main.py

from calculator import add, subtract, multiply, divide

def main():
    while True:
        print("Options:")
        print("Enter 'add' to add two numbers")
        print("Enter 'subtract' to subtract two numbers")
        print("Enter 'multiply' to multiply two numbers")
        print("Enter 'divide' to divide two numbers")
        print("Enter 'quit' to end the program")
        
        user_input = input(": ")

        if user_input == "quit":
            break
        elif user_input in ("add", "subtract", "multiply", "divide"):
            try:
                num1 = float(input("Enter first number: "))
                num2 = float(input("Enter second number: "))
            except ValueError:
                print("Invalid input. Please enter numeric values.")
                continue

            if user_input == "add":
                print(f"The result is {add(num1, num2)}")
            elif user_input == "subtract":
                print(f"The result is {subtract(num1, num2)}")
            elif user_input == "multiply":
                print(f"The result is {multiply(num1, num2)}")
            elif user_input == "divide":
                try:
                    print(f"The result is {divide(num1, num2)}")
                except ValueError as e:
                    print(e)
        else:
            print("Unknown input")

if __name__ == "__main__":
    main()
