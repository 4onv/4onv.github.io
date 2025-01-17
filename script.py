# Script to generate header HTML with a custom background
def generate_header(image_path, title, subtitle):
    return f"""
<header style="background: url('{image_path}') no-repeat center center/cover;">
    <div class="header-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
    </div>
</header>
"""

# Example usage
if __name__ == "__main__":
    header_html = generate_header("header-background.jpg", 
                                  "Residential Schools Missing Children Help", 
                                  "Honoring the past, healing the present, and empowering the future.")
    print(header_html)
