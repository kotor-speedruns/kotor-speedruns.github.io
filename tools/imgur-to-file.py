import re
import os
import json
from urllib.request import urlretrieve

imgur_conversion_table = json.load(open("imgur-conversions.json"))

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
                    urlretrieve(url, f"/assets/images/imgur-dump/{url[-11:]}")
            file.close()
    
