@echo off
REM ================================
REM Git Auto-Commit Script (Windows)
REM Usage: commit "your commit message"
REM ================================

REM Ensure a commit message was provided
IF "%~1"=="" (
    echo.
    echo Usage: %0 "commit message"
    echo Example: %0 "Fix login bug"
    exit /b 1
)

REM Show current branch
FOR /F "tokens=*" %%b IN ('git rev-parse --abbrev-ref HEAD') DO SET BRANCH=%%b
echo Committing to branch: %BRANCH%
echo.

REM Add all changes
git add -A
IF ERRORLEVEL 1 (
    echo Failed to add files.
    exit /b 1
)

REM Commit
git commit -m "%~1"
IF ERRORLEVEL 1 (
    echo Commit failed.
    exit /b 1
)

REM Push
git push origin %BRANCH%
IF ERRORLEVEL 1 (
    echo Push failed.
    exit /b 1
)

echo.
echo ===============================
echo Successfully committed + pushed!
echo ===============================
