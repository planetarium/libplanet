namespace Libplanet.Extensions.Cocona;

using System;
using System.Text;

public class ConsolePasswordReader
{
    public static string Read(string prompt)
    {
        var password = new StringBuilder();

        Console.Write(prompt);
        do
        {
            var key = Console.ReadKey(true).KeyChar;

            if (key == '\b')
            {
                if (password.Length <= 0)
                {
                    continue;
                }

                password.Remove(password.Length - 1, 1);
                Console.SetCursorPosition(Console.CursorLeft - 1, Console.CursorTop);
                Console.Write(' ');
                Console.SetCursorPosition(Console.CursorLeft - 1, Console.CursorTop);
            }
            else if (key == '\r')
            {
                Console.WriteLine();
                break;
            }
            else if (!char.IsControl(key))
            {
                password.Append(key);
                Console.Write('*');
            }
        }
        while (true);

        return password.ToString();
    }
}
