using System.Diagnostics;
using System.Text.Json;

namespace Libplanet.Node;

public static class JsonUtility
{
    private static readonly bool IsJQSupported = SupportsJQ();
    private static readonly JsonSerializerOptions SerializerOptions = new()
    {
        WriteIndented = true,
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
        DictionaryKeyPolicy = JsonNamingPolicy.CamelCase,
    };

    public static string Serialize(object value)
    {
        return JsonSerializer.Serialize(value, SerializerOptions);
    }

    public static string Serialize(object value, bool isColorized)
    {
        var json = Serialize(value);
        // if (isColorized && IsJQSupported)
        // {
        //     using var tempFile = TempFile.WriteAllText(json);
        //     var process = new Process();
        //     process.StartInfo.UseShellExecute = false;
        //     process.StartInfo.FileName = $"jq";
        //     process.StartInfo.CreateNoWindow = true;
        //     process.StartInfo.Arguments = $". -C \"{tempFile.FileName}\"";
        //     process.StartInfo.RedirectStandardOutput = true;
        //     process.StartInfo.RedirectStandardError = true;
        //     process.Start();
        //     process.WaitForExit();
        //     return process.StandardOutput.ReadToEnd();
        // }

        return json;
    }

    public static T Deserialize<T>(string value)
    {
        if (JsonSerializer.Deserialize<T>(value) is T t)
        {
            return t;
        }

        throw new ArgumentException("Cannot deserialize the object.", nameof(value));
    }

    private static bool SupportsJQ()
    {
        try
        {
            if (OperatingSystem.IsMacOS())
            {
                var process = new Process();
                process.StartInfo.FileName = $"which";
                process.StartInfo.Arguments = "jq";
                process.StartInfo.UseShellExecute = false;
                process.StartInfo.CreateNoWindow = true;
                process.StartInfo.RedirectStandardOutput = true;
                process.StartInfo.RedirectStandardError = true;
                process.OutputDataReceived += (s, e) => { };
                process.ErrorDataReceived += (s, e) => { };
                process.Start();
                process.BeginOutputReadLine();
                process.BeginErrorReadLine();
                process.WaitForExit();
                return process.ExitCode == 0;
            }
        }
        catch
        {
            // ignored
        }

        return false;
    }
}
