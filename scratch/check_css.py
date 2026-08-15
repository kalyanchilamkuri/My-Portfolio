import re
import os

css_dir = ".next/static/chunks/"
css_files = [f for f in os.listdir(css_dir) if f.endswith(".css")]
if not css_files:
    print("No CSS files found")
    exit()

css_path = os.path.join(css_dir, css_files[0])
print(f"Reading {css_path}")

with open(css_path, "r", encoding="utf-8") as f:
    content = f.read()

# Find definitions of --container-
container_vars = re.findall(r"--container-\w+:[^;\}]+", content)
print("\n--- Container Variable Definitions ---")
for v in container_vars:
    print(v)

# Find where --container is set in root or html
root_vars = re.findall(r":root\{[^\}]*?\}", content)
print("\n--- Root Variable Styles ---")
for r in root_vars:
    if "--container" in r:
        print(r[:200] + "...")
