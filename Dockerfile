FROM mcr.microsoft.com/dotnet/core/sdk:2.2 AS build-env
WORKDIR /app

# Copy csproj and restore as distinct layers
COPY ./Libplanet.Explorer/Libplanet.Explorer.csproj ./Libplanet.Explorer/
COPY ./Libplanet.Explorer.Executable/Libplanet.Explorer.Executable.csproj ./Libplanet.Explorer.Executable/
RUN dotnet restore Libplanet.Explorer
RUN dotnet restore Libplanet.Explorer.Executable

# Copy everything else and build
COPY . ./
RUN dotnet publish -c Release -r linux-x64 -o out --self-contained
RUN cp -r ./Libplanet.Explorer.Executable/wwwroot ./

# Build runtime image
FROM mcr.microsoft.com/dotnet/core/aspnet:2.2
WORKDIR /app
COPY --from=build-env /app/ .

# Runtime settings
EXPOSE 5000
VOLUME /data

ENTRYPOINT ["dotnet", "Libplanet.Explorer.Executable/out/Libplanet.Explorer.Executable.dll"]
