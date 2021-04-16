FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS build-env
WORKDIR /app

# Copy csproj and restore as distinct layers
COPY ./Libplanet.Explorer/Libplanet.Explorer.csproj ./Libplanet.Explorer/
COPY ./Libplanet.Explorer.Executable/Libplanet.Explorer.Executable.csproj ./Libplanet.Explorer.Executable/
RUN dotnet restore Libplanet.Explorer
RUN dotnet restore Libplanet.Explorer.Executable

# Copy everything else and build
COPY . ./
RUN dotnet publish -c Release -r linux-x64 -o out

# Build runtime image
FROM mcr.microsoft.com/dotnet/core/aspnet:3.1
WORKDIR /app
COPY --from=build-env /app/out .

# Install native deps & utilities for production
RUN apt-get update \
    && apt-get install -y --allow-unauthenticated \
        libc6-dev jq \
     && rm -rf /var/lib/apt/lists/*

# Runtime settings
EXPOSE 5000
VOLUME /data

ENTRYPOINT ["Libplanet.Explorer.Executable"]
