import os

def generate_gallery_html(image_dir):
    """
    Generate HTML for the gallery images dynamically.
    Place image files in the specified directory to populate the gallery.
    """
    images = [f for f in os.listdir(image_dir) if f.lower().endswith(('png', 'jpg', 'jpeg', 'gif'))]
    html_snippet = ""
    for image in images:
        html_snippet += f'<img src="{image_dir}/{image}" alt="{os.path.splitext(image)[0]}">\n'
    return html_snippet

# Example usage
if __name__ == "__main__":
    image_directory = "images"  # Replace with your actual directory
    gallery_html = generate_gallery_html(image_directory)
    print(gallery_html)
