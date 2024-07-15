using System;
   
namespace Lab1_1
{
    class Program
    {

        static void Main(string[] args)
        {
            double x, y, z, result;

            do
            {
                Console.WriteLine("----------------------------------------------");
                Console.WriteLine("Input value of x: ");
                x = Convert.ToDouble(Console.ReadLine());

                Console.WriteLine("Input value of y: ");
                y = Convert.ToDouble(Console.ReadLine());

                Console.WriteLine("Input value of z: ");
                z = Convert.ToDouble(Console.ReadLine());

                result = x + (y*y*y)/(z + z*z + (z + y*y));
                Console.WriteLine($"Result: {result:F2}");
                if(x < -10)
                {
                    Console.WriteLine("less than -10");
                }
                else if (x < -1)
                {
                    Console.WriteLine("less than -1");
                }
                else if (x > 10)
                {
                    Console.WriteLine("more than 10");
                }
                else if (x > 1)
                {
                    Console.WriteLine("more than 1");
                }

                if(result < 0)
                {
                    Console.WriteLine("Negative");
                }
                else
                {
                    Console.WriteLine("Positive");
                }
                Console.WriteLine("----------------------------------------------");
            } while (x != 0);
            
        }
    }
}
