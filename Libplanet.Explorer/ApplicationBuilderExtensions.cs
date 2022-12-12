using System.IO;
using System.Reflection;
using Lexical.FileProvider;
using Microsoft.AspNetCore.Builder;

namespace Libplanet.Explorer;

public static class ApplicationBuilderExtensions
{
    public static IApplicationBuilder UseLibplanetExplorerFrontend(
        IApplicationBuilder builder,
        string requestPath = "/explorer")
    {
        Assembly asm = typeof(ApplicationBuilderExtensions).Assembly;
        Stream zipStream = asm.GetManifestResourceStream("libplanet-explorer-frontend-504d1b2.zip")
            ?? throw new IOException("Failed to load the zipped libplanet-explorer-frontend.");
        return builder.UseStaticFiles(new StaticFileOptions
        {
            FileProvider = new _ZipFileProvider(zipStream),
            RequestPath = requestPath,
        });
    }
}
