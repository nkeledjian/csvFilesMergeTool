# csvFilesMergeTool
A node app designed for merging CSV files with the same headers

### Why was this built?
As part of my Technical Support Analyst role, I provide several monthly reports to customers. For some of the monthly reports, I manually download csv files of call data for each day of the month. 

I've been able to divy up my time downloading the data for each day of the month easily. However, I was manually mergining the data from all of the csv files into one csv file. This would take upwards of 2-3 hours out of my work day.

Since the files I download have the exact same headers, I thought to myself "there's got to be a way to merge all of this csv file data into one csv file". Thus, the csvFilesMergeTool was born! No more manual copying and pasting :sweat_smile:

### Project set up

##### Step 1 - Do you have Node installed?
If you don't have node set up on your machine (you can run the command `npm -v` to see if you have it installed and what version), download the installer [here](https://nodejs.org/en/download/) for Windows users (I recommend the LTS version).

You can visit the same link above to download node if you are on MacOS, or, if you have installed homebrew on your Mac, you can check out the following guide [here](https://formulae.brew.sh/formula/node).

##### Step 2 - Download project files and install node depedencies
Once node is installed on your machine, download the project files by cloning the repo or via Zip file.

Navigate to the root of the project and run the command `npm install` in terminal or git bash to install the dependencies for the project.

### How to use