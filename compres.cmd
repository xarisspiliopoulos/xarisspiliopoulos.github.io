@echo off
REM === CONFIGURATION ===
REM set "inputFile=C:\Path\To\intellij-idea-ultimate.zip"

REM set "inputFile=C:\users\xaris\downloads\ideaIU-2025.1.win.zip"

set "inputFile=C:\users\xaris\downloads\datagrip-2025.1.win.zip"
set "password=YourSecurePassword123"
REM set "outputBaseName=intellij_secret"
set "outputBaseName=datagrip"
set "chunkSize=8m"

REM === WORKING DIRECTORY ===
cd /d %~dp0

REM === Step 1: Encrypt with 7-Zip ===
7z a -p%password% -mhe=on "%outputBaseName%.7z" "%inputFile%"

REM === Step 2: Split into chunks ===
7z a -v%chunkSize% "%outputBaseName%.split.7z" "%outputBaseName%.7z"

REM === Step 3: Rename all parts to .txt
for %%f in (%outputBaseName%.split.7z.*) do ren "%%f" "%%f.txt"

echo All done! Encrypted and split files ready.
pause
