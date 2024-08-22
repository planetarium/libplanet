using Libplanet.Node.Swagger;
using Libplanet.Node.Swagger.Options;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;

[assembly: HostingStartup(typeof(SwaggerHostingStartup))]

namespace Libplanet.Node.Swagger;

internal sealed class SwaggerHostingStartup : IHostingStartup, IStartupFilter
{
    public void Configure(IWebHostBuilder builder)
    {
        builder.ConfigureServices((context, services) =>
        {
            services.AddOptions<SwaggerOptions>()
                    .Bind(context.Configuration.GetSection(SwaggerOptions.Position));

            var serviceProvider = services.BuildServiceProvider();
            var options = serviceProvider.GetRequiredService<IOptions<SwaggerOptions>>().Value;

            if (options.IsEnabled)
            {
                services.AddEndpointsApiExplorer();
                services.AddSwaggerGen();

                services.AddAuthorization();
                services.AddAuthentication("Bearer").AddJwtBearer();
                services.AddSingleton<IStartupFilter>(this);
            }
        });
    }

    public Action<IApplicationBuilder> Configure(Action<IApplicationBuilder> next)
    {
        return builder =>
        {
            builder.UseSwagger();
            builder.UseSwaggerUI();
            next(builder);
        };
    }
}
