import os

os.chdir(os.path.dirname(os.getcwd()))


def get_links(path, tabcount=0) -> (str, int):
    dirlist = os.listdir(path)
    ul = f"{tabcount * '    '}<ul>\n"

    linkcount = 0

    for item in dirlist:
        if os.path.isfile(os.path.join(path, item)) and (
            (os.path.splitext(item)[1] == ".md")
            or (os.path.splitext(item)[1] == ".html")
        ):
            # Handle file case
            ul += f"{(tabcount + 1) * '    '}<li><a href=\"{os.path.join(path, os.path.splitext(item)[0])}\">{item}</a></li>\n"
            linkcount += 1
        elif (
            os.path.isdir(os.path.join(path, item))
            and (item != ".git")
            and (item != "_site")
        ):
            # Recursively call directory
            subdir, sublinks = get_links(os.path.join(path, item), tabcount + 2)
            if sublinks > 0:
                ul += f"{(tabcount + 1) * '    '}<li><a href=\"{os.path.join(path, item)}\">{item}</a>\n{subdir}{(tabcount + 1) * '    '}</li>\n"
                linkcount += sublinks
        else:
            continue

    ul += f"{tabcount * '    '}</ul>\n"
    return ul, linkcount


with open("sitemap.html", "w") as f:
    f.write('---\nlayout: default\n---\n\n<h1 id="sitemap">Sitemap</h1>\n\n')
    links, count = get_links(".")
    f.write(links)
    print(f"writing {count} links to sitemap.html")
