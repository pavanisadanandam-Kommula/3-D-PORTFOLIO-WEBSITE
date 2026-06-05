from pathlib import Path
from PIL import Image, ImageDraw

root = Path('c:/Users/pavan/Desktop/3-d-portfolio-website')
for path in [root / 'public' / 'images', root / 'public' / 'certificates' / 'internships', root / 'public' / 'certificates' / 'hackathon']:
    path.mkdir(parents=True, exist_ok=True)

source = root / 'public' / 'pavani-profile.png'
target = root / 'public' / 'images' / 'profile.jpg'
if source.exists():
    img = Image.open(source).convert('RGB')
    img.save(target, 'JPEG', quality=90)
else:
    img = Image.new('RGB', (800, 800), (20, 25, 35))
    draw = ImageDraw.Draw(img)
    draw.text((40, 360), 'PROFILE', fill=(180, 220, 255))
    img.save(target, 'JPEG', quality=90)

letters = [
    ('student-forge.jpg', 'Student Forge Offer'),
    ('prodigy-infotech.jpg', 'Prodigy InfoTech Offer'),
    ('skillcraft-technology.jpg', 'SkillCraft Offer'),
]
for name, text in letters:
    path = root / 'public' / 'certificates' / 'internships' / name
    img = Image.new('RGB', (1200, 1600), (11, 16, 32))
    draw = ImageDraw.Draw(img)
    draw.rectangle([40, 40, 1160, 1560], outline=(14, 125, 255), width=12)
    draw.text((80, 120), text, fill=(255, 255, 255))
    draw.text((80, 220), 'Internship Offer Letter', fill=(180, 220, 255))
    draw.text((80, 440), 'Click preview to view details', fill=(160, 180, 220))
    img.save(path, 'JPEG', quality=85)

hackathons = [
    ('hackathon-1.jpg', 'Vision Crop AI Certificate'),
    ('hackathon-2.jpg', 'AI Hackathon Certificate'),
]
for name, text in hackathons:
    path = root / 'public' / 'certificates' / 'hackathon' / name
    img = Image.new('RGB', (1200, 900), (15, 20, 40))
    draw = ImageDraw.Draw(img)
    draw.rectangle([40, 40, 1160, 860], outline=(84, 150, 255), width=12)
    draw.text((80, 120), text, fill=(255, 255, 255))
    draw.text((80, 220), 'Hackathon Achievement Showcase', fill=(160, 190, 235))
    img.save(path, 'JPEG', quality=85)

print('Created profile.jpg and placeholder certificate assets.')