# CSV_analyzer_web1

# BibNet Research Visualization Platform

## Overview
BibNet is a powerful web-based platform for analyzing and visualizing research data. This tool allows users to upload their research data in CSV format and create interactive visualizations for better insights.

## Installation

1. Download the ZIP file containing the platform files
2. Extract the ZIP file to your desired location
3. Download and check all the files have been downloaded fine or not
4. Then run the main HTML file
5. Open your web browser and navigate to your localhost

## Usage Flow

### 1. Main Dashboard

![image](https://github.com/user-attachments/assets/61fcb0eb-486e-47a4-863b-985a404328ba)

The main dashboard shows multiple options including (all these sections are just for UI purpose none of them have any function in the webpage):
- Global Collaboration Networks in Climate Change Research
- Citation Impact of Machine Learning Publications
- Temporal Evolution of COVID-19 Research Output
- International Research Collaboration Intensity
- Research Topic Trends

Navigation menu on the left shows to different sections (all these sections are just for UI purpose none of them have any function in the webpage):
- Dashboard
- Quick Analysis
- My Studies
- Repository
- Analysis History
- Study Collections
- Notifications

### 2. Data Upload

![image](https://github.com/user-attachments/assets/ae1557fd-0409-4bfa-aa3b-30265c957d13)

- Locate the CSV icon in the top navigation bar (shown above)
- Click the icon to open the file upload dialog
- Select your CSV file containing research data
- The platform accepts data with multiple columns including:
  - Author information
  - Publication years
  - Citation counts
  - Research areas
  - Collaboration data

### 3. Visualization Configuration

![image](https://github.com/user-attachments/assets/31daaf4d-51e7-4a7b-8284-99841252aece)


After uploading your data, you'll have access to the visualization controls panel with the following options:

#### Chart Controls

![image](https://github.com/user-attachments/assets/cac0570f-485e-4095-83aa-42166e60b20f)

- **X-Axis**: Select the data field for the horizontal axis
- **Y-Axis**: Select the data field for the vertical axis
- **Chart Type**: Choose from various visualization types:
  - Line
  - Scatter
  - Bar
  - Others based on data type
- **Line Color**: Customize the visualization colors
- **Point Style**: Select different point styles (Circle, Triangle, etc.)

### 4. Applying Changes

![image](https://github.com/user-attachments/assets/2e6bb92e-627f-4b62-ba9c-55a63428fa97)

- After configuring your visualization settings, click the "Apply Changes" button
- The visualization will update immediately to reflect your chosen settings
- You can continue to modify settings and reapply changes as needed

### 5. Visualization Examples

![image](https://github.com/user-attachments/assets/08acc981-a715-4b21-b160-e7a7cb79de2d)

#### Author Analysis View

- Shows relationships between author metrics
- Configurable axes for different author-related parameters
- Ability to adjust visualization style and type

#### Citation Analysis View

- Displays citation patterns over years
- Scatter plot showing citation distribution
- Customizable point style and color schemes

## Tips
- Ensure your CSV file is properly formatted before upload (very important to remove unecessary rows and columns)
- Use appropriate chart types for your data (e.g., scatter plots for correlation analysis)
- Take advantage of the filtering and customization options for better insights

## Troubleshooting
- If visualizations don't appear, check your CSV file format or the clean it first
- Ensure all required columns are present in your data
- Verify that your local server is running correctly

## Data Format Requirements
The platform expects CSV files with properly formatted data:
- Headers should be clearly defined
- Data should be cleaned and properly formatted
