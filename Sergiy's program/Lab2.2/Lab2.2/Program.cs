using System;

namespace Lab1_2
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Input lenth of radius: ");
            double radiusLenth = Convert.ToDouble(Console.ReadLine());


            Console.WriteLine($"Square of the circle: {Math.Pow(radiusLenth, 2) * Math.PI}");
            Console.WriteLine($"Perimetr of the circle: {2 * Math.PI * radiusLenth}");
        }
    }
    
}
