FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["sdk/node/Libplanet.Node.API/Libplanet.Node.API.csproj", "sdk/node/Libplanet.Node.API/"]
RUN dotnet restore "sdk/node/Libplanet.Node.API/Libplanet.Node.API.csproj"
COPY . .
WORKDIR "/src/sdk/node/Libplanet.Node.API"
RUN dotnet build "Libplanet.Node.API.csproj" -c $BUILD_CONFIGURATION -o /app/build

FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "Libplanet.Node.API.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Libplanet.Node.API.dll"]
