using System;
namespace ConsoleApp7
{
    class Program
    {
        static void Main(string[] args)
        {
            int people = int.Parse(Console.ReadLine());
            int count = 0;
            double allPrice = 0;
            double basketPrice = 1.50;
            double wreathPrice = 3.80;
            double chocolateBunnyPrice = 7;
            double average = 0;
            for (int i = 1; i <= people; i++)
            {
                string command = Console.ReadLine();
                
                while (command != "Finish")
                {
                    if (command == "basket")
                    {
                        allPrice += basketPrice;
                        count++;
                    }
                    if (command == "wreath")
                    {
                        allPrice += wreathPrice;
                        count++;
                    }
                    if (command == "chocolate bunny")
                    {
                        allPrice += chocolateBunnyPrice;
                        count++;
                    }
                    command = Console.ReadLine();
                }
                if (count %2 == 0)
                {
                    double percentPrice = allPrice * 0.2;
                    allPrice = allPrice - percentPrice;
                }
                average += allPrice;
                Console.WriteLine($"You purchased {count} items for {allPrice:F2} leva.");
                
                allPrice = 0;
                count = 0;
            }
            if (people > 1)
            {
                average = average / 2;
            }
            
            Console.WriteLine($"Average bill per client is: {average:F2} leva.");
        }