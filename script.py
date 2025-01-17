import json

def generate_timeline_data():
    data = {
        "1800s": "Colonization began with settlers forcing Indigenous people off their land.",
        "1876": "The Indian Act passed, formalizing assimilation practices.",
        "1931": "Residential schools peaked, with over 80 institutions.",
        "1996": "The last residential school closed, marking an end to the system."
    }
    with open("timeline.json", "w") as file:
        json.dump(data, file)

if __name__ == "__main__":
    generate_timeline_data()
