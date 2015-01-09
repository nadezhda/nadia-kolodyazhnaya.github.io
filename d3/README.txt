**************************************
SECTION Cleaning and Manipulation
**************************************

#1 Data offset
--------------------------------------
The chuck of data for "Department of Commerce" was shifted to the left using MS Excel tools

#2 Multiple Representation
--------------------------------------
1. Using "Trim leading and trailing whitespace" tool in Google Refine, extra whitespaces were deleted from the strings
2. Using "Cluster and Edit..." and "Text Facet" instruments, an inconsistency of “Agency Name” column was fixed. Some values were changed manually since it was appeared for several departments, for instance "The Department" ("Department of the Interior" or "Department of Treasury") and "DoE" ("Department of Education" or "Department of Energy"). The right decision was based on “Agency Code” column
3. The similar type of mistake was found and fixed for “Agency Code” of “Department of Agriculture”

#3 Data type inconsistency
--------------------------------------
Some numeric data columns contained string representation of numbers (i.e. 1,944), which led difficulty to convert strings to numeric format. Using “Transform…” and GREL expression in Google Refine (toNumber(value.replace(/\p{Punct}/,''))), commas were deleted and strings were converted to the numeric format.

#4 Duplicate Record Detection
--------------------------------------
The error was detected based on “ProjectID” column which supposed to contain unique numbers. In Google Refine several duplicated rows were detected Using “Cluster and Edit…” tools (key collision --> ngram-fringerprint). All duplicated rows were stared, selected (“Facet by Star --> True”) and deleted (“Remove all matching rows”).

#5 Summation Records and Empty Strings
--------------------------------------
43 rows were detected and deleted using text/numeric facet, star highlighting and removing option (“Remove all matching rows”).

#6 Data splitting
--------------------------------------
Some data splitting was detected in “Agency Project ID” column. Values were divided for 2 columns ("Agency Project ID" and "Project Name”). The following changes were made using Google Refine and MS Excel:
Using Transform… and GREL expression values were merged to one cell: cells["Agency Project ID"].value + cells["Project Name"].value
Then rest of the columns were shifted to the left using MS Excel filters and shifting the cells to the left.
Column 24 were deleted since there were no data after previous steps

#7 Mixed use of numeric scales
--------------------------------------
Using Numeric facet in Google Refine, some non-numeric fields were detected in the column “Lifecycle cost”. The fields contained strings such as ($m). The non-numeric part was removed by applying GREL expression: value.replace(" ($m)","") and transform to numeric format.
Applying numeric facet and distribution in logarithmic scale for “Lifecycle cost” column, some error was discovered (). Compare Lifecycle cost values and Planned cost values the problem was fixed (for example, by changing the floating point: row 27 : 119098.812 --> 119.098812)

**************************************
SECTION: Visualisation Choice
**************************************
For both visualizations, the original dataset was used.

Visualization 1: The Journal chart
--------------------------------------
The original idea for data representation was taken from http://neuralengr.com/asifr/journals/

The graph illustrates number of projects which have been taken to accomplish by each agency during 20-year period. The number of projects is emphasized by size of the bubbles. 
The color scheme of the bubbles demonstrates demonstrates number of projects per year over or under the budget for particular agency ( Project Level Cost variance rating)
	
	https://myit-2014.itdashboard.gov/faq#faq14
	++++++++++++++++++++++++++++++++++++++++++++++
	|Project level Cost Variance rating | Color  |  
	++++++++++++++++++++++++++++++++++++++++++++++
	|		≥ 30% 					   | Red     |
	++++++++++++++++++++++++++++++++++++++++++++++
	|		≥ 10% and < 30% 		   | Yellow  |
	++++++++++++++++++++++++++++++++++++++++++++++
	|		< 10%					   | Green   |
	++++++++++++++++++++++++++++++++++++++++++++++

The graph can be useful to the clients, such as other companies or government authority, to show the performance of each agency during the years and compare number of the projects which have been taken and managing the budgets

The represented data was calculated in Google Refine taking next steps:

	// subtract start date from completion date and get year differences:
	diff(value,cells["Completion Date"].value,"years")

	// Module of value:
	pow(pow(value,2),0.5)

	// if difference more than 2 years => choose Start Date, otherwise Completion Date:
	if(value > 2, cells["Start Date"].value, cells["Completion Date"].value)

	// Transform date to YYYY format:
	value.toDate().toString("YYYY")

	// Delete one row with year 1992 since visualisation represented the data for last 20 years

	// Set blank cells to 0
	if(value == null,0,value)

	// Create extra columns ("Green","Yellow","Red") which contain number of colors per agence & per year

	// Delete extra rows

	// Add extra column with counted value of colour range:
	// (cells["Green"].value*0 + cells["Yellow"].value*1 + cells["Red"].value*2)/cells["Green"].value + cells["Yellow"].value + cells["Red"].value
	
	// remove extra colums

Visualization 2: The Bar Chart
--------------------------------------
The original idea for data representation was taken from http://bl.ocks.org/mbostock/3887051

The bar chart illustrates the amount of expenses per agency during the particular year. The users are able to compare money consumption between different years. Also, it shows the changes in agencies' spending during the 20 years.

Visualization 2 uses the data, such as years, which were calculated for the previous visualization. Also lifecycle cost per agency and year was calculated using the code.

**************************************
SECTION: Interactivity
**************************************

Visualization 1: The Journal chart
--------------------------------------
The interactivity for the journal chart allows a user to check exact number of projects for particular agency using mouseover event

Visualization 2: The Bar Chart
--------------------------------------
The interactivity for the bar chart allows the user to choose one or more agency(-ies) from a checkbox list and update the graph. It tends to be beneficial to compare spending of different agencies or track the performance of interested agency(-ies) during the year.

**************************************
SECTION: Implementation
**************************************
For both visualisations the libraries were used listed below:
	- jQuery - for interaction with a user
	- D3 - for data rpresentation
	- The plugin Checkbox List With Filtering jQuery Widget 
	(http://www.codeproject.com/Tips/461138/Checkbox-List-With-Filtering-jQuery-Widget)
	- The HTML5 template for the website http://html5up.net/

**************************************
SECTION: Completion
**************************************
The calculation of data was solved in different ways: using Google Refine tools and js code.
The code could be reusable for the similar sets of data.
Level of interaction provides more possibilities for the user to evaluate the data.

**************************************
Hosting the website
**************************************
The website is hosted on ECS server: http://users.ecs.soton.ac.uk/nk1g13/richapp/
