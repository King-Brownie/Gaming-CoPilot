{ pkgs ? import <nixpkgs> {} }:
    pkgs.mkShell {
      buildInputs = [
        pkgs.nodejs-18_x
        pkgs.npm
        pkgs.libnss3
        pkgs.libatk
        pkgs.libatk-bridge
        pkgs.libcups
        pkgs.libgbm
        pkgs.alsaLib
        pkgs.pango
        pkgs.libXScrnSaver
        pkgs.gtk3
        pkgs.libxshmfence
        pkgs.libGLU
      ];
      
      shellHook = ''
        export NPM_CONFIG_PRODUCTION=true
        export NPM_CONFIG_OMIT=dev
      '';
    }
