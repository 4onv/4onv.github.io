# Basic example of Python for data handling (extend as needed)
def get_resources():
    resources = [
        {"name": "National Inquiry into Missing and Murdered Indigenous Women and Girls", "url": "https://www.mmiwg-ffada.ca"},
        {"name": "Indian Residential Schools Crisis Line", "url": "https://www.irsss.ca"},
        {"name": "Assembly of First Nations", "url": "https://www.afn.ca"},
        {"name": "Indigenous Services Canada", "url": "https://www.sac-isc.gc.ca"}
    ]
    return resources


if __name__ == "__main__":
    for resource in get_resources():
        print(f"{resource['name']}: {resource['url']}")
