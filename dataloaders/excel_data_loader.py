import pandas as pd

# Read the excel file
df = pd.read_excel('data.xlsx', sheet_name="Sample1")

# Open a text file for writing
with open('output2.txt', 'w') as f:
    # Iterate over each row in the DataFrame
    for idx, row in df.iterrows():
        f.write("-" * 50 + "\n")
        f.write("- Subject area: " + str(row['Subject area']) + "\n")
        f.write("- Core/Selective: " + str(row['Core/Selective']) + "\n")
        f.write("- Unit code: " + str(row['Unit code']) + "\n")
        f.write("- Unit name: " + str(row['Unit name']) + "\n")
        f.write("- Unit level: " + str(row['Unit level']) + "\n")
        f.write("- Credits: " + str(row['Credits']) + "\n")
        f.write("- Prerequisites: " + str(row['Prerequisites']) + "\n")
        f.write("- Corequisites: " + str(row['Corequisites']) + "\n")
        f.write("- Prohibitions: " + str(row['Prohibitions']) + "\n")
