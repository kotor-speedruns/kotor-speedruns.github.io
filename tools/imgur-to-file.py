import re
import os

os.chdir(os.path.dirname(os.getcwd()))

for root, dirs, files in os.walk(os.getcwd(), topdown=False):
    for name in files:
        if "_site" in root:
            continue
        if name[-3:] == ".md":
            path = os.path.join(root, name)
            file = open(path, "r")
            content = file.read()
            urls = re.findall('https?://i.imgur.com/[\da-zA-Z]{7}\.png', content)
            if len(urls) > 0:
                print(f"Found {len(urls)} urls in {path}")
                for url in urls:
                    print(f"\t{url}")
            file.close()
    
